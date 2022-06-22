import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';
import { JwtSignKey } from '../configs/auth.config';
import AuthException from '../exceptions/authException';

const requiredTokenMessage = 'JWT is required!';
const invalidTokenMessage = 'Token is invalid!';

interface JwtPayload {
  sub: string;
}

export async function isAuthenticated(request: Request, response: Response, next: NextFunction) {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new AuthException(requiredTokenMessage);
  }

  const [_, token] = authHeader.split(' ');

  if (!token) {
    throw new AuthException(invalidTokenMessage);
  }

  try {
    const decodedToken = verify(token, JwtSignKey);
    const { sub } = decodedToken as JwtPayload;

    request.user = {
      id: sub,
    };

    await next();
  } catch (err) {
    throw new AuthException(invalidTokenMessage);
  }
}
