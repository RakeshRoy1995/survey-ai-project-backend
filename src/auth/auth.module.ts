import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET || 'your_secret_key',
      signOptions: { expiresIn: process.env.JWT_EXPIRATION ||  '1h' },
    }),
  ],
  controllers: [AuthController], // Ensure AuthController is here
  providers: [AuthService, JwtStrategy],
  exports: [AuthService],
})
export class AuthModule {}
