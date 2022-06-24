import { Request, Response } from 'express';
import AuthException from '../exceptions/authException';
import FieldException from '../exceptions/fieldExceptions';
import { genericExceptionMessage } from '../utils/constants';

export default async function errorsMiddleware(err: any, request: Request, response: Response, next: any) {
  if (err instanceof FieldException) return response.send(err.errors).status(err.statusCode);

  if (err instanceof AuthException) return response.send({ message: err.message }).status(err.statusCode);
  console.log(err)
  return response.send({
    message: genericExceptionMessage,
  
  });
}
