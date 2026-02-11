import express from 'express';
import { addAnnouncement, deleteAnnouncement, getAllAnnouncements } from '../controllers/announcementController.js';
import upload from '../middlewares/multer.js';

const announcementRouter = express.Router();

// Jalur Publik (Client)
announcementRouter.get('/list', getAllAnnouncements);

// Jalur Admin (Nanti bisa diamankan pakai middleware adminAuth)
announcementRouter.post('/add', upload.single('image'), addAnnouncement);
announcementRouter.post('/delete', deleteAnnouncement);
announcementRouter.get('/all', getAllAnnouncements);

export default announcementRouter;