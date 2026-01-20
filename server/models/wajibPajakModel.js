import mongoose from "mongoose";

const wpSchema = new mongoose.Schema({
    nik: { type: String, required: true, unique: true }, // NIK KTP
    nama: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    image: { type: String, default: "" }, 
    alamat_ktp: { type: String, required: true },
    nohp: { type: String, default: "" },
    npwpd: { type: String, default: "" } // Nomor Pokok Wajib Pajak Daerah (Opsional)
});

const wpModel = mongoose.models.wajib_pajak || mongoose.model("wajib_pajak", wpSchema);
export default wpModel;