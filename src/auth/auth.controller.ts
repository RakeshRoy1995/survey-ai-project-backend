import {
  Controller,
  Post,
  Body,
  HttpStatus,
  HttpException,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { log } from 'console';
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

  @Post('login')
  async login(@Body() body: { username: string; password: string }) {
    // Normally, you'd validate the user against the database
    log('body', body);
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
        throw new HttpException('Password Mismatched', HttpStatus.NOT_FOUND);
      }
    }

    const res: authDto = {
      ...found,
      token: await this.authService.generateToken(mockUser),
    }

    return this.pickService.pick(res, ['username', 'email', 'token' , 'id' , 'status']);

  }
}
