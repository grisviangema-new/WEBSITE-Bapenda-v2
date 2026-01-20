import React from 'react'
import { useNavigate } from 'react-router-dom'

const Footer = () => {
  const navigate = useNavigate();

  return (
    <div className='md:mx-10 mt-20'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 text-sm'>
        
        {/* Kolom Kiri */}
        <div>
            <div className='flex items-center gap-2 mb-5'>
                <div className='w-8 h-8 bg-blue-600 rounded flex items-center justify-center text-white font-bold'>B</div>
                <p className='text-xl font-bold text-blue-900'>BAPENDA</p>
            </div>
            <p className='w-full md:w-2/3 text-gray-600 leading-6'>
                Badan Pengelola Keuangan dan Pendapatan Daerah Kabupaten Pasuruan.<br />
                Mewujudkan kemandirian daerah melalui optimalisasi pendapatan yang transparan dan akuntabel.
            </p>
        </div>

        {/* Kolom Tengah */}
        <div>
            <p className='text-xl font-medium mb-5'>NAVIGASI</p>
            <ul className='flex flex-col gap-2 text-gray-600'>
                <li onClick={()=>navigate('/')} className='cursor-pointer hover:text-blue-600'>Beranda</li>
                <li onClick={()=>navigate('/services')} className='cursor-pointer hover:text-blue-600'>Layanan</li>
                <li onClick={()=>navigate('/about')} className='cursor-pointer hover:text-blue-600'>Tentang Kami</li>
                <li onClick={()=>navigate('/news')} className='cursor-pointer hover:text-blue-600'>Berita</li>
            </ul>
        </div>

        {/* Kolom Kanan */}
        <div>
            <p className='text-xl font-medium mb-5'>KONTAK KAMI</p>
            <ul className='flex flex-col gap-2 text-gray-600'>
                <li>📍 Jl. Panglima Sudirman No. 24</li>
                <li>📞 (0343) 424242</li>
                <li>📧 bapenda@pasuruankab.go.id</li>
                <li>⏰ Senin - Jumat (08.00 - 15.00)</li>
            </ul>
        </div>
      </div>

      {/* Copyright */}
      <div>
        <hr className='border-gray-300'/>
        <p className='py-5 text-sm text-center text-gray-500'>Copyright © 2026 Bapenda Pasuruan - All Right Reserved.</p>
      </div>
    </div>
  )
}

export default Footer