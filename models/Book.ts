import mongoose, { Schema, Document } from 'mongoose';

export interface IBook extends Document {
  title: string;
  author: string;
  description: string;
  price: number;
  publication_date: string;
  status: string;
  genre: string;
}

const bookSchema: Schema = new Schema(
  {
    title: String,
    author: String,
    description: String,
    price: Number,
    publication_date: String,
    status: String,
    genre: String
  },
  { collection: 'books' } // Specify the collection name as 'books'
);

export default mongoose.model<IBook>('Book', bookSchema);