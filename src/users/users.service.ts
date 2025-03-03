import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { createUserDto } from './dto/create-user.dto';
import { updateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private usersRepository: Repository<User>,
  ) {}

  //  create a new user
  async createUser(user: createUserDto) {
    const userFound = await this.usersRepository.findOne({
      where: {
        username: user.username,
      },
    });

    if (userFound) {
      throw new HttpException('User already exists', HttpStatus.BAD_REQUEST);
    }
    const newUser = this.usersRepository.create(user);
    return this.usersRepository.save(newUser);
  }

  //   get all users
  getAllUsers() {
    return this.usersRepository.find();
  }

  //  get user by id
  async getUserById(id: number) {
    const userFound = await this.usersRepository.findOne({
      where: { id },
      select: ['id', 'username', 'email', 'created_at', 'updated_at'],
    });
    console.log(`userFound`, userFound);
    if (!userFound) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }
    return userFound;
  }

  //  get user by email
  async getUserByEmail(email: string) {
    console.log(`email`, email);
    const userFound = await this.usersRepository.findOne({
      where: { email: email },
    });
    if (!userFound) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }
    return userFound;
  }

  // delete user by id
  async deleteUserById(id: number) {
    const result = await this.usersRepository.delete({ id });

    if (result.affected === 0) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }
    return result;
  }

  // update user by id
  async updateUserById(id: number, user: updateUserDto) {
    const userFound = await this.usersRepository.findOne({
      where: { id },
    });
    if (!userFound) {
      return new HttpException('User not found', HttpStatus.NOT_FOUND);
    }

    const updateUser = Object.assign(userFound, user);
    return this.usersRepository.save(updateUser);
  }

}
