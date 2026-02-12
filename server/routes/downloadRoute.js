import express from 'express';
import { addDownload, deleteDownload, getAllDownloads } from '../controllers/downloadController.js';
import upload from '../middlewares/multer.js'; // Gunakan multer yang sudah ada

const downloadRouter = express.Router();

downloadRouter.post('/add', upload.single('file'), addDownload);
downloadRouter.post('/delete', deleteDownload);
downloadRouter.get('/all', getAllDownloads);

export default downloadRouter;