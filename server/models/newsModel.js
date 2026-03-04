import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";

const newsModel = sequelize.define("news", {
    title: { type: DataTypes.STRING, allowNull: false },
    category: { type: DataTypes.STRING, allowNull: false },
    // PERBAIKAN: Gunakan TEXT agar bisa menampung ribuan karakter HTML
    content: { type: DataTypes.TEXT, allowNull: false }, 
    image: { type: DataTypes.STRING, allowNull: false },
    date: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
});

export default newsModel;