import validator from "validator";
import bcrypt from "bcryptjs";
import { v2 as cloudinary } from "cloudinary";
import petugasModel from "../models/petugasModel.js"; // Import model Petugas

// API: Menambah Petugas Pajak
const addPetugas = async (req, res) => {
    try {
        const { nip, nama, email, password, jabatan, wilayah_kerja } = req.body;
        const imageFile = req.file; 

        // 1. Cek kelengkapan data
        if (!nip || !nama || !email || !password || !jabatan || !wilayah_kerja) {
            return res.json({ success: false, message: "Mohon lengkapi semua data petugas" });
        }

        // 2. Validasi Email
        if (!validator.isEmail(email)) {
            return res.json({ success: false, message: "Format email tidak valid" });
        }

        // 3. Validasi Password
        if (password.length < 8) {
            return res.json({ success: false, message: "Password minimal 8 karakter" });
        }

        // 4. Enkripsi Password (Hashing)
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // 5. Upload Foto ke Cloudinary
        // (Wajib ada foto, kalau tidak ada akan error di sini)
        const imageUpload = await cloudinary.uploader.upload(imageFile.path, { resource_type: "image" });
        const imageUrl = imageUpload.secure_url;

        // --- TAMBAHAN KODE PENGAMAN DI SINI ---
        if (!imageFile) {
            return res.json({ success: false, message: "Gagal: Foto petugas wajib di-upload!" });
        }
        
        // 6. Siapkan Data
        const petugasData = {
            nip,
            nama,
            email,
            image: imageUrl,
            password: hashedPassword,
            jabatan,
            wilayah_kerja,
            tersedia: true
        };

        // 7. Simpan ke Database
        const newPetugas = new petugasModel(petugasData);
        await newPetugas.save();

        res.json({ success: true, message: "Petugas Pajak Berhasil Ditambahkan" });

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}

export { addPetugas };