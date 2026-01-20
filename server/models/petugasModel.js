import mongoose from "mongoose";

const petugasSchema = new mongoose.Schema({
    nip: { type: String, required: true, unique: true }, // Nomor Induk Pegawai
    nama: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    image: { type: String, default: "" },
    jabatan: { type: String, required: true }, // Misal: Kolektor, Staff Penagihan
    wilayah_kerja: { type: String, required: true }, // Misal: "Kecamatan Bangil"
    tersedia: { type: Boolean, default: true } // Status aktif/cuti
});

const petugasModel = mongoose.models.petugas || mongoose.model("petugas", petugasSchema);
export default petugasModel;