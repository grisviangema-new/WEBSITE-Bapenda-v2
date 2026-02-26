import React from 'react'
import assets from '../assets/assets.png' // Pastikan path ini sesuai dengan struktur folder Anda

const About = () => {

  const statistics = [
    { number: '15+', label: 'Tahun Melayani' },
    { number: '200rb+', label: 'Wajib Pajak Terdaftar' },
    { number: '99%', label: 'Kepuasan Layanan' },
    { number: '24/7', label: 'Akses Digital' },
  ];

  return (
    <div className='pt-24 pb-20 bg-white font-sans'>
      
      {/* --- SECTION 1: INTRODUCTION (Split Layout) --- */}
      <div className='max-w-7xl mx-auto px-6 md:px-12 mb-24'>
        <div className='flex flex-col md:flex-row items-center gap-16'>
          
          {/* Bagian Gambar (Kiri) */}
          <div className='w-full md:w-1/2'>
            <div className='relative group'>
                {/* Dekorasi Belakang (Blob) */}
                <div className='absolute -top-10 -left-10 w-40 h-40 bg-blue-100 rounded-full blur-3xl opacity-60'></div>
                <div className='absolute -bottom-10 -right-10 w-40 h-40 bg-orange-100 rounded-full blur-3xl opacity-60'></div>
                
                {/* Gambar Utama */}
                <img 
                    src={assets.about_image || "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1000"} 
                    alt="Kantor Bapenda" 
                    className='relative z-10 w-full h-[450px] object-cover rounded-[2rem] shadow-2xl transform transition-transform duration-500 group-hover:scale-[1.01]'
                />
                
                {/* Badge Melayang (Kanan Bawah) */}
                <div className='absolute -bottom-8 -right-4 md:-right-8 bg-white p-6 rounded-2xl shadow-xl z-20 border-l-8 border-blue-600 animate-fade-in-up hidden md:block'>
                    <p className='text-xs text-gray-500 font-bold uppercase tracking-wider mb-1'>Melayani Sejak</p>
                    <div className='flex items-baseline gap-1'>
                        <span className='text-4xl font-extrabold text-gray-900'>2008</span>
                        <span className='text-blue-600 font-bold'>.</span>
                    </div>
                </div>

                {/* Badge Melayang (Kiri Atas) */}
                <div className='absolute -top-6 -left-4 md:-left-8 bg-blue-600 p-4 rounded-xl shadow-lg z-20 text-white hidden md:block'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>
            </div>
          </div>

          {/* Bagian Teks (Kanan) */}
          <div className='w-full md:w-1/2'>
            <div className='inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-bold uppercase tracking-widest mb-6'>
                <span className='w-2 h-2 rounded-full bg-blue-600'></span>
                Tentang Bapenda
            </div>
            
            <h1 className='text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight'>
                Mengelola Potensi, <br/> 
                <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600'>
                    Membangun Negeri.
                </span>
            </h1>
            
            <p className='text-gray-600 text-lg leading-relaxed mb-6'>
                Badan Pendapatan Daerah (Bapenda) Kabupaten Pasuruan adalah garda terdepan dalam pengelolaan pendapatan daerah yang transparan dan akuntabel.
            </p>
            
            <p className='text-gray-500 leading-relaxed mb-8'>
                Kami berkomitmen menghadirkan inovasi layanan perpajakan berbasis digital yang memudahkan masyarakat dalam berkontribusi bagi pembangunan daerah. Bersama kita wujudkan kemandirian fiskal daerah.
            </p>
            
            {/* Poin-Poin Keunggulan */}
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
                <div className='flex gap-4 items-start'>
                    <div className='w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 flex-shrink-0'>
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
                    </div>
                    <div>
                        <h4 className='font-bold text-gray-900 text-lg'>Integritas</h4>
                        <p className='text-sm text-gray-500 mt-1'>Pengelolaan yang jujur, transparan, dan dapat dipercaya.</p>
                    </div>
                </div>
                <div className='flex gap-4 items-start'>
                    <div className='w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center text-orange-600 flex-shrink-0'>
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                    </div>
                    <div>
                        <h4 className='font-bold text-gray-900 text-lg'>Inovasi</h4>
                        <p className='text-sm text-gray-500 mt-1'>Layanan digital modern yang cepat dan mudah diakses.</p>
                    </div>
                </div>
            </div>
          </div>

        </div>
      </div>

      {/* --- SECTION 2: STATISTIK (Trust Signal) --- */}
      <div className='relative bg-blue-900 py-20 mb-24 overflow-hidden'>
        {/* Background Pattern */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <pattern id="stats-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#stats-grid)" />
            </svg>
        </div>

        <div className='relative z-10 max-w-7xl mx-auto px-6'>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-8 text-center divide-x-0 md:divide-x divide-blue-700/50'>
                {statistics.map((stat, index) => (
                    <div key={index} className='group'>
                        <h3 className='text-4xl md:text-6xl font-extrabold mb-3 text-transparent bg-clip-text bg-gradient-to-b from-white to-blue-300 group-hover:scale-110 transition-transform duration-300 inline-block'>
                            {stat.number}
                        </h3>
                        <p className='text-blue-200 text-sm md:text-base font-semibold uppercase tracking-widest'>
                            {stat.label}
                        </p>
                    </div>
                ))}
            </div>
        </div>
      </div>

      {/* --- SECTION 3: VISI & MISI (Layout Kartu) --- */}
      <div className='max-w-6xl mx-auto px-6 mb-20'>
        <div className='text-center mb-16'>
            <h2 className='text-3xl md:text-4xl font-bold text-gray-900'>Visi & Misi</h2>
            <div className='w-24 h-1.5 bg-blue-600 mx-auto mt-4 rounded-full'></div>
            <p className='text-gray-500 mt-4 max-w-2xl mx-auto'>
                Landasan filosofis dan operasional kami dalam memberikan pelayanan terbaik kepada masyarakat Kabupaten Pasuruan.
            </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            
            {/* Visi Card */}
            <div className='relative bg-gradient-to-br from-blue-600 to-indigo-700 p-10 rounded-3xl shadow-2xl text-white overflow-hidden group'>
                <div className='absolute top-0 right-0 -mr-10 -mt-10 w-40 h-40 bg-white opacity-10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700'></div>
                
                <div className='relative z-10'>
                    <div className='w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center text-3xl mb-6'>
                        👁️
                    </div>
                    <h3 className='text-2xl font-bold mb-4 tracking-wide'>Visi Kami</h3>
                    <p className='text-lg leading-relaxed font-light italic opacity-90'>
                        "Terwujudnya pengelolaan pendapatan daerah yang transparan, akuntabel, dan optimal guna mendukung pembangunan Kabupaten Pasuruan yang sejahtera dan berdaya saing."
                    </p>
                </div>
            </div>

            {/* Misi Card */}
            <div className='bg-white p-10 rounded-3xl border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300'>
                <div className='w-16 h-16 bg-orange-100 text-orange-600 rounded-2xl flex items-center justify-center text-3xl mb-6'>
                    🚀
                </div>
                <h3 className='text-2xl font-bold text-gray-900 mb-6'>Misi Kami</h3>
                <ul className='space-y-4'>
                    {[
                        "Meningkatkan kualitas pelayanan pajak daerah berbasis teknologi informasi.",
                        "Mengoptimalkan penggalian potensi pendapatan asli daerah secara intensif.",
                        "Meningkatkan kesadaran dan kepatuhan wajib pajak melalui edukasi berkelanjutan.",
                        "Mewujudkan tata kelola keuangan yang bersih, transparan, dan akuntabel."
                    ].map((item, idx) => (
                        <li key={idx} className='flex items-start gap-4 group'>
                            <div className='mt-1.5 w-2 h-2 rounded-full bg-blue-500 group-hover:scale-150 transition-transform'></div>
                            <span className='text-gray-600 leading-relaxed'>{item}</span>
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