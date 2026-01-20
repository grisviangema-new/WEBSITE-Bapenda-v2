import jwt from 'jsonwebtoken'

// Middleware untuk memvalidasi Token User
const authUser = async (req, res, next) => {
    try {
        // Ambil token dari header request
        const { token } = req.headers

        if (!token) {
            return res.json({ success: false, message: 'Tidak ada otorisasi, silakan login ulang.' })
        }

        // Pecahkan (Decode) token untuk melihat ID User di dalamnya
        const token_decode = jwt.verify(token, process.env.JWT_SECRET)
        
        // --- TAMBAHAN PENTING (FIX) ---
        // Cek dulu: Kalau req.body tidak ada (karena ini GET request), kita buatkan wadah kosongnya.
        if (!req.body) {
            req.body = {}
        }
        // ------------------------------

        // Simpan ID user ke dalam body request agar bisa dipakai Controller
        req.body.userId = token_decode.id
        
        next() // Lanjut ke fungsi berikutnya (Controller)

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

export default authUser