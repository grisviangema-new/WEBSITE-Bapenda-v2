import express from 'express';
import { 
    registerUser, 
    loginUser, 
    getProfile, 
    updateProfile 
} from '../controllers/userController.js';
import authUser from '../middlewares/authUser.js';
import upload from '../middlewares/multer.js';

const userRouter = express.Router();

// 1. Jalur PUBLIK (Tanpa Token)
// Digunakan untuk pendaftaran baru dan login untuk mendapatkan Token
userRouter.post('/register', registerUser);
userRouter.post('/login', loginUser);

// ---------------------------------------------------------
// 2. Jalur PRIVATE (Wajib Token User)
// ---------------------------------------------------------

// Mengambil data profil berdasarkan ID yang ada di dalam Token
userRouter.get('/get-profile', authUser, getProfile);

/**
 * Route: Update Profil
 * - authUser: Validasi token user (ID MySQL)
 * - upload.single('image'): Menangkap foto profil baru dan simpan di /uploads/images
 */
userRouter.post('/update-profile', authUser, upload.single('image'), updateProfile);

export default userRouter;