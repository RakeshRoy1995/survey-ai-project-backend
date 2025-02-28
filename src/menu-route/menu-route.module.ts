import { Module } from '@nestjs/common';
import { MenuRouteService } from './menu-route.service';
import { MenuRouteController } from './menu-route.controller';

@Module({
  controllers: [MenuRouteController],
  providers: [MenuRouteService],
})
export class MenuRouteModule {}
