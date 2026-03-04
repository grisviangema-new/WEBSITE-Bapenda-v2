import express from 'express';
import { 
    addPetugas, 
    loginAdmin, 
    allPetugas, 
    deletePetugas, 
    changeAvailability, 
    editPetugas 
} from '../controllers/adminController.js';
import authAdmin from '../middlewares/authAdmin.js'; 
import upload from '../middlewares/multer.js';

const adminRouter = express.Router();

// 1. Rute PUBLIC (Login untuk mendapatkan Token)
adminRouter.post('/login', loginAdmin); 

// ---------------------------------------------------------
// 2. MIDDLEWARE PENJAGA GERBANG
// Semua route di bawah ini wajib membawa Token Admin di Header
// ---------------------------------------------------------
adminRouter.use(authAdmin); 

// 3. Rute PRIVATE (Telah terlindungi authAdmin)

// Menggunakan upload.fields untuk menangani Foto (image) dan Dokumen (pdf) sekaligus
const cpUpload = upload.fields([
    { name: 'image', maxCount: 1 },
    { name: 'sop_file', maxCount: 1 },
    { name: 'peraturan_file', maxCount: 1 }
]);

// Tambah Petugas dengan Multi-File
adminRouter.post('/add-petugas', cpUpload, addPetugas);

// Edit Petugas dengan Multi-File
adminRouter.post('/edit-petugas', cpUpload, editPetugas);

// Rute lainnya (Hanya teks/ID)
adminRouter.get('/all-petugas', allPetugas);
adminRouter.post('/delete-petugas', deletePetugas);
adminRouter.post('/change-availability', changeAvailability);

export default adminRouter;