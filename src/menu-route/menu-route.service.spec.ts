import { Test, TestingModule } from '@nestjs/testing';
import { MenuRouteService } from './menu-route.service';

describe('MenuRouteService', () => {
  let service: MenuRouteService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MenuRouteService],
    }).compile();

    service = module.get<MenuRouteService>(MenuRouteService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
