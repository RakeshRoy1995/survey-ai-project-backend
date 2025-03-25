import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DataSource } from 'typeorm';
import { createUserDto } from './dto/create-user.dto';
import { updateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private usersRepository: Repository<User>,
    private readonly dataSource: DataSource,
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

  //get all users
  getAllUsers() {
    return this.usersRepository.find();
  }

  //get all Members
  async getAllMember() {
    const members = await this.dataSource.query(
      `SELECT u.id, u.username, u.email, ur.roleId
       FROM users u
       JOIN user_roles ur ON u.id = ur.userId
       WHERE ur.roleId = 5`,
    );
    return members;
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
    const userFound = await this.dataSource.query(
      `SELECT r.*,  ur.roleId
       FROM user_roles ur
       JOIN users r ON ur.userId = r.id
       WHERE r.email = ?`,
      [email],
    );

    if (!userFound) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }
    return userFound[0];
  }

  // assign role to user
  async assignRole(userId: number, roleId: number) {
    const userFound = await this.usersRepository.findOne({
      where: { id: userId },
    });

    if (!userFound) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }

    const query = `
      INSERT INTO user_roles (userId, roleId)
      VALUES (?, ?)
    `;
    await this.dataSource.query(query, [userId, roleId]);

    return { message: 'Role assigned successfully' };
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


