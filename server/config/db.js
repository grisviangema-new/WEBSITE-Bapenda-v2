import mysql from 'mysql2/promise';
import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

// Meniru __dirname yang ada di CommonJS
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Arahkan ke file .env di root (naik 2 folder: ../../)
dotenv.config({ path: path.resolve(__dirname, '../../.env') });

const { DB_HOST, DB_USER, DB_PASSWORD, DB_NAME } = process.env;

async function initialize() {
    // 1. Koneksi ke MySQL tanpa menentukan database terlebih dahulu
    const connection = await mysql.createConnection({ 
        host: DB_HOST, 
        user: DB_USER, 
        password: DB_PASSWORD 
    });

    // 2. Buat database jika belum ada
    await connection.query(`CREATE DATABASE IF NOT EXISTS \`${DB_NAME}\`;`);
    console.log(`Database "${DB_NAME}" siap.`);
    
    await connection.end();

    // 3. Sekarang baru inisialisasi Sequelize
    const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
        host: DB_HOST,
        dialect: 'mysql',
        logging: false // agar konsol tidak penuh dengan log SQL
    });

    return sequelize;
}

const sequelize = await initialize();

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