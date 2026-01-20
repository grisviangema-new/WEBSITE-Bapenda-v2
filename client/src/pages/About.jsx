import React from 'react'

const About = () => {
  return (
    <div className='pt-10 mb-20'>
        <div className='text-center mb-10'>
            <h1 className='text-3xl font-bold text-gray-800'>Tentang Bapenda</h1>
            <p className='text-gray-500 mt-2'>Badan Pengelola Keuangan dan Pendapatan Daerah</p>
        </div>

        <div className='flex flex-col md:flex-row gap-10 bg-blue-50 p-10 rounded-xl'>
            <div className='flex-1'>
                <h2 className='text-xl font-bold text-blue-700 mb-3'>Visi Kami</h2>
                <p className='text-gray-600 leading-relaxed'>
                    "Terwujudnya pengelolaan pendapatan daerah yang transparan, akuntabel, dan optimal guna mendukung pembangunan Kabupaten Pasuruan yang sejahtera."
                </p>
            </div>
            <div className='flex-1'>
                <h2 className='text-xl font-bold text-blue-700 mb-3'>Misi Kami</h2>
                <ul className='list-disc list-inside text-gray-600 leading-relaxed'>
                    <li>Meningkatkan kualitas pelayanan pajak daerah berbasis teknologi.</li>
                    <li>Mengoptimalkan potensi pendapatan asli daerah.</li>
                    <li>Meningkatkan kesadaran dan kepatuhan wajib pajak.</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default About