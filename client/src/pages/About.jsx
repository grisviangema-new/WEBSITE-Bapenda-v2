import React, { useState } from 'react'
import assets from '../assets/assets.png' // Pastikan path ini sesuai dengan struktur folder Anda

const About = () => {
  const [activeTab, setActiveTab] = useState('badan');

  // Data Struktur Organisasi dari Pasal 22
    const orgData = [
        {
        name: "Sekretariat",
        sub: ["Sub Bagian Umum dan Kepegawaian"],
        color: "border-blue-500",
        bgColor: "bg-blue-50"
        },
        {
        name: "Bidang Perencanaan dan Pengembangan Pendapatan Daerah",
        sub: ["Sub Bidang Pengembangan dan Kebijakan", "Sub Bidang Pengelolaan Data dan Informasi"],
        color: "border-indigo-500",
        bgColor: "bg-indigo-50"
        },
        {
        name: "Bidang Pengelolaan Pendapatan Daerah",
        sub: ["Sub Bidang Pendataan dan Pelayanan", "Sub Bidang Penetapan dan Pelaporan"],
        color: "border-emerald-500",
        bgColor: "bg-emerald-50"
        },
        {
        name: "Bidang Pengendalian dan Evaluasi Pendapatan Daerah",
        sub: ["Sub Bidang Pengendalian dan Pengawasan", "Sub Bidang Evaluasi dan Penagihan"],
        color: "border-amber-500",
        bgColor: "bg-amber-50"
        }
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
                {/* <div className='absolute -bottom-8 -right-4 md:-right-8 bg-white p-6 rounded-2xl shadow-xl z-20 border-l-8 border-blue-600 animate-fade-in-up hidden md:block'>
                    <p className='text-xs text-gray-500 font-bold uppercase tracking-wider mb-1'>Melayani Sejak</p>
                    <div className='flex items-baseline gap-1'>
                        <span className='text-4xl font-extrabold text-gray-900'>2008</span>
                        <span className='text-blue-600 font-bold'>.</span>
                    </div>
                </div> */}

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

      <div className='pt-24 pb-20 bg-gray-50 font-sans'>

      {/* --- STRUKTUR ORGANISASI MODERN --- */}
      <section className='max-w-7xl mx-auto px-6 mb-24'>
        <div className='text-center mb-16'>
          <h2 className='text-3xl md:text-4xl font-black text-gray-900 uppercase tracking-tight'>Struktur Organisasi</h2>
          <div className='w-24 h-1.5 bg-blue-600 mx-auto mt-4 rounded-full'></div>
        </div>

        {/* Level 1: Kepala Badan */}
        <div className='flex justify-center mb-12'>
          <div className='bg-slate-900 text-white px-12 py-4 rounded-xl shadow-2xl border-b-4 border-blue-600 text-center'>
            <h3 className='text-xl font-black tracking-widest'>BADAN</h3>
          </div>
        </div>

        {/* Level 2 & 3: Grid Bidang & Sub Bidang */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
          {orgData.map((item, idx) => (
            <div key={idx} className={`relative p-6 rounded-3xl border-t-4 shadow-sm bg-white transition-all duration-300 hover:shadow-xl ${item.color}`}>
              <div className={`w-10 h-10 ${item.bgColor} rounded-xl mb-4 flex items-center justify-center text-xl`}>
                {idx === 0 ? '📁' : idx === 1 ? '📊' : idx === 2 ? '💳' : '🔍'}
              </div>
              
              <h4 className='font-bold text-gray-900 leading-tight mb-4 min-h-[3rem]'>
                {item.name}
              </h4>

              <div className='space-y-3'>
                {item.sub.map((sub, sIdx) => (
                  <div key={sIdx} className='flex items-center gap-3 p-3 bg-gray-50 rounded-xl border border-gray-100 group hover:bg-white hover:border-blue-200 transition-colors'>
                    <div className='w-1.5 h-1.5 rounded-full bg-blue-400 group-hover:scale-150 transition-transform'></div>
                    <span className='text-xs font-medium text-gray-600 leading-snug'>{sub}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Level Bawah: UPT & Fungsional */}
        <div className='flex flex-wrap justify-center gap-6 mt-12'>
          <div className='bg-white px-8 py-4 rounded-2xl border border-gray-200 shadow-sm font-bold text-gray-700 hover:border-blue-400 transition-all text-center min-w-[150px]'>
            UPT
          </div>
          <div className='bg-white px-8 py-4 rounded-2xl border border-gray-200 shadow-sm font-bold text-gray-700 hover:border-blue-400 transition-all text-center'>
            Jabatan Fungsional dan Pelaksana
            <div className='flex gap-1 justify-center mt-2'>
              {[1,2,3,4,5].map(i => <div key={i} className='w-4 h-1 bg-gray-200 rounded-full'></div>)}
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 3: TUGAS & FUNGSI (Tab Detail) --- */}
      <section className='max-w-6xl mx-auto px-6 py-20 bg-white rounded-[3rem] shadow-inner border border-gray-100'>
        <div className='text-center mb-12'>
          <h2 className='text-3xl font-black text-gray-900 uppercase'>Tugas & Fungsi Detail</h2>
        </div>

        {/* Navigation Tabs */}
        <div className='flex flex-wrap justify-center gap-2 mb-12'>
          {['badan', 'sekretariat', 'perencanaan', 'pengelolaan', 'pengendalian'].map((tab) => (
            <button 
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${
                activeTab === tab ? 'bg-blue-600 text-white shadow-lg' : 'bg-gray-100 text-gray-400 hover:bg-gray-200'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Content Tabs */}
        <div className='min-h-[450px]'>
          {activeTab === 'badan' && (
            <div className='animate-fadeIn space-y-6 text-slate-600'>
              <h3 className='text-xl font-bold text-gray-900'>Fungsi Badan Pendapatan Daerah</h3>
              <ul className='grid md:grid-cols-2 gap-4 text-sm'>
                <li className='flex gap-3 bg-gray-50 p-4 rounded-2xl'><span>✔</span> Penyusunan kebijakan teknis bidang keuangan.</li>
                <li className='flex gap-3 bg-gray-50 p-4 rounded-2xl'><span>✔</span> Pelaksanaan dukungan teknis bidang keuangan.</li>
                <li className='flex gap-3 bg-gray-50 p-4 rounded-2xl'><span>✔</span> Penyusunan dan pelaksanaan kebijakan APBD.</li>
                <li className='flex gap-3 bg-gray-50 p-4 rounded-2xl'><span>✔</span> Pemantauan, evaluasi, dan pelaporan tugas keuangan.</li>
              </ul>
            </div>
          )}

          {activeTab === 'sekretariat' && (
        <div className='animate-fadeIn space-y-8'>
        <div className='bg-white p-8 rounded-3xl border border-gray-100 shadow-sm'>
            <h3 className='text-xl font-bold text-gray-900 mb-4'>Tugas Sekretariat</h3>
            <p className='text-slate-600 text-sm leading-relaxed mb-6'>
            Merencanakan, melaksanakan, mengoordinasikan dan mengendalikan kegiatan administrasi umum, kepegawaian, perlengkapan, penyusunan program dan pelaporan, keuangan, hubungan masyarakat, protokol, serta menyelenggarakan koordinasi pelaksanaan tugas, pembinaan dalam internal badan dan pemberian dukungan teknis administrasi kepada badan.
            </p>
            
            <div className='grid md:grid-cols-1 gap-6'>
            <div className='p-6 bg-blue-50 rounded-2xl border border-blue-100'>
                <h4 className='font-black text-blue-700 mb-4 uppercase text-xs tracking-widest'>Sub Bagian Umum & Kepegawaian</h4>
                <ul className='text-sm text-slate-600 space-y-2'>
                <li>• Menyiapkan bahan administrasi surat-menyurat, kearsipan, dan perpustakaan.</li>
                <li>• Menyiapkan bahan urusan rumah tangga, keprotokolan, dan hubungan masyarakat.</li>
                <li>• Menyiapkan bahan pengelolaan urusan kepegawaian dan barang milik daerah.</li>
                </ul>
            </div>
            </div>
        </div>
        </div>
    )}

    {/* --- TAB PERENCANAAN --- */}
    {activeTab === 'perencanaan' && (
        <div className='animate-fadeIn space-y-8'>
        <div className='bg-white p-8 rounded-3xl border border-gray-100 shadow-sm'>
            <h3 className='text-xl font-bold text-gray-900 mb-4'>Tugas Bidang Perencanaan dan Pengembangan</h3>
            <p className='text-slate-600 text-sm leading-relaxed mb-6'>
            Melaksanakan perencanaan dan pengembangan pendapatan daerah.
            </p>
            
            <div className='grid md:grid-cols-2 gap-6'>
            <div className='p-6 bg-indigo-50 rounded-2xl border border-indigo-100'>
                <h4 className='font-black text-indigo-700 mb-4 uppercase text-xs tracking-widest'>Sub Bid. Pengembangan & Kebijakan</h4>
                <ul className='text-sm text-slate-600 space-y-2'>
                <li>• Menyusun rencana tahunan dan jangka menengah pendapatan daerah.</li>
                <li>• Melakukan analisis potensi dan merencanakan target pendapatan daerah.</li>
                <li>• Melaksanakan ekstensifikasi sumber-sumber pendapatan daerah.</li>
                </ul>
            </div>
            <div className='p-6 bg-blue-50 rounded-2xl border border-blue-100'>
                <h4 className='font-black text-blue-700 mb-4 uppercase text-xs tracking-widest'>Sub Bid. Pengelolaan Data & Informasi</h4>
                <ul className='text-sm text-slate-600 space-y-2'>
                <li>• Melaksanakan pengolahan dan pemeliharaan basis data pajak & retribusi.</li>
                <li>• Menyelenggarakan dan mengembangkan sistem informasi pendapatan daerah.</li>
                <li>• Menyediakan dukungan teknologi informasi pengelolaan pajak.</li>
                </ul>
            </div>
            </div>
        </div>
        </div>
    )}

    {/* --- TAB PENGELOLAAN --- */}
    {activeTab === 'pengelolaan' && (
        <div className='animate-fadeIn space-y-8'>
        <div className='bg-white p-8 rounded-3xl border border-gray-100 shadow-sm'>
            <h3 className='text-xl font-bold text-gray-900 mb-4'>Tugas Bidang Pengelolaan Pendapatan</h3>
            <p className='text-slate-600 text-sm leading-relaxed mb-6'>
            Melaksanakan pengelolaan pendapatan daerah.
            </p>
            
            <div className='grid md:grid-cols-2 gap-6'>
            <div className='p-6 bg-emerald-50 rounded-2xl border border-emerald-100'>
                <h4 className='font-black text-emerald-700 mb-4 uppercase text-xs tracking-widest'>Sub Bid. Pendataan & Pelayanan</h4>
                <ul className='text-sm text-slate-600 space-y-2'>
                <li>• Melakukan pendaftaran, pendataan, dan pemutakhiran data pajak daerah.</li>
                <li>• Melaksanakan pelayanan dan konsultasi pajak daerah.</li>
                <li>• Mengelola arsip pendaftaran dan pemutakhiran data.</li>
                </ul>
            </div>
            <div className='p-6 bg-green-50 rounded-2xl border border-green-100'>
                <h4 className='font-black text-green-700 mb-4 uppercase text-xs tracking-widest'>Sub Bid. Penetapan & Pelaporan</h4>
                <ul className='text-sm text-slate-600 space-y-2'>
                <li>• Melakukan penelitian, verifikasi data, penghitungan dan penetapan pajak.</li>
                <li>• Menerbitkan dokumen ketetapan dan menilai objek pajak.</li>
                <li>• Menyusun laporan realisasi dan melakukan pelaporan pendapatan.</li>
                </ul>
            </div>
            </div>
        </div>
        </div>
    )}

    {/* --- TAB PENGENDALIAN --- */}
    {activeTab === 'pengendalian' && (
        <div className='animate-fadeIn space-y-8'>
        <div className='bg-white p-8 rounded-3xl border border-gray-100 shadow-sm'>
            <h3 className='text-xl font-bold text-gray-900 mb-4'>Tugas Bidang Pengendalian dan Evaluasi</h3>
            <p className='text-slate-600 text-sm leading-relaxed mb-6'>
            Melaksanakan pengendalian dan evaluasi pendapatan daerah.
            </p>
            
            <div className='grid md:grid-cols-2 gap-6'>
            <div className='p-6 bg-amber-50 rounded-2xl border border-amber-100'>
                <h4 className='font-black text-amber-700 mb-4 uppercase text-xs tracking-widest'>Sub Bid. Pengendalian & Pengawasan</h4>
                <ul className='text-sm text-slate-600 space-y-2'>
                <li>• Melaksanakan koordinasi dan pembinaan unit kerja pemungut retribusi.</li>
                <li>• Melaksanakan pengawasan wajib pajak melalui data elektronik dan lapangan.</li>
                <li>• Melaksanakan pemeriksaan pajak daerah.</li>
                </ul>
            </div>
            <div className='p-6 bg-orange-50 rounded-2xl border border-orange-100'>
                <h4 className='font-black text-orange-700 mb-4 uppercase text-xs tracking-widest'>Sub Bid. Evaluasi & Penagihan</h4>
                <ul className='text-sm text-slate-600 space-y-2'>
                <li>• Melakukan evaluasi pengelolaan pemungutan pajak dan retribusi.</li>
                <li>• Melaksanakan mekanisme penagihan dan pengelolaan piutang pajak.</li>
                <li>• Menyelesaikan permohonan keringanan dan keberatan pajak.</li>
                </ul>
            </div>
            </div>
        </div>
        </div>
    )}
        </div>
      </section>

    </div>

      {/* --- SECTION 3: VISI & MISI (Layout Kartu) --- */}
      <div className='max-w-6xl mx-auto px-6 mb-20 py-20'>
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