import downloadModel from "../models/downloadModel.js";
import { v2 as cloudinary } from "cloudinary";

// 1. Tambah Dokumen
const addDownload = async (req, res) => {
    try {
        const { title, category } = req.body;
        const docFile = req.file;

        if (!title || !category || !docFile) {
            return res.json({ success: false, message: "Data tidak lengkap" });
        }

        // Upload ke Cloudinary (Set resource_type: auto agar bisa baca PDF/Doc)
        const fileUpload = await cloudinary.uploader.upload(docFile.path, { 
            resource_type: "auto",
            folder: "bapenda_documents" // Opsional: folder khusus
        });
        const fileUrl = fileUpload.secure_url;

        const newDownload = new downloadModel({
            title,
            category,
            file: fileUrl,
            date: Date.now()
        });

        await newDownload.save();
        res.json({ success: true, message: "Dokumen Berhasil Diupload" });

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}

// 2. Hapus Dokumen
const deleteDownload = async (req, res) => {
    try {
        const { id } = req.body;
        await downloadModel.findByIdAndDelete(id);
        res.json({ success: true, message: "Dokumen Dihapus" });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}

// 3. Ambil Semua Dokumen
const getAllDownloads = async (req, res) => {
    try {
        const downloads = await downloadModel.find({}).sort({ date: -1 });
        res.json({ success: true, downloads });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}

export { addDownload, deleteDownload, getAllDownloads };