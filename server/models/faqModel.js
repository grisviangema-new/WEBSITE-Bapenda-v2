import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";

const FaqModel = sequelize.define("faq", {
    question: { type: DataTypes.TEXT, allowNull: false },
    answer: { type: DataTypes.TEXT, allowNull: false },
    date: { type: DataTypes.BIGINT, defaultValue: () => Date.now() }
});

export default FaqModel;