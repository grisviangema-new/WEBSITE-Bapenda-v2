import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";

const SpptModel = sequelize.define("sppt", {
    nop: { type: DataTypes.STRING, allowNull: false, unique: true },
    tahun_pajak: { type: DataTypes.INTEGER, allowNull: false },
    nama_subjek_pajak: { type: DataTypes.STRING, allowNull: false },
    alamat_objek_pajak: { type: DataTypes.TEXT, allowNull: false },
    kecamatan: { type: DataTypes.STRING, allowNull: false },
    desa_kelurahan: { type: DataTypes.STRING, allowNull: false },
    pbb_terhutang: { type: DataTypes.BIGINT, allowNull: false },
    denda: { type: DataTypes.BIGINT, defaultValue: 0 },
    status_bayar: { type: DataTypes.STRING, defaultValue: "BELUM LUNAS" },
    tanggal_bayar: { type: DataTypes.DATE },
    id_wajib_pajak: { type: DataTypes.STRING }, 
    bukti_bayar_url: { type: DataTypes.STRING }
});

export default SpptModel;