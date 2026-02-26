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
              Badan Pendapatan Daerah Kabupaten Pasuruan. Berkomitmen mewujudkan transparansi dan kemudahan layanan perpajakan bagi masyarakat.
            </p>
            {/* Social Media Icons */}
            <div className='flex gap-4 mt-2'>
              {/* Ikon Telegram */}
              <div onClick={() => window.open('https://www.instagram.com/bapendakabpasuruan')} className='w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer' >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm5.891 7c.147 0 .268.024.363.072.095.048.15.111.164.189.014.078.01.171-.013.28-.023.11-.062.228-.117.355l-2.358 11.106c-.055.258-.163.456-.324.593-.16.138-.352.207-.574.207-.133 0-.256-.024-.369-.072-.113-.048-.214-.12-.303-.217l-3.344-2.523-1.637 1.582c-.131.127-.272.19-.422.19-.089 0-.17-.015-.244-.045s-.136-.073-.186-.13-.086-.123-.108-.2s-.033-.161-.033-.251l.015-3.045-5.541-6.52c-.113-.133-.165-.286-.156-.458.009-.172.072-.315.188-.429.116-.114.262-.171.439-.171.055 0 .114.006.178.018l14.156 5.32c.113.043.208.08.285.111z"/>
                </svg>
              </div>
              
              {/* Ikon TikTok */}
              <div onClick={() => window.open('https://www.tiktok.com/@bapendakabpasuruan')} className='w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-black transition-colors cursor-pointer'>
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
