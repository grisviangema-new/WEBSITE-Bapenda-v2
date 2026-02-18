import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Npwpd = () => {

  const navigate = useNavigate()
  const [activeModal, setActiveModal] = useState(null)

  // --- DATA MODAL (HUKUM & SANKSI) ---
  const modalContent = {
    hukum: {
      title: "Detail Dasar Hukum NPWPD",
      icon: "⚖️",
      sections: [
        {
          uu: "Perbup Pasuruan No. 17 Tahun 2025",
          pasal: "Pasal 5 - NPWPD",
          isi: [
            "Ayat (1): Setiap Wajib Pajak wajib memiliki NPWPD.",
            "Ayat (2): Wajib Pajak yang belum memiliki NPWPD wajib mendaftarkan diri kepada Kepala Perangkat Daerah.",
            "Ayat (6): Jika tidak mendaftar, Kepala Perangkat Daerah dapat menerbitkan NPWPD secara jabatan (Ex-Officio) berdasarkan data yang dimiliki."
          ]
        },
        {
          uu: "UU No. 1 Tahun 2022 (HKPD)",
          pasal: "Pasal 4",
          isi: [
            "Pemerintah Daerah berwenang memungut Pajak Daerah dan Retribusi Daerah berdasarkan prinsip legalitas, kepastian hukum, dan keadilan.",
            "Klasifikasi pajak daerah disederhanakan, termasuk penggabungan 5 jenis pajak berbasis konsumsi menjadi PBJT."
          ]
        },
        {
          uu: "PP No. 35 Tahun 2023",
          pasal: "Pasal 40",
          isi: [
            "Pendaftaran wajib pajak dilakukan paling lambat sebelum melakukan kegiatan usaha (untuk Self Assessment) atau saat objek pajak dimiliki/dikuasai."
          ]
        }
      ]
    },
    sanksi: {
      title: "Ketentuan Sanksi Administratif",
      icon: "⚠️",
      sections: [
        {
          uu: "Sanksi Keterlambatan Bayar",
          pasal: "Pasal 378 Perbup 17/2025",
          isi: [
            "Pembayaran pajak yang tidak tepat waktu dikenakan sanksi administratif berupa Bunga.",
            "Dihitung dari tanggal jatuh tempo sampai tanggal pembayaran.",
            "Jangka waktu pengenaan sanksi paling lama 24 (dua puluh empat) bulan.",
            "Bagian dari bulan dihitung penuh 1 (satu) bulan."
          ]
        },
        {
          uu: "Sanksi Tidak Lapor SPTPD",
          pasal: "Pasal 97 Ayat (3) & (4)",
          isi: [
            "Wajib Pajak (PBJT) yang tidak melaksanakan kewajiban pelaporan SPTPD dapat dikenakan sanksi administratif berupa Denda.",
            "Sanksi ditetapkan dengan Surat Tagihan Pajak Daerah (STPD)."
          ]
        },
        {
          uu: "Penerbitan Secara Jabatan",
          pasal: "Pasal 225 Ayat (2)",
          isi: [
            "Jika Wajib Pajak tidak mendaftar atau tidak lapor, dapat diterbitkan SKPDKB (Surat Ketetapan Pajak Daerah Kurang Bayar) secara jabatan ditambah sanksi administratif."
          ]
        }
      ]
    }
  }

  // --- KOMPONEN MODAL ---
  const DetailModal = () => {
    if (!activeModal) return null;
    const data = modalContent[activeModal];

    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
        <div className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden animate-slide-up flex flex-col max-h-[90vh]">
          {/* Header */}
          <div className="bg-blue-600 p-6 flex justify-between items-center text-white flex-shrink-0">
            <h3 className="text-lg md:text-xl font-bold flex items-center gap-3">
                <span className="text-2xl">{data.icon}</span> {data.title}
            </h3>
            <button onClick={() => setActiveModal(null)} className="hover:bg-blue-700 p-2 rounded-full transition">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>
          </div>
          
          {/* Body (Scrollable) */}
          <div className="p-6 overflow-y-auto custom-scrollbar">
            {data.sections.map((section, idx) => (
              <div key={idx} className="mb-6 last:mb-0 border-b border-gray-100 last:border-0 pb-6 last:pb-0">
                <span className="bg-blue-100 text-blue-800 text-xs font-bold px-2 py-1 rounded mb-2 inline-block">{section.uu}</span>
                <h4 className="text-lg font-bold text-gray-800 mb-3">{section.pasal}</h4>
                <ul className="space-y-3">
                    {section.isi.map((item, i) => (
                        <li key={i} className="flex gap-3 text-gray-600 text-sm leading-relaxed">
                            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>{item}
                        </li>
                    ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="bg-gray-50 p-4 text-right flex-shrink-0">
            <button onClick={() => setActiveModal(null)} className="px-6 py-2 bg-gray-200 text-gray-700 font-bold rounded-lg hover:bg-gray-300 transition">Tutup</button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className='bg-slate-50 min-h-screen font-sans'>
      <DetailModal />

      {/* --- HERO SECTION --- */}
      <div className='relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-20 md:py-24 px-4 md:px-6 overflow-hidden'>
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg"><defs><pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" /></pattern></defs><rect width="100%" height="100%" fill="url(#grid)" /></svg>
        </div>
        <div className='relative z-10 max-w-7xl mx-auto text-center'>
          <span className='inline-block py-1 px-3 rounded-full bg-blue-700/50 border border-blue-400 text-blue-200 text-[10px] md:text-xs font-semibold tracking-wider mb-4 animate-fade-in-up'>LAYANAN PERPAJAKAN DAERAH</span>
          <h1 className='text-3xl md:text-6xl font-extrabold mb-6 leading-tight tracking-tight drop-shadow-sm'>Layanan Pendaftaran <br/> <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-cyan-200'>NPWPD</span></h1>
          <p className='text-blue-100 text-base md:text-xl max-w-2xl mx-auto leading-relaxed font-light px-2'>
            Nomor Pokok Wajib Pajak Daerah sebagai identitas resmi sesuai Peraturan Bupati Pasuruan No. 17 Tahun 2025.
          </p>
        </div>
      </div>

      {/* --- DASAR HUKUM BUTTONS (Floating Card) --- */}
      <div className='max-w-5xl mx-auto px-4 md:px-6 -mt-12 md:-mt-16 relative z-20'>
        <div className='bg-white rounded-2xl shadow-2xl p-6 md:p-8 border-t-4 border-yellow-500 flex flex-col md:flex-row items-center gap-6 md:gap-8'>
            <div className='flex-shrink-0 bg-yellow-50 p-4 rounded-full'>
                <svg className="w-10 h-10 md:w-12 md:h-12 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"></path></svg>
            </div>
            <div className='flex-1 text-center md:text-left'>
                <h2 className='text-lg md:text-xl font-bold text-gray-800 mb-2'>Dasar Hukum & Regulasi</h2>
                <p className='text-gray-600 leading-relaxed text-sm md:text-base mb-2'>Klik tombol di samping untuk melihat rincian pasal terkait <span className='font-bold text-blue-800'>Perbup No. 17 Tahun 2025</span> dan Sanksi Administrasi.</p>
            </div>
            <div className='hidden md:block w-px h-24 bg-gray-200'></div>
            <div className='flex flex-col gap-3 w-full md:w-auto'>
                <button onClick={() => setActiveModal('hukum')} className='flex items-center justify-between gap-3 px-4 py-3 md:py-2.5 bg-blue-50 text-blue-700 text-xs md:text-sm font-bold rounded-lg hover:bg-blue-100 hover:scale-105 transition-all w-full group'><span>📜 Lihat Dasar Hukum</span><svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg></button>
                <button onClick={() => setActiveModal('sanksi')} className='flex items-center justify-between gap-3 px-4 py-3 md:py-2.5 bg-red-50 text-red-700 text-xs md:text-sm font-bold rounded-lg hover:bg-red-100 hover:scale-105 transition-all w-full group'><span>⚠️ Cek Sanksi Admin</span><svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg></button>
            </div>
        </div>
      </div>

      {/* --- KATEGORI PAJAK (CLASSIFIED) --- */}
      <div className='max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-24'>
        <div className='text-center mb-12 md:mb-16'>
            <h2 className='text-2xl md:text-3xl font-bold text-gray-900'>Klasifikasi Pajak Daerah</h2>
            <p className='text-gray-500 mt-3 max-w-3xl mx-auto text-sm md:text-base'>
                Sesuai Perbup No. 17 Tahun 2025, Pajak Daerah dikelompokkan berdasarkan sifat pemungutannya.
            </p>
        </div>

        {/* 1. KELOMPOK PBJT (5 JENIS) */}
        <div className='mb-12'>
            <div className='flex items-center gap-4 mb-6'>
                <div className='h-px flex-1 bg-gray-200'></div>
                <h3 className='text-sm md:text-xl font-bold text-blue-800 bg-blue-50 px-4 md:px-6 py-2 rounded-full border border-blue-100 whitespace-nowrap'>
                    PBJT (Pajak Barang & Jasa Tertentu)
                </h3>
                <div className='h-px flex-1 bg-gray-200'></div>
            </div>
            <p className='text-center text-gray-500 text-xs md:text-sm mb-8 px-4'>Sistem <i>Self Assessment</i> (Wajib Pajak menghitung, melapor, dan membayar sendiri).</p>
            
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4'>
                 {[
                    { title: "Makanan & Minuman", desc: "Restoran, Cafe, Warung.", icon: "🍔" },
                    { title: "Tenaga Listrik", desc: "Listrik Non-PLN.", icon: "⚡" },
                    { title: "Jasa Perhotelan", desc: "Hotel, Villa, Kost.", icon: "🏨" },
                    { title: "Jasa Parkir", desc: "Parkir Valet/Off-street.", icon: "🅿️" },
                    { title: "Kesenian & Hiburan", desc: "Bioskop, Karaoke, Event.", icon: "🎬" },
                ].map((item, idx) => (
                    <div key={idx} className='bg-white p-4 md:p-6 rounded-xl border border-blue-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all text-center flex flex-col items-center h-full'>
                        <div className='text-3xl md:text-4xl mb-3'>{item.icon}</div>
                        <h4 className='font-bold text-gray-800 mb-1 text-xs md:text-sm line-clamp-2'>{item.title}</h4>
                        <p className='text-[10px] md:text-xs text-gray-500 line-clamp-2'>{item.desc}</p>
                    </div>
                ))}
            </div>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12'>
            
            {/* 2. PAJAK SELF ASSESSMENT LAINNYA */}
            <div>
                <div className='flex items-center gap-3 mb-6'>
                    <span className='w-1.5 h-6 md:w-2 md:h-8 bg-purple-500 rounded-full'></span>
                    <h3 className='text-lg md:text-xl font-bold text-gray-800'>Pajak Daerah Lainnya</h3>
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                    <div className='bg-white p-5 rounded-xl border border-purple-100 shadow-sm hover:border-purple-300 transition-all'>
                        <div className='flex items-center gap-3 mb-2'>
                            <span className='text-2xl'>🪨</span>
                            <h4 className='font-bold text-purple-900 text-sm md:text-base'>Pajak MBLB</h4>
                        </div>
                        <p className='text-xs md:text-sm text-gray-500'>Mineral Bukan Logam dan Batuan (Pasir, Kerikil, Tanah Urug).</p>
                    </div>
                    <div className='bg-white p-5 rounded-xl border border-purple-100 shadow-sm hover:border-purple-300 transition-all'>
                        <div className='flex items-center gap-3 mb-2'>
                            <span className='text-2xl'>📜</span>
                            <h4 className='font-bold text-purple-900 text-sm md:text-base'>BPHTB</h4>
                        </div>
                        <p className='text-xs md:text-sm text-gray-500'>Bea Perolehan Hak atas Tanah dan Bangunan.</p>
                    </div>
                     <div className='bg-white p-5 rounded-xl border border-purple-100 shadow-sm hover:border-purple-300 transition-all sm:col-span-2'>
                        <div className='flex items-center gap-3 mb-2'>
                            <span className='text-2xl'>🕊️</span>
                            <h4 className='font-bold text-purple-900 text-sm md:text-base'>Sarang Burung Walet</h4>
                        </div>
                        <p className='text-xs md:text-sm text-gray-500'>Pajak atas kegiatan pengambilan dan/atau pengusahaan sarang burung walet.</p>
                    </div>
                </div>
            </div>

            {/* 3. OFFICIAL ASSESSMENT */}
            <div>
                <div className='flex items-center gap-3 mb-6'>
                    <span className='w-1.5 h-6 md:w-2 md:h-8 bg-green-500 rounded-full'></span>
                    <h3 className='text-lg md:text-xl font-bold text-gray-800'>Official Assessment</h3>
                </div>
                <p className='text-xs md:text-sm text-gray-500 mb-4'>Ditetapkan oleh Pemerintah Daerah melalui SKPD (Surat Ketetapan Pajak Daerah).</p>
                
                <div className='space-y-4'>
                    <div className='flex items-start gap-4 bg-white p-4 rounded-xl border border-green-100 shadow-sm'>
                        <div className='text-xl md:text-2xl bg-green-50 w-10 h-10 flex items-center justify-center rounded-lg flex-shrink-0'>📢</div>
                        <div>
                            <h4 className='font-bold text-gray-800 text-sm md:text-base'>Pajak Reklame</h4>
                            <p className='text-xs md:text-sm text-gray-500'>Billboard, Videotron, Spanduk, Sticker, Baliho.</p>
                        </div>
                    </div>
                    <div className='flex items-start gap-4 bg-white p-4 rounded-xl border border-green-100 shadow-sm'>
                        <div className='text-xl md:text-2xl bg-green-50 w-10 h-10 flex items-center justify-center rounded-lg flex-shrink-0'>💧</div>
                        <div>
                            <h4 className='font-bold text-gray-800 text-sm md:text-base'>Pajak Air Tanah (PAT)</h4>
                            <p className='text-xs md:text-sm text-gray-500'>Pemanfaatan air tanah untuk keperluan komersial.</p>
                        </div>
                    </div>
                    <div className='flex items-start gap-4 bg-white p-4 rounded-xl border border-green-100 shadow-sm'>
                        <div className='text-xl md:text-2xl bg-green-50 w-10 h-10 flex items-center justify-center rounded-lg flex-shrink-0'>🏠</div>
                        <div>
                            <h4 className='font-bold text-gray-800 text-sm md:text-base'>PBB-P2</h4>
                            <p className='text-xs md:text-sm text-gray-500'>Pajak Bumi dan Bangunan Perdesaan dan Perkotaan.</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
      </div>

      {/* --- INFO SECTION --- */}
      <div className='bg-white py-16 md:py-24 border-t border-gray-100'>
        <div className='max-w-7xl mx-auto px-4 md:px-6'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16'>
                
                {/* Left: Persyaratan UPDATE SESUAI REGULASI */}
                <div>
                    <div className='flex items-center gap-4 mb-6 md:mb-8'>
                        <span className='flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-blue-100 text-blue-600 font-bold text-lg md:text-xl'>1</span>
                        <h3 className='text-xl md:text-2xl font-bold text-gray-900'>Persyaratan Dokumen</h3>
                    </div>
                    
                    <div className='bg-slate-50 rounded-2xl p-5 md:p-6 border border-slate-200'>
                        {/* WP Perorangan */}
                        <h4 className='font-bold text-blue-800 mb-3 text-sm md:text-base flex items-center gap-2'>
                            <span className='w-2 h-2 bg-blue-500 rounded-full'></span> Wajib Pajak Perorangan
                        </h4>
                        <ul className='space-y-3 mb-6 pl-4'>
                            <li className='flex items-start gap-3'>
                                <span className='text-green-500 mt-0.5 text-sm'>✓</span>
                                <span className='text-gray-700 text-sm md:text-base'>Mengisi formulir pendaftaran.</span>
                            </li>
                            <li className='flex items-start gap-3'>
                                <span className='text-green-500 mt-0.5 text-sm'>✓</span>
                                <span className='text-gray-700 text-sm md:text-base'>Melampirkan Kartu Tanda Penduduk (KTP) yang sah.</span>
                            </li>
                        </ul>

                        {/* WP Badan */}
                        <h4 className='font-bold text-blue-800 mb-3 text-sm md:text-base flex items-center gap-2'>
                            <span className='w-2 h-2 bg-blue-500 rounded-full'></span> Wajib Pajak Badan
                        </h4>
                        <ul className='space-y-3 pl-4'>
                            <li className='flex items-start gap-3'>
                                <span className='text-green-500 mt-0.5 text-sm'>✓</span>
                                <span className='text-gray-700 text-sm md:text-base'>Mengisi formulir pendaftaran.</span>
                            </li>
                            <li className='flex items-start gap-3'>
                                <span className='text-green-500 mt-0.5 text-sm'>✓</span>
                                <span className='text-gray-700 text-sm md:text-base'>
                                    Melampirkan Nomor Induk Berusaha (NIB).
                                    <div className='text-xs text-orange-600 font-normal mt-1 bg-orange-50 p-2 rounded'>
                                        *Jika belum memiliki NIB, wajib melampirkan Akta Pendirian dan/atau perubahannya.
                                    </div>
                                </span>
                            </li>
                            <li className='flex items-start gap-3'>
                                <span className='text-green-500 mt-0.5 text-sm'>✓</span>
                                <span className='text-gray-700 text-sm md:text-base'>Melampirkan KTP salah satu pengurus.</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Right: Alur */}
                <div>
                    <div className='flex items-center gap-4 mb-6 md:mb-8'>
                        <span className='flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-blue-100 text-blue-600 font-bold text-lg md:text-xl'>2</span>
                        <h3 className='text-xl md:text-2xl font-bold text-gray-900'>Alur Pendaftaran</h3>
                    </div>

                    <div className='relative pl-4 space-y-8'>
                        <div className='absolute left-[19px] top-2 bottom-2 w-0.5 bg-gray-200'></div>
                        {[{title:"Pengajuan Berkas", desc:"Isi formulir & lampirkan syarat via PATRIOT."}, {title:"Verifikasi Berkas", desc:"Verifikasi dokumen oleh petugas (bila diperlukan verifikasi lapangan)."}, {title:"NPWPD Terbit", desc:"Diterbitkan paling lama 1 hari kerja jika lengkap (Pasal 7)."}].map((step, idx) => (
                            <div key={idx} className='relative flex gap-6 group'>
                                <div className='relative z-10 w-10 h-10 bg-white border-2 border-blue-600 rounded-full flex items-center justify-center flex-shrink-0'>
                                    <span className='text-xs font-bold text-blue-600'>{idx+1}</span>
                                </div>
                                <div>
                                    <h4 className='text-base md:text-lg font-bold text-gray-900'>{step.title}</h4>
                                    <p className='text-gray-500 text-xs md:text-sm mt-1'>{step.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
      </div>

      {/* --- CTA SECTION --- */}
      <div className='relative bg-gray-900 py-20 px-6 overflow-hidden'>
        {/* Dekorasi Background */}
        <div className='absolute top-0 right-0 w-96 h-96 bg-blue-600 rounded-full blur-[100px] opacity-20 pointer-events-none transform translate-x-1/2 -translate-y-1/2'></div>
        <div className='absolute bottom-0 left-0 w-96 h-96 bg-purple-600 rounded-full blur-[100px] opacity-20 pointer-events-none transform -translate-x-1/2 translate-y-1/2'></div>

        <div className='relative z-10 max-w-4xl mx-auto text-center'>
            <h2 className='text-3xl md:text-5xl font-extrabold text-white mb-6 tracking-tight'>
              Siap Menjadi Wajib Pajak Bijak?
            </h2>
            <p className='text-gray-300 text-lg mb-10 max-w-2xl mx-auto leading-relaxed'>
                Dengan memiliki NPWPD, Anda turut berkontribusi langsung dalam pembangunan infrastruktur dan pelayanan publik Kabupaten Pasuruan.
            </p>
            
            <div className='flex flex-col sm:flex-row justify-center gap-6'>
                
                {/* TOMBOL 1: DAFTAR NPWPD (Utama - Gradient Biru) */}
                <button 
                    onClick={() => window.open('https://patriot.pasuruankab.go.id/apps/esptpd/npwpd/enpwpd.php', '_blank')} 
                    className='group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-bold rounded-full shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:-translate-y-1 hover:scale-105 transition-all duration-300 cursor-pointer flex items-center justify-center gap-3 overflow-hidden ring-4 ring-transparent hover:ring-blue-500/20'
                >
                    {/* Efek Kilau (Shine) saat hover */}
                    <div className="absolute inset-0 w-full h-full bg-white/20 group-hover:translate-x-full transition-transform duration-500 -skew-x-12 -translate-x-full"></div>
                    
                    <span className='relative flex items-center gap-2'>
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>
                        Daftar NPWPD via PATRIOT
                    </span>
                </button>
                
                {/* TOMBOL 2: OSS (Sekunder - Putih Bersih) */}
                <a 
                    href="https://oss.go.id" 
                    target="_blank" 
                    rel="noreferrer" 
                    className='group relative px-8 py-4 bg-white text-gray-900 font-bold rounded-full shadow-lg hover:shadow-white/20 hover:-translate-y-1 hover:scale-105 transition-all duration-300 cursor-pointer flex items-center justify-center gap-3 ring-4 ring-transparent hover:ring-white/20'
                >
                    <svg className="w-6 h-6 text-green-600 group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    <span>Buat Izin via OSS</span>
                    
                    {/* Panah kecil yang bergerak saat hover */}
                    <svg className="w-4 h-4 text-gray-400 group-hover:text-gray-900 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </a>

            </div>
        </div>
      </div>

    </div>
  )
}

export default Npwpd