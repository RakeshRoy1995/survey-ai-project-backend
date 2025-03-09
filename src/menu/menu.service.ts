import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateMenuDto } from './dto/create-menu.dto';
import { UpdateMenuDto } from './dto/update-menu.dto';
import { Menu } from './entities/menu.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class MenuService {
  constructor(
    @InjectRepository(Menu) private menuRepository: Repository<Menu>,
  ) {}

  create(createMenuDto: CreateMenuDto) {
    return 1;
    // const newData = this.menuRepository.create(createMenuDto);
    // return this.menuRepository.save(newData);
  }

  findAll() {
    return this.menuRepository.find({});
  }

  async findOne(id: number) {
    const data = await this.menuRepository.findOne({
      where: { id },
    });
    if (!data) {
      throw new HttpException('Data not found', HttpStatus.NOT_FOUND);
    }
    return data;
  }

  async update(id: number, updateMenuDto: UpdateMenuDto) {
    const userFound = await this.menuRepository.findOne({
      where: { id },
    });
    if (!userFound) {
      return new HttpException('Data not found', HttpStatus.NOT_FOUND);
    }

    const updateUser = Object.assign(userFound, updateMenuDto);
    return this.menuRepository.save(updateUser);
  }

  async remove(id: number) {
    const result = await this.menuRepository.delete({ id });

    if (result.affected === 0) {
      throw new HttpException('Data not found', HttpStatus.NOT_FOUND);
    }
    return result;
  }
}
