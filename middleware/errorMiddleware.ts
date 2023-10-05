import { Request, Response, NextFunction } from 'express';

const errorMiddleware = (err: any, req: Request, res: Response, next: NextFunction) => {
  console.error(err);

  // Set the default status code and error message
  let statusCode = 500;
  let errorMessage = 'Internal Server Error';

  // Check if the error has a specific status code and message
  if (err.statusCode) {
    statusCode = err.statusCode;
    errorMessage = err.message;
  }

  // Set the response status code and error message
  res.status(statusCode).json({ message: errorMessage });
};

export default errorMiddleware;