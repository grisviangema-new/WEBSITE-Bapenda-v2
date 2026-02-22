import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Pbjt = () => {

  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState('pendaftaran')

  // Helper untuk membuka link eksternal
  const openPatriot = () => {
    window.open('https://patriot.pasuruankab.go.id', '_blank')
  }

  // Data Sektor PBJT lengkap dengan Objek & Pengecualian (Sesuai Perda 3/2023)
  const pbjtSectors = [
    { 
        title: "Makanan & Minuman", 
        icon: "🍔", 
        color: "bg-orange-100 text-orange-600", 
        objects: [
            "restoran yang paling sedikit menyediakan layanan penyajian Makanan dan/atau Minuman berupa meja, kursi, dan/atau peralatan makan dan minum;",
            "Jasa Boga atau Katering yang melakukan: \n 1. proses penyediaan bahan baku dan bahan setengah jadi, pembuatan, penyimpanan, serta penyajian berdasarkan pesanan; \n 2. penyajian di lokasi yang diinginkan oleh pemesan dan berbeda dengan lokasi dimana proses pembuatan dan penyimpanan dilakukan; dan \n 3. penyajian dilakukan dengan atau tanpa peralatan dan petugasnya."
        ],
        exceptions: [
            "Peredaran usaha tidak melebihi batas tertentu (Rp 5 Juta/Bulan).",
            "dilakukan oleh toko swalayan dan sejenisnya yang tidak semata-mata menjual Makanan dan/atau Minuman.",
            "dilakukan oleh pabrik Makanan dan/atau Minuman",
            "disediakan oleh penyedia fasilitas yang kegiatan usaha utamanya menyediakan pelayanan jasa menunggu pesawat (lounge) pada bandar udara."
        ]
    },
    { 
        title: "Tenaga Listrik", 
        icon: "⚡", 
        color: "bg-yellow-100 text-yellow-600", 
        objects: [
            "penggunaan Tenaga Listrik oleh pengguna akhir.",
        ],
        exceptions: [
            "Penggunaan oleh Instansi Pemerintah & Kedutaan.",
            "Rumah Ibadah, Panti Sosial, & Yayasan Nirlaba.",
            "Yang dihasilkan sendiri dengan kapasitas tertentu yang tidak memerlukan izin."
        ]
    },
    { 
        title: "Jasa Perhotelan", 
        icon: "🏨", 
        color: "bg-blue-100 text-blue-600", 
        objects: [
            "Hotel, Motel, Hostel, Losmen, Pesanggrahan",
            "Vila, Pondok Wisata, Glamping, Wisma pariwisata.",
            "Rumah penginapan/guest house/bungalo/resort/cottage",
            "Tempat tinggal pribadi yang difungsikan sebagai hotel."
        ],
        exceptions: [
            "Diselenggarakan oleh pemerintah.",
            "Rumah Sakit, Asrama perawat, panti jompo, panti asuhan, panti sosial, dan sejenisnya.",
            "Pusat pendidikan atau kegiatan keagamaan.",
            "Jasa biro perjalanan atau perjalanan wisata",
            "Jasa persewaan ruangan untuk diusahakan di hotel."
        ]
    },
    { 
        title: "Jasa Parkir", 
        icon: "🅿️", 
        color: "bg-gray-100 text-gray-600", 
        objects: [
            "Penyediaan atau penyelenggaraan tempat parkir",
            "Pelayanan memarkirkan kendaraan (parkir valet)."
        ],
        exceptions: [
            "Tempat parkir Instansi Pemerintah.",
            "Tempat parkir Kedutaan/Konsulat.",
            "Parkir khusus karyawan/pegawai (tidak komersial).",
            "Parkir di tempat ibadah & sekolah."
        ]
    },
    { 
        title: "Kesenian & Hiburan", 
        icon: "🎭", 
        color: "bg-purple-100 text-purple-600", 
        objects: [
            "Tontonan Film (Bioskop), Pagelaran Seni, Musik, tari, Busana.",
            "Kontes Kecantikan, Kontes Binaraga, Pameran.",
            "pacuan kuda dan perlombaan kendaraan bermotor, permainan ketangkasan",
            "olahraga permainan dengan menggunakan tempat/ruang dan/atau peralatan dan perlengkapan untuk olahraga dan kebugaran",
            "rekreasi wahana air, wahana ekologi, wahana pendidikan, wahana budaya, wahana salju, wahana permainan, pemancingan, agrowisata, dan kebun binatang;",
            "Panti pijat dan pijat refleksi.",
            "Diskotek, karaoke, kelab malam, bar, dan mandi uap/spa.",
        ],
        exceptions: [
            "Hiburan untuk promosi budaya/tradisional (Non-komersial).",
            "Kegiatan layanan masyarakat dengan tidak dipungut bayaran.",
        ]
    },
  ];

  // --- DATA TABS KEWAJIBAN BARU ---
  const tabRequirements = {
    pendaftaran: {
      title: "Pendaftaran Objek",
      content: [
        { label: "Kewajiban Pendaftaran", items: ["Wajib mendaftarkan usaha yang memenuhi persyaratan subjektif dan objektif.", "Setiap penambahan unit usaha atau cabang baru wajib didaftarkan sebagai objek pajak terpisah untuk mendapatkan NOPD."] },
        { label: "Syarat Administrasi", items: ["Formulir pendaftaran objek pajak.", "KTP Pengelola / Pemilik.", "NIB (Nomor Induk Berusaha) .", "Foto lokasi dan titik koordinat usaha."] }
      ]
    },
    pelaporan: {
      title: "Pelaporan Omzet dan Penyetoran",
      content: [
        { label: "Batas Waktu Pelaporan", items: ["Wajib melaporkan omzet bulanan via PATRIOT e-SPTPD paling lambat 15 hari kerja setelah berakhirnya masa pajak.", "Laporan wajib dilakukan setiap bulan meskipun omzet sedang NIHIL (Rp 0)."] },
        { label: "Mekanisme Bayar", items: ["Pembayaran dilakukan berdasarkan ID Billing yang terbit setelah laporan disetujui.", "Pembayaran dapat melalui Bank Jatim, Tokopedia, Kantor Pos, atau QRIS."] }
      ]
    },
    pemeriksaan: {
      title: "Pemenuhan Data",
      content: [
        { label: "Data Pemeriksaan", items: ["Wajib menyediakan buku laporan keuangan atau catatan omzet harian saat diminta oleh pemeriksa pajak.", "Menyimpan dokumen bukti transaksi (Bill/Nota) selama 5 tahun."] },
        { label: "Alat Monitoring", items: ["Wajib memfasilitasi pemasangan alat monitoring transaksi (Tapping Box) di kasir.", "Dilarang dengan sengaja merusak atau mematikan koneksi alat monitoring yang telah dipasang."] }
      ]
    }
  }

  return (
    <div className='bg-slate-50 min-h-screen font-sans'>
      
      {/* --- HERO SECTION --- */}
      <div className='relative bg-gradient-to-br from-indigo-900 via-blue-900 to-blue-800 text-white py-20 md:py-28 px-4 md:px-6 overflow-hidden'>
        
        {/* Pattern Background */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <pattern id="hexagons" width="50" height="43.4" patternUnits="userSpaceOnUse" patternTransform="scale(2)">
                        <path d="M25 0 L50 14.4 L50 43.3 L25 57.7 L0 43.3 L0 14.4 Z" fill="none" stroke="white" strokeWidth="1"/>
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#hexagons)" />
            </svg>
        </div>

        <div className='relative z-10 max-w-7xl mx-auto text-center'>
          <span className='inline-block py-1.5 px-4 rounded-full bg-indigo-700/50 border border-indigo-400 text-indigo-100 text-[10px] md:text-xs font-bold tracking-widest mb-6 animate-fade-in-up uppercase'>
            Perbup No. 17 Tahun 2025
          </span>
          <h1 className='text-4xl md:text-6xl font-extrabold mb-6 leading-tight tracking-tight drop-shadow-lg'>
            Mengenal <span className='text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-orange-200'>PBJT</span>
          </h1>
          <p className='text-blue-100 text-base md:text-xl max-w-3xl mx-auto leading-relaxed font-light px-4'>
            <strong>Pajak Barang dan Jasa Tertentu</strong> adalah integrasi dari 5 jenis pajak berbasis konsumsi yang dibayarkan oleh konsumen akhir.
          </p>
        </div>
      </div>

      {/* --- DEFINISI & TRANSFORMASI --- */}
      <div className='max-w-6xl mx-auto px-4 md:px-6 -mt-16 relative z-20'>
        <div className='bg-white rounded-3xl shadow-xl p-6 md:p-10 border-b-4 border-indigo-600 flex flex-col md:flex-row items-center gap-8 md:gap-12'>
            <div className='flex-1'>
                <h2 className='text-2xl md:text-3xl font-bold text-gray-800 mb-4'>Transformasi Pajak Daerah</h2>
                <p className='text-gray-600 leading-relaxed text-sm md:text-base mb-6 text-justify'>
                    Berdasarkan UU HKPD dan Peraturan Bupati Pasuruan No. 17 Tahun 2025, lima jenis pajak daerah yang berbasis konsumsi kini digabung menjadi satu nomenklatur yaitu <strong>PBJT</strong>. Tujuannya untuk menyederhanakan administrasi dan memudahkan pemungutan.
                </p>
                
                <div className='grid grid-cols-2 gap-4'>
                    <div className='bg-indigo-50 p-3 rounded-lg border border-indigo-100'>
                        <span className='block text-xs text-indigo-500 font-bold uppercase'>Sistem Pemungutan</span>
                        <span className='font-bold text-gray-800'>Self Assessment</span>
                    </div>
                    <div className='bg-indigo-50 p-3 rounded-lg border border-indigo-100'>
                        <span className='block text-xs text-indigo-500 font-bold uppercase'>Subjek Pajak</span>
                        <span className='font-bold text-gray-800'>Konsumen Akhir</span>
                    </div>
                </div>
            </div>

            {/* Visualisasi 5 in 1 */}
            <div className='w-full md:w-2/5 flex flex-col gap-2'>
                <div className='bg-gray-100 p-2 rounded text-center text-xs text-gray-400 font-medium'>UU Lama (28/2009)</div>
                <div className='grid grid-cols-5 gap-1 text-[10px] md:text-xs text-white text-center font-bold'>
                    <div className='bg-gray-400 py-2 rounded-l'>Hotel</div>
                    <div className='bg-gray-400 py-2'>Restoran</div>
                    <div className='bg-gray-400 py-2'>Hiburan</div>
                    <div className='bg-gray-400 py-2'>Parkir</div>
                    <div className='bg-gray-400 py-2 rounded-r'>PPJ</div>
                </div>
                <div className='flex justify-center text-gray-400'>
                    <svg className="w-6 h-6 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
                </div>
                <div className='bg-gradient-to-r from-indigo-600 to-blue-600 text-white py-4 rounded-xl text-center font-extrabold text-lg md:text-xl shadow-lg transform hover:scale-105 transition-transform'>
                    PBJT
                </div>
                <div className='bg-blue-50 p-2 rounded text-center text-xs text-blue-600 font-bold'>UU Baru (1/2022)</div>
            </div>
        </div>
      </div>

          {/* --- MENU LAYANAN (INTERAKTIF) --- */}
      <section className='bg-slate-50 py-24 px-4'>
        <div className='max-w-7xl mx-auto'>
          <div className='text-center max-w-3xl mx-auto mb-20'>
            <h2 className='text-4xl font-black text-gray-900 mb-4'>Layanan Mandiri</h2>
            <p className='text-gray-500 text-lg'>Sistem informasi perpajakan daerah yang terintegrasi, transparan, dan efisien untuk pelaku usaha.</p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {[
              { label: 'Pendaftaran', title: 'Objek Baru', desc: 'Daftarkan entitas bisnis Anda untuk mendapatkan NPWPD.', icon: '🏢', color: 'blue', link: 'https://patriot.pasuruankab.go.id/apps/esptpd/' },
              { label: 'Pelaporan', title: 'e-SPTPD', desc: 'Lapor omzet bulanan secara rutin sebelum tanggal 15.', icon: '📈', color: 'orange', link: 'https://patriot.pasuruankab.go.id/apps/esptpd/' },
              { label: 'Pembayaran', title: 'e-Billing', desc: 'Generate kode billing untuk pembayaran di Bank Jatim/Kantor Pos.', icon: '💳', color: 'emerald', link: 'https://patriot.pasuruankab.go.id/apps/epayment/' },
              { label: 'Bantuan', title: 'Keringanan', desc: 'Prosedur pengajuan insentif atau pengurangan pajak.', icon: '⚖️', color: 'purple', link: '/keberatan' },
            ].map((item, idx) => (
              <div 
                key={idx}
                onClick={openPatriot}
                className='group relative bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-2xl transition-all duration-500 cursor-pointer overflow-hidden'
              >
                {/* Hover Background Accent */}
                <div className={`absolute top-0 right-0 w-24 h-24 -mr-8 -mt-8 bg-${item.color}-500/5 rounded-full group-hover:scale-[10] transition-transform duration-700`} />
                
                <div className="relative z-10">
                  <div className={`w-14 h-14 bg-${item.color}-50 text-${item.color}-600 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform duration-500`}>
                    {item.icon}
                  </div>
                  <span className={`text-[10px] font-black uppercase tracking-widest text-${item.color}-500 mb-2 block`}>{item.label}</span>
                  <h3 className='text-xl font-extrabold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors'>{item.title}</h3>
                  <p className='text-sm text-gray-500 leading-relaxed mb-6'>{item.desc}</p>
                  <div className={`inline-flex items-center text-sm font-bold text-gray-900 group-hover:translate-x-2 transition-transform`}>
                    Akses Layanan <span className="ml-2">→</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    
    {/* --- ALUR LAYANAN (VISUAL) --- */}
      <div className='max-w-6xl mx-auto px-4 mt-24 text-center'>
        <h2 className='text-3xl font-bold text-gray-900 mb-4'>Alur Layanan Digital</h2>
        <p className='text-gray-500 mb-12'>Langkah mudah pemenuhan kewajiban PBJT melalui PATRIOT.</p>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
          {[
            { n: "1", t: "Pendaftaran", d: "Daftar identitas NPWPD & Objek Pajak." },
            { n: "2", t: "Pelaporan", d: "Input omzet harian & lapor bulanan." },
            { n: "3", t: "Billing", d: "Dapatkan kode bayar otomatis." },
            { n: "4", t: "Pembayaran", d: "Bayar via Bank Jatim/QRIS/Kantor Pos." }
          ].map((step, idx) => (
            <div key={idx} className='relative group'>
              <div className='w-16 h-16 bg-white border-4 border-indigo-600 text-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4 font-black text-xl shadow-lg group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300'>
                {step.n}
              </div>
              <h4 className='font-bold text-gray-800'>{step.t}</h4>
              <p className='text-xs text-gray-500 mt-2 px-4'>{step.d}</p>
              {idx < 3 && <div className='hidden md:block absolute top-8 left-[70%] w-full h-0.5 bg-gray-200 -z-10'></div>}
            </div>
          ))}
        </div>
      </div>

    {/* --- KEWAJIBAN & PEMENUHAN DATA (TABS BARU) --- */}
      <div className='max-w-5xl mx-auto px-4 mt-24'>
        <div className='text-center mb-10'>
          <h2 className='text-3xl font-bold text-gray-900'>Ketentuan & Kewajiban</h2>
          <div className='w-12 h-1 bg-indigo-600 mx-auto mt-4 rounded-full'></div>
        </div>
        <div className='bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100'>
          {/* Tab Header */}
          <div className='flex bg-slate-900 p-2 gap-2 overflow-x-auto'>
            {Object.keys(tabRequirements).map((key) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`flex-1 py-3 px-6 text-sm font-bold whitespace-nowrap rounded-xl transition-all ${activeTab === key ? 'bg-indigo-600 text-white shadow-lg' : 'text-slate-400 hover:text-slate-200'}`}
              >
                {tabRequirements[key].title}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className='p-8 md:p-12'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
              {tabRequirements[activeTab].content.map((sec, i) => (
                <div key={i} className='bg-slate-50 p-6 rounded-2xl border border-slate-100'>
                  <h4 className='font-black text-indigo-600 mb-4 flex items-center gap-2 uppercase tracking-widest text-xs'>
                    <span className='w-2 h-2 bg-indigo-500 rounded-full'></span> {sec.label}
                  </h4>
                  <ul className='space-y-3'>
                    {sec.items.map((item, idx) => (
                      <li key={idx} className='flex gap-2 text-sm text-gray-600 leading-relaxed'>
                        <span className='text-indigo-400 font-bold'>✓</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

{/* --- 5 SEKTOR PBJT (DETAIL OBJEK & PENGECUALIAN) --- */}
      <div className='max-w-7xl mx-auto px-4 md:px-6 py-20 md:py-28'>
        <div className='text-center mb-16'>
          <h2 className='text-3xl md:text-4xl font-black text-gray-900 tracking-tight'>
            Rincian Objek & Pengecualian
          </h2>
          <p className='text-gray-500 mt-4 max-w-2xl mx-auto text-sm md:text-base'>
            Berdasarkan <strong>Perda No. 3 Tahun 2023</strong>, berikut detail kriteria apa saja yang dikenakan pajak dan apa yang dikecualikan.
          </p>
        </div>

        {/* Grid diperbaiki: Menggunakan grid-cols-6 agar bisa mengakomodasi col-span-2 (1/3) dan col-span-3 (1/2) dengan rapi */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6'>
          {pbjtSectors.map((item, idx) => (
            <div 
              key={idx} 
              className={`bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl border border-gray-100 transition-all duration-500 group flex flex-col 
                ${idx < 3 ? 'lg:col-span-2' : 'lg:col-span-3'}`}
            >
              {/* Header Kartu */}
              <div className='p-6 md:p-8 pb-4 flex items-center gap-4 border-b border-gray-50 bg-slate-50/50'>
                <div className={`w-14 h-14 ${item.color} rounded-2xl flex items-center justify-center text-3xl flex-shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500`}>
                  {item.icon}
                </div>
                <h3 className='text-xl font-black text-gray-800 tracking-tight'>{item.title}</h3>
              </div>

              {/* Konten Kartu */}
              <div className='p-6 md:p-8 pt-6 flex-1 flex flex-col gap-8'>
                
                {/* Objek Pajak */}
                <div>
                  <h4 className='text-[10px] font-black text-emerald-600 uppercase tracking-[0.2em] mb-4 flex items-center gap-2'>
                    <span className='w-2 h-2 rounded-full bg-emerald-500 animate-pulse'></span> Objek Pajak
                  </h4>
                  <ul className='space-y-3'>
                    {item.objects.map((obj, i) => (
                      <li key={i} className='text-sm text-gray-700 flex items-start gap-3 leading-relaxed whitespace-pre-line'>
                        <span className="flex-shrink-0 w-5 h-5 rounded-full bg-emerald-50 flex items-center justify-center">
                          <svg className="w-3 h-3 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                        </span>
                        <span>{obj}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Divider Putus-putus dengan Icon */}
                <div className='relative'>
                  <div className='absolute inset-0 flex items-center'><div className='w-full border-t border-dashed border-gray-200'></div></div>
                  <div className='relative flex justify-center text-[10px] font-bold text-gray-300 uppercase bg-white px-2 tracking-widest'>Limitasi</div>
                </div>

                {/* Pengecualian */}
                <div className='bg-red-50/30 p-4 rounded-2xl border border-red-50'>
                  <h4 className='text-[10px] font-black text-red-500 uppercase tracking-[0.2em] mb-4 flex items-center gap-2'>
                    <span className='w-2 h-2 rounded-full bg-red-500'></span> Dikecualikan
                  </h4>
                  <ul className='space-y-3'>
                    {item.exceptions.map((exc, i) => (
                      <li key={i} className='text-sm text-gray-500 flex items-start gap-3 leading-relaxed italic'>
                        <span className="flex-shrink-0 mt-1 w-1.5 h-1.5 rounded-full bg-red-300"></span>
                        <span>{exc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>

      {/* --- SECTION SUBJEK PAJAK PBJT --- */}
      <section className="bg-white py-24 px-4 border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
            
            {/* Kolom Kiri: Definisi Subjek & Wajib Pajak */}
            <div className="lg:w-1/2">
              <span className="text-indigo-600 font-black text-xs uppercase tracking-[0.3em] mb-4 block">Entitas Perpajakan</span>
              <h2 className="text-4xl font-black text-gray-900 mb-8 tracking-tighter leading-none">
                Siapa yang terlibat <br/><span className="text-indigo-600">dalam PBJT?</span>
              </h2>
              
              <div className="space-y-4">
                <div className="group p-6 bg-slate-50 hover:bg-white rounded-[2rem] border border-slate-100 hover:shadow-xl hover:border-indigo-100 transition-all duration-300">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-10 h-10 bg-indigo-600 text-white rounded-xl flex items-center justify-center text-lg">👤</div>
                    <h4 className="font-bold text-gray-900 text-xl">Subjek Pajak</h4>
                  </div>
                  <p className="text-gray-600 leading-relaxed pl-14">
                    Orang pribadi atau Badan yang <strong>membayar</strong> atau mengonsumsi barang dan jasa tertentu. Singkatnya, ini adalah <span className="text-indigo-600 font-bold">Konsumen/Pembeli</span>.
                  </p>
                </div>
                
                <div className="group p-6 bg-slate-50 hover:bg-white rounded-[2rem] border border-slate-100 hover:shadow-xl hover:border-emerald-100 transition-all duration-300">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-10 h-10 bg-emerald-600 text-white rounded-xl flex items-center justify-center text-lg">🏢</div>
                    <h4 className="font-bold text-gray-900 text-xl">Wajib Pajak</h4>
                  </div>
                  <p className="text-gray-600 leading-relaxed pl-14">
                    Or Pruibadi atau Badan yang <strong>menyediakan</strong> jasa/barang. Mereka bertanggung jawab memungut pajak dari konsumen dan menyetorkannya ke kas daerah.
                  </p>
                </div>
              </div>
            </div>

            {/* Kolom Kanan: Visualisasi Peran (Opsional tapi menarik untuk UI) */}
            <div className="lg:w-1/2 w-full">
              <div className="relative p-8 bg-indigo-900 rounded-[3rem] text-white overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl"></div>
                <div className="relative z-10 space-y-8">
                  <div className="flex justify-between items-center bg-white/10 p-6 rounded-2xl backdrop-blur-md border border-white/10">
                    <span className="font-bold">Konsumen</span>
                    <span className="text-indigo-300">────────▶</span>
                    <span className="font-bold">Bayar Pajak (10%)</span>
                  </div>
                  <div className="text-center font-black text-2xl py-2 italic text-indigo-200">Melalui Transaksi</div>
                  <div className="flex justify-between items-center bg-emerald-500/20 p-6 rounded-2xl backdrop-blur-md border border-emerald-500/20">
                    <span className="font-bold">Pengusaha</span>
                    <span className="text-emerald-300">────────▶</span>
                    <span className="font-bold">Setor ke Daerah</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- SECTION DASAR PENGENAAN PAJAK (DPP) --- */}
      <section className='bg-slate-50 py-24 px-4 overflow-hidden'>
        <div className='max-w-7xl mx-auto'>
          <div className='flex flex-col md:flex-row items-end justify-between mb-12 gap-6'>
            <div className='max-w-2xl'>
              <h2 className='text-3xl md:text-4xl font-black text-gray-900 leading-tight'>
                Dasar Pengenaan <span className="text-indigo-600">Pajak (DPP)</span>
              </h2>
              <p className='text-gray-500 mt-4'>
                DPP adalah nilai nominal yang digunakan sebagai basis perhitungan pajak. Secara umum, DPP adalah <strong>jumlah yang dibayarkan konsumen</strong>.
              </p>
            </div>
            <div className='bg-white px-6 py-3 rounded-2xl shadow-sm border border-slate-200 flex items-center gap-3'>
              <span className='flex h-3 w-3 rounded-full bg-indigo-600'></span>
              <span className='text-sm font-bold text-gray-700 font-mono'>Rumus: DPP × TARIF = Pajak Terutang</span>
            </div>
          </div>

          <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
            
            {/* Card 1: Mekanisme Umum */}
            <div className='lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6'>
              {[
                { title: "Makanan & Minuman", desc: "Jumlah pembayaran yang diterima penyedia (Restoran/Katering).", icon: "🍱" },
                { title: "Jasa Perhotelan", desc: "Jumlah pembayaran kepada penyedia jasa perhotelan.", icon: "🏨" },
                { title: "Jasa Parkir", desc: "Jumlah pembayaran tempat parkir atau layanan valet.", icon: "🅿️" },
                { title: "Kesenian & Hiburan", desc: "Jumlah pembayaran yang diterima penyelenggara hiburan.", icon: "🎭" }
              ].map((item, i) => (
                <div key={i} className='bg-white p-6 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-all flex gap-4 items-start'>
                  <div className='text-3xl'>{item.icon}</div>
                  <div>
                    <h4 className='font-bold text-gray-900 mb-1'>{item.title}</h4>
                    <p className='text-xs text-gray-500 leading-relaxed'>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Card 2: Aturan Khusus (Voucher & Tanpa Bayar) */}
            <div className='bg-indigo-900 rounded-[2.5rem] p-8 text-white relative overflow-hidden flex flex-col justify-center'>
              <div className='absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 blur-2xl'></div>
              <h4 className='text-xl font-black mb-6 flex items-center gap-2'>
                <span className='text-yellow-400'>◈</span> Ketentuan Khusus
              </h4>
              <div className='space-y-6'>
                <div className='bg-white/10 p-4 rounded-2xl backdrop-blur-sm border border-white/10'>
                  <p className='text-[10px] font-bold text-indigo-300 uppercase mb-2'>Voucer & Sejenisnya</p>
                  <p className='text-sm leading-relaxed text-indigo-100'>Ditetapkan sebesar <strong>nilai nominal rupiah</strong> yang tertera pada voucer tersebut.</p>
                </div>
                <div className='bg-white/10 p-4 rounded-2xl backdrop-blur-sm border border-white/10'>
                  <p className='text-[10px] font-bold text-indigo-300 uppercase mb-2'>Tanpa Pembayaran</p>
                  <p className='text-sm leading-relaxed text-indigo-100'>Dihitung berdasarkan <strong>harga jual barang/jasa sejenis</strong> yang berlaku di wilayah Kabupaten Pasuruan.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3: Deep Dive Tenaga Listrik */}
          <div className='mt-8 bg-white rounded-[2.5rem] p-8 md:p-12 border border-slate-100 shadow-sm'>
            <div className='flex items-center gap-4 mb-10'>
              <div className='w-12 h-12 bg-yellow-400 rounded-2xl flex items-center justify-center text-2xl shadow-lg shadow-yellow-200'>⚡</div>
              <div>
                <h3 className='text-2xl font-black text-gray-900'>Nilai Jual Tenaga Listrik</h3>
                <p className='text-sm text-gray-400 font-medium'>Aturan DPP Khusus Sektor Tenaga Listrik</p>
              </div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
              {/* Sumber Lain / PLN */}
              <div className='space-y-6'>
                <h4 className='font-bold text-gray-800 flex items-center gap-2'>
                  <span className='w-6 h-1 bg-yellow-400 rounded-full'></span> Sumber Lain (PLN)
                </h4>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                  <div className='p-5 bg-slate-50 rounded-2xl border border-slate-100'>
                    <span className='block text-[10px] font-black text-slate-400 uppercase mb-1'>Pascabayar</span>
                    <p className='text-sm text-slate-600 leading-relaxed'>
                      Tagihan biaya tetap <span className='text-indigo-600 font-bold'>+</span> biaya pemakaian kWh (variabel).
                    </p>
                  </div>
                  <div className='p-5 bg-slate-50 rounded-2xl border border-slate-100'>
                    <span className='block text-[10px] font-black text-slate-400 uppercase mb-1'>Prabayar</span>
                    <p className='text-sm text-slate-600 leading-relaxed'>
                      Berdasarkan <strong>jumlah pembelian</strong> tenaga listrik (Token).
                    </p>
                  </div>
                </div>
              </div>

              {/* Dihasilkan Sendiri */}
              <div className='space-y-6'>
                <h4 className='font-bold text-gray-800 flex items-center gap-2'>
                  <span className='w-6 h-1 bg-orange-400 rounded-full'></span> Dihasilkan Sendiri (Genset)
                </h4>
                <div className='bg-orange-50/50 p-6 rounded-[2rem] border border-orange-100'>
                  <p className='text-sm text-orange-800 mb-4 font-medium italic'>Dihitung berdasarkan parameter teknis:</p>
                  <div className='grid grid-cols-2 gap-y-4 gap-x-2 text-xs'>
                    <div className='flex items-center gap-2 text-orange-700'><span className='w-1.5 h-1.5 rounded-full bg-orange-400'></span> Kapasitas Tersedia</div>
                    <div className='flex items-center gap-2 text-orange-700'><span className='w-1.5 h-1.5 rounded-full bg-orange-400'></span> Tingkat Penggunaan</div>
                    <div className='flex items-center gap-2 text-orange-700'><span className='w-1.5 h-1.5 rounded-full bg-orange-400'></span> Jangka Waktu</div>
                    <div className='flex items-center gap-2 text-orange-700'><span className='w-1.5 h-1.5 rounded-full bg-orange-400'></span> Harga Satuan Daerah</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

{/* --- SECTION TARIF & SAAT TERUTANG (PASAL 27 & 28) --- */}
      <section className='bg-white py-24 px-4'>
        <div className='max-w-7xl mx-auto'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-16'>
            
            {/* Kiri: Tabel Tarif & Rumus */}
            <div>
              <h2 className='text-3xl font-black text-gray-900 mb-6'>Tarif & Perhitungan Pokok</h2>
              <p className='text-gray-500 mb-10'>
                Sesuai <strong>Pasal 27 & 28 Perda No. 3 Tahun 2023</strong>, berikut adalah besaran persentase pajak dan cara menghitungnya.
              </p>

              {/* Rumus Visual */}
              <div className='bg-indigo-600 rounded-3xl p-8 text-white mb-8 shadow-xl shadow-indigo-200'>
                <p className='text-indigo-200 text-xs font-bold uppercase tracking-widest mb-4'>Rumus Pokok Terutang</p>
                <div className='flex flex-col md:flex-row items-center gap-4 text-2xl font-black italic'>
                  <div className='bg-white/10 px-6 py-3 rounded-2xl border border-white/20 w-full text-center'>DPP</div>
                  <div className='text-indigo-300'>×</div>
                  <div className='bg-white/10 px-6 py-3 rounded-2xl border border-white/20 w-full text-center'>TARIF</div>
                  <div className='text-indigo-300'>=</div>
                  <div className='text-yellow-400'>PAJAK</div>
                </div>
              </div>

              {/* Tabel Tarif Modern */}
              <div className='space-y-3'>
                {[
                  { label: "Tarif Umum (Resto, Hotel, Parkir, Hiburan Umum)", rate: "10%", sub: "Berlaku untuk sebagian besar objek PBJT" },
                  { label: "Hiburan Khusus (Diskotek, Karaoke, Bar, Spa)", rate: "40%", sub: "Sesuai Pasal 27 ayat (2)", highlight: true },
                  { label: "Listrik Industri & Migas (Sumber Lain)", rate: "3%", sub: "Konsumsi dari PLN/Pihak Lain" },
                  { label: "Listrik Dihasilkan Sendiri (Genset)", rate: "1,5%", sub: "Konsumsi mandiri" }
                ].map((t, i) => (
                  <div key={i} className={`flex justify-between items-center p-5 rounded-2xl border ${t.highlight ? 'border-red-100 bg-red-50/50' : 'border-slate-100 bg-slate-50'}`}>
                    <div>
                      <p className={`font-bold ${t.highlight ? 'text-red-700' : 'text-gray-800'}`}>{t.label}</p>
                      <p className='text-[10px] text-gray-400 uppercase font-medium tracking-tight'>{t.sub}</p>
                    </div>
                    <span className={`text-2xl font-black ${t.highlight ? 'text-red-600' : 'text-indigo-600'}`}>{t.rate}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Kanan: Saat Terutang & Wilayah Pemungutan */}
            <div className='flex flex-col gap-8'>
              <div className='bg-slate-900 rounded-[2.5rem] p-8 md:p-12 text-white flex-1 relative overflow-hidden'>
                <div className='absolute -bottom-10 -right-10 w-40 h-40 bg-indigo-500/20 rounded-full blur-3xl'></div>
                
                <h3 className='text-2xl font-bold mb-8 flex items-center gap-3'>
                  <span className='w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-sm'>⏰</span>
                  Saat Terutang Pajak
                </h3>

                <div className='space-y-8 relative before:absolute before:left-[19px] before:top-2 before:bottom-2 before:w-0.5 before:bg-white/10'>
                  {[
                    { title: "Makanan & Minuman", event: "Saat pembayaran atau penyerahan dilakukan." },
                    { title: "Tenaga Listrik", event: "Saat konsumsi atau pembayaran tenaga listrik." },
                    { title: "Jasa Perhotelan", event: "Saat pembayaran atau penyerahan jasa hotel." },
                    { title: "Jasa Parkir", event: "Saat pembayaran di pintu keluar atau valet." },
                    { title: "Kesenian & Hiburan", event: "Saat pembayaran/penyerahan jasa hiburan." }
                  ].map((s, idx) => (
                    <div key={idx} className='relative pl-12 group'>
                      <div className='absolute left-0 top-1 w-10 h-10 bg-slate-800 border border-white/10 rounded-full flex items-center justify-center group-hover:bg-indigo-600 transition-colors z-10'>
                        <div className='w-2 h-2 bg-white rounded-full'></div>
                      </div>
                      <h4 className='text-sm font-black text-indigo-400 uppercase tracking-widest'>{s.title}</h4>
                      <p className='text-slate-300 text-sm mt-1'>{s.event}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Wilayah Pemungutan */}
              <div className='bg-emerald-50 border border-emerald-100 rounded-[2rem] p-8 flex items-center gap-6'>
                <div className='text-4xl'>📍</div>
                <div>
                  <h4 className='font-bold text-emerald-900'>Wilayah Pemungutan</h4>
                  <p className='text-sm text-emerald-700/80 leading-relaxed'>
                    Pajak terutang di wilayah <strong>Daerah</strong> tempat penjualan, penyerahan, dan/atau konsumsi barang dan jasa dilakukan (Kabupaten Pasuruan).
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>



      {/* --- CTA SECTION --- */}
      <section className='py-20 px-6'>
        <div className='max-w-6xl mx-auto bg-gray-900 rounded-[3rem] p-12 md:p-20 relative overflow-hidden shadow-2xl'>
          {/* Animated Orbs */}
          <div className='absolute top-0 right-0 w-80 h-80 bg-blue-600/30 rounded-full blur-[100px] animate-pulse' />
          <div className='absolute bottom-0 left-0 w-80 h-80 bg-indigo-600/20 rounded-full blur-[100px]' />

          <div className='relative z-10 text-center'>
            <h2 className='text-3xl md:text-5xl font-black text-white mb-6'>
              Siap Menjadi Wajib Pajak Taat?
            </h2>
            <p className='text-indigo-100/60 text-lg mb-12 max-w-2xl mx-auto leading-relaxed'>
              Kontribusi pajak Anda adalah energi utama pembangunan infrastruktur dan fasilitas publik di Kabupaten Pasuruan.
            </p>
            
            <div className='flex flex-wrap justify-center gap-4'>
              <button className='px-10 py-4 bg-white text-gray-900 font-black rounded-2xl hover:bg-indigo-50 transition-all hover:scale-105 active:scale-95 shadow-xl'>
                Daftar NPWPD Online
              </button>
              <button className='px-10 py-4 bg-white/10 text-white font-bold rounded-2xl backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all'>
                Panduan Lengkap (PDF)
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Pbjt