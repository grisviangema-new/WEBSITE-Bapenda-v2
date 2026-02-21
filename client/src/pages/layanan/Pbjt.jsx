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
            "Makanan/minuman di Restoran, Rumah Makan, & Kafe.",
            "Jasa Boga atau Katering.",
            "Warung, Bar, dan sejenisnya."
        ],
        exceptions: [
            "Peredaran usaha tidak melebihi batas tertentu (Rp 5 Juta/Bulan).",
            "Pantry/Dapur rumah tangga atau perkantoran."
        ]
    },
    { 
        title: "Tenaga Listrik", 
        icon: "⚡", 
        color: "bg-yellow-100 text-yellow-600", 
        objects: [
            "Konsumsi listrik dari sumber lain (PLN).",
            "Listrik yang dihasilkan sendiri (Genset/Surya) untuk operasional usaha."
        ],
        exceptions: [
            "Penggunaan oleh Instansi Pemerintah & Kedutaan.",
            "Rumah Ibadah, Panti Sosial, & Yayasan Nirlaba.",
            "Rumah tangga dengan daya listrik tertentu (Subsidi)."
        ]
    },
    { 
        title: "Jasa Perhotelan", 
        icon: "🏨", 
        color: "bg-blue-100 text-blue-600", 
        objects: [
            "Hotel, Motel, Hostel, & Losmen.",
            "Vila, Pondok Wisata, & Glamping.",
            "Rumah Kos dengan jumlah kamar lebih dari 10.",
            "Fasilitas penunjang (Aula/Ruang Rapat) di hotel."
        ],
        exceptions: [
            "Asrama sekolah, mahasiswa, atau asrama suster.",
            "Rumah Sakit & Panti Jompo.",
            "Rumah Kos dengan jumlah kamar 10 atau kurang."
        ]
    },
    { 
        title: "Jasa Parkir", 
        icon: "🅿️", 
        color: "bg-gray-100 text-gray-600", 
        objects: [
            "Penyediaan tempat parkir di luar badan jalan (Gedung/Pelataran).",
            "Pelayanan memarkirkan kendaraan (Valet Parking).",
            "Penitipan Kendaraan Bermotor."
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
            "Tontonan Film (Bioskop), Pagelaran Seni, & Pameran.",
            "Diskotek, Karaoke, Kelab Malam, Bar.",
            "Mandi Uap/Spa & Panti Pijat.",
            "Wahana Air, Permainan Ketangkasan, & Sirkus."
        ],
        exceptions: [
            "Hiburan untuk promosi budaya/tradisional (Non-komersial).",
            "Layanan masyarakat oleh Pemerintah.",
            "Kegiatan hiburan dalam rangka upacara adat/keagamaan."
        ]
    },
  ];

  // --- DATA TABS KEWAJIBAN BARU ---
  const tabRequirements = {
    pendaftaran: {
      title: "Pendaftaran Objek",
      content: [
        { label: "Kewajiban Pendaftaran", items: ["Wajib mendaftarkan usaha paling lambat 30 hari sebelum memulai kegiatan.", "Setiap penambahan unit usaha atau cabang baru wajib didaftarkan sebagai objek pajak terpisah untuk mendapatkan NOPD."] },
        { label: "Syarat Administrasi", items: ["KTP Pengelola / Pemilik.", "NIB (Nomor Induk Berusaha).", "Izin Usaha Pariwisata (khusus Hotel/Hiburan).", "Foto lokasi dan titik koordinat usaha."] }
      ]
    },
    pelaporan: {
      title: "Pelaporan Omzet",
      content: [
        { label: "Batas Waktu Pelaporan", items: ["Wajib melaporkan omzet bulanan via PATRIOT e-SPTPD paling lambat tanggal 10 bulan berikutnya.", "Laporan wajib dilakukan setiap bulan meskipun omzet sedang NIHIL (Rp 0)."] },
        { label: "Mekanisme Bayar", items: ["Pembayaran dilakukan berdasarkan ID Billing yang terbit setelah laporan disetujui.", "Pembayaran dapat melalui Bank Jatim, Tokopedia, Kantor Pos, atau QRIS."] }
      ]
    },
    pemeriksaan: {
      title: "Pemenuhan Data",
      content: [
        { label: "Data Pemeriksaan", items: ["Wajib menyediakan buku laporan keuangan atau catatan omzet harian saat diminta oleh pemeriksa pajak.", "Menyimpan dokumen bukti transaksi (Bill/Nota) minimal selama 5 tahun."] },
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
            <h2 className='text-3xl md:text-4xl font-bold text-gray-900'>Rincian Objek & Pengecualian</h2>
            <p className='text-gray-500 mt-4 max-w-2xl mx-auto text-sm md:text-base'>
                Berdasarkan Perda No. 3 Tahun 2023, berikut detail apa yang dikenakan pajak dan apa yang dikecualikan.
            </p>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
            {pbjtSectors.map((item, idx) => (
                <div key={idx} className={`bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl border border-gray-100 transition-all duration-300 group flex flex-col ${idx >= 3 ? 'lg:col-span-1.5 md:col-span-1' : ''}`}>
                     
                     {/* Header Kartu */}
                     <div className='p-6 md:p-8 pb-4 flex items-center gap-4 border-b border-gray-50'>
                        <div className={`w-14 h-14 ${item.color} rounded-2xl flex items-center justify-center text-3xl flex-shrink-0 group-hover:scale-110 transition-transform`}>{item.icon}</div>
                        <h3 className='text-xl font-bold text-gray-800'>{item.title}</h3>
                     </div>

                     {/* Konten Kartu */}
                     <div className='p-6 md:p-8 pt-6 flex-1 flex flex-col gap-6'>
                        
                        {/* Objek Pajak */}
                        <div>
                            <h4 className='text-xs font-bold text-green-600 uppercase tracking-wider mb-3 flex items-center gap-2'>
                                <span className='w-2 h-2 rounded-full bg-green-500'></span> Objek Pajak
                            </h4>
                            <ul className='space-y-2'>
                                {item.objects.map((obj, i) => (
                                    <li key={i} className='text-sm text-gray-700 flex items-start gap-2'>
                                        <svg className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                        <span className='leading-snug'>{obj}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Divider Putus-putus */}
                        <div className='border-t border-dashed border-gray-200'></div>

                        {/* Pengecualian */}
                        <div>
                            <h4 className='text-xs font-bold text-red-500 uppercase tracking-wider mb-3 flex items-center gap-2'>
                                <span className='w-2 h-2 rounded-full bg-red-500'></span> Dikecualikan
                            </h4>
                            <ul className='space-y-2'>
                                {item.exceptions.map((exc, i) => (
                                    <li key={i} className='text-sm text-gray-500 flex items-start gap-2'>
                                        <svg className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                                        <span className='leading-snug italic'>{exc}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                     </div>
                </div>
            ))}
        </div>
      </div>
        
    

{/* --- TARIF & SIMULASI (PASAL 27) --- */}
      <div className='bg-indigo-900 py-20 px-4 md:px-6 text-white'>
        <div className='max-w-7xl mx-auto'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
                
                {/* Info Tarif */}
                <div>
                    <h2 className='text-3xl font-bold mb-6'>Tarif Pajak PBJT</h2>
                    <p className='text-indigo-200 mb-8'>
                        Berdasarkan <strong>Pasal 27 Perda No. 3 Tahun 2023</strong>, tarif pajak ditetapkan berbeda sesuai jenis objeknya.
                    </p>
                    
                    <div className='space-y-4'>
                        {/* Tarif Umum */}
                        <div className='bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 flex items-start gap-4'>
                            <div className='text-3xl'>🏷️</div>
                            <div>
                                <h4 className='text-xl font-bold text-yellow-300'>Tarif Umum: 10%</h4>
                                <p className='text-sm text-indigo-100 mt-1'>
                                    Berlaku untuk Makanan/Minuman, Perhotelan, Parkir, dan Hiburan Umum.
                                </p>
                            </div>
                        </div>

                        {/* Tarif Hiburan Khusus */}
                        <div className='bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 flex items-start gap-4'>
                            <div className='text-3xl'>💃</div>
                            <div>
                                <h4 className='text-xl font-bold text-red-300'>Hiburan Khusus: 40%</h4>
                                <p className='text-sm text-indigo-100 mt-1'>
                                    Khusus untuk: Diskotek, Karaoke, Kelab Malam, Bar, dan Mandi Uap/Spa.
                                </p>
                            </div>
                        </div>

                        {/* Tarif Listrik Khusus */}
                        <div className='bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 flex items-start gap-4'>
                            <div className='text-3xl'>⚡</div>
                            <div>
                                <h4 className='text-xl font-bold text-cyan-300'>Tenaga Listrik Tertentu</h4>
                                <ul className='text-sm text-indigo-100 mt-1 list-disc pl-4'>
                                    <li><strong>3%</strong> untuk Industri, Migas (Sumber PLN/Lain).</li>
                                    <li><strong>1,5%</strong> untuk Listrik Dihasilkan Sendiri (Genset).</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Simulasi Kalkulator Visual */}
                <div className='bg-white text-gray-800 rounded-3xl p-6 md:p-8 shadow-2xl'>
                    <div className='flex items-center justify-between mb-6 border-b border-gray-100 pb-4'>
                        <h3 className='font-bold text-lg'>Contoh Perhitungan</h3>
                        <span className='bg-green-100 text-green-700 text-xs px-2 py-1 rounded font-bold'>Restoran (10%)</span>
                    </div>

                    <div className='space-y-4 font-mono text-sm md:text-base'>
                        <div className='flex justify-between'>
                            <span className='text-gray-500'>Nasi Goreng Spesial (2x)</span>
                            <span>Rp 50.000</span>
                        </div>
                        <div className='flex justify-between'>
                            <span className='text-gray-500'>Es Jeruk (2x)</span>
                            <span>Rp 20.000</span>
                        </div>
                        <div className='border-t border-dashed border-gray-300 my-2'></div>
                        <div className='flex justify-between font-bold'>
                            <span>Dasar Pengenaan Pajak</span>
                            <span>Rp 70.000</span>
                        </div>
                        <div className='flex justify-between text-indigo-600 font-bold items-center bg-indigo-50 p-2 rounded'>
                            <span>PBJT (10%)</span>
                            <span>+ Rp 7.000</span>
                        </div>
                        <div className='border-t-2 border-gray-800 my-2'></div>
                        <div className='flex justify-between text-xl font-extrabold'>
                            <span>Total Bayar</span>
                            <span>Rp 77.000</span>
                        </div>
                    </div>
                    <div className='mt-6 text-center text-xs text-gray-400'>
                        *Pajak dibebankan kepada konsumen akhir.
                    </div>
                </div>

            </div>
        </div>
      </div>

      {/* --- MENU LAYANAN WAJIB PAJAK (INTERAKTIF) --- */}
      <div className='bg-white py-24 px-4 md:px-6'>
        <div className='max-w-7xl mx-auto'>
            <div className='text-center mb-16'>
                <h2 className='text-3xl md:text-4xl font-bold text-gray-900'>Layanan Wajib Pajak PBJT</h2>
                <p className='text-gray-500 mt-4 text-sm md:text-base'>Akses cepat layanan perpajakan daerah untuk kemudahan bisnis Anda.</p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
                
                {/* 1. Pendaftaran Objek Baru */}
                <div 
                    onClick={() => window.open('https://patriot.pasuruankab.go.id', '_blank')} 
                    className='group bg-slate-50 p-6 rounded-2xl border border-slate-200 hover:border-orange-500 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer'
                >
                    <div className='w-14 h-14 bg-orange-100 text-orange-600 rounded-xl flex items-center justify-center text-2xl mb-4 group-hover:bg-orange-600 group-hover:text-white transition-colors'>
                        📠
                    </div>
                    <h3 className='text-lg font-bold text-gray-800 mb-2'>Pendaftaran Objek Baru</h3>
                    <p className='text-sm text-gray-500 mb-4 h-10'>Daftarkan objek pajak baru melalui PATRIOT.</p>
                    <div className='text-orange-600 text-sm font-bold flex items-center gap-2 group-hover:gap-3 transition-all'>
                        Daftar Sekarang <span className='text-lg'>→</span>
                    </div>
                </div>

                {/* 2. Pelaporan Omzet -> Link ke Patriot */}
                <div 
                    onClick={openPatriot}
                    className='group bg-slate-50 p-6 rounded-2xl border border-slate-200 hover:border-blue-500 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer'
                >
                    <div className='w-14 h-14 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center text-2xl mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors'>
                        📊
                    </div>
                    <h3 className='text-lg font-bold text-gray-800 mb-2'>Pelaporan Omzet</h3>
                    <p className='text-sm text-gray-500 mb-4 h-10'>Lapor omzet bulanan secara online melalui e-SPTPD PATRIOT.</p>
                    <div className='text-blue-600 text-sm font-bold flex items-center gap-2 group-hover:gap-3 transition-all'>
                        Lapor Sekarang <span className='text-lg'>→</span>
                    </div>
                </div>

                {/* 3. E-Billing Pajak -> Link ke Patriot */}
                <div 
                    onClick={openPatriot}
                    className='group bg-slate-50 p-6 rounded-2xl border border-slate-200 hover:border-green-500 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer'
                >
                    <div className='w-14 h-14 bg-green-100 text-green-600 rounded-xl flex items-center justify-center text-2xl mb-4 group-hover:bg-green-600 group-hover:text-white transition-colors'>
                        🧾
                    </div>
                    <h3 className='text-lg font-bold text-gray-800 mb-2'>E-Billing Pajak</h3>
                    <p className='text-sm text-gray-500 mb-4 h-10'>Buat kode billing (ID Billing) untuk pembayaran pajak.</p>
                    <div className='text-green-600 text-sm font-bold flex items-center gap-2 group-hover:gap-3 transition-all'>
                        Buat Billing <span className='text-lg'>→</span>
                    </div>
                </div>

                

                {/* 4. Pengajuan Keringanan -> Link ke Halaman Keberatan */}
                <div 
                    onClick={() => { navigate('/keberatan'); window.scrollTo(0, 0); }}
                    className='group bg-slate-50 p-6 rounded-2xl border border-slate-200 hover:border-purple-500 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer'
                >
                    <div className='w-14 h-14 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center text-2xl mb-4 group-hover:bg-purple-600 group-hover:text-white transition-colors'>
                        🤝
                    </div>
                    <h3 className='text-lg font-bold text-gray-800 mb-2'>Pengajuan Keringanan</h3>
                    <p className='text-sm text-gray-500 mb-4 h-10'>Ajukan permohonan pengurangan atau angsuran pajak.</p>
                    <div className='text-purple-600 text-sm font-bold flex items-center gap-2 group-hover:gap-3 transition-all'>
                        Ajukan Permohonan <span className='text-lg'>→</span>
                    </div>
                </div>

            </div>
        </div>
      </div>

      {/* --- CTA SECTION (Lebih Menarik) --- */}
      <div className='relative bg-gray-900 py-20 px-6 overflow-hidden'>
        {/* Dekorasi Background */}
        <div className='absolute top-0 right-0 w-96 h-96 bg-indigo-600 rounded-full blur-[100px] opacity-20 pointer-events-none transform translate-x-1/2 -translate-y-1/2'></div>
        <div className='absolute bottom-0 left-0 w-96 h-96 bg-purple-600 rounded-full blur-[100px] opacity-20 pointer-events-none transform -translate-x-1/2 translate-y-1/2'></div>

        <div className='relative z-10 max-w-4xl mx-auto text-center'>
            <h2 className='text-3xl md:text-5xl font-extrabold text-white mb-6 tracking-tight'>
              Anda Pelaku Usaha PBJT?
            </h2>
            <p className='text-gray-300 text-lg mb-10 max-w-2xl mx-auto leading-relaxed'>
                Segera daftarkan usaha Anda untuk mendapatkan NPWPD dan berkontribusi langsung dalam pembangunan Kabupaten Pasuruan.
            </p>
            
            <div className='flex flex-col sm:flex-row justify-center gap-6'>
                
                {/* Button 1: Primary - Daftar */}
              <button 
                onClick={() => window.open('https://patriot.pasuruankab.go.id/apps/esptpd/npwpd/enpwpd.php', '_blank')} 
                className='w-full lg:w-auto px-10 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-2xl shadow-lg shadow-blue-600/30 transition-all hover:-translate-y-1 flex items-center justify-center gap-3 group'
              >
                <svg className="w-5 h-5 group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"></path></svg>
                Daftar NPWPD Baru
              </button>

              {/* Button 2: Secondary - Perubahan & Penghapusan */}
              <button 
                onClick={() => window.open('https://patriot.pasuruankab.go.id/apps/esptpd/', '_blank')} 
                className='w-full lg:w-auto px-10 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-2xl backdrop-blur-md border border-white/10 transition-all hover:-translate-y-1 flex items-center justify-center gap-3 group'
              >
                <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h10a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>
                Update & Penghapusan
              </button>

              {/* Button 3: Ghost/Outline - WA */}
              <button 
                onClick={() => window.open('https://api.whatsapp.com/send/?phone=628881800800&text=Halo+Admin%2C+saya+butuh+bantuan.&type=phone_number&app_absent=0', '_blank')} 
                className='w-full lg:w-auto px-10 py-4 bg-transparent hover:bg-white/5 text-gray-300 hover:text-white font-bold rounded-2xl border border-white/5 hover:border-white/20 transition-all flex items-center justify-center gap-3 group'
              >
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.89 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.744-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
                Chat Admin
              </button>

            </div>
        </div>
      </div>

    </div>
  )
}

export default Pbjt