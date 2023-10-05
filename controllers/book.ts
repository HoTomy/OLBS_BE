import { Request, Response } from 'express';
import Book, { IBook } from '../models/Book';

const getAllBooks = async (req: Request, res: Response) => {
  try {
    const books: IBook[] = await Book.find();
    res.status(200).json({ books });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

const getBookById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const book: IBook | null = await Book.findById(id);
    if (!book) {
      return res.status(404).json({ message: 'Book not found' });
    }
    res.status(200).json({ book });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

const createBook = async (req: Request, res: Response) => {
  try {
    const { title, author, availability } = req.body;
    const newBook: IBook = new Book({
      title,
      author,
      availability,
    });
    await newBook.save();
    res.status(201).json({ message: 'Book created successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

const updateBookAvailability = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { availability } = req.body;
    const book: IBook | null = await Book.findById(id);
    if (!book) {
      return res.status(404).json({ message: 'Book not found' });
    }
    book.availability = availability;
    await book.save();
    res.status(200).json({ message: 'Book availability updated successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

const searchBooks = async (req: Request, res: Response) => {
  try {
    const { title, author } = req.query;
    const query: any = {};
    if (title) {
      query.title = { $regex: title as string, $options: 'i' };
    }
    if (author) {
      query.author = { $regex: author as string, $options: 'i' };
    }
    const books: IBook[] = await Book.find(query);
    res.status(200).json({ books });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

export { getAllBooks, getBookById, createBook, updateBookAvailability, searchBooks };
