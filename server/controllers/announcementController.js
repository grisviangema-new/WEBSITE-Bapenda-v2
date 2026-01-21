import announcementModel from "../models/announcementModel.js";

// 1. Tambah Pengumuman (Admin)
const addAnnouncement = async (req, res) => {
    try {
        const { title, desc, image, color, link } = req.body;
        const newAnnouncement = new announcementModel({ title, desc, image, color, link });
        await newAnnouncement.save();
        res.json({ success: true, message: "Pengumuman Berhasil Ditambahkan" });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}

// 2. Hapus Pengumuman (Admin)
const deleteAnnouncement = async (req, res) => {
    try {
        const { id } = req.body;
        await announcementModel.findByIdAndDelete(id);
        res.json({ success: true, message: "Pengumuman Dihapus" });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}

// 3. Ambil Semua Pengumuman (Publik)
const getAllAnnouncements = async (req, res) => {
    try {
        const announcements = await announcementModel.find({});
        res.json({ success: true, announcements });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}

export { addAnnouncement, deleteAnnouncement, getAllAnnouncements };