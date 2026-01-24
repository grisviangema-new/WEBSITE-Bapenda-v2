import express from 'express';
import { addNews, deleteNews, getAllNews } from '../controllers/newsController.js';
import upload from '../middlewares/multer.js'; // <--- Import Multer

const newsRouter = express.Router();

newsRouter.get('/list', getAllNews);

// Tambahkan upload.single('image') di tengah
newsRouter.post('/add', upload.single('image'), addNews); 

newsRouter.post('/delete', deleteNews);

export default newsRouter;