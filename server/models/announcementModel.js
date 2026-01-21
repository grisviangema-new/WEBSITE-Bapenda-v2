import mongoose from "mongoose";

const announcementSchema = new mongoose.Schema({
    title: { type: String, required: true },
    desc: { type: String, required: true }, // Isi pengumuman
    image: { type: String, default: "📢" }, // Bisa emoji atau URL gambar
    color: { type: String, default: "bg-blue-600" }, // Warna background ikon
    link: { type: String, default: "/" } // Link tujuan saat diklik
});

const announcementModel = mongoose.models.announcement || mongoose.model("announcement", announcementSchema);

export default announcementModel;