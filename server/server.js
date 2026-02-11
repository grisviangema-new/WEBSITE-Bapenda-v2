import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './config/mongodb.js';
import adminRouter from './routes/adminRoute.js';
import petugasRouter from './routes/petugasRoute.js';
import userRouter from './routes/userRoute.js';
import announcementRouter from './routes/announcementRoute.js';
import newsRouter from './routes/newsRoute.js';
import contentRouter from './routes/contentRoute.js';

// Konfigurasi App
const app = express();
const port = process.env.PORT || 4000;

// Koneksi Database
connectDB();

// Middlewares
app.use(express.json());
app.use(cors());
app.use('/api/admin', adminRouter);
app.use('/api/petugas', petugasRouter);
app.use('/api/user', userRouter);
app.use('/api/announcement', announcementRouter);
app.use('/api/news', newsRouter); //
app.use('/api/content', contentRouter); //untuk mengupdate halaman home

// --- Routing API (Akan kita isi nanti) ---
app.get('/', (req, res) => {
    res.send('API Sistem Pajak Daerah Pasuruan Siap! 🚀');
});

// Jalankan Server
app.listen(port, () => {
    console.log(`Server berjalan di port ${port}`);
});