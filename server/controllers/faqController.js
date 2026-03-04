import faqModel from "../models/faqModel.js";

// Tambah FAQ
const addFAQ = async (req, res) => {
    try {
        const { question, answer } = req.body;

        if (!question || !answer) {
            return res.json({ success: false, message: "Pertanyaan dan Jawaban wajib diisi" });
        }

        // Sequelize: create
        await faqModel.create({ question, answer });

        res.json({ success: true, message: "Pertanyaan berhasil ditambahkan" });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}

// Hapus FAQ
const deleteFAQ = async (req, res) => {
    try {
        const { id } = req.body;

        // Sequelize: destroy dengan where clause
        const deleted = await faqModel.destroy({ where: { id } });

        if (!deleted) {
            return res.json({ success: false, message: "FAQ tidak ditemukan" });
        }

        res.json({ success: true, message: "Pertanyaan dihapus" });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}

// Ambil Semua FAQ (Public)
const getAllFAQs = async (req, res) => {
    try {
        // Sequelize: findAll dengan pengurutan (descending berdasarkan createdAt)
        const faqs = await faqModel.findAll({
            order: [['createdAt', 'DESC']]
        });
        res.json({ success: true, faqs });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}

export { addFAQ, deleteFAQ, getAllFAQs };