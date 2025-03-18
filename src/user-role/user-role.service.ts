import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DataSource } from 'typeorm';
import { CreateUserRoleDto } from './dto/create-user-role.dto';
import { UpdateUserRoleDto } from './dto/update-user-role.dto';
import { UserRole } from './user-role.entity';

@Injectable()
export class UserRoleService {
  constructor(
    @InjectRepository(UserRole)
    private userRoleRepository: Repository<UserRole>,
    private readonly dataSource: DataSource,
  ) {}

  create(createUserRoleDto: CreateUserRoleDto) {
    const newUserRole = this.userRoleRepository.create(createUserRoleDto);
    console.log(`newUserRole`, newUserRole);
    return this.userRoleRepository.save(newUserRole);
  }

  findAll() {
    return this.userRoleRepository.find();
  }

  async findRoleByUser(id: number) {
    const result = await this.dataSource.query(
      `SELECT ur.id, ur.userId, ur.roleId, r.name as roleName
       FROM user_roles ur
       JOIN roles r ON ur.roleId = r.id
       WHERE ur.userId = ?`,
      [id],
    );
    return result;
  }

  findOne(id: any) {
    return this.userRoleRepository.findOne(id).then((userRole) => {
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
