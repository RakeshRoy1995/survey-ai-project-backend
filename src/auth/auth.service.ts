import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken'
import { JWT_EXPIRATION, JWT_SECRET } from '../config';
@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  async hashPassword(password: string): Promise<string> {
    return bcrypt.hash(password, 10);
  }

  async comparePasswords(password: string, hashedPassword: string): Promise<boolean> {
    return bcrypt.compare(password, hashedPassword);
  }

  generateToken(user: any) {
    
    const payload = { sub: user.id, username: user.username };
    if (!JWT_SECRET) {
      throw new Error('JWT_SECRET is not defined');
    }
    return jwt.sign(payload, JWT_SECRET, {
      algorithm: 'HS256',
      expiresIn: 
      JWT_EXPIRATION,
    });
  }
}
