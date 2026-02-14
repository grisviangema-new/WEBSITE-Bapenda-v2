import mongoose from "mongoose";

const faqSchema = new mongoose.Schema({
    question: { type: String, required: true },
    answer: { type: String, required: true },
    date: { type: Number, default: Date.now }
});

const faqModel = mongoose.models.faq || mongoose.model('faq', faqSchema);

export default faqModel;