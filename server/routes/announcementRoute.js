import express from 'express';
import { addAnnouncement, deleteAnnouncement, getAllAnnouncements } from '../controllers/announcementController.js';

const announcementRouter = express.Router();

// Jalur Publik (Client)
announcementRouter.get('/list', getAllAnnouncements);

// Jalur Admin (Nanti bisa diamankan pakai middleware adminAuth)
announcementRouter.post('/add', addAnnouncement);
announcementRouter.post('/delete', deleteAnnouncement);

export default announcementRouter;