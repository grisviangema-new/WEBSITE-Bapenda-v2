import express from 'express';
import { addPetugas, loginAdmin, allPetugas } from '../controllers/adminController.js';
import authAdmin from '../middlewares/authAdmin.js'; 

const adminRouter = express.Router();

// 1. Rute PUBLIC (Tanpa authAdmin)
// Taruh paling atas karena user butuh ini buat dapat token
adminRouter.post('/login', loginAdmin); 

// ---------------------------------------------------------
// 2. MIDDLEWARE PENJAGA GERBANG
// Semua route DI BAWAH baris ini otomatis terlindungi authAdmin
// ---------------------------------------------------------
adminRouter.use(authAdmin); 

// 3. Rute PRIVATE (Otomatis kena authAdmin, tidak perlu ditulis lagi)
adminRouter.post('/add-petugas', addPetugas); // ✅ Aman
adminRouter.get('/all-petugas', allPetugas);  // ✅ Aman
//adminRouter.post('/delete-petugas', deletePetugas); // ✅ Aman

export default adminRouter;