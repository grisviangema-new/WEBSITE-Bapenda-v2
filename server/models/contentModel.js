import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";

const ContentModel = sequelize.define("content", {
    headerTitle: { type: DataTypes.STRING, defaultValue: "Selamat Datang di Bapenda" },
    headerDesc: { type: DataTypes.TEXT, defaultValue: "Portal resmi pelayanan pajak daerah." },
    headerImage: { type: DataTypes.STRING, defaultValue: "" }
});

export default ContentModel;