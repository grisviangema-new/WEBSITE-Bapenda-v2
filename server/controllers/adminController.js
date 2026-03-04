import validator from "validator";
import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken';
import fs from 'fs';
import path from 'path';
import petugasModel from "../models/petugasModel.js";

// Helper untuk menghapus file secara aman
const deleteFile = (fileName, subFolder) => {
    if (fileName) {
        const filePath = path.join('uploads', subFolder, fileName);
        if (fs.existsSync(filePath)) {
            fs.unlinkSync(filePath);
        }
    }
};

// API: Login Admin
const loginAdmin = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
            const token = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: '600m' });
            return res.json({ success: true, token });
        }
        res.json({ success: false, message: "Email atau Password Salah" });
    } catch (error) {
        res.json({ success: false, message: error.message });
    }
}

// API: Menambah Petugas + Multi File (Foto & PDF)
const addPetugas = async (req, res) => {
    try {
        const { nip, nama, email, password, jabatan, wilayah_kerja } = req.body;
        
        // Ambil file dari req.files (upload.fields)
        const files = req.files || {};
        const imageFile = files['image'] ? files['image'][0].filename : null;
        const sopFile = files['sop_file'] ? files['sop_file'][0].filename : null;
        const peraturanFile = files['peraturan_file'] ? files['peraturan_file'][0].filename : null;

        if (!nip || !nama || !email || !password || !jabatan || !wilayah_kerja) {
            return res.json({ success: false, message: "Mohon lengkapi semua data teks" });
        }

        if (!imageFile) {
            return res.json({ success: false, message: "Foto petugas wajib di-upload!" });
        }

        if (!validator.isEmail(email)) {
            return res.json({ success: false, message: "Format email tidak valid" });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const petugasData = {
            nip,
            nama,
            email,
            password: hashedPassword,
            image: imageFile,            // Masuk ke uploads/images/
            sop_file: sopFile,          // Masuk ke uploads/documents/
            peraturan_file: peraturanFile, // Masuk ke uploads/documents/
            jabatan,
            wilayah_kerja,
            tersedia: true
        };

        await petugasModel.create(petugasData);
        res.json({ success: true, message: "Petugas dan Dokumen Berhasil Ditambahkan" });

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}

// API: Ambil Semua Petugas
const allPetugas = async (req, res) => {
    try {
        const petugas = await petugasModel.findAll({
            attributes: { exclude: ['password'] }
        });
        res.json({ success: true, petugas });
    } catch (error) {
        res.json({ success: false, message: error.message });
    }
}

// API: Ubah Status Tersedia
const changeAvailability = async (req, res) => {
    try {
        const { id } = req.body;
        const petugas = await petugasModel.findByPk(id);
        if (!petugas) return res.json({ success: false, message: "Petugas tidak ditemukan" });

        await petugasModel.update(
            { tersedia: !petugas.tersedia },
            { where: { id } }
        );
        res.json({ success: true, message: 'Status Ketersediaan Berubah' });
    } catch (error) {
        res.json({ success: false, message: error.message });
    }
}

// API: Edit Petugas & Update File
const editPetugas = async (req, res) => {
    try {
        const { id, nip, nama, email, jabatan, wilayah_kerja } = req.body;
        const files = req.files || {};
        
        const petugas = await petugasModel.findByPk(id);
        if (!petugas) return res.json({ success: false, message: "Petugas tidak ditemukan" });

        const updateData = { nip, nama, email, jabatan, wilayah_kerja };

        // Logika Update Foto
        if (files['image']) {
            deleteFile(petugas.image, 'images'); // Hapus foto lama
            updateData.image = files['image'][0].filename;
        }

        // Logika Update SOP
        if (files['sop_file']) {
            deleteFile(petugas.sop_file, 'documents'); // Hapus SOP lama
            updateData.sop_file = files['sop_file'][0].filename;
        }

        // Logika Update Peraturan
        if (files['peraturan_file']) {
            deleteFile(petugas.peraturan_file, 'documents'); // Hapus Peraturan lama
            updateData.peraturan_file = files['peraturan_file'][0].filename;
        }

        await petugasModel.update(updateData, { where: { id } });
        res.json({ success: true, message: "Data dan File Berhasil Diupdate" });

    } catch (error) {
        res.json({ success: false, message: error.message });
    }
}

// API: Hapus Petugas & Semua Filenya
const deletePetugas = async (req, res) => {
    try {
        const { id } = req.body;
        const petugas = await petugasModel.findByPk(id);

        if (!petugas) return res.json({ success: false, message: "Data tidak ditemukan" });

        // Hapus semua file fisik dari server
        deleteFile(petugas.image, 'images');
        deleteFile(petugas.sop_file, 'documents');
        deleteFile(petugas.peraturan_file, 'documents');

        await petugasModel.destroy({ where: { id } });
        res.json({ success: true, message: "Petugas dan Dokumen Terkait Dihapus" });

    } catch (error) {
        res.json({ success: false, message: error.message });
    }
}

export { addPetugas, loginAdmin, allPetugas, deletePetugas, changeAvailability, editPetugas };