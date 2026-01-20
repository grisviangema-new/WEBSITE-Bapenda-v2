import React from 'react'

const Header = () => {
    return (
        <div className='flex flex-col md:flex-row flex-wrap bg-blue-600 rounded-lg px-6 md:px-10 lg:px-20'>
            {/* Sisi Kiri (Teks) */}
            <div className='md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px]'>
                <p className='text-3xl md:text-4xl lg:text-5xl text-white font-bold leading-tight'>
                    Bayar PBB Kini <br /> Lebih Mudah & Transparan
                </p>
                <div className='flex flex-col md:flex-row items-center gap-3 text-white text-sm font-light'>
                    <p>Sistem Informasi Pajak Daerah Kabupaten Pasuruan.<br className='hidden sm:block'/> Melayani dengan integritas dan profesionalitas.</p>
                </div>
                <a href="#officers" className='flex items-center gap-2 bg-white px-8 py-3 rounded-full text-gray-600 text-sm m-auto md:m-0 hover:scale-105 transition-all duration-300'>
                    Lihat Petugas Resmi
                </a>
            </div>

            {/* Sisi Kanan (Ilustrasi Kosong dulu/Placeholder) */}
            <div className='md:w-1/2 relative'>
                {/* Nanti bisa dikasih gambar ilustrasi pajak/gedung bapenda */}
            </div>
        </div>
    )
}

export default Header