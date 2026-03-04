import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js"; // <--- Tambahkan kurung kurawal di sini

const PetugasModel = sequelize.define("petugas", {
    nip: { type: DataTypes.STRING, allowNull: false, unique: true },
    nama: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false, unique: true },
    password: { type: DataTypes.STRING, allowNull: false },
    image: { type: DataTypes.STRING, defaultValue: "" },
    jabatan: { type: DataTypes.STRING, allowNull: false },
    wilayah_kerja: { type: DataTypes.STRING, allowNull: false },
    tersedia: { type: DataTypes.BOOLEAN, defaultValue: true }
});

export default PetugasModel;