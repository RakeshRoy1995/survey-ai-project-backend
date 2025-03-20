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
        throw new HttpException('Password Mismatched', HttpStatus.NOT_FOUND);
      }
    }else{
      throw new HttpException('User Not Found', HttpStatus.NOT_FOUND);
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
}
