import express from 'express';
import { addPetugas, loginAdmin, allPetugas } from '../controllers/adminController.js';
import upload from '../middlewares/multer.js';

const adminRouter = express.Router();

// Endpoint: POST /api/admin/add-petugas
adminRouter.post('/add-petugas', upload.single('image'), addPetugas);
adminRouter.post('/login', loginAdmin); // <--- Tambahkan baris ini
adminRouter.post('/all-petugas', allPetugas); // <--- Tambahkan ini (Pakai POST atau GET terserah, di video biasanya POST)

export default adminRouter;