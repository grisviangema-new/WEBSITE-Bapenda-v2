import React from 'react'
import { useNavigate } from 'react-router-dom'

const Pbjt = () => {

  const navigate = useNavigate()

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
                
                {/* 1. Pelaporan Omzet -> Link ke Patriot */}
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

                {/* 2. E-Billing Pajak -> Link ke Patriot */}
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

                {/* 3. Monitoring Tapping Box -> Link Simulasi/Dashboard */}
                <div 
                    onClick={() => window.open('https://patriot.pasuruankab.go.id', '_blank')} 
                    className='group bg-slate-50 p-6 rounded-2xl border border-slate-200 hover:border-orange-500 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer'
                >
                    <div className='w-14 h-14 bg-orange-100 text-orange-600 rounded-xl flex items-center justify-center text-2xl mb-4 group-hover:bg-orange-600 group-hover:text-white transition-colors'>
                        📠
                    </div>
                    <h3 className='text-lg font-bold text-gray-800 mb-2'>Monitoring Tapping Box</h3>
                    <p className='text-sm text-gray-500 mb-4 h-10'>Cek status koneksi alat rekam transaksi usaha Anda.</p>
                    <div className='text-orange-600 text-sm font-bold flex items-center gap-2 group-hover:gap-3 transition-all'>
                        Cek Dashboard <span className='text-lg'>→</span>
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
                
                {/* TOMBOL 1: DAFTAR NPWPD (Utama - Gradient Indigo) */}
                <button 
                    onClick={() => window.open('https://patriot.pasuruankab.go.id/apps/esptpd/npwpd/enpwpd.php', '_blank')} 
                    className='group relative px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-bold rounded-full shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 hover:-translate-y-1 hover:scale-105 transition-all duration-300 cursor-pointer flex items-center justify-center gap-3 overflow-hidden ring-4 ring-transparent hover:ring-indigo-500/20'
                >
                    {/* Efek Kilau */}
                    <div className="absolute inset-0 w-full h-full bg-white/20 group-hover:translate-x-full transition-transform duration-500 -skew-x-12 -translate-x-full"></div>
                    
                    <span className='relative flex items-center gap-2'>
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>
                        Daftar NPWPD Online
                    </span>
                </button>
                
                {/* TOMBOL 2: KONSULTASI (Sekunder - Putih) */}
                <button 
                    onClick={() => { navigate('/contact'); window.scrollTo(0, 0); }}
                    className='group relative px-8 py-4 bg-white text-gray-900 font-bold rounded-full shadow-lg hover:shadow-white/20 hover:-translate-y-1 hover:scale-105 transition-all duration-300 cursor-pointer flex items-center justify-center gap-3 ring-4 ring-transparent hover:ring-white/20'
                >
                    <svg className="w-6 h-6 text-indigo-600 group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path></svg>
                    <span>Konsultasi Petugas</span>
                </button>

            </div>
        </div>
      </div>

    </div>
  )
}

export default Pbjt