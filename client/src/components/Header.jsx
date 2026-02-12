import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import assets from '/src/assets/assets.png'; 

const Header = () => {
    const { headerContent } = useContext(AppContext)

    const title = headerContent?.headerTitle || "Sistem Pelayanan Pajak Daerah";
    const description = headerContent?.headerDesc || "Melayani masyarakat dengan sepenuh hati, transparan, dan akuntabel.";
    const mainImage = headerContent?.headerImage || assets.header_img;

    return (
        // --- PERUBAHAN UKURAN ---
        // Kita gunakan aspect-video (16:9) untuk mobile dan max-height tertentu untuk desktop
        // agar tidak memakan seluruh layar tetapi tetap terasa luas (landscape).
        <div className='relative w-full h-[400px] md:h-[500px] lg:h-[550px] overflow-hidden rounded-2xl shadow-lg'>

            {/* --- LAYER 1: GAMBAR BACKGROUND --- */}
            <img 
                className='absolute inset-0 w-full h-full object-cover object-center'
                src={mainImage} 
                alt="Header Background" 
            />

            {/* --- LAYER 2: OVERLAY GELAP --- */}
            {/* Sedikit penyesuaian opasitas agar detail foto landscape di sisi kanan tetap terlihat sedikit */}
            <div className='absolute inset-0 bg-gradient-to-r from-blue-900/80 via-blue-800/40 to-transparent'></div>

            {/* --- LAYER 3: KONTEN TEKS --- */}
            <div className='relative z-10 h-full flex flex-col justify-center items-start px-8 md:px-16'>
                
                {/* Judul: Ukuran sedikit disesuaikan agar proporsional dengan tinggi container baru */}
                <h1 className='text-3xl md:text-5xl lg:text-6xl text-white font-bold leading-tight drop-shadow-lg max-w-2xl'>
                    {title}
                </h1>

                {/* Deskripsi */}
                <div className='flex flex-col sm:flex-row items-center gap-4 text-white text-sm md:text-base font-light opacity-95'>
                    <p className="max-w-md leading-relaxed drop-shadow-md">
                        {description}
                    </p>
                </div>

                {/* Tombol Aksi */}
                <a href="/services" className='group flex items-center gap-3 bg-white text-blue-800 px-6 py-3 md:px-8 md:py-4 rounded-full font-bold text-sm md:text-base hover:bg-blue-50 transition-all duration-300 mt-2 shadow-xl'>
                    Cek Layanan
                    <img className='w-4 group-hover:translate-x-1 transition-transform' src={assets.arrow_icon} alt="" />
                </a>
            </div>
        </div>
    )
}

export default Header