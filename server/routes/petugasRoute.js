import express from 'express';
import { getPetugasList } from '../controllers/petugasController.js';

const petugasRouter = express.Router();

// Jalur ini bisa diakses siapa saja (tanpa token)
petugasRouter.get('/list', getPetugasList);

export default petugasRouter;