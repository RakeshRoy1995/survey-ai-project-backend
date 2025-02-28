import { Injectable } from '@nestjs/common';
import { CreateMenuRouteDto } from './dto/create-menu-route.dto';
import { UpdateMenuRouteDto } from './dto/update-menu-route.dto';

@Injectable()
export class MenuRouteService {
  create(createMenuRouteDto: CreateMenuRouteDto) {
    return 'This action adds a new menuRoute';
  }

  findAll() {
    return `This action returns all menuRoute`;
  }

  findOne(id: number) {
    return `This action returns a #${id} menuRoute`;
  }

  update(id: number, updateMenuRouteDto: UpdateMenuRouteDto) {
    return `This action updates a #${id} menuRoute`;
  }

  remove(id: number) {
    return `This action removes a #${id} menuRoute`;
  }
}
