import {
  Body,
  Controller,
  Get,
  Post,
  Param,
  ParseIntPipe,
  Delete,
  Patch,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { createUserDto } from './dto/create-user.dto';
import { updateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import * as bcrypt from 'bcrypt';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  //   get all users
  @Get()
  GetAllUsers(): Promise<User[]> {
    return this.usersService.getAllUsers();
  }

  //   get all users
  @Get('all-members')
  user(): Promise<User[]> {
    return this.usersService.getAllMember();
  }

  // get user by id
  @Get(':id')
  getUserById(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.getUserById(id);
  }

  //  create a new user
  @Post()
  CreateUser(@Body() newUser: createUserDto) {
    newUser.password = hashPassword(newUser.password);
    return this.usersService.createUser(newUser);
  }

  //  delete user by id
  @Delete(':id')
  deleteUserById(@Param('id') id: number) {
    return this.usersService.deleteUserById(Number(id));
  }

  //  update user by id
  @Patch(':id')
  updateUserById(@Param('id') id: number, @Body() user: updateUserDto) {
    return this.usersService.updateUserById(Number(id), user);
  }
}

function hashPassword(password: string): string {
  try {
    const salt = bcrypt.genSaltSync(10);
    return bcrypt.hashSync(password, salt);
  } catch (error) {
    throw new Error('Error generating salt for password hashing');
  }
}
