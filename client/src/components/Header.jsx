import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import assets from '../assets/assets.png'; // Pastikan import assets berupa objek jika menggunakan fallback

const Header = () => {
    // Ambil backendUrl untuk resolusi gambar dari server
    const { headerContent, backendUrl } = useContext(AppContext)

    const title = headerContent?.headerTitle || "Sistem Pelayanan Pajak Daerah";
    const description = headerContent?.headerDesc || "Melayani masyarakat dengan sepenuh hati, transparan, dan akuntabel.";
    
    // LOGIKA GAMBAR:
    // Jika ada headerImage dari DB, gabungkan dengan backendUrl. 
    // Jika tidak ada, gunakan gambar default dari assets lokal.
    const mainImage = headerContent?.headerImage 
        ? `${backendUrl}/uploads/images/${headerContent.headerImage}` 
        : assets.header_img;

    return (
        <div className='relative w-full min-h-[500px] md:min-h-[600px] lg:min-h-[750px] overflow-hidden rounded-b-[3rem] lg:rounded-b-[5rem] shadow-2xl group bg-gray-900'>

            {/* --- LAYER 1: GAMBAR BACKGROUND --- */}
            <img 
                className='absolute inset-0 w-full h-full object-cover object-center transition-transform duration-[3000ms] ease-out group-hover:scale-110 opacity-70'
                src={mainImage} 
                alt="Bapenda Header" 
                // Fallback jika gambar di server gagal dimuat
                onError={(e) => { e.target.src = assets.header_img }}
            />

            {/* --- LAYER 2: OVERLAY GRADIENT (DIPERTAJAM) --- */}
            {/* Menggunakan to-b (bottom) dan to-r (right) untuk kesan sinematik */}
            <div className='absolute inset-0 bg-gradient-to-tr from-blue-950 via-blue-900/40 to-transparent opacity-90'></div>

            {/* --- LAYER 3: KONTEN TEKS --- */}
            <div className='relative z-10 container mx-auto px-6 md:px-12 lg:px-24 h-full flex flex-col justify-center items-start pt-40 pb-32 md:pb-56 gap-6'>
                
                {/* Badge Animasi */}
                <div className='animate-fade-in-down'>
                    <span className='inline-flex items-center gap-2 bg-blue-600/30 backdrop-blur-xl text-white px-4 py-2 rounded-full text-[10px] md:text-xs font-bold tracking-widest uppercase border border-white/20 shadow-xl'>
                        <span className='w-2 h-2 bg-green-400 rounded-full animate-pulse'></span>
                        Portal Resmi Bapenda Pasuruan
                    </span>
                </div>

                {/* Judul Utama dengan Animasi Slide Up */}
                <h1 className='text-4xl md:text-5xl lg:text-6xl text-white font-black leading-[1.1] drop-shadow-2xl max-w-5xl animate-slide-up'>
                    {title.split(' ').map((word, i) => (
                        <span key={i} className={i % 2 === 1 ? 'text-blue-300' : 'text-white'}>
                            {word}{' '}
                        </span>
                    ))}
                </h1>

                {/* Deskripsi dengan Font yang Lebih Elegan */}
                <p className="max-w-2xl text-blue-50/80 text-base md:text-xl font-medium leading-relaxed drop-shadow-lg mb-6 animate-fade-in opacity-90">
                    {description}
                </p>

                {/* Tombol Aksi yang Lebih Modern */}
                <div className='flex flex-wrap gap-4 animate-slide-up-delayed'>
                    <a 
                        href="/services" 
                        className='group flex items-center gap-3 bg-white text-blue-900 px-10 py-4 rounded-2xl font-black text-sm md:text-base hover:bg-blue-600 hover:text-white hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] hover:-translate-y-2 transition-all duration-500'
                    >
                        Jelajahi seluruh layanan
                        <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                        </svg>
                    </a>
                </div>
            </div>

            {/* Dekorasi Elemen Grafis (Opsional) */}
            <div className='absolute bottom-10 right-10 z-10 hidden lg:block opacity-20'>
                <svg className='w-64 h-64 text-white' fill="currentColor" viewBox="0 0 200 200">
                    <path d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.6,90,-16.3,88.5,-0.9C86.9,14.5,81.2,29,72.4,41.4C63.5,53.8,51.5,64.1,37.7,71.5C23.9,78.9,8.3,83.4,-7.1,81.3C-22.5,79.2,-37.8,70.5,-50.7,59.3C-63.5,48,-74,34.2,-79.8,18.5C-85.6,2.8,-86.7,-14.8,-81.4,-30.3C-76.1,-45.8,-64.4,-59.2,-50.5,-66.5C-36.6,-73.8,-20.4,-75,-2.1,-71.4C16.3,-67.7,30.6,-83.6,44.7,-76.4Z" transform="translate(100 100)" />
                </svg>
            </div>
        </div>
    )
}

export default Header