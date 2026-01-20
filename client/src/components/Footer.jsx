import React from 'react'

const Footer = () => {
  return (
    <div className='md:mx-10'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        {/* Kolom Kiri */}
        <div>
            <div className='flex items-center gap-2 mb-5'>
                <div className='w-8 h-8 bg-blue-600 rounded flex items-center justify-center text-white font-bold'>B</div>
                <p className='text-xl font-bold text-blue-900'>BAPENDA</p>
            </div>
            <p className='w-full md:w-2/3 text-gray-600 leading-6'>
                Jalan Panglima Sudirman No. 123, Pasuruan, Jawa Timur.<br />
                Melayani dengan Sepenuh Hati, Transparan, dan Akuntabel.
            </p>
        </div>

        {/* Kolom Tengah */}
        <div>
            <p className='text-xl font-medium mb-5'>LINK TERKAIT</p>
            <ul className='flex flex-col gap-2 text-gray-600'>
                <li>Pemkab Pasuruan</li>
                <li>DJP Online</li>
                <li>Layanan Pengaduan</li>
            </ul>
        </div>

        {/* Kolom Kanan */}
        <div>
            <p className='text-xl font-medium mb-5'>KONTAK</p>
            <ul className='flex flex-col gap-2 text-gray-600'>
                <li>+62 343 123456</li>
                <li>bapenda@pasuruankab.go.id</li>
            </ul>
        </div>
      </div>

      {/* Copyright */}
      <div>
        <hr />
        <p className='py-5 text-sm text-center'>Copyright 2026 @ Bapenda Pasuruan - All Right Reserved.</p>
      </div>
    </div>
  )
}

export default Footer