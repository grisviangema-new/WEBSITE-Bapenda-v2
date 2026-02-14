import validator from "validator";
import bcrypt from "bcryptjs";
import { v2 as cloudinary } from "cloudinary";
import petugasModel from "../models/petugasModel.js";
import jwt from 'jsonwebtoken';

// API: Login Admin
const loginAdmin = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Cek apakah email & password sama dengan yang di file .env
        if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
            
            // PERBAIKAN UTAMA DI SINI:
            // Payload diubah menjadi OBJECT { email: email } agar 'expiresIn' bekerja
            const token = jwt.sign(
                { email: email },       // Payload (Object)
                process.env.JWT_SECRET, // Secret Key
                { expiresIn: '30m' }    // Options
            );

            res.json({ success: true, token });
            
        } else {
            res.json({ success: false, message: "Email atau Password Salah" });
        }

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}

// API: Menambah Petugas Pajak
const addPetugas = async (req, res) => {
    try {
        const { nip, nama, email, password, jabatan, wilayah_kerja } = req.body;
        const imageFile = req.file; 

        // 1. Cek kelengkapan data teks
        if (!nip || !nama || !email || !password || !jabatan || !wilayah_kerja) {
            return res.json({ success: false, message: "Mohon lengkapi semua data petugas" });
        }

        // 2. PERBAIKAN: Cek File Gambar DULUAN sebelum di-upload
        if (!imageFile) {
            return res.json({ success: false, message: "Gagal: Foto petugas wajib di-upload!" });
        }

        // 3. Validasi Email
        if (!validator.isEmail(email)) {
            return res.json({ success: false, message: "Format email tidak valid" });
        }

        // 4. Validasi Password
        if (password.length < 8) {
            return res.json({ success: false, message: "Password minimal 8 karakter" });
        }

        // 5. Enkripsi Password (Hashing)
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // 6. Upload Foto ke Cloudinary
        // Aman dilakukan sekarang karena sudah dicek di langkah no. 2
        const imageUpload = await cloudinary.uploader.upload(imageFile.path, { resource_type: "image" });
        const imageUrl = imageUpload.secure_url;

        // 7. Siapkan Data
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

        // 8. Simpan ke Database
        const newPetugas = new petugasModel(petugasData);
        await newPetugas.save();

        res.json({ success: true, message: "Petugas Pajak Berhasil Ditambahkan" });

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}

// API: Mengambil Semua Data Petugas
const allPetugas = async (req, res) => {
    try {
        // Cari semua petugas, tapi jangan tampilkan passwordnya (select -password)
        const petugas = await petugasModel.find({}).select('-password');
        res.json({ success: true, petugas });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}

const changeAvailability = async (req, res) => {
    try {
        const { id } = req.body; // Pastikan Frontend kirim 'docId'
        
        const available = await petugasModel.findById(id);
        await petugasModel.findByIdAndUpdate(id, { tersedia: !available.tersedia });
        
        res.json({ success: true, message: 'Status Ketersediaan Berubah' });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}

const editPetugas = async (req, res) => {
    try {
        const { id, nip, nama, email, jabatan, wilayah_kerja } = req.body;
        const imageFile = req.file;

        const updateData = {
            nip, nama, email, jabatan, wilayah_kerja
        }

        // Jika ada upload gambar baru, upload ke cloudinary & update data
        if (imageFile) {
            const imageUpload = await cloudinary.uploader.upload(imageFile.path, { resource_type: "image" });
            updateData.image = imageUpload.secure_url;
        }

        // Update database
        await petugasModel.findByIdAndUpdate(id, updateData);

        res.json({ success: true, message: "Data Petugas Berhasil Diupdate" });

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}

const deletePetugas = async (req, res) => {
    try {
        const { id } = req.body;
        
        // Hapus data
        const deleted = await petugasModel.findByIdAndDelete(id); 

        // Cek apakah ada data yang terhapus
        if (!deleted) {
            return res.json({ success: false, message: "Data tidak ditemukan atau sudah dihapus" });
        }

        res.json({ success: true, message: "Data Petugas Berhasil Dihapus" })
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

// Export
export { addPetugas, loginAdmin, allPetugas, deletePetugas, changeAvailability, editPetugas };