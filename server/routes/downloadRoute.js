import express from 'express';
import { 
    addDownload, 
    deleteDownload, 
    getAllDownloads 
} from '../controllers/downloadController.js';
import upload from '../middlewares/multer.js';
import authAdmin from '../middlewares/authAdmin.js'; // Tambahkan proteksi Admin

const downloadRouter = express.Router();

// 1. Jalur PUBLIK (Untuk masyarakat mendownload file)
// Menampilkan semua daftar dokumen yang tersedia di MySQL
downloadRouter.get('/list', getAllDownloads);

// ---------------------------------------------------------
// 2. Jalur ADMIN (Proteksi Token + Upload PDF ke /documents)
// ---------------------------------------------------------
/**
 * Catatan: 
 * Nama field 'file' harus sesuai dengan yang di-append di FormData Frontend.
 * File akan otomatis diarahkan ke folder 'uploads/documents' oleh middleware multer kita.
 */
downloadRouter.post('/add', authAdmin, upload.single('file'), addDownload);

// Hapus data di MySQL sekaligus menghapus file fisik di server
downloadRouter.post('/delete', authAdmin, deleteDownload);

export default downloadRouter;