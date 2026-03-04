import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import fs from 'fs';
import { connectDB, sequelize } from './config/db.js'; // Import koneksi MySQL

// Import Routes
import adminRouter from './routes/adminRoute.js';
import petugasRouter from './routes/petugasRoute.js';
import userRouter from './routes/userRoute.js';
import announcementRouter from './routes/announcementRoute.js';
import newsRouter from './routes/newsRoute.js';
import contentRouter from './routes/contentRoute.js';
import downloadRouter from './routes/downloadRoute.js';
import faqRouter from './routes/faqRoute.js';

// import models untuk sinkronisasi
import AnnouncementModel from './models/announcementModel.js';
import NewsModel from './models/newsModel.js';
import ContentModel from './models/contentModel.js';
import DownloadModel from './models/downloadModel.js';
import FAQModel from './models/faqModel.js';
import UserModel from './models/userModel.js';
import PetugasModel from './models/petugasModel.js';
import SpptModel from './models/spptModel.js';
import WpModel from './models/wajibPajakModel.js';

// 1. Konfigurasi App
const app = express();
const port = process.env.PORT || 4000;

// 2. Inisialisasi Folder Uploads (Otomatis buat folder jika belum ada)
const uploadDirs = ['uploads/images', 'uploads/documents'];
uploadDirs.forEach(dir => {
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
        console.log(`📁 Folder Created: ${dir}`);
    }
});

// 3. Middlewares
app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 
app.use(cors()); 

// 4. Akses Folder Statis (PENTING: Agar Frontend bisa akses Gambar/PDF)
app.use('/uploads/images', express.static('uploads/images'));
app.use('/uploads/documents', express.static('uploads/documents'));

// 5. API Endpoints
app.use('/api/admin', adminRouter);
app.use('/api/petugas', petugasRouter);
app.use('/api/user', userRouter);
app.use('/api/announcement', announcementRouter);
app.use('/api/news', newsRouter);
app.use('/api/content', contentRouter);
app.use('/api/download', downloadRouter);
app.use('/api/faq', faqRouter);

// Root API
app.get('/', (req, res) => {
    res.send('API Sistem Pajak Daerah Pasuruan (MySQL Version) Siap! 🚀');
});

async function startApp() {
    try {
        // sync() akan membuat tabel jika belum ada di database
        // { alter: true } akan mengupdate tabel jika ada perubahan struktur
        await sequelize.sync({ alter: true });
        console.log("Semua tabel berhasil disinkronkan.");
        
        // Jalankan server Anda di sini
    } catch (error) {
        console.error("Gagal sinkronisasi database:", error);
    }
}

// 6. Jalankan Database & Server
const startServer = async () => {
    try {
        // Cek Koneksi
        await connectDB();
        
        // Sinkronisasi Model ke Tabel MySQL
        // Gunakan { alter: true } agar jika ada perubahan kolom di file model, tabel otomatis terupdate
        await sequelize.sync({ alter: true });
        console.log('✅ MySQL Tables Synchronized');

        app.listen(port, () => {
            console.log(`🚀 Server berjalan di http://localhost:${port}`);
        });
    } catch (error) {
        console.error('❌ Gagal menjalankan server:', error);
    }
};

startApp();
startServer();