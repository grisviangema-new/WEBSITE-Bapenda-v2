import fs from 'fs';
import path from 'path';
import announcementModel from "../models/announcementModel.js";

// Helper untuk menghapus file fisik
const deleteFile = (fileName, subFolder) => {
    if (fileName) {
        const filePath = path.join('uploads', subFolder, fileName);
        if (fs.existsSync(filePath)) {
            fs.unlinkSync(filePath);
        }
    }
};

// 1. Tambah Pengumuman (Admin)
const addAnnouncement = async (req, res) => {
    try {
        const { title, description, link, color } = req.body;
        const imageFile = req.file; // Diambil dari upload.single('image')

        // Validasi
        if (!title || !description || !imageFile) {
            return res.json({ 
                success: false, 
                message: "Data tidak lengkap (Judul, Deskripsi, dan Gambar wajib diisi)" 
            });
        }

        // Simpan ke Database MySQL menggunakan Sequelize
        const newAnnouncement = await announcementModel.create({
            title,
            description,
            image: imageFile.filename, // Simpan nama file lokal (e.g., 1715432.jpg)
            color: color || 'bg-blue-600',
            link: link || '#'
        });
        
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
        
        // Cari data dulu untuk mendapatkan nama file gambar
        const announcement = await announcementModel.findByPk(id);
        
        if (!announcement) {
            return res.json({ success: false, message: "Pengumuman tidak ditemukan" });
        }

        // Hapus file fisik dari folder uploads/images
        deleteFile(announcement.image, 'images');

        // Hapus data dari database
        await announcementModel.destroy({ where: { id } });

        res.json({ success: true, message: "Pengumuman Berhasil Dihapus" });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}

// 3. Ambil Semua Pengumuman (Publik)
const getAllAnnouncements = async (req, res) => {
    try {
        // Sequelize find all
        const announcements = await announcementModel.findAll({
            order: [['createdAt', 'DESC']] // Urutkan dari yang terbaru
        });
        res.json({ success: true, announcements });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}

export { addAnnouncement, deleteAnnouncement, getAllAnnouncements };