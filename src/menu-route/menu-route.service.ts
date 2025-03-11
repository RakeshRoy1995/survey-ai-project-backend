import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateMenuRouteDto } from './dto/create-menu-route.dto';
import { UpdateMenuRouteDto } from './dto/update-menu-route.dto';
import { MenuRoute } from './entities/menu-route.entity';

@Injectable()
export class MenuRouteService {
  constructor(
    @InjectRepository(MenuRoute)
    private readonly menuRouteRepository: Repository<MenuRoute>,
  ) {}

  async create(createMenuRouteDto: CreateMenuRouteDto): Promise<MenuRoute> {
    const menuRoute = this.menuRouteRepository.create(createMenuRouteDto);
    return this.menuRouteRepository.save(menuRoute);
  }

  async findAll(): Promise<MenuRoute[]> {
    return this.menuRouteRepository.find();
  }

  async findOne(id: any): Promise<MenuRoute> {
    const menuRoute = await this.menuRouteRepository.findOne({ where: { id } });
    if (!menuRoute) {
      throw new Error(`MenuRoute with id ${id} not found`);
    }
    return menuRoute;
  }

  async update(
    id: any,
    updateMenuRouteDto: UpdateMenuRouteDto,
  ): Promise<MenuRoute> {
    await this.menuRouteRepository.update(id, updateMenuRouteDto);
    const menuRoute = await this.menuRouteRepository.findOne(id);
    if (!menuRoute) {
      throw new Error(`MenuRoute with id ${id} not found`);
    }
    return menuRoute;
  }

  async remove(id: number): Promise<void> {
    await this.menuRouteRepository.delete(id);
  }
}
