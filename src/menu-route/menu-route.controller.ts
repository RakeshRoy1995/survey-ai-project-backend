import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MenuRouteService } from './menu-route.service';
import { CreateMenuRouteDto } from './dto/create-menu-route.dto';
import { UpdateMenuRouteDto } from './dto/update-menu-route.dto';

@Controller('menu-route')
export class MenuRouteController {
  constructor(private readonly menuRouteService: MenuRouteService) {}

  @Post()
  create(@Body() createMenuRouteDto: CreateMenuRouteDto) {
    return this.menuRouteService.create(createMenuRouteDto);
  }

  @Get()
  findAll() {
    return this.menuRouteService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.menuRouteService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMenuRouteDto: UpdateMenuRouteDto) {
    return this.menuRouteService.update(+id, updateMenuRouteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.menuRouteService.remove(+id);
  }
}
