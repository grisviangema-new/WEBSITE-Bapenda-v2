import validator from 'validator' // Library untuk cek format email
import bcrypt from 'bcryptjs'
import userModel from '../models/userModel.js'
import jwt from 'jsonwebtoken'

// --- API UNTUK REGISTER (DAFTAR) ---
const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // 1. Validasi Input
        if (!name || !password || !email) {
            return res.json({ success: false, message: "Data tidak lengkap!" })
        }
        if (!validator.isEmail(email)) {
            return res.json({ success: false, message: "Format email salah!" })
        }
        if (password.length < 8) {
            return res.json({ success: false, message: "Password minimal 8 karakter!" })
        }

        // 2. Cek apakah email sudah terpakai
        const exists = await userModel.findOne({ email })
        if (exists) {
            return res.json({ success: false, message: "Email sudah terdaftar!" })
        }

        // 3. Enkripsi Password (Hashing)
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        // 4. Simpan User Baru
        const newUser = new userModel({
            name,
            email,
            password: hashedPassword
        })
        const user = await newUser.save()

        // 5. Buat Token (Kartu Akses)
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '30m' }) // Token berlaku 30 menit

        res.json({ success: true, token })

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

// --- API UNTUK LOGIN ---
const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await userModel.findOne({ email })

        if (!user) {
            return res.json({ success: false, message: "User tidak ditemukan" })
        }

        // Cek kecocokan password
        const isMatch = await bcrypt.compare(password, user.password)

        if (isMatch) {
            // Jika cocok, beri token
            const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '30m' })
            res.json({ success: true, token })
        } else {
            res.json({ success: false, message: "Password salah" })
        }

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

// --- API AMBIL DATA PROFIL USER ---
const getProfile = async (req, res) => {
    try {
        const { userId } = req.body 
        // userId ini didapat otomatis dari Middleware authUser tadi

        const userData = await userModel.findById(userId).select('-password') // Ambil data kecuali password

        res.json({ success: true, userData })

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

// --- API UPDATE PROFIL ---
const updateProfile = async (req, res) => {
    try {
        const { userId, name, phone, address, dob, gender } = req.body
        const imageFile = req.file // Jika nanti mau update foto

        if (!name || !phone) {
            return res.json({ success: false, message: "Data Nama dan Telepon wajib diisi" })
        }

        // Update data text dulu
        await userModel.findByIdAndUpdate(userId, { name, phone, address, dob, gender })

        // Logika upload foto (Nanti bisa kita tambahkan di sini jika perlu)
        // ...

        res.json({ success: true, message: "Profil Berhasil Diupdate" })

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

// Jangan lupa export updateProfile di paling bawah!
export { registerUser, loginUser, getProfile, updateProfile }

