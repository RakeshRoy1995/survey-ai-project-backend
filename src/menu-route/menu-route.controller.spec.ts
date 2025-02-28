import { Test, TestingModule } from '@nestjs/testing';
import { MenuRouteController } from './menu-route.controller';
import { MenuRouteService } from './menu-route.service';

describe('MenuRouteController', () => {
  let controller: MenuRouteController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MenuRouteController],
      providers: [MenuRouteService],
    }).compile();

    controller = module.get<MenuRouteController>(MenuRouteController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
