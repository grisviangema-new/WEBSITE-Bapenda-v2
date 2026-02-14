import React from 'react'
import assets from '../assets/assets.png' // Pastikan import assets jika punya gambar gedung/kantor

const About = () => {

  const statistics = [
    { number: '15+', label: 'Tahun Melayani' },
    { number: '200rb+', label: 'Wajib Pajak Terdaftar' },
    { number: '99%', label: 'Kepuasan Layanan' },
    { number: '24/7', label: 'Akses Digital' },
  ];

  return (
    <div className='pt-24 pb-20 bg-white'>
      
      {/* --- SECTION 1: INTRODUCTION (Split Layout) --- */}
      <div className='max-w-7xl mx-auto px-6 md:px-12 mb-20'>
        <div className='flex flex-col md:flex-row items-center gap-12'>
          
          {/* Bagian Gambar */}
          <div className='w-full md:w-1/2'>
            <div className='relative'>
                {/* Dekorasi Dot Pattern (Opsional) */}
                <div className='absolute -top-4 -left-4 w-24 h-24 bg-blue-100 rounded-full opacity-50 blur-xl'></div>
                
                {/* Ganti src dengan gambar kantor Bapenda asli jika ada */}
                <img 
                    src={assets.about_image || "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800"} 
                    alt="Kantor Bapenda" 
                    className='relative z-10 w-full h-[400px] object-cover rounded-3xl shadow-2xl transform hover:scale-[1.02] transition-transform duration-500'
                />
                
                {/* Badge Melayang */}
                <div className='absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl z-20 hidden md:block border-l-4 border-blue-600'>
                    <p className='text-sm text-gray-500 font-medium'>Didirikan Sejak</p>
                    <p className='text-3xl font-bold text-gray-800'>2008</p>
                </div>
            </div>
          </div>

          {/* Bagian Teks */}
          <div className='w-full md:w-1/2'>
            <span className='text-blue-600 font-bold tracking-widest uppercase text-xs mb-2 block'>Tentang Kami</span>
            <h1 className='text-3xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight'>
                Mengelola Potensi, <br/> <span className='text-blue-600'>Membangun Negeri.</span>
            </h1>
            <p className='text-gray-600 text-lg leading-relaxed mb-6'>
                Badan Pengelola Keuangan dan Pendapatan Daerah (Bapenda) Kabupaten Pasuruan adalah garda terdepan dalam pengelolaan pendapatan daerah. 
            </p>
            <p className='text-gray-500 leading-relaxed mb-8'>
                Kami berkomitmen menghadirkan inovasi layanan perpajakan berbasis digital yang memudahkan masyarakat, transparan dalam pelaporan, dan akuntabel dalam pengelolaan demi kemajuan pembangunan Kabupaten Pasuruan.
            </p>
            
            <div className='flex gap-4'>
                <div className='border-l-4 border-blue-200 pl-4'>
                    <h4 className='font-bold text-gray-800'>Integritas</h4>
                    <p className='text-sm text-gray-500'>Jujur & Terpercaya</p>
                </div>
                <div className='border-l-4 border-blue-200 pl-4'>
                    <h4 className='font-bold text-gray-800'>Inovasi</h4>
                    <p className='text-sm text-gray-500'>Layanan Digital</p>
                </div>
            </div>
          </div>

        </div>
      </div>

      {/* --- SECTION 2: STATISTIK (Trust Signal) --- */}
      <div className='bg-blue-900 text-white py-16 mb-20'>
        <div className='max-w-7xl mx-auto px-6'>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-blue-800/50'>
                {statistics.map((stat, index) => (
                    <div key={index} className='p-2'>
                        <h3 className='text-4xl md:text-5xl font-bold mb-2 text-blue-200'>{stat.number}</h3>
                        <p className='text-blue-100 text-sm md:text-base font-medium uppercase tracking-wider'>{stat.label}</p>
                    </div>
                ))}
            </div>
        </div>
      </div>

      {/* --- SECTION 3: VISI & MISI (Cards) --- */}
      <div className='max-w-6xl mx-auto px-6 mb-20'>
        <div className='text-center mb-12'>
            <h2 className='text-3xl font-bold text-gray-900'>Arah & Tujuan</h2>
            <p className='text-gray-500 mt-2'>Landasan kami dalam melayani masyarakat.</p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            {/* Visi Card */}
            <div className='bg-gradient-to-br from-blue-50 to-white p-10 rounded-3xl border border-blue-100 shadow-lg hover:shadow-xl transition-shadow relative overflow-hidden group'>
                <div className='absolute top-0 right-0 bg-blue-100 w-32 h-32 rounded-bl-full -mr-16 -mt-16 opacity-50 group-hover:scale-110 transition-transform'></div>
                <h3 className='text-2xl font-bold text-blue-800 mb-6 flex items-center gap-3'>
                    <span className='w-10 h-10 bg-blue-600 text-white rounded-lg flex items-center justify-center text-xl'>👁️</span>
                    Visi Kami
                </h3>
                <p className='text-gray-700 text-lg leading-relaxed italic font-medium'>
                    "Terwujudnya pengelolaan pendapatan daerah yang transparan, akuntabel, dan optimal guna mendukung pembangunan Kabupaten Pasuruan yang sejahtera."
                </p>
            </div>

            {/* Misi Card */}
            <div className='bg-white p-10 rounded-3xl border border-gray-100 shadow-lg hover:shadow-xl transition-shadow relative overflow-hidden'>
                <h3 className='text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3'>
                    <span className='w-10 h-10 bg-orange-500 text-white rounded-lg flex items-center justify-center text-xl'>🚀</span>
                    Misi Kami
                </h3>
                <ul className='space-y-4'>
                    {[
                        "Meningkatkan kualitas pelayanan pajak daerah berbasis teknologi informasi.",
                        "Mengoptimalkan penggalian potensi pendapatan asli daerah secara intensif.",
                        "Meningkatkan kesadaran dan kepatuhan wajib pajak melalui edukasi.",
                        "Mewujudkan tata kelola keuangan yang bersih dan dapat dipertanggungjawabkan."
                    ].map((item, idx) => (
                        <li key={idx} className='flex items-start gap-3 text-gray-600'>
                            <svg className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
      </div>

    </div>
  )
}

export default About