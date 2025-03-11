import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserRoleDto } from './dto/create-user-role.dto';
import { UpdateUserRoleDto } from './dto/update-user-role.dto';
import { UserRole } from './user-role.entity';

@Injectable()
export class UserRoleService {
  constructor(
    @InjectRepository(UserRole)
    private userRoleRepository: Repository<UserRole>,
  ) {}

  create(createUserRoleDto: CreateUserRoleDto) {
    const newUserRole = this.userRoleRepository.create(createUserRoleDto);
    console.log(`newUserRole`, newUserRole);
    return this.userRoleRepository.save(newUserRole);
  }

  findAll() {
    return this.userRoleRepository.find();
  }

  findOne(id: any) {
    return this.userRoleRepository.findOne(id).then(userRole => {
      if (!userRole) {
        throw new NotFoundException(`UserRole with ID ${id} not found`);
      }
      return userRole;
    });
  }

  async update(id: number, updateUserRoleDto: UpdateUserRoleDto) {
    const userRole = await this.userRoleRepository.preload({
      id: id,
      ...updateUserRoleDto,
    });
    if (!userRole) {
      throw new NotFoundException(`UserRole with ID ${id} not found`);
    }
    return this.userRoleRepository.save(userRole);
  }

  async remove(id: number) {
    const userRole = await this.findOne(id);
    return this.userRoleRepository.remove(userRole);
  }
}
