import newsModel from "../models/newsModel.js";
import { v2 as cloudinary } from "cloudinary" // <--- Import Cloudinary

const addNews = async (req, res) => {
    try {
        const { title, category, content } = req.body;
        const imageFile = req.file; // <--- Tangkap file gambar

        // 1. Upload Gambar ke Cloudinary (Jika ada)
        let imageURL = "";
        if (imageFile) {
            const imageUpload = await cloudinary.uploader.upload(imageFile.path, { resource_type: "image" });
            imageURL = imageUpload.secure_url;
        }

        // 2. Simpan ke Database
        const newNews = new newsModel({ 
            title, 
            category, 
            content,
            image: imageURL // <--- Simpan URL-nya
        });

        await newNews.save();
        res.json({ success: true, message: "Berita Berhasil Ditambahkan" });

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}

const deleteNews = async (req, res) => {
    try {
        await newsModel.findByIdAndDelete(req.body.id);
        res.json({ success: true, message: "Berita Dihapus" });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}

const getAllNews = async (req, res) => {
    try {
        // Sort -1 artinya yang terbaru muncul paling atas
        const news = await newsModel.find({}).sort({ date: -1 });
        res.json({ success: true, news });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}

// ... (fungsi deleteNews dan getAllNews TETAP SAMA, tidak perlu diubah)

export { addNews, deleteNews, getAllNews };