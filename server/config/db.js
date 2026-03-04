import { Sequelize } from 'sequelize';
import 'dotenv/config';

// Inisialisasi Sequelize
const sequelize = new Sequelize(
  process.env.DB_NAME, 
  process.env.DB_USER, 
  process.env.DB_PASSWORD, 
  {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    logging: false, // Set true jika ingin melihat log SQL di terminal
  }
);

// Fungsi untuk cek koneksi
const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log('✅ MySQL Connected successfully...');
  } catch (err) {
    console.error('❌ Unable to connect to the database:', err);
  }
};

// Ekspor menggunakan ES Modules (Named Exports)
export { sequelize, connectDB };