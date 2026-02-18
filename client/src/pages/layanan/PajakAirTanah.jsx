import React from 'react'
import { useNavigate } from 'react-router-dom'

const PajakAirTanah = () => {

  const navigate = useNavigate()

  // Helper untuk link eksternal (PATRIOT)
  const openSystem = () => {
    window.open('https://patriot.pasuruankab.go.id', '_blank')
  }

  return (
    <div className='bg-slate-50 min-h-screen font-sans'>
      
      {/* --- HERO SECTION --- */}
      <div className='relative bg-gradient-to-br from-cyan-900 via-sky-900 to-blue-800 text-white py-20 md:py-28 px-4 md:px-6 overflow-hidden'>
        
        {/* Water Pattern Background */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <pattern id="waves" width="100" height="20" patternUnits="userSpaceOnUse" patternTransform="scale(2)">
                        <path d="M0 10 Q25 20 50 10 T100 10" fill="none" stroke="white" strokeWidth="2"/>
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#waves)" />
            </svg>
        </div>

        <div className='relative z-10 max-w-7xl mx-auto text-center'>
          <span className='inline-block py-1.5 px-4 rounded-full bg-cyan-700/50 border border-cyan-400 text-cyan-100 text-[10px] md:text-xs font-bold tracking-widest mb-6 animate-fade-in-up uppercase'>
            Perbup No. 17 Tahun 2025
          </span>
          <h1 className='text-4xl md:text-6xl font-extrabold mb-6 leading-tight tracking-tight drop-shadow-lg'>
            Pajak <span className='text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 to-white'>Air Tanah</span>
          </h1>
          <p className='text-cyan-100 text-base md:text-xl max-w-3xl mx-auto leading-relaxed font-light px-4'>
            Pajak atas pengambilan dan/atau pemanfaatan air tanah untuk tujuan komersial dengan memperhatikan kelestarian lingkungan (UU HKPD & Perda 3/2023).
          </p>
        </div>
      </div>

      {/* --- DEFINISI & REGULASI --- */}
      <div className='max-w-6xl mx-auto px-4 md:px-6 -mt-16 relative z-20'>
        <div className='bg-white rounded-3xl shadow-xl p-6 md:p-10 border-b-4 border-cyan-600 flex flex-col md:flex-row items-center gap-8 md:gap-12'>
            <div className='flex-1'>
                <h2 className='text-2xl md:text-3xl font-bold text-gray-800 mb-4'>Konsep Pengendalian</h2>
                <p className='text-gray-600 leading-relaxed text-sm md:text-base mb-6 text-justify'>
                    Berdasarkan <strong>Perda No. 3 Tahun 2023</strong>, Pajak Air Tanah (PAT) bukan sekadar penerimaan daerah, tetapi instrumen pengendalian lingkungan. Dasar pengenaan pajak adalah <strong>Nilai Perolehan Air (NPA)</strong> yang dihitung berdasarkan volume pengambilan dan faktor nilai air (Perbup 17/2025).
                </p>
                
                <div className='grid grid-cols-2 gap-4'>
                    <div className='bg-cyan-50 p-3 rounded-lg border border-cyan-100'>
                        <span className='block text-xs text-cyan-600 font-bold uppercase'>Sistem</span>
                        <span className='font-bold text-gray-800'>Official Assessment*</span>
                    </div>
                    <div className='bg-cyan-50 p-3 rounded-lg border border-cyan-100'>
                        <span className='block text-xs text-cyan-600 font-bold uppercase'>Objek Pajak</span>
                        <span className='font-bold text-gray-800'>Non-Domestik</span>
                    </div>
                </div>
                <p className='text-[10px] text-gray-400 mt-2 italic'>*Wajib Pajak lapor meteran, Bapenda menerbitkan SKPD.</p>
            </div>

            {/* Visualisasi Alur (Perbup 17/2025) */}
            <div className='w-full md:w-2/5 flex flex-col gap-3'>
                 <div className='flex items-center gap-4 bg-gray-50 p-4 rounded-xl border border-gray-100'>
                    <div className='w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center font-bold text-gray-500'>1</div>
                    <div>
                        <h4 className='font-bold text-gray-800 text-sm'>Izin SIPA & Meteran</h4>
                        <p className='text-xs text-gray-500'>Wajib pasang alat ukur air</p>
                    </div>
                </div>
                <div className='flex justify-center text-cyan-500'>
                    <svg className="w-5 h-5 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
                </div>
                <div className='flex items-center gap-4 bg-cyan-50 p-4 rounded-xl border border-cyan-200 shadow-md'>
                    <div className='w-10 h-10 bg-cyan-600 rounded-full flex items-center justify-center font-bold text-white'>2</div>
                    <div>
                        <h4 className='font-bold text-gray-800 text-sm'>Lapor Volume & SKPD</h4>
                        <p className='text-xs text-gray-500'>Lapor meteran bulanan &rarr; Terbit Tagihan</p>
                    </div>
                </div>
                <div className='flex justify-center text-cyan-500'>
                    <svg className="w-5 h-5 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
                </div>
                <div className='flex items-center gap-4 bg-gray-50 p-4 rounded-xl border border-gray-100'>
                    <div className='w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center font-bold text-gray-500'>3</div>
                    <div>
                        <h4 className='font-bold text-gray-800 text-sm'>Pembayaran Pajak</h4>
                        <p className='text-xs text-gray-500'>Setor ke Kas Daerah (Bank Jatim/Online)</p>
                    </div>
                </div>
            </div>
        </div>
      </div>

      {/* --- FAKTOR NPA (GRID) --- */}
      <div className='max-w-7xl mx-auto px-4 md:px-6 py-20 md:py-28'>
        <div className='text-center mb-16'>
            <h2 className='text-3xl md:text-4xl font-bold text-gray-900'>Faktor Penentu Nilai (NPA)</h2>
            <p className='text-gray-500 mt-4 max-w-2xl mx-auto text-sm md:text-base'>
                Sesuai Perbup No. 17 Tahun 2025, besaran pajak dihitung berdasarkan Nilai Perolehan Air yang dipengaruhi oleh:
            </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8'>
            {[
                { title: "Volume Pengambilan", icon: "📊", color: "bg-blue-100 text-blue-600", desc: "Jumlah air yang diambil (m³) yang tercatat pada meteran air wajib pajak." },
                { title: "Jenis Peruntukan", icon: "🏭", color: "bg-orange-100 text-orange-600", desc: "Industri, Perhotelan, Pabrik Es, atau Rumah Makan memiliki indeks berbeda." },
                { title: "Lokasi Sumber", icon: "📍", color: "bg-green-100 text-green-600", desc: "Zona pengambilan (Zona Konservasi, Rawan, atau Aman) mempengaruhi tarif." },
                { title: "Kualitas Air", icon: "💧", color: "bg-cyan-100 text-cyan-600", desc: "Kualitas air baku (Baik/Sedang/Buruk) yang diambil dari sumber." },
                { title: "Harga Air Baku", icon: "💰", color: "bg-gray-100 text-gray-600", desc: "Harga dasar air yang ditetapkan oleh Pemerintah Daerah dalam Perbup." },
                { title: "Pengecualian", icon: "🚫", color: "bg-red-100 text-red-600", desc: "Rumah tangga, pertanian rakyat, peribadatan, dan keperluan negara." },
            ].map((item, idx) => (
                <div key={idx} className='bg-white rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-2xl border border-gray-100 transition-all duration-300 group'>
                     <div className='flex flex-col gap-4 items-start'>
                        <div className={`w-14 h-14 ${item.color} rounded-2xl flex items-center justify-center text-3xl flex-shrink-0 group-hover:scale-110 transition-transform`}>{item.icon}</div>
                        <div>
                            <h3 className='text-xl font-bold text-gray-800 mb-2'>{item.title}</h3>
                            <p className='text-sm text-gray-500 leading-relaxed'>{item.desc}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </div>

      {/* --- TARIF & SIMULASI (Perda 3/2023) --- */}
      <div className='bg-cyan-900 py-20 px-4 md:px-6 text-white'>
        <div className='max-w-7xl mx-auto'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
                
                {/* Info Tarif */}
                <div>
                    <h2 className='text-3xl font-bold mb-6'>Tarif Pajak Air Tanah</h2>
                    <p className='text-cyan-200 mb-8'>
                        Berdasarkan <strong>Pasal 27 Ayat (1) Huruf c Perda No. 3 Tahun 2023</strong>, tarif Pajak Air Tanah ditetapkan sebesar:
                    </p>
                    
                    <div className='flex items-center gap-4 mb-8'>
                        <div className='text-6xl font-extrabold text-yellow-400'>20%</div>
                        <div className='text-cyan-100 leading-tight'>
                            dari Nilai Perolehan Air<br/>
                            (NPA)
                        </div>
                    </div>
                    
                    <div className='space-y-4'>
                        <div className='bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 flex items-start gap-4'>
                            <div className='text-3xl'>🧮</div>
                            <div>
                                <h4 className='text-xl font-bold text-white'>Rumus Dasar</h4>
                                <p className='text-sm text-cyan-100 mt-1'>
                                    Pajak = 20% x (Volume x Harga Dasar Air x Faktor Nilai Air)
                                </p>
                            </div>
                        </div>

                        <div className='bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 flex items-start gap-4'>
                            <div className='text-3xl'>⚠️</div>
                            <div>
                                <h4 className='text-xl font-bold text-red-300'>Sanksi (Perbup 17/2025)</h4>
                                <p className='text-sm text-cyan-100 mt-1'>
                                    Tidak memiliki izin SIPA atau tidak melapor volume air dapat dikenakan sanksi administrasi dan pidana.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Simulasi Kalkulator Visual */}
                <div className='bg-white text-gray-800 rounded-3xl p-6 md:p-8 shadow-2xl'>
                    <div className='flex items-center justify-between mb-6 border-b border-gray-100 pb-4'>
                        <h3 className='font-bold text-lg'>Simulasi Perhitungan</h3>
                        <span className='bg-cyan-100 text-cyan-700 text-xs px-2 py-1 rounded font-bold'>Industri Minuman</span>
                    </div>

                    <div className='space-y-4 font-mono text-sm md:text-base'>
                        <div className='flex justify-between'>
                            <span className='text-gray-500'>Volume Air (Bulan Ini)</span>
                            <span>1.000 m³</span>
                        </div>
                        <div className='flex justify-between'>
                            <span className='text-gray-500'>Nilai Perolehan Air (NPA)</span>
                            <span>Rp 5.000.000</span>
                        </div>
                        <div className='text-xs text-gray-400 italic text-right mb-2'>*(Asumsi NPA Rp 5.000/m³ sesuai indeks)</div>
                        
                        <div className='border-t border-dashed border-gray-300 my-2'></div>
                        <div className='flex justify-between font-bold'>
                            <span>Dasar Pengenaan Pajak</span>
                            <span>Rp 5.000.000</span>
                        </div>
                        <div className='flex justify-between text-cyan-700 font-bold items-center bg-cyan-50 p-2 rounded'>
                            <span>Tarif Pajak (20%)</span>
                            <span>x 20%</span>
                        </div>
                        <div className='border-t-2 border-gray-800 my-2'></div>
                        <div className='flex justify-between text-xl font-extrabold'>
                            <span>Total Pajak</span>
                            <span>Rp 1.000.000</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
      </div>

      {/* --- MENU LAYANAN WAJIB PAJAK (AIR TANAH) --- */}
      <div className='bg-white py-24 px-4 md:px-6'>
        <div className='max-w-7xl mx-auto'>
            <div className='text-center mb-16'>
                <h2 className='text-3xl md:text-4xl font-bold text-gray-900'>Layanan Pajak Air Tanah</h2>
                <p className='text-gray-500 mt-4 text-sm md:text-base'>Kelola kewajiban pajak air tanah Anda dengan mudah.</p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
                
                {/* 1. Lapor Meteran -> PATRIOT */}
                <div 
                    onClick={openSystem}
                    className='group bg-slate-50 p-6 rounded-2xl border border-slate-200 hover:border-blue-500 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer'
                >
                    <div className='w-14 h-14 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center text-2xl mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors'>
                        📸
                    </div>
                    <h3 className='text-lg font-bold text-gray-800 mb-2'>Lapor Meteran</h3>
                    <p className='text-sm text-gray-500 mb-4 h-10'>Lapor stand meteran air bulanan secara online (PATRIOT).</p>
                    <div className='text-blue-600 text-sm font-bold flex items-center gap-2 group-hover:gap-3 transition-all'>
                        Lapor Sekarang <span className='text-lg'>→</span>
                    </div>
                </div>

                {/* 2. Cek SKPD -> PATRIOT */}
                <div 
                    onClick={openSystem}
                    className='group bg-slate-50 p-6 rounded-2xl border border-slate-200 hover:border-cyan-500 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer'
                >
                    <div className='w-14 h-14 bg-cyan-100 text-cyan-600 rounded-xl flex items-center justify-center text-2xl mb-4 group-hover:bg-cyan-600 group-hover:text-white transition-colors'>
                        📜
                    </div>
                    <h3 className='text-lg font-bold text-gray-800 mb-2'>Cek SKPD</h3>
                    <p className='text-sm text-gray-500 mb-4 h-10'>Lihat Surat Ketetapan Pajak Daerah yang telah terbit.</p>
                    <div className='text-cyan-600 text-sm font-bold flex items-center gap-2 group-hover:gap-3 transition-all'>
                        Lihat Tagihan <span className='text-lg'>→</span>
                    </div>
                </div>

                {/* 3. Info SIPA -> OSS */}
                <div 
                    onClick={() => window.open('https://oss.go.id', '_blank')}
                    className='group bg-slate-50 p-6 rounded-2xl border border-slate-200 hover:border-green-500 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer'
                >
                    <div className='w-14 h-14 bg-green-100 text-green-600 rounded-xl flex items-center justify-center text-2xl mb-4 group-hover:bg-green-600 group-hover:text-white transition-colors'>
                        📝
                    </div>
                    <h3 className='text-lg font-bold text-gray-800 mb-2'>Perizinan SIPA</h3>
                    <p className='text-sm text-gray-500 mb-4 h-10'>Pengurusan Surat Izin Pengusahaan Air Tanah via OSS.</p>
                    <div className='text-green-600 text-sm font-bold flex items-center gap-2 group-hover:gap-3 transition-all'>
                        Buka OSS <span className='text-lg'>→</span>
                    </div>
                </div>

                {/* 4. Pembayaran -> PATRIOT */}
                <div 
                    onClick={openSystem}
                    className='group bg-slate-50 p-6 rounded-2xl border border-slate-200 hover:border-sky-500 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer'
                >
                    <div className='w-14 h-14 bg-sky-100 text-sky-600 rounded-xl flex items-center justify-center text-2xl mb-4 group-hover:bg-sky-600 group-hover:text-white transition-colors'>
                        💳
                    </div>
                    <h3 className='text-lg font-bold text-gray-800 mb-2'>Bayar Online</h3>
                    <p className='text-sm text-gray-500 mb-4 h-10'>Buat ID Billing dan bayar via QRIS/Virtual Account.</p>
                    <div className='text-sky-600 text-sm font-bold flex items-center gap-2 group-hover:gap-3 transition-all'>
                        Bayar Sekarang <span className='text-lg'>→</span>
                    </div>
                </div>

            </div>
        </div>
      </div>

      {/* --- CTA SECTION (Konservasi) --- */}
      <div className='relative bg-gray-900 py-20 px-6 overflow-hidden'>
        <div className='absolute top-0 right-0 w-96 h-96 bg-cyan-600 rounded-full blur-[100px] opacity-20 pointer-events-none transform translate-x-1/2 -translate-y-1/2'></div>
        <div className='absolute bottom-0 left-0 w-96 h-96 bg-blue-600 rounded-full blur-[100px] opacity-20 pointer-events-none transform -translate-x-1/2 translate-y-1/2'></div>

        <div className='relative z-10 max-w-4xl mx-auto text-center'>
            <h2 className='text-3xl md:text-5xl font-extrabold text-white mb-6 tracking-tight'>
              Gunakan Air Tanah dengan Bijak
            </h2>
            <p className='text-gray-300 text-lg mb-10 max-w-2xl mx-auto leading-relaxed'>
                Kepatuhan membayar Pajak Air Tanah adalah wujud nyata kepedulian Anda terhadap kelestarian lingkungan dan keberlanjutan sumber daya air di Kabupaten Pasuruan.
            </p>
            
            <div className='flex flex-col sm:flex-row justify-center gap-6'>
                
                {/* TOMBOL 1: DAFTAR NPWPD */}
                <button 
                    onClick={() => window.open('https://patriot.pasuruankab.go.id/apps/esptpd/npwpd/enpwpd.php', '_blank')} 
                    className='group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-full shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 hover:-translate-y-1 hover:scale-105 transition-all duration-300 cursor-pointer flex items-center justify-center gap-3 overflow-hidden ring-4 ring-transparent hover:ring-cyan-500/20'
                >
                    <div className="absolute inset-0 w-full h-full bg-white/20 group-hover:translate-x-full transition-transform duration-500 -skew-x-12 -translate-x-full"></div>
                    <span className='relative flex items-center gap-2'>
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>
                        Daftar NPWPD Air Tanah
                    </span>
                </button>
                
                {/* TOMBOL 2: LAPOR PELANGGARAN */}
                <button 
                    onClick={() => { navigate('/contact'); window.scrollTo(0, 0); }}
                    className='group relative px-8 py-4 bg-white text-gray-900 font-bold rounded-full shadow-lg hover:shadow-white/20 hover:-translate-y-1 hover:scale-105 transition-all duration-300 cursor-pointer flex items-center justify-center gap-3 ring-4 ring-transparent hover:ring-white/20'
                >
                    <svg className="w-6 h-6 text-cyan-600 group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
                    <span>Lapor Pelanggaran</span>
                </button>

            </div>
        </div>
      </div>

    </div>
  )
}

export default PajakAirTanah