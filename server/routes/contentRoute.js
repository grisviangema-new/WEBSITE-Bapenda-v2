import express from 'express';
import { updateHeader, getContent } from '../controllers/contentController.js';
import upload from '../middlewares/multer.js';
import authAdmin from '../middlewares/authAdmin.js';

const contentRouter = express.Router();

// Get (Bisa diakses siapa saja/Client)
contentRouter.get('/get', getContent);

// Update (Hanya Admin + Upload Gambar)
contentRouter.post('/update-header', authAdmin, upload.single('image'), updateHeader);

export default contentRouter;