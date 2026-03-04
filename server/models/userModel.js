import { DataTypes } from 'sequelize';
import { sequelize } from '../config/db.js';

const userModel = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true, // Email tidak boleh kembar
        validate: {
            isEmail: true
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    image: {
        type: DataTypes.STRING,
        defaultValue: "" // Akan menyimpan nama file foto profil
    },
    address: {
        type: DataTypes.STRING,
        defaultValue: ""
    },
    gender: {
        type: DataTypes.STRING,
        defaultValue: "Not Selected"
    },
    dob: {
        type: DataTypes.STRING,
        defaultValue: "Not Selected"
    },
    phone: {
        type: DataTypes.STRING,
        defaultValue: "0000000000"
    }
}, {
    timestamps: true // Otomatis membuat createdAt dan updatedAt
});

export default userModel;