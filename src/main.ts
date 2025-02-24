import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import cluster from 'node:cluster'; // ✅ Correct import
import os from 'node:os';

async function bootstrap() {
  // Check if `cluster` is undefined (for debugging)
  if (!cluster) {
    Logger.error('Cluster module is undefined! Check your Node.js version and imports.');
    process.exit(1);
  }

  if (cluster.isPrimary) {  // ✅ Correct usage of isPrimary
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
    await app.listen(process.env.PORT ?? 3000);
    Logger.log(`Worker ${process.pid} started`);
  }
}

bootstrap();
