import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";

const DownloadModel = sequelize.define("download", {
    title: { type: DataTypes.STRING, allowNull: false },
    category: { type: DataTypes.STRING, allowNull: false },
    file: { type: DataTypes.STRING, allowNull: false },
    // PERBAIKAN: Gunakan DATE dengan defaultValue agar otomatis ditangani Sequelize
    date: { 
        type: DataTypes.DATE, 
        defaultValue: DataTypes.NOW 
    }
}, {
    freezeTableName: true // Menjaga nama tabel tetap 'download'
});

export default DownloadModel;