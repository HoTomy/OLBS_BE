import { Request, Response } from 'express';
import Application, { IApplication } from '../models/Application';

const createApplication = async (req: Request, res: Response) => {
  try {
    const { name, description, version, author, releaseDate } = req.body;
    const newApplication: IApplication = new Application({
      name,
      description,
      version,
      author,
      releaseDate,
    });
    await newApplication.save();
    res.status(201).json({ message: 'Application created successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

const getAllApplications = async (req: Request, res: Response) => {
  try {
    const applications: IApplication[] = await Application.find();
    res.status(200).json({ applications });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

export { createApplication, getAllApplications };