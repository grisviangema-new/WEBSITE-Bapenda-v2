import express from 'express';
import { updateHeader, getContent } from '../controllers/contentController.js';
import upload from '../middlewares/multer.js';
import authAdmin from '../middlewares/authAdmin.js';

const contentRouter = express.Router();

// 1. Jalur PUBLIK (Akses Data Header/Konten Web)
// Frontend akan memanggil ini saat halaman pertama kali dimuat (Lokal storage/MySQL)
contentRouter.get('/get', getContent);

// ---------------------------------------------------------
// 2. Jalur ADMIN (Proteksi Token + Upload Gambar Lokal)
// ---------------------------------------------------------
/**
 * Penjelasan:
 * - authAdmin: Memastikan pengirim adalah admin yang sah.
 * - upload.single('image'): Menangkap 1 file gambar untuk background/logo header.
 * - updateHeader: Menyimpan metadata ke MySQL & menghapus file lama di /uploads/images.
 */
contentRouter.post('/update-header', authAdmin, upload.single('image'), updateHeader);

export default contentRouter;