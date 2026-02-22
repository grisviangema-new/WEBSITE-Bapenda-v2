import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Npwpd = () => {
  const navigate = useNavigate()
  const [activeModal, setActiveModal] = useState(null)
  const [activeTab, setActiveTab] = useState('pendaftaran') // State untuk mengontrol tab persyaratan

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
            "Bagian dari bulan dihitung penuh 1 (satu) bulan."
          ]
        }
      ]
    }
  }

  // --- DATA PERSYARATAN (TABS) ---
  const tabRequirements = {
    pendaftaran: {
      title: "Pendaftaran NPWPD & Objek",
      content: [
        { label: "Wajib Pajak Perorangan", items: ["Formulir pendaftaran PATRIOT.", "Scan/Foto KTP Asli.", "NIB (Nomor Induk Berusaha) jika ada."] },
        { label: "Wajib Pajak Badan", items: ["Formulir pendaftaran PATRIOT.", "Identitas KTP Pengurus.", "NIB Aktif.", "*jika tidak memiliki NIB, wajib melampirkan Akta Pendirian Perusahaan."] },
        { label: "Pendaftaran Objek Pajak", items: ["Identitas NPWPD", "Data detail objek (Luas lahan, jumlah kamar/kursi, dll).", "Foto lokasi objek pajak."] }
      ]
    },
    penonaktifan: {
      title: "Penonaktifan (Non-Aktif)",
      desc: "Digunakan bagi Wajib Pajak yang usahanya berhenti beroperasi untuk sementara waktu.",
      content: [
        { label: "Syarat Administrasi", items: ["Surat permohonan penonaktifan NPWPD.", "Surat keterangan penghentian usaha dari Desa/Kelurahan.", "Laporan pajak terakhir (Nihil).", "Foto kondisi usaha saat ini (Tutup)."] }
      ]
    },
    penghapusan: {
      title: "Penghapusan (Permanen)",
      desc: "Digunakan jika usaha bubar, pemilik meninggal dunia, atau pindah domisili keluar wilayah.",
      content: [
        { label: "Syarat Administrasi", items: ["Surat permohonan penghapusan NPWPD.", "Dokumen pembubaran usaha/Akta likuidasi.", "Surat Kematian (jika pemilik meninggal).", "Syarat Mutlak: Melunasi seluruh tunggakan pajak (STPD/SKPD).", "Mengembalikan sertifikat/kartu NPWPD asli."] }
      ]
    }
  }

  const DetailModal = () => {
    if (!activeModal) return null;
    const data = modalContent[activeModal];
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
        <div className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden animate-slide-up flex flex-col max-h-[90vh]">
          <div className="bg-blue-600 p-6 flex justify-between items-center text-white">
            <h3 className="text-lg md:text-xl font-bold flex items-center gap-3">
              <span className="text-2xl">{data.icon}</span> {data.title}
            </h3>
            <button onClick={() => setActiveModal(null)} className="hover:bg-blue-700 p-2 rounded-full transition">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>
          </div>
          <div className="p-6 overflow-y-auto">
            {data.sections.map((section, idx) => (
              <div key={idx} className="mb-6 last:mb-0 border-b border-gray-100 last:border-0 pb-6">
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
        </div>
      </div>
    )
  }

  return (
    <div className='bg-slate-50 min-h-screen font-sans pb-20'>
      <DetailModal />

      {/* --- HERO SECTION --- */}
      <div className="relative bg-gradient-to-br from-blue-950 via-blue-900 to-indigo-900 text-white py-20 md:py-28 px-4 md:px-6 overflow-hidden text-center">
  
      {/* --- MOTIF 1: MESH GRID --- */}
      <div className="absolute inset-0 opacity-10" 
          style={{ backgroundImage: `radial-gradient(#fff 1px, transparent 0)`, backgroundSize: '40px 40px' }}>
      </div>

      {/* --- MOTIF 2: FLOATING GLOW ORBS --- */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-400/20 rounded-full blur-[100px] animate-pulse" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-indigo-500/20 rounded-full blur-[100px]" />

      {/* --- MOTIF 3: ABSTRACT LINES --- */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0 100 C 20 0 50 0 100 100" stroke="white" strokeWidth="0.1" fill="none" />
          <path d="M0 80 C 30 20 70 20 100 80" stroke="white" strokeWidth="0.1" fill="none" />
        </svg>
      </div>

      {/* --- CONTENT --- */}
      <div className="relative z-10">
        <h1 className="text-3xl md:text-6xl font-extrabold mb-6 leading-tight tracking-tight drop-shadow-xl">
          Administrasi <br /> 
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-cyan-200">
            NPWPD & Objek
          </span>
        </h1>
        <p className="text-blue-100 text-base md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
          Layanan pendaftaran, perubahan status, hingga penghapusan identitas Wajib Pajak Daerah secara transparan dan terintegrasi.
        </p>
        
        <div className="mt-8 flex justify-center gap-2">
            <div className="w-12 h-1 bg-cyan-400 rounded-full"></div>
            <div className="w-4 h-1 bg-blue-300 rounded-full"></div>
        </div>
      </div>
    </div>

      {/* --- DASAR HUKUM BUTTONS --- */}
      <div className='max-w-5xl mx-auto px-4 md:px-6 -mt-12 relative z-20 flex flex-col md:flex-row gap-4'>
        <button onClick={() => setActiveModal('hukum')} className='flex-1 bg-white p-6 rounded-2xl shadow-xl border-t-4 border-blue-500 hover:scale-105 transition-all text-left'>
          <h3 className='font-bold text-gray-800'>📜 Dasar Hukum</h3>
          <p className='text-xs text-gray-500 mt-1'>Perbup No. 17 Tahun 2025</p>
        </button>
        <button onClick={() => setActiveModal('sanksi')} className='flex-1 bg-white p-6 rounded-2xl shadow-xl border-t-4 border-red-500 hover:scale-105 transition-all text-left'>
          <h3 className='font-bold text-gray-800'>⚠️ Sanksi Admin</h3>
          <p className='text-xs text-gray-500 mt-1'>Denda & Bunga Keterlambatan</p>
        </button>
      </div>

        

      {/* --- ALUR PENDAFTARAN --- */}
      <div className='max-w-6xl mx-auto px-4 mt-20'>
        <h2 className='text-2xl font-bold text-center mb-10'>Alur Layanan Digital</h2>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {[{t:"Input Berkas", d:"Unggah syarat via PATRIOT"}, {t:"Verifikasi", d:"Validasi dokumen oleh petugas"}, {t:"Selesai", d:"NPWPD/NOP Terbit Digital"}].map((s, i) => (
            <div key={i} className='text-center'>
              <div className='w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold shadow-lg'>{i+1}</div>
              <h4 className='font-bold text-gray-800'>{s.t}</h4>
              <p className='text-sm text-gray-500'>{s.d}</p>
            </div>
          ))}
        </div>
      </div>

      {/* --- PERSYARATAN DETAIL (TABBED SECTION) --- */}
      <div className='max-w-5xl mx-auto px-4 mt-24'>
        <div className='bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100'>
          {/* Tab Header */}
          <div className='flex bg-gray-50 border-b overflow-x-auto'>
            {Object.keys(tabRequirements).map((key) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`flex-1 py-4 px-6 text-sm font-bold whitespace-nowrap transition-all ${activeTab === key ? 'bg-white text-blue-600 border-b-4 border-blue-600' : 'text-gray-400 hover:text-gray-600'}`}
              >
                {tabRequirements[key].title}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className='p-8 md:p-10'>
            <h3 className='text-2xl font-bold text-gray-800 mb-2'>{tabRequirements[activeTab].title}</h3>
            {tabRequirements[activeTab].desc && <p className='text-sm text-gray-500 mb-8 italic'>{tabRequirements[activeTab].desc}</p>}
            
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
              {tabRequirements[activeTab].content.map((sec, i) => (
                <div key={i} className='bg-slate-50 p-6 rounded-2xl border border-slate-100'>
                  <h4 className='font-bold text-blue-800 mb-4 flex items-center gap-2'>
                    <span className='w-2 h-2 bg-blue-500 rounded-full'></span> {sec.label}
                  </h4>
                  <ul className='space-y-3'>
                    {sec.items.map((item, idx) => (
                      <li key={idx} className='flex gap-2 text-sm text-gray-600 leading-relaxed'>
                        <span className='text-green-500'>✓</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
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
                    { title: "Makanan & Minuman", desc: "restoran, cafe, warung, jasa boga/katering, dll.", icon: "🍔" },
                    { title: "Tenaga Listrik", desc: "Konsumsi Tenaga Listrik oleh pengguna akhir.", icon: "⚡" },
                    { title: "Jasa Perhotelan", desc: "Hotel, Villa, Kost, dll.", icon: "🏨" },
                    { title: "Jasa Parkir", desc: "Parkir Off-street, parkir vallet.", icon: "🅿️" },
                    { title: "Kesenian & Hiburan", desc: "Bioskop, Karaoke, Event, dll.", icon: "🎬" },
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

      {/* --- CTA --- */}
      {/* --- CTA SECTION --- */}
      <div className='max-w-5xl mx-auto px-4 pb-20'>
        <div className='relative bg-slate-900 rounded-[2.5rem] p-8 md:p-16 text-center text-white overflow-hidden shadow-2xl'>
          
          {/* Background Decorative Elements */}
          <div className='absolute top-0 right-0 w-80 h-80 bg-blue-600 rounded-full blur-[120px] opacity-20 pointer-events-none transform translate-x-1/2 -translate-y-1/2'></div>
          <div className='absolute bottom-0 left-0 w-80 h-80 bg-indigo-600 rounded-full blur-[120px] opacity-20 pointer-events-none transform -translate-x-1/2 translate-y-1/2'></div>

          <div className='relative z-10'>
            <span className='inline-block py-1 px-4 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-bold tracking-widest mb-6 uppercase'>
              Layanan Digital 24/7
            </span>
            <h2 className='text-3xl md:text-5xl font-black mb-6 tracking-tight'>
              Kelola Pajak dalam <br className='hidden md:block'/> <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300'>Satu Genggaman</span>
            </h2>
            <p className='text-gray-400 mb-12 max-w-2xl mx-auto text-sm md:text-lg leading-relaxed'>
              Gunakan portal <strong>PATRIOT</strong> untuk pendaftaran baru, perubahan data objek, hingga permohonan penghapusan tanpa perlu antre di kantor Bapenda.
            </p>

            <div className='flex flex-col lg:flex-row items-center justify-center gap-4 md:gap-6'>
              
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
      
    </div>
  )
}

export default Npwpd