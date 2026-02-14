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
    <footer className='bg-gray-900 text-white '>
      <div className='container mx-auto px-6 md:px-10 py-16'>
        
        <div className='flex flex-col lg:grid grid-cols-[2fr_1fr_1fr_1.5fr] gap-12 text-sm'>
          
          {/* --- KOLOM 1: BRANDING (Tetap Sama) --- */}
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

          {/* --- KOLOM 2: NAVIGASI UTAMA (Disesuaikan) --- */}
          <div>
            <h3 className='text-lg font-bold mb-6 text-blue-500 uppercase tracking-wider text-xs'>Navigasi</h3>
            <ul className='flex flex-col gap-4 text-gray-400'>
              {[
                { label: 'Beranda', path: '/' },
                { label: 'Tentang Kami', path: '/about' },
                { label: 'Berita Terkini', path: '/news' },
                { label: 'Unduhan Dokumen', path: '/downloads' },
                { label: 'Kontak & Bantuan', path: '/about' } // Bisa diarahkan ke halaman about atau kontak khusus
              ].map((item, index) => (
                <li 
                  key={index}
                  onClick={() => handleNavigation(item.path)} 
                  className='cursor-pointer hover:text-white hover:translate-x-2 transition-all duration-300 flex items-center gap-2 group'
                >
                  <span className='h-0.5 w-0 bg-blue-500 group-hover:w-3 transition-all'></span>
                  {item.label}
                </li>
              ))}
            </ul>
          </div>

          {/* --- KOLOM 3: LAYANAN POPULER (Disesuaikan) --- */}
          <div>
            <h3 className='text-lg font-bold mb-6 text-blue-500 uppercase tracking-wider text-xs'>Layanan Digital</h3>
            <ul className='flex flex-col gap-4 text-gray-400'>
              <li onClick={() => handleNavigation('/services')} className='hover:text-white cursor-pointer transition-colors flex items-center gap-2 group'>
                 <span className='w-1.5 h-1.5 bg-gray-600 rounded-full group-hover:bg-blue-500 transition-colors'></span>
                 Cek PBB-P2 Online
              </li>
              <li onClick={() => window.open('https://ebphtb.pasuruankab.go.id', '_blank')} className='hover:text-white cursor-pointer transition-colors flex items-center gap-2 group'>
                 <span className='w-1.5 h-1.5 bg-gray-600 rounded-full group-hover:bg-blue-500 transition-colors'></span>
                 E-BPHTB
              </li>
              <li onClick={() => window.open('https://sptpd.pasuruankab.go.id', '_blank')} className='hover:text-white cursor-pointer transition-colors flex items-center gap-2 group'>
                 <span className='w-1.5 h-1.5 bg-gray-600 rounded-full group-hover:bg-blue-500 transition-colors'></span>
                 Lapor Pajak (E-SPTPD)
              </li>
              <li onClick={() => handleNavigation('/services')} className='hover:text-white cursor-pointer transition-colors flex items-center gap-2 group'>
                 <span className='w-1.5 h-1.5 bg-gray-600 rounded-full group-hover:bg-blue-500 transition-colors'></span>
                 Pajak Reklame & Air Tanah
              </li>
              <li onClick={() => handleNavigation('/downloads')} className='hover:text-white cursor-pointer transition-colors flex items-center gap-2 group'>
                 <span className='w-1.5 h-1.5 bg-gray-600 rounded-full group-hover:bg-blue-500 transition-colors'></span>
                 Unduh Formulir Pajak
              </li>
            </ul>
          </div>

          {/* --- KOLOM 4: KONTAK RESMI (Tetap Sama) --- */}
          <div className='bg-gray-800/50 p-6 rounded-2xl border border-gray-700'>
            <h3 className='text-lg font-bold mb-6 text-white uppercase tracking-wider text-xs'>Kontak Resmi</h3>
            <ul className='flex flex-col gap-5 text-gray-400'>
              <li className='flex items-start gap-3'>
                <span className='text-blue-500 mt-1'>📍</span>
                <span className='text-sm leading-relaxed'>Jl. Panglima Sudirman No. 24, Pasuruan, Jawa Timur</span>
              </li>
              <li className='flex items-center gap-3'>
                <span className='text-blue-500'>📞</span>
                <span>(0343) 424242</span>
              </li>
              <li className='flex items-center gap-3'>
                <span className='text-blue-500'>📧</span>
                <a href="mailto:bapenda@pasuruankab.go.id" className='hover:text-white cursor-pointer transition-colors'>bapenda@pasuruankab.go.id</a>
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