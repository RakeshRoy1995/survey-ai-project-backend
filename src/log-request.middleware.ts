import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';
@Injectable()
export class LogRequestMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const token = req.headers['authorization']?.split(' ')[1]; // Assuming Bearer token
    const secret = process.env.JWT_SECRET; // Replace with your actual secret key
    if (token && secret) {
      const decoded = jwt.verify(token, secret);
      res.locals.loggedUserId = decoded.sub;
    }
    next();
  }
}
