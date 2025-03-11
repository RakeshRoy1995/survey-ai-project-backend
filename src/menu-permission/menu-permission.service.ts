import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateMenuPermissionDto } from './dto/create-menu-permission.dto';
import { UpdateMenuPermissionDto } from './dto/update-menu-permission.dto';
import { MenuPermission } from './entities/menu-permission.entity';

@Injectable()
export class MenuPermissionService {
  constructor(
    @InjectRepository(MenuPermission)
    private readonly menuPermissionRepository: Repository<MenuPermission>,
  ) {}

  async create(
    createMenuPermissionDto: CreateMenuPermissionDto,
  ): Promise<MenuPermission> {
    const menuPermission = this.menuPermissionRepository.create(
      createMenuPermissionDto,
    );
    return this.menuPermissionRepository.save(menuPermission);
  }

  async findAll(): Promise<MenuPermission[]> {
    return this.menuPermissionRepository.find();
  }

  async findOne(id: any): Promise<MenuPermission> {
    const menuPermission = await this.menuPermissionRepository.findOne({
      where: { id },
    });
    if (!menuPermission) {
      throw new Error(`MenuPermission with id ${id} not found`);
    }
    return menuPermission;
  }

  async update(
    id: any,
    updateMenuPermissionDto: UpdateMenuPermissionDto,
  ): Promise<MenuPermission> {
    await this.menuPermissionRepository.update(id, updateMenuPermissionDto);
    const menuPermission = await this.menuPermissionRepository.findOne({ where: { id } });
    if (!menuPermission) {
      throw new Error(`MenuPermission with id ${id} not found`);
    }
    return menuPermission;
  }

  async remove(id: number): Promise<void> {
    await this.menuPermissionRepository.delete(id);
  }
}
