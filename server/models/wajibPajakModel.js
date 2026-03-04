import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";

const WpModel = sequelize.define("wajib_pajak", {
    nik: { type: DataTypes.STRING, allowNull: false, unique: true },
    nama: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false, unique: true },
    password: { type: DataTypes.STRING, allowNull: false },
    image: { type: DataTypes.STRING, defaultValue: "" },
    alamat_ktp: { type: DataTypes.TEXT, allowNull: false },
    nohp: { type: DataTypes.STRING, defaultValue: "" },
    npwpd: { type: DataTypes.STRING, defaultValue: "" }
});

export default WpModel;