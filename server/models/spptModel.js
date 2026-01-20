import mongoose from "mongoose";

const spptSchema = new mongoose.Schema({
    nop: { type: String, required: true, unique: true }, // Nomor Objek Pajak (PENTING)
    tahun_pajak: { type: Number, required: true }, // 2025, 2026
    nama_subjek_pajak: { type: String, required: true }, // Nama di SPPT
    alamat_objek_pajak: { type: String, required: true }, // Lokasi Tanah/Bangunan
    kecamatan: { type: String, required: true },
    desa_kelurahan: { type: String, required: true },
    
    // Data Pembayaran
    pbb_terhutang: { type: Number, required: true }, // Nominal tagihan
    denda: { type: Number, default: 0 },
    status_bayar: { type: String, default: "BELUM LUNAS" }, // LUNAS / BELUM LUNAS
    tanggal_bayar: { type: Date },
    
    // Relasi (Siapa yang bayar/memiliki)
    id_wajib_pajak: { type: String }, // Bisa kosong jika belum diklaim user aplikasi
    bukti_bayar_url: { type: String } // Upload struk jika bayar manual
});

const spptModel = mongoose.models.sppt || mongoose.model("sppt", spptSchema);
export default spptModel;