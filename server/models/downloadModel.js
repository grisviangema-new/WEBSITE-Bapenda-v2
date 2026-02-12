import mongoose from "mongoose";

const downloadSchema = new mongoose.Schema({
    title: { type: String, required: true },
    category: { type: String, required: true }, // Contoh: Formulir, Peraturan, SOP
    file: { type: String, required: true }, // URL Cloudinary
    date: { type: Number, default: Date.now }
});

const downloadModel = mongoose.models.download || mongoose.model('download', downloadSchema);

export default downloadModel;