import mongoose from 'mongoose';
import { config } from './config';
import express from 'express';
import bodyParser from 'body-parser';
import userRoutes from './routes/userRoutes';
import bookRoutes from './routes/bookRoutes';
import applicationRoutes from './routes/applicationRoutes';
import errorMiddleware from './middleware/errorMiddleware';


const app = express();
const PORT = 5000;

mongoose
  .connect(config.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
    // Start the server
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Failed to connect to MongoDB:', error);
  });



// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api/v1/users', userRoutes);
app.use('/api/v1/books', bookRoutes);
app.use('/api/v1/applications', applicationRoutes);

// Error handling middleware
 app.use(errorMiddleware);
