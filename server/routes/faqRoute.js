import express from 'express';
import { addFAQ, deleteFAQ, getAllFAQs } from '../controllers/faqController.js';

const faqRouter = express.Router();

faqRouter.post('/add', addFAQ);
faqRouter.post('/delete', deleteFAQ);
faqRouter.get('/all', getAllFAQs);

export default faqRouter;