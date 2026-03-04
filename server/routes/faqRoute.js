import express from 'express';
import { 
    addFAQ, 
    deleteFAQ, 
    getAllFAQs 
} from '../controllers/faqController.js';
import authAdmin from '../middlewares/authAdmin.js'; // Tambahkan proteksi keamanan

const faqRouter = express.Router();

// 1. Jalur PUBLIK (Akses FAQ untuk pengunjung website)
// Mengambil semua daftar tanya jawab dari MySQL
faqRouter.get('/all', getAllFAQs);

// ---------------------------------------------------------
// 2. Jalur ADMIN (Proteksi Token JWT)
// ---------------------------------------------------------
// Hanya Admin yang bisa menambah atau menghapus FAQ
faqRouter.post('/add', authAdmin, addFAQ);
faqRouter.post('/delete', authAdmin, deleteFAQ);

export default faqRouter;