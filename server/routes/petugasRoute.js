import express from 'express';
import { getPetugasList } from '../controllers/petugasController.js';

const petugasRouter = express.Router();

// 1. Jalur PUBLIK (Untuk Client/Masyarakat)
/**
 * Route: Mengambil Daftar Petugas
 * - Mengambil data dari tabel Petugas di MySQL via Sequelize.
 * - Digunakan untuk menampilkan profil petugas di halaman depan website.
 */
petugasRouter.get('/list', getPetugasList);

export default petugasRouter;