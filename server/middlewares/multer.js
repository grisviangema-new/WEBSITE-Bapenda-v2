import multer from 'multer';
import path from 'path';
import fs from 'fs';

// Konfigurasi penyimpanan
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    let folder = 'uploads/';
    
    // Pisahkan folder berdasarkan tipe file
    if (file.mimetype === 'application/pdf') {
      folder += 'documents/';
    } else {
      folder += 'images/';
    }

    // Buat folder jika belum ada
    if (!fs.existsSync(folder)) {
      fs.mkdirSync(folder, { recursive: true });
    }
    
    cb(null, folder);
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  }
});

// Filter file (Gambar & PDF)
const fileFilter = (req, file, cb) => {
  const allowedTypes = [
    'image/jpeg', 'image/jpg', 'image/png', // Gambar
    'application/pdf'                        // PDF (Formulir/SOP)
  ];

  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error('Hanya mendukung format Gambar (JPG/PNG) dan PDF.'), false);
  }
};

const upload = multer({ 
  storage: storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // Naikkan limit ke 5MB jika perlu
  fileFilter: fileFilter
});

export default upload;