import faqModel from "../models/faqModel.js";

// Tambah FAQ
const addFAQ = async (req, res) => {
    try {
        const { question, answer } = req.body;
        const newFAQ = new faqModel({ question, answer });
        await newFAQ.save();
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
        await faqModel.findByIdAndDelete(id);
        res.json({ success: true, message: "Pertanyaan dihapus" });
    } catch (error) {
        res.json({ success: false, message: error.message });
    }
}

// Ambil Semua FAQ (Public)
const getAllFAQs = async (req, res) => {
    try {
        const faqs = await faqModel.find({}).sort({ date: -1 });
        res.json({ success: true, faqs });
    } catch (error) {
        res.json({ success: false, message: error.message });
    }
}

export { addFAQ, deleteFAQ, getAllFAQs };