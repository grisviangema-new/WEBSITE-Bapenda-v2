import express from 'express';
import { 
    addNews, 
    deleteNews, 
    getAllNews 
} from '../controllers/newsController.js';
import upload from '../middlewares/multer.js';
import authAdmin from '../middlewares/authAdmin.js'; // Proteksi Admin

const newsRouter = express.Router();

// 1. Jalur PUBLIK (Untuk pembaca berita)
// Mengambil semua berita dari MySQL (diurutkan berdasarkan tanggal terbaru)
newsRouter.get('/list', getAllNews);

// ---------------------------------------------------------
// 2. Jalur ADMIN (Proteksi Token + Upload Gambar ke /images)
// ---------------------------------------------------------

/**
 * Route: Tambah Berita
 * - authAdmin: Cek token JWT Admin
 * - upload.single('image'): Simpan gambar ke folder uploads/images/
 */
newsRouter.post('/add', authAdmin, upload.single('image'), addNews);

/**
 * Route: Hapus Berita
 * - Menghapus data di MySQL dan file gambar fisiknya di server
 */
newsRouter.post('/delete', authAdmin, deleteNews);

export default newsRouter;