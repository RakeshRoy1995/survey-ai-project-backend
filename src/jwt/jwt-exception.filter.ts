import { ExceptionFilter, Catch, ArgumentsHost } from '@nestjs/common';
import { Response } from 'express';
import { TokenExpiredError } from 'jsonwebtoken';

@Catch(TokenExpiredError)
export class JwtExpiredExceptionFilter implements ExceptionFilter {
  catch(exception: TokenExpiredError, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    // You can customize the response here, but for now, we return a 401 Unauthorized
    response.status(401).json({
      statusCode: 401,
      message: 'Token has expired. Please log in again.',
    });
  }
}
