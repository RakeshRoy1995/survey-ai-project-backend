import { forwardRef, Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './jwt.strategy';
import { UsersModule } from '../users/users.module';
import { PickService } from '../pick/pick.service';

@Module({
  imports: [
    PassportModule,
    forwardRef(() => UsersModule),
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: process.env.JWT_EXPIRATION ||  '1h' },
    }),
  ],
  controllers: [AuthController], // Ensure AuthController is here
  providers: [AuthService, JwtStrategy , PickService, JwtService ],
  exports: [AuthService],
})
export class AuthModule {}
