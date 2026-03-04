import fs from 'fs';
import path from 'path';
import newsModel from "../models/newsModel.js";

// Helper untuk menghapus file fisik agar server tetap bersih
const deleteFile = (fileName, subFolder) => {
    if (fileName) {
        const filePath = path.join('uploads', subFolder, fileName);
        if (fs.existsSync(filePath)) {
            fs.unlinkSync(filePath);
        }
    }
};

const addNews = async (req, res) => {
    try {
        const { title, category, content } = req.body;
        const imageFile = req.file; 

        // 1. Ambil nama file dari Multer (Jika ada)
        let fileName = "";
        if (imageFile) {
            fileName = imageFile.filename; // Nama file di folder uploads/images/
        }

        // 2. Simpan ke Database MySQL menggunakan Sequelize
        await newsModel.create({ 
            title, 
            category, 
            content,
            image: fileName, // Simpan nama filenya saja
            date: new Date()
        });

        res.json({ success: true, message: "Berita Berhasil Ditambahkan" });

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}

const deleteNews = async (req, res) => {
    try {
        const { id } = req.body;
        
        // Cari data dulu untuk mendapatkan nama file gambarnya
        const news = await newsModel.findByPk(id);
        
        if (!news) {
            return res.json({ success: false, message: "Berita tidak ditemukan" });
        }

        // Hapus file fisik dari folder images
        deleteFile(news.image, 'images');

        // Hapus data dari database
        await news.destroy(); 
        
        res.json({ success: true, message: "Berita Dihapus" });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}

const getAllNews = async (req, res) => {
    try {
        // Sequelize: findAll dengan urutan tanggal terbaru
        const news = await newsModel.findAll({
            order: [['date', 'DESC']]
        });
        res.json({ success: true, news });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}

export { addNews, deleteNews, getAllNews };