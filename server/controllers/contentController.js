import fs from 'fs';
import path from 'path';
import contentModel from "../models/contentModel.js";

// Helper untuk menghapus file fisik
const deleteFile = (fileName, subFolder) => {
    if (fileName) {
        const filePath = path.join('uploads', subFolder, fileName);
        if (fs.existsSync(filePath)) {
            fs.unlinkSync(filePath);
        }
    }
};

// --- API UNTUK ADMIN (UPDATE / UPSERT) ---
const updateHeader = async (req, res) => {
    try {
        const { title, desc } = req.body;
        const imageFile = req.file;

        // 1. Cari data content pertama (karena biasanya website hanya punya 1 header utama)
        let content = await contentModel.findOne();

        let updateData = { 
            headerTitle: title, 
            headerDesc: desc 
        };

        // 2. Logika Update Gambar
        if (imageFile) {
            // Jika data sudah ada dan punya gambar lama, hapus dulu file fisiknya
            if (content && content.headerImage) {
                deleteFile(content.headerImage, 'images');
            }
            // Simpan nama file baru
            updateData.headerImage = imageFile.filename;
        }

        if (content) {
            // Jika data ada -> UPDATE
            await contentModel.update(updateData, { where: { id: content.id } });
            // Ambil data terbaru setelah update untuk dikirim ke response
            content = await contentModel.findByPk(content.id);
        } else {
            // Jika data kosong -> CREATE (Pertama kali setup website)
            content = await contentModel.create(updateData);
        }

        res.json({ success: true, message: "Header Berhasil Diupdate", content });

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}

// --- API UNTUK CLIENT & ADMIN (AMBIL DATA) ---
const getContent = async (req, res) => {
    try {
        // Ambil baris pertama dari tabel content
        const content = await contentModel.findOne();
        res.json({ success: true, content });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}

export { updateHeader, getContent };