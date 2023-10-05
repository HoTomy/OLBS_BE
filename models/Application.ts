import mongoose, { Schema, Document } from 'mongoose';

export interface IApplication extends Document {
  name: string;
  description: string;
  version: string;
  author: string;
  releaseDate: Date;
}

const ApplicationSchema: Schema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  version: { type: String, required: true },
  author: { type: String, required: true },
  releaseDate: { type: Date, required: true },
});

export default mongoose.model<IApplication>('Application', ApplicationSchema);