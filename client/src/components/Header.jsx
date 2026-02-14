import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import assets from '/src/assets/assets.png'; // Pastikan path ini benar

const Header = () => {
    const { headerContent } = useContext(AppContext)

    const title = headerContent?.headerTitle || "Sistem Pelayanan Pajak Daerah";
    const description = headerContent?.headerDesc || "Melayani masyarakat dengan sepenuh hati, transparan, dan akuntabel.";
    const mainImage = headerContent?.headerImage || assets.header_img;

    return (
        // 1. CONTAINER UTAMA
        // 'group': Diperlukan untuk efek hover pada gambar background
        // 'min-h': Agar header tinggi dan gagah
        // 'rounded-b-[3rem]': Membuat lengkungan bawah yang modern (opsional, bisa dihapus jika ingin kotak)
        <div className='relative w-full min-h-[500px] md:min-h-[600px] lg:min-h-[700px] overflow-hidden rounded-b-[3rem] shadow-xl group bg-gray-900'>

            {/* --- LAYER 1: GAMBAR BACKGROUND (Dengan Efek Zoom) --- */}
            <img 
                className='absolute inset-0 w-full h-full object-cover object-center transition-transform duration-[2000ms] ease-in-out group-hover:scale-110'
                src={mainImage} 
                alt="Header Background" 
            />

            {/* --- LAYER 2: OVERLAY GRADIENT --- */}
            {/* Gradient dari bawah ke atas agar teks putih terbaca jelas */}
            <div className='absolute inset-0 bg-gradient-to-t from-blue-900/90 via-blue-900/60 to-transparent'></div>

            {/* --- LAYER 3: KONTEN TEKS --- */}
            {/* pt-32: Jarak dari atas (agar tidak nabrak navbar)
                pb-48: Jarak dari bawah (SANGAT PENTING: memberi ruang untuk kartu QuickAccess)
            */}
            <div className='relative z-10 container mx-auto px-6 md:px-12 lg:px-20 h-full flex flex-col justify-center items-start pt-32 pb-32 md:pb-48 gap-6'>
                
                {/* Badge Kecil */}
                <span className='inline-block bg-white/20 backdrop-blur-md text-white px-4 py-1.5 rounded-full text-[10px] md:text-xs font-bold tracking-widest uppercase border border-white/30'>
                    Portal Resmi Pemerintah
                </span>

                {/* Judul Utama */}
                <h1 className='text-3xl md:text-5xl lg:text-7xl text-white font-extrabold leading-tight drop-shadow-lg max-w-4xl'>
                    {title}
                </h1>

                {/* Deskripsi */}
                <p className="max-w-xl text-white/90 text-sm md:text-lg font-light leading-relaxed drop-shadow-md mb-4">
                    {description}
                </p>

                {/* Tombol Aksi */}
                <a 
                    href="/services" 
                    className='group flex items-center gap-3 bg-white text-blue-900 px-8 py-3.5 rounded-full font-bold text-sm md:text-base hover:bg-blue-50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300'
                >
                    Jelajahi Layanan
                    {/* Ikon Panah */}
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                </a>
            </div>
        </div>
    )
}

export default Header