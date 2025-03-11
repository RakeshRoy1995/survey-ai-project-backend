import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { MenuPermissionService } from './menu-permission.service';
import { CreateMenuPermissionDto } from './dto/create-menu-permission.dto';
import { UpdateMenuPermissionDto } from './dto/update-menu-permission.dto';

@Controller('menu-permission')
export class MenuPermissionController {
  constructor(private readonly menuPermissionService: MenuPermissionService) {}

  @Post()
  create(@Body() createMenuPermissionDto: CreateMenuPermissionDto) {
    console.log(`11`, createMenuPermissionDto);
    return this.menuPermissionService.create(createMenuPermissionDto);
  }

  @Get()
  findAll() {
    return this.menuPermissionService.findAll();
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateMenuPermissionDto: UpdateMenuPermissionDto,
  ) {
    console.log(`id`, id);
    return this.menuPermissionService.update(+id, updateMenuPermissionDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.menuPermissionService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.menuPermissionService.remove(+id);
  }
}
