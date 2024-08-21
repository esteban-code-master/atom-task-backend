import { Request, Response, NextFunction } from 'express';
import { HttpsError } from 'firebase-functions/v2/https';


export function errorMiddleware(
  err: any, 
  req: Request, 
  res: Response, 
  next: NextFunction
) {
  // console.error('Error occurred:', err);

  if (err instanceof HttpsError) {
    res.status(Number(err.code)).send({ message: err.message, details: err.details });
  } 

  res.status(500).send({ message: 'Internal server error', details: err.message });
}
