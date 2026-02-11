import jwt from 'jsonwebtoken'

// Middleware untuk otentikasi Admin
const authAdmin = async (req, res, next) => {
    try {
        // Ambil token dari header dengan nama 'atoken'
        const { atoken } = req.headers

        if (!atoken) {
            return res.json({ success: false, message: "Tidak ada otorisasi. Silakan Login Kembali." })
        }

        // Verifikasi Token
        // Jika token expired, baris ini akan melempar error ke blok catch
        const token_decode = jwt.verify(atoken, process.env.JWT_SECRET)

        // Cek apakah email di token sesuai dengan email admin
        if (token_decode.email !== process.env.ADMIN_EMAIL) {
            return res.json({ success: false, message: "Token Tidak Valid" })
        }

        // Jika aman, lanjut ke fungsi berikutnya (getAllPetugas, dll)
        next()

    } catch (error) {
        console.log(error)
        // PENTING: Ini akan mengirim pesan error seperti "jwt expired" ke Frontend
        res.json({ success: false, message: error.message })
    }
}

export default authAdmin