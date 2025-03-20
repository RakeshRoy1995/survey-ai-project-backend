import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';
import cluster from 'node:cluster'; // ✅ Correct import
import os from 'node:os';
import { JwtExpiredExceptionFilter } from './jwt/jwt-exception.filter';
import { PORT } from './config';

async function bootstrap() {
  // Check if `cluster` is undefined (for debugging)
  if (!cluster) {
    Logger.error(
      'Cluster module is undefined! Check your Node.js version and imports.',
    );
    process.exit(1);
  }

  if (cluster.isPrimary) {
    // ✅ Correct usage of isPrimary
    const numCPUs = os.cpus().length;
    Logger.log(`Primary process is running. Forking ${numCPUs} workers...`);

    for (let i = 0; i < numCPUs; i++) {
      cluster.fork();
    }

    cluster.on('exit', (worker, code, signal) => {
      Logger.warn(`Worker ${worker.process.pid} died. Restarting...`);
      cluster.fork();
    });
  } else {
    const appModule = await AppModule.register();
    const app = await NestFactory.create(appModule);
    
    app.useGlobalPipes(new ValidationPipe());
    app.useGlobalFilters(new JwtExpiredExceptionFilter());
    app.enableCors();
    await app.listen(PORT, '0.0.0.0');
    Logger.log(`Worker ${process.pid} started`);
  }
}

bootstrap();
