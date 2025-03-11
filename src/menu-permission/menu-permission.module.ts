import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MenuPermissionService } from './menu-permission.service';
import { MenuPermissionController } from './menu-permission.controller';
import { MenuPermission } from './entities/menu-permission.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MenuPermission])],
  controllers: [MenuPermissionController],
  providers: [MenuPermissionService],
  exports: [MenuPermissionService],
})
export class MenuPermissionModule {}
