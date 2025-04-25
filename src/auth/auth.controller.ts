import {
  Controller,
  Post,
  Body,
  HttpStatus,
  HttpException,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersService } from '../users/users.service';
import { authDto } from './dto/auth.dto';
import { PickService } from '../pick/pick.service';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly usersService: UsersService,
    private readonly pickService: PickService
  ) {}

  @Post('signin')
  async login(@Body() body: { username: string; password: string }) {
    // Normally, you'd validate the user against the database
    const mockUser = {
      id: 1,
      username: body.username,
      password: body.password,
    };

    // return this.authService.generateToken(mockUser);
    const found = await this.usersService.getUserByEmail(mockUser.username);
    if (found) {
      const passMatch = await this.authService.comparePasswords(
        mockUser.password,
        found.password,
      );

      if (!passMatch) {
        const res = {
          message : 'Password Mismatched'
        }
        return res;
      }
    }else{
      const res = {
        message : 'User Not Found'
      }
      return res;
    }

    const res: authDto = {
      ...found,
      token_type: 'Bearer',
      access_token: await this.authService.generateToken(mockUser),
    }
    return this.pickService.pick(res, [
      'username',
      'email',
      'access_token',
      'token_type',
      'id',
      'status',
      'roleId',
    ]);
  }

  @Post('signup')
  async signup(@Body() body: { username: string; password: string; email: string; roleId: number }) {
    const userExists = await this.usersService.getUserByEmail(body.email);
    if (userExists) {
      throw new HttpException('User already exists', HttpStatus.BAD_REQUEST);
    }

    const newUser = await this.usersService.createUser({
      username: body.username,
      password: await this.authService.hashPassword(body.password),
      email: body.email,
    });

    await this.usersService.assignRole(newUser.id, body.roleId);
    return newUser
  }
}
