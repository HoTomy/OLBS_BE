import express from 'express';
import { createApplication, getAllApplications } from '../controllers/application';

const router = express.Router();

// Create a new application
router.post('/', createApplication);

// Get all applications
router.get('/', getAllApplications);

export default router;
