import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MenuRouteService } from './menu-route.service';
import { MenuRouteController } from './menu-route.controller';
import { MenuRoute } from './entities/menu-route.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MenuRoute])],
  controllers: [MenuRouteController],
  providers: [MenuRouteService],
})
export class MenuRouteModule {}
