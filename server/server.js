import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './config/mongodb.js';
import adminRouter from './routes/adminRoute.js';

// Konfigurasi App
const app = express();
const port = process.env.PORT || 4000;

// Koneksi Database
connectDB();

// Middlewares
app.use(express.json());
app.use(cors());
app.use('/api/admin', adminRouter);

// --- Routing API (Akan kita isi nanti) ---
app.get('/', (req, res) => {
    res.send('API Sistem Pajak Daerah Pasuruan Siap! 🚀');
});

// Jalankan Server
app.listen(port, () => {
    console.log(`Server berjalan di port ${port}`);
});