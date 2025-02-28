import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { CacheModule, CacheInterceptor } from '@nestjs/cache-manager';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { LayerModule } from './layer/layer.module';
import { MenuModule } from './menu/menu.module';
import { MenuPermissionModule } from './menu-permission/menu-permission.module';
import { MenuRouteModule } from './menu-route/menu-route.module';
import { RoleModule } from './role/role.module';
import { UserRoleModule } from './user-role/user-role.module';
@Module({
  imports: [UsersModule, LayerModule, MenuModule, MenuPermissionModule, MenuRouteModule, RoleModule, UserRoleModule]
})
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
        TypeOrmModule.forRoot({
          type: 'mysql',
          host: 'localhost',
          port: 3306,
          username: 'lahostco_survey',
          password: '))}p.6-)E?Y[',
          database: 'lahostco_survey',
          entities: [__dirname + '/**/*.entity{.ts,.js}'],
          synchronize: true,
        })
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
