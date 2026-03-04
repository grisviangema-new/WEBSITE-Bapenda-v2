import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";

const AnnouncementModel = sequelize.define("announcement", {
    title: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.TEXT, allowNull: false }, // 'desc' diubah agar tidak bentrok dengan keyword SQL
    image: { type: DataTypes.STRING, allowNull: false },
    link: { type: DataTypes.STRING, defaultValue: '#' },
    date: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
});
 
export default AnnouncementModel;