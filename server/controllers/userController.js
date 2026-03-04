import validator from 'validator';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import fs from 'fs';
import path from 'path';
import userModel from '../models/userModel.js';

// Helper hapus file
const deleteFile = (fileName, subFolder) => {
    if (fileName) {
        const filePath = path.join('uploads', subFolder, fileName);
        if (fs.existsSync(filePath)) fs.unlinkSync(filePath);
    }
};

// --- REGISTER USER ---
const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        if (!name || !password || !email) {
            return res.json({ success: false, message: "Data tidak lengkap!" });
        }
        if (!validator.isEmail(email)) {
            return res.json({ success: false, message: "Format email salah!" });
        }
        if (password.length < 8) {
            return res.json({ success: false, message: "Password minimal 8 karakter!" });
        }

        // Cek email (Sequelize: findOne)
        const exists = await userModel.findOne({ where: { email } });
        if (exists) {
            return res.json({ success: false, message: "Email sudah terdaftar!" });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Simpan User (Sequelize: create)
        const user = await userModel.create({
            name,
            email,
            password: hashedPassword
        });

        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '30m' });

        res.json({ success: true, token });

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}

// --- LOGIN USER ---
const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await userModel.findOne({ where: { email } });

        if (!user) {
            return res.json({ success: false, message: "User tidak ditemukan" });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (isMatch) {
            const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '30m' });
            res.json({ success: true, token });
        } else {
            res.json({ success: false, message: "Password salah" });
        }

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}

// --- GET PROFILE ---
const getProfile = async (req, res) => {
    try {
        const { userId } = req.body; // Didapat dari middleware authUser

        const userData = await userModel.findByPk(userId, {
            attributes: { exclude: ['password'] }
        });

        res.json({ success: true, userData });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}

// --- UPDATE PROFIL ---
const updateProfile = async (req, res) => {
    try {
        const { userId, name, phone, address, dob, gender } = req.body;
        const imageFile = req.file;

        if (!name || !phone) {
            return res.json({ success: false, message: "Data Nama dan Telepon wajib diisi" });
        }

        const updateData = { name, phone, address, dob, gender };

        // Jika user upload foto profil baru
        if (imageFile) {
            const user = await userModel.findByPk(userId);
            if (user && user.image) {
                deleteFile(user.image, 'images'); // Hapus foto profil lama
            }
            updateData.image = imageFile.filename;
        }

        await userModel.update(updateData, { where: { id: userId } });

        res.json({ success: true, message: "Profil Berhasil Diupdate" });

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}

export { registerUser, loginUser, getProfile, updateProfile };