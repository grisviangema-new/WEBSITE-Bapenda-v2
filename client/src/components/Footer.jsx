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
      <div className='container mx-auto px-6 md:px-10 py-10'>
        
        <div className='flex flex-col lg:grid grid-cols-[2fr_1fr_1fr_1.5fr] gap-12 text-sm'>
          
          {/* --- KOLOM 1: BRANDING (Tetap Sama) --- */}
          <div className='flex flex-col gap-5'>
            <div className='flex items-center gap-3 cursor-pointer' onClick={() => handleNavigation('/')}>
              <div className='w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-lg'>B</div>
              <h2 className='text-2xl font-bold tracking-tight'>BAPENDA<span className='text-blue-500'>.</span></h2>
            </div>
            <p className='text-gray-400 leading-relaxed max-w-sm'>
              Badan Pendapatan Daerah Kabupaten Pasuruan. Berkomitmen mewujudkan transparansi dan kemudahan layanan perpajakan bagi masyarakat.
            </p>
            {/* Social Media Icons */}
            <div className='flex gap-4 mt-2'>
              {/* Ikon Instagram */}
              <div 
                onClick={() => window.open('https://www.instagram.com/bapendakabpasuruan')} 
                className='w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-pink-600 transition-colors cursor-pointer'
                title="Instagram Bapenda"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </div>

              {/* Ikon TikTok */}
              <div 
                onClick={() => window.open('https://www.tiktok.com/@bapendakabpasuruan')} 
                className='w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-black transition-colors cursor-pointer'
                title="TikTok Bapenda"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.06-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.59-1.01V14.5c.01 2.32-.6 4.67-2.12 6.44-1.56 1.83-3.95 2.89-6.33 2.94-2.36.03-4.75-.85-6.36-2.58-1.74-1.88-2.45-4.63-1.83-7.11.53-2.13 2.05-4.04 4.07-4.8 1.48-.57 3.12-.66 4.65-.25v4.13c-.91-.35-1.97-.3-2.85.15-1.02.51-1.66 1.62-1.67 2.76.01 1.3.88 2.5 2.13 2.87.9.27 1.9.13 2.66-.41.87-.61 1.28-1.68 1.28-2.72V.02z"/>
                </svg>
              </div>
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
                { label: 'Unduhan Dokumen', path: '/downloads' }// Bisa diarahkan ke halaman about atau kontak khusus
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
                 Semua Layanan Pajak Daerah
              </li>
              <li onClick={() => window.open('https://patriot.pasuruankab.go.id/apps/bphtb/', '_blank')} className='hover:text-white cursor-pointer transition-colors flex items-center gap-2 group'>
                 <span className='w-1.5 h-1.5 bg-gray-600 rounded-full group-hover:bg-blue-500 transition-colors'></span>
                 E-BPHTB
              </li>
              <li onClick={() => window.open('https://patriot.pasuruankab.go.id/apps/esptpd/', '_blank')} className='hover:text-white cursor-pointer transition-colors flex items-center gap-2 group'>
                 <span className='w-1.5 h-1.5 bg-gray-600 rounded-full group-hover:bg-blue-500 transition-colors'></span>
                 Lapor Pajak (E-SPTPD)
              </li>
              <li onClick={() => window.open('https://patriot.pasuruankab.go.id/apps/cek-bayar/ceknopbayar-pasuruan.kab?module=pbb')} className='hover:text-white cursor-pointer transition-colors flex items-center gap-2 group'>
                 <span className='w-1.5 h-1.5 bg-gray-600 rounded-full group-hover:bg-blue-500 transition-colors'></span>
                 E-SPPT dan Cek Pembayaran PBB
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
