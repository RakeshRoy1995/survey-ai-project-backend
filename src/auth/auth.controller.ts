import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { log } from 'console';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() body: { username: string; password: string }) {
    // Normally, you'd validate the user against the database
    log('body', body);
    const mockUser = { id: 1, username: body.username, password: 'hashed_password' };

    return this.authService.generateToken(mockUser);
  }
}
