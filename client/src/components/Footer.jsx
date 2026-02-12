import React from 'react'
import { useNavigate } from 'react-router-dom'

const Footer = () => {
  const navigate = useNavigate();

  // Helper untuk scroll ke atas setiap pindah halaman
  const handleNavigation = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className='bg-gray-900 text-white mt-20'>
      <div className='container mx-auto px-6 md:px-10 py-16'>
        
        <div className='flex flex-col lg:grid grid-cols-[2fr_1fr_1fr_1.5fr] gap-12 text-sm'>
          
          {/* --- KOLOM 1: BRANDING --- */}
          <div className='flex flex-col gap-5'>
            <div className='flex items-center gap-3 cursor-pointer' onClick={() => handleNavigation('/')}>
              <div className='w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-lg'>B</div>
              <h2 className='text-2xl font-bold tracking-tight'>BAPENDA<span className='text-blue-500'>.</span></h2>
            </div>
            <p className='text-gray-400 leading-relaxed max-w-sm'>
              Badan Pengelola Keuangan dan Pendapatan Daerah Kabupaten Pasuruan. Berkomitmen mewujudkan transparansi dan kemudahan layanan perpajakan bagi masyarakat.
            </p>
            {/* Social Media Icons */}
            <div className='flex gap-4 mt-2'>
              <div className='w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer'>🌐</div>
              <div className='w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer'>📸</div>
              <div className='w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer'>🐦</div>
            </div>
          </div>

          {/* --- KOLOM 2: QUICK LINKS --- */}
          <div>
            <h3 className='text-lg font-bold mb-6 text-blue-500 uppercase tracking-wider text-xs'>Navigasi</h3>
            <ul className='flex flex-col gap-4 text-gray-400'>
              {['Beranda', 'Layanan', 'Tentang Kami', 'Berita'].map((item) => (
                <li 
                  key={item}
                  onClick={() => handleNavigation(item === 'Beranda' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`)} 
                  className='cursor-pointer hover:text-white hover:translate-x-2 transition-all duration-300 flex items-center gap-2 group'
                >
                  <span className='h-0.5 w-0 bg-blue-500 group-hover:w-3 transition-all'></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* --- KOLOM 3: LAYANAN --- */}
          <div>
            <h3 className='text-lg font-bold mb-6 text-blue-500 uppercase tracking-wider text-xs'>Layanan</h3>
            <ul className='flex flex-col gap-4 text-gray-400'>
              <li className='hover:text-white cursor-pointer transition-colors'>Cek PBB-P2</li>
              <li className='hover:text-white cursor-pointer transition-colors'>E-BPHTB</li>
              <li className='hover:text-white cursor-pointer transition-colors'>Pajak Daerah Lainnya</li>
              <li className='hover:text-white cursor-pointer transition-colors'>Unduhan Form</li>
            </ul>
          </div>

          {/* --- KOLOM 4: HUBUNGI KAMI --- */}
          <div className='bg-gray-800/50 p-6 rounded-2xl border border-gray-700'>
            <h3 className='text-lg font-bold mb-6 text-white uppercase tracking-wider text-xs'>Kontak Resmi</h3>
            <ul className='flex flex-col gap-5 text-gray-400'>
              <li className='flex items-start gap-3'>
                <span className='text-blue-500'>📍</span>
                <span>Jl. Panglima Sudirman No. 24, Pasuruan, Jawa Timur</span>
              </li>
              <li className='flex items-center gap-3'>
                <span className='text-blue-500'>📞</span>
                <span>(0343) 424242</span>
              </li>
              <li className='flex items-center gap-3'>
                <span className='text-blue-500'>📧</span>
                <span className='hover:text-white cursor-pointer'>bapenda@pasuruankab.go.id</span>
              </li>
              <li className='flex items-center gap-3'>
                <span className='text-blue-500'>⏰</span>
                <span>Senin - Jumat | 08.00 - 15.00</span>
              </li>
            </ul>
          </div>

        </div>

        {/* --- COPYRIGHT SECTION --- */}
        <div className='mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500'>
          <p className='text-xs text-center md:text-left'>
            Copyright © 2026 <span className='text-gray-300 font-medium'>Bapenda Kabupaten Pasuruan</span>. All Rights Reserved.
          </p>
          <div className='flex gap-6 text-xs'>
            <span className='hover:text-white cursor-pointer transition-colors'>Kebijakan Privasi</span>
            <span className='hover:text-white cursor-pointer transition-colors'>Syarat & Ketentuan</span>
          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer