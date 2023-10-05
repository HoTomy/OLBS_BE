import express from 'express';
import { getAllBooks, getBookById, createBook, updateBookAvailability, searchBooks } from '../controllers/book';

const router = express.Router();

// Get all books
router.get('/', getAllBooks);

// Get book by ID
router.get('/:id', getBookById);

// Create a new book
router.post('/', createBook);

// Update book availability
router.put('/:id', updateBookAvailability);

// Search books
router.get('/search', searchBooks);

export default router;
