import contentModel from "../models/contentModel.js";
import { v2 as cloudinary } from "cloudinary";

// --- API UNTUK ADMIN (UPDATE) ---
const updateHeader = async (req, res) => {
    try {
        const { title, desc } = req.body;
        const imageFile = req.file;

        // Siapkan data yang mau diupdate
        let updateData = { 
            headerTitle: title, 
            headerDesc: desc 
        };

        // Jika ada gambar baru di-upload
        if (imageFile) {
            const imageUpload = await cloudinary.uploader.upload(imageFile.path, { resource_type: "image" });
            updateData.headerImage = imageUpload.secure_url;
        }

        // Cari dokumen pertama, update. Jika kosong, buat baru (upsert: true)
        const content = await contentModel.findOneAndUpdate({}, updateData, { new: true, upsert: true });

        res.json({ success: true, message: "Header Berhasil Diupdate", content });

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}

// --- API UNTUK CLIENT & ADMIN (AMBIL DATA) ---
const getContent = async (req, res) => {
    try {
        const content = await contentModel.findOne({});
        res.json({ success: true, content });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}

export { updateHeader, getContent };