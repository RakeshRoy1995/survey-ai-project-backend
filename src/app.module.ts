import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { CacheModule, CacheInterceptor } from '@nestjs/cache-manager';
import { APP_INTERCEPTOR } from '@nestjs/core';

@Module({})
export class AppModule {
  static async register() {
    // const { UsersModule } = await import('./users/users.module');
    return {
      module: AppModule,
      imports: [
        ConfigModule.forRoot({
          isGlobal: true,
        }),
        CacheModule.register({
          max: 100, // Maximum number of items in the cache (optional),
          isGlobal: true,
        }),
      ],
      controllers: [AppController],
      providers: [
        {
          provide: APP_INTERCEPTOR,
          useClass: CacheInterceptor,
        },
        AppService,
      ],
    };
  }
}
