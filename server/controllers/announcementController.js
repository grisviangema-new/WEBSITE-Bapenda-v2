import announcementModel from "../models/announcementModel.js";
import { v2 as cloudinary } from "cloudinary"; // Import Cloudinary

// 1. Tambah Pengumuman (Admin)
const addAnnouncement = async (req, res) => {
    try {
        const { title, desc, link, color } = req.body;
        const imageFile = req.file; // Ambil file dari request

        // Validasi
        if (!title || !desc || !imageFile) {
            return res.json({ success: false, message: "Data tidak lengkap (Judul, Deskripsi, dan Gambar wajib diisi)" });
        }

        // Upload ke Cloudinary
        const imageUpload = await cloudinary.uploader.upload(imageFile.path, { resource_type: "image" });
        const imageUrl = imageUpload.secure_url;

        // Simpan ke Database
        const newAnnouncement = new announcementModel({
            title,
            desc,
            image: imageUrl, // Simpan URL Cloudinary
            color: color || 'bg-blue-600', // Default color jika kosong
            link: link || '#'
        });

        await newAnnouncement.save();
        
        res.json({ success: true, message: "Pengumuman Berhasil Ditambahkan" });

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}

// 2. Hapus Pengumuman (Admin)
const deleteAnnouncement = async (req, res) => {
    try {
        const { id } = req.body;
        await announcementModel.findByIdAndDelete(id);
        res.json({ success: true, message: "Pengumuman Dihapus" });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}

// 3. Ambil Semua Pengumuman (Publik)
const getAllAnnouncements = async (req, res) => {
    try {
        const announcements = await announcementModel.find({});
        res.json({ success: true, announcements });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}

export { addAnnouncement, deleteAnnouncement, getAllAnnouncements };