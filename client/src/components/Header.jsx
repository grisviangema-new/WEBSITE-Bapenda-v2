import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import assets from '/src/assets/assets.png'; // Pastikan path sesuai

const Header = () => {
    const { headerContent } = useContext(AppContext)

    // Helper variables
    const title = headerContent?.headerTitle || "Sistem Pelayanan Pajak Daerah";
    const description = headerContent?.headerDesc || "Melayani masyarakat dengan sepenuh hati, transparan, dan akuntabel.";
    const mainImage = headerContent?.headerImage || assets.header_img;

    return (
        // CONTAINER UTAMA
        // 'relative' = agar elemen di dalamnya (gambar & teks) bisa ditumpuk
        // 'h-[500px] md:h-[600px]' = Mengatur tinggi header agar luas
        <div className='relative w-full h-[500px] md:h-[650px] overflow-hidden rounded-b-3xl shadow-lg'>

            {/* --- LAYER 1: GAMBAR BACKGROUND --- */}
            {/* 'absolute inset-0' = Memaksa gambar memenuhi seluruh container induk */}
            {/* 'object-cover' = Memastikan gambar tidak gepeng (tetap proporsional) meski layar di-resize */}
            <img 
                className='absolute inset-0 w-full h-full object-cover'
                src={mainImage} 
                alt="Header Background" 
            />

            {/* --- LAYER 2: OVERLAY GELAP (PENTING) --- */}
            {/* Lapisan hitam transparan agar teks putih di atasnya tetap terbaca jelas */}
            {/* Menggunakan gradient dari kiri (gelap) ke kanan (terang) */}
            <div className='absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-800/60 to-transparent'></div>

            {/* --- LAYER 3: KONTEN TEKS --- */}
            {/* 'relative z-10' = Agar teks muncul DI ATAS gambar dan overlay */}
            <div className='relative z-10 container mx-auto px-6 md:px-12 lg:px-20 h-full flex flex-col justify-center items-start gap-6'>
                
                {/* Judul */}
                <h1 className='text-4xl md:text-5xl lg:text-7xl text-white font-bold leading-tight drop-shadow-lg max-w-3xl'>
                    {title}
                </h1>

                {/* Deskripsi & Profile Group */}
                <div className='flex flex-col sm:flex-row items-center gap-4 text-white text-sm md:text-lg font-light opacity-95'>
                    <p className="max-w-lg leading-relaxed drop-shadow-md">
                        {description}
                    </p>
                </div>

                {/* Tombol Aksi */}
                <a href="#speciality" className='group flex items-center gap-3 bg-white text-blue-800 px-8 py-4 rounded-full font-bold text-sm md:text-base hover:bg-blue-50 transition-all duration-300 mt-4 shadow-xl'>
                    Layanan Kami 
                    <img className='w-4 group-hover:translate-x-1 transition-transform' src={assets.arrow_icon} alt="" />
                </a>
            </div>
        </div>
    )
}

export default Header