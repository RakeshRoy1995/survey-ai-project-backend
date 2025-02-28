import { Injectable } from '@nestjs/common';
import { CreateMenuPermissionDto } from './dto/create-menu-permission.dto';
import { UpdateMenuPermissionDto } from './dto/update-menu-permission.dto';

@Injectable()
export class MenuPermissionService {
  create(createMenuPermissionDto: CreateMenuPermissionDto) {
    return 'This action adds a new menuPermission';
  }

  findAll() {
    return `This action returns all menuPermission`;
  }

  findOne(id: number) {
    return `This action returns a #${id} menuPermission`;
  }

  update(id: number, updateMenuPermissionDto: UpdateMenuPermissionDto) {
    return `This action updates a #${id} menuPermission`;
  }

  remove(id: number) {
    return `This action removes a #${id} menuPermission`;
  }
}
