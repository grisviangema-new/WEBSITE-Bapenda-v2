import express from 'express';
import { 
    addAnnouncement, 
    deleteAnnouncement, 
    getAllAnnouncements 
} from '../controllers/announcementController.js';
import upload from '../middlewares/multer.js';
import authAdmin from '../middlewares/authAdmin.js'; // Import middleware keamanan

const announcementRouter = express.Router();

// 1. Jalur PUBLIK (Bisa diakses Client/Masyarakat)
// Mengambil daftar pengumuman untuk ditampilkan di website depan
announcementRouter.get('/list', getAllAnnouncements);

// ---------------------------------------------------------
// 2. Jalur ADMIN (Terlindungi authAdmin)
// ---------------------------------------------------------
// Gunakan middleware authAdmin agar tidak sembarang orang bisa menambah/menghapus
announcementRouter.post('/add', authAdmin, upload.single('image'), addAnnouncement);
announcementRouter.post('/delete', authAdmin, deleteAnnouncement);

// Alias jika admin butuh list di dashboard (bisa pakai fungsi yang sama)
announcementRouter.get('/all', authAdmin, getAllAnnouncements);

export default announcementRouter;