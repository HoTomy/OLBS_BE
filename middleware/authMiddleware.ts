import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  // Get the token from the request headers
  const token = req.headers.authorization;

  // Check if the token exists
  if (!token) {
    return res.status(401).json({ message: 'Authorization token not found' });
  }

  try {
    // Verify the token
    const decoded = jwt.verify(token, 'your-secret-key');

    // Attach the user ID to the request object
    req.user = decoded;

    // Proceed to the next middleware or route handler
    next();
  } catch (err) {
    console.error(err);
    return res.status(401).json({ message: 'Invalid authorization token' });
  }
};

export default authMiddleware;