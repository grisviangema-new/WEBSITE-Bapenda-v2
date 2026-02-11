import mongoose from "mongoose";

const announcementSchema = new mongoose.Schema({
    title: { type: String, required: true },
    desc: { type: String, required: true }, // Deskripsi singkat
    image: { type: String, required: true }, // URL Gambar dari Cloudinary
    link: { type: String, default: '#' },    // Link tujuan (opsional)
    date: { type: Date, default: Date.now }  // Tanggal posting
});

const announcementModel = mongoose.models.announcement || mongoose.model("announcement", announcementSchema);

export default announcementModel;