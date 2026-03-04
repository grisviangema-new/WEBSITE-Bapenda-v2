import fs from 'fs';
import path from 'path';
import downloadModel from "../models/downloadModel.js";

// Helper untuk menghapus file fisik
const deleteFile = (fileName, subFolder) => {
    if (fileName) {
        const filePath = path.join('uploads', subFolder, fileName);
        if (fs.existsSync(filePath)) {
            fs.unlinkSync(filePath);
        }
    }
};

// 1. Tambah Dokumen (Upload ke Server Lokal)
const addDownload = async (req, res) => {
    try {
        const { title, category } = req.body;
        const docFile = req.file; // Diambil dari middleware multer

        if (!title || !category || !docFile) {
            return res.json({ success: false, message: "Data tidak lengkap" });
        }

        // Simpan ke Database MySQL
        await downloadModel.create({
            title,
            category,
            file: docFile.filename, // Menyimpan nama file (e.g., 1715432.pdf)
            date: new Date()
        });

        res.json({ success: true, message: "Dokumen Berhasil Diupload ke Server" });

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}

// 2. Hapus Dokumen (Hapus Data & File Fisik)
const deleteDownload = async (req, res) => {
    try {
        const { id } = req.body;
        
        // Cari data untuk mendapatkan nama file sebelum dihapus
        const doc = await downloadModel.findByPk(id);
        
        if (!doc) {
            return res.json({ success: false, message: "Dokumen tidak ditemukan" });
        }

        // Hapus file fisik dari folder uploads/documents
        deleteFile(doc.file, 'documents');

        // Hapus record dari database
        await downloadModel.destroy({ where: { id } });

        res.json({ success: true, message: "Dokumen Berhasil Dihapus" });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}

// 3. Ambil Semua Dokumen
const getAllDownloads = async (req, res) => {
    try {
        // Ambil semua data urut berdasarkan tanggal terbaru
        const downloads = await downloadModel.findAll({
            order: [['date', 'DESC']]
        });
        res.json({ success: true, downloads });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}

export { addDownload, deleteDownload, getAllDownloads };