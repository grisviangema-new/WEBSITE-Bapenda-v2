import React from 'react'
import { useNavigate } from 'react-router-dom'

const Bphtb = () => {

  const navigate = useNavigate()

  // Helper untuk link sistem e-BPHTB
  const openSystem = () => {
    window.open('https://bphtb.pasuruankab.go.id', '_blank')
  }

  return (
    <div className='bg-slate-50 min-h-screen font-sans'>
      
      {/* --- HERO SECTION --- */}
      <div className='relative bg-gradient-to-br from-purple-900 via-violet-900 to-indigo-900 text-white py-20 md:py-28 px-4 md:px-6 overflow-hidden'>
        
        {/* Geometric Pattern */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <pattern id="cubes" width="30" height="30" patternUnits="userSpaceOnUse">
                        <path d="M15 0 L30 7.5 L15 15 L0 7.5 Z M0 7.5 L15 15 L15 30 L0 22.5 Z M30 7.5 L30 22.5 L15 30 L15 15 Z" fill="none" stroke="white" strokeWidth="1"/>
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#cubes)" />
            </svg>
        </div>

        <div className='relative z-10 max-w-7xl mx-auto text-center'>
          <span className='inline-block py-1.5 px-4 rounded-full bg-purple-700/50 border border-purple-400 text-purple-100 text-[10px] md:text-xs font-bold tracking-widest mb-6 animate-fade-in-up uppercase'>
            Perbup No. 17 Tahun 2025
          </span>
          <h1 className='text-4xl md:text-6xl font-extrabold mb-6 leading-tight tracking-tight drop-shadow-lg'>
            Layanan <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-200 to-pink-200'>BPHTB</span>
          </h1>
          <p className='text-purple-100 text-base md:text-xl max-w-3xl mx-auto leading-relaxed font-light px-4'>
            Pajak atas perolehan hak atas tanah dan/atau bangunan yang wajib dibayar <strong>sebelum</strong> akta ditandatangani.
          </p>
        </div>
      </div>

      {/* --- DEFINISI & REGULASI --- */}
      <div className='max-w-6xl mx-auto px-4 md:px-6 -mt-16 relative z-20'>
        <div className='bg-white rounded-3xl shadow-xl p-6 md:p-10 border-b-4 border-purple-600 flex flex-col md:flex-row items-center gap-8 md:gap-12'>
            <div className='flex-1'>
                <h2 className='text-2xl md:text-3xl font-bold text-gray-800 mb-4'>Dasar Hukum & Kewajiban</h2>
                <p className='text-gray-600 leading-relaxed text-sm md:text-base mb-6 text-justify'>
                    Mengacu pada <strong>UU HKPD</strong> dan <strong>Perda Kab. Pasuruan No. 3 Tahun 2023</strong>, BPHTB dikenakan kepada orang pribadi atau badan yang memperoleh hak atas tanah/bangunan. Pembayaran pajak ini adalah syarat mutlak untuk penerbitan Akta Jual Beli (AJB) oleh PPAT/Notaris atau pendaftaran hak di BPN.
                </p>
                
                <div className='grid grid-cols-2 gap-4'>
                    <div className='bg-purple-50 p-3 rounded-lg border border-purple-100'>
                        <span className='block text-xs text-purple-600 font-bold uppercase'>Sistem</span>
                        <span className='font-bold text-gray-800'>Self Assessment*</span>
                    </div>
                    <div className='bg-purple-50 p-3 rounded-lg border border-purple-100'>
                        <span className='block text-xs text-purple-600 font-bold uppercase'>Validasi</span>
                        <span className='font-bold text-gray-800'>Wajib Validasi Bapenda</span>
                    </div>
                </div>
                <p className='text-[10px] text-gray-400 mt-2 italic'>*Wajib Pajak menghitung sendiri, namun wajib divalidasi kebenarannya oleh Pemda.</p>
            </div>

            {/* Visualisasi Alur Transaksi */}
            <div className='w-full md:w-2/5 flex flex-col gap-3'>
                 <div className='flex items-center gap-4 bg-gray-50 p-4 rounded-xl border border-gray-100'>
                    <div className='w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center font-bold text-gray-500'>1</div>
                    <div>
                        <h4 className='font-bold text-gray-800 text-sm'>Transaksi Properti</h4>
                        <p className='text-xs text-gray-500'>Jual Beli, Waris, Hibah, Lelang</p>
                    </div>
                </div>
                <div className='flex justify-center text-purple-500'>
                    <svg className="w-5 h-5 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
                </div>
                <div className='flex items-center gap-4 bg-purple-50 p-4 rounded-xl border border-purple-200 shadow-md'>
                    <div className='w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center font-bold text-white'>2</div>
                    <div>
                        <h4 className='font-bold text-gray-800 text-sm'>Input & Bayar (e-BPHTB)</h4>
                        <p className='text-xs text-gray-500'>Validasi Data & Pembayaran Bank</p>
                    </div>
                </div>
                <div className='flex justify-center text-purple-500'>
                    <svg className="w-5 h-5 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
                </div>
                <div className='flex items-center gap-4 bg-gray-50 p-4 rounded-xl border border-gray-100'>
                    <div className='w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center font-bold text-gray-500'>3</div>
                    <div>
                        <h4 className='font-bold text-gray-800 text-sm'>Tanda Tangan Akta</h4>
                        <p className='text-xs text-gray-500'>Proses di PPAT/Notaris & BPN</p>
                    </div>
                </div>
            </div>
        </div>
      </div>

      {/* --- OBJEK & PENGECUALIAN --- */}
      <div className='max-w-7xl mx-auto px-4 md:px-6 py-20 md:py-28'>
        <div className='text-center mb-16'>
            <h2 className='text-3xl md:text-4xl font-bold text-gray-900'>Objek Pajak BPHTB</h2>
            <p className='text-gray-500 mt-4 max-w-2xl mx-auto text-sm md:text-base'>
                BPHTB dikenakan atas perolehan hak yang diakibatkan oleh:
            </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8'>
            {[
                { title: "Jual Beli", icon: "🤝", color: "bg-blue-100 text-blue-600", desc: "Pemindahan hak karena adanya transaksi jual beli." },
                { title: "Tukar Menukar", icon: "🔄", color: "bg-green-100 text-green-600", desc: "Pertukaran aset tanah/bangunan antar pihak." },
                { title: "Hibah", icon: "🎁", color: "bg-pink-100 text-pink-600", desc: "Pemberian sukarela dari satu pihak ke pihak lain." },
                { title: "Waris", icon: "📜", color: "bg-orange-100 text-orange-600", desc: "Peralihan hak karena pewarisan (Ada NPOPTKP Khusus)." },
                { title: "Lelang", icon: "🔨", color: "bg-red-100 text-red-600", desc: "Perolehan melalui risalah lelang negara." },
                { title: "Pemisahan Hak", icon: "🔀", color: "bg-teal-100 text-teal-600", desc: "Pemisahan hak yang mengakibatkan peralihan." },
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

      {/* --- KETENTUAN KHUSUS PPAT/NOTARIS (BARU) --- */}
      <div className='bg-gray-900 py-16 px-4 md:px-6 relative overflow-hidden'>
        {/* Dekorasi */}
        <div className='absolute -left-20 -top-20 w-64 h-64 bg-purple-600 rounded-full blur-[100px] opacity-20'></div>
        <div className='absolute -right-20 -bottom-20 w-64 h-64 bg-pink-600 rounded-full blur-[100px] opacity-20'></div>

        <div className='max-w-6xl mx-auto relative z-10'>
            <div className='text-center mb-12'>
                <span className='text-purple-300 font-bold tracking-wider text-sm uppercase'>Mitra Bapenda</span>
                <h2 className='text-3xl md:text-4xl font-bold text-white mt-2'>Kewajiban & Sanksi PPAT/Notaris</h2>
                <p className='text-gray-400 mt-4 max-w-2xl mx-auto'>
                    Ketentuan bagi Pejabat Pembuat Akta Tanah (PPAT) / Notaris sesuai Perda No. 3 Tahun 2023.
                </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                {/* Card Kewajiban */}
                <div className='bg-white rounded-2xl p-8 border-l-8 border-green-500 shadow-xl'>
                    <div className='flex items-center gap-4 mb-6'>
                        <div className='w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-2xl'>📝</div>
                        <h3 className='text-xl font-bold text-gray-900'>Kewajiban PPAT</h3>
                    </div>
                    <ul className='space-y-4'>
                        <li className='flex items-start gap-3'>
                            <span className='text-green-500 font-bold'>✓</span>
                            <span className='text-gray-600 text-sm leading-relaxed'>
                                <strong>Dilarang menandatangani Akta</strong> pemindahan hak atas tanah dan/atau bangunan sebelum Wajib Pajak menyerahkan bukti pembayaran pajak (SSPD) yang sah/lunas.
                            </span>
                        </li>
                        <li className='flex items-start gap-3'>
                            <span className='text-green-500 font-bold'>✓</span>
                            <span className='text-gray-600 text-sm leading-relaxed'>
                                Wajib melaporkan pembuatan akta atau risalah lelang perolehan hak kepada Kepala Daerah paling lambat pada <strong>tanggal 10 bulan berikutnya</strong>.
                            </span>
                        </li>
                    </ul>
                </div>

                {/* Card Sanksi */}
                <div className='bg-white rounded-2xl p-8 border-l-8 border-red-500 shadow-xl'>
                    <div className='flex items-center gap-4 mb-6'>
                        <div className='w-12 h-12 bg-red-100 text-red-600 rounded-full flex items-center justify-center text-2xl'>⚠️</div>
                        <h3 className='text-xl font-bold text-gray-900'>Sanksi Pelanggaran</h3>
                    </div>
                    <ul className='space-y-4'>
                        <li className='flex items-start gap-3'>
                            <span className='text-red-500 font-bold'>!</span>
                            <span className='text-gray-600 text-sm leading-relaxed'>
                                PPAT/Notaris yang melanggar ketentuan (menandatangani akta sebelum pajak lunas) dikenakan <strong>Sanksi Administratif berupa Denda</strong> sebesar Rp 7.500.000,00 per pelanggaran.
                            </span>
                        </li>
                        <li className='flex items-start gap-3'>
                            <span className='text-red-500 font-bold'>!</span>
                            <span className='text-gray-600 text-sm leading-relaxed'>
                                Terlambat atau tidak melaporkan pembuatan akta dikenakan denda administratif sebesar Rp 250.000,00 per laporan.
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
      </div>

      {/* --- TARIF & SIMULASI (Perda 3/2023) --- */}
      <div className='bg-violet-900 py-20 px-4 md:px-6 text-white'>
        <div className='max-w-7xl mx-auto'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
                
                {/* Info Tarif & Dasar Pengenaan */}
                <div>
                    <h2 className='text-3xl font-bold mb-6'>Tarif & Cara Hitung</h2>
                    <p className='text-violet-200 mb-8'>
                        Tarif BPHTB ditetapkan sebesar <strong>5%</strong> (Lima Persen). Dasar pengenaan adalah <strong>NPOP</strong> (Nilai Perolehan Objek Pajak) atau Harga Transaksi.
                        <br/><br/>
                        <span className='text-sm italic opacity-80'>*Jika NPOP lebih rendah dari NJOP PBB, maka dasar pengenaan menggunakan NJOP PBB.</span>
                    </p>
                    
                    <div className='space-y-4'>
                        <div className='bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 flex items-start gap-4'>
                            <div className='text-3xl'>📉</div>
                            <div>
                                <h4 className='text-xl font-bold text-purple-300'>NPOPTKP (Pengurang)</h4>
                                <ul className='text-sm text-violet-100 mt-1 list-disc pl-4'>
                                    <li><strong>Rp 60.000.000</strong> untuk perolehan umum (Jual Beli, dll).</li>
                                    <li><strong>Rp 300.000.000</strong> khusus untuk Waris atau Hibah Wasiat.</li>
                                </ul>
                            </div>
                        </div>

                        <div className='bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 flex items-start gap-4'>
                            <div className='text-3xl'>🧮</div>
                            <div>
                                <h4 className='text-xl font-bold text-purple-300'>Rumus Perhitungan</h4>
                                <p className='text-sm text-violet-100 mt-1 font-mono'>
                                    BPHTB = (NPOP - NPOPTKP) x 5%
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Simulasi Kalkulator Visual */}
                <div className='bg-white text-gray-800 rounded-3xl p-6 md:p-8 shadow-2xl'>
                    <div className='flex items-center justify-between mb-6 border-b border-gray-100 pb-4'>
                        <h3 className='font-bold text-lg'>Simulasi Jual Beli</h3>
                        <span className='bg-purple-100 text-purple-700 text-xs px-2 py-1 rounded font-bold'>Rumah</span>
                    </div>

                    <div className='space-y-4 font-mono text-sm md:text-base'>
                        <div className='flex justify-between'>
                            <span className='text-gray-500'>Harga Transaksi (NPOP)</span>
                            <span>Rp 500.000.000</span>
                        </div>
                        <div className='flex justify-between text-xs text-gray-400'>
                            <span>(NJOP PBB: Rp 450jt)</span>
                            <span>(Pakai NPOP)</span>
                        </div>
                        <div className='flex justify-between text-red-500'>
                            <span>(-) NPOPTKP Umum</span>
                            <span>- Rp 60.000.000</span>
                        </div>
                        <div className='border-t border-dashed border-gray-300 my-2'></div>
                        <div className='flex justify-between font-bold'>
                            <span>NPOP Kena Pajak</span>
                            <span>Rp 440.000.000</span>
                        </div>
                        <div className='flex justify-between text-purple-700 font-bold items-center bg-purple-50 p-2 rounded'>
                            <span>Tarif (5%)</span>
                            <span>x 5%</span>
                        </div>
                        <div className='border-t-2 border-gray-800 my-2'></div>
                        <div className='flex justify-between text-xl font-extrabold'>
                            <span>BPHTB Terutang</span>
                            <span>Rp 22.000.000</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
      </div>

      {/* --- MENU LAYANAN WAJIB PAJAK --- */}
      <div className='bg-white py-24 px-4 md:px-6'>
        <div className='max-w-7xl mx-auto'>
            <div className='text-center mb-16'>
                <h2 className='text-3xl md:text-4xl font-bold text-gray-900'>Layanan e-BPHTB</h2>
                <p className='text-gray-500 mt-4 text-sm md:text-base'>Sistem pelayanan BPHTB terintegrasi untuk Wajib Pajak dan PPAT/Notaris.</p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
                
                {/* 1. Validasi BPHTB */}
                <div 
                    onClick={openSystem}
                    className='group bg-slate-50 p-6 rounded-2xl border border-slate-200 hover:border-purple-500 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer'
                >
                    <div className='w-14 h-14 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center text-2xl mb-4 group-hover:bg-purple-600 group-hover:text-white transition-colors'>
                        ✅
                    </div>
                    <h3 className='text-lg font-bold text-gray-800 mb-2'>Login PPAT/Notaris</h3>
                    <p className='text-sm text-gray-500 mb-4 h-10'>Input data transaksi dan ajukan validasi BPHTB secara online.</p>
                    <div className='text-purple-600 text-sm font-bold flex items-center gap-2 group-hover:gap-3 transition-all'>
                        Login e-BPHTB <span className='text-lg'>→</span>
                    </div>
                </div>

                {/* 2. Cek Status Berkas */}
                <div 
                    onClick={openSystem}
                    className='group bg-slate-50 p-6 rounded-2xl border border-slate-200 hover:border-blue-500 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer'
                >
                    <div className='w-14 h-14 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center text-2xl mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors'>
                        🔍
                    </div>
                    <h3 className='text-lg font-bold text-gray-800 mb-2'>Cek Status Berkas</h3>
                    <p className='text-sm text-gray-500 mb-4 h-10'>Lacak progress verifikasi berkas pengajuan BPHTB Anda.</p>
                    <div className='text-blue-600 text-sm font-bold flex items-center gap-2 group-hover:gap-3 transition-all'>
                        Lacak Berkas <span className='text-lg'>→</span>
                    </div>
                </div>

                {/* 3. Validasi SSO (Wajib Pajak) */}
                <div 
                    onClick={openSystem}
                    className='group bg-slate-50 p-6 rounded-2xl border border-slate-200 hover:border-orange-500 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer'
                >
                    <div className='w-14 h-14 bg-orange-100 text-orange-600 rounded-xl flex items-center justify-center text-2xl mb-4 group-hover:bg-orange-600 group-hover:text-white transition-colors'>
                        👤
                    </div>
                    <h3 className='text-lg font-bold text-gray-800 mb-2'>Validasi Mandiri</h3>
                    <p className='text-sm text-gray-500 mb-4 h-10'>Input dan validasi BPHTB untuk perorangan (Non-Notaris).</p>
                    <div className='text-orange-600 text-sm font-bold flex items-center gap-2 group-hover:gap-3 transition-all'>
                        Input Mandiri <span className='text-lg'>→</span>
                    </div>
                </div>

                {/* 4. Cetak SSPD */}
                <div 
                    onClick={openSystem}
                    className='group bg-slate-50 p-6 rounded-2xl border border-slate-200 hover:border-green-500 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer'
                >
                    <div className='w-14 h-14 bg-green-100 text-green-600 rounded-xl flex items-center justify-center text-2xl mb-4 group-hover:bg-green-600 group-hover:text-white transition-colors'>
                        🖨️
                    </div>
                    <h3 className='text-lg font-bold text-gray-800 mb-2'>Cetak SSPD</h3>
                    <p className='text-sm text-gray-500 mb-4 h-10'>Cetak salinan Surat Setoran Pajak Daerah yang telah divalidasi.</p>
                    <div className='text-green-600 text-sm font-bold flex items-center gap-2 group-hover:gap-3 transition-all'>
                        Cetak SSPD <span className='text-lg'>→</span>
                    </div>
                </div>

            </div>
        </div>
      </div>

      {/* --- CTA SECTION --- */}
      <div className='relative bg-gray-900 py-20 px-6 overflow-hidden'>
        <div className='absolute top-0 right-0 w-96 h-96 bg-purple-600 rounded-full blur-[100px] opacity-20 pointer-events-none transform translate-x-1/2 -translate-y-1/2'></div>
        <div className='absolute bottom-0 left-0 w-96 h-96 bg-pink-600 rounded-full blur-[100px] opacity-20 pointer-events-none transform -translate-x-1/2 translate-y-1/2'></div>

        <div className='relative z-10 max-w-4xl mx-auto text-center'>
            <h2 className='text-3xl md:text-5xl font-extrabold text-white mb-6 tracking-tight'>
              Kelola BPHTB Lebih Mudah
            </h2>
            <p className='text-gray-300 text-lg mb-10 max-w-2xl mx-auto leading-relaxed'>
                Gunakan sistem e-BPHTB untuk mempercepat proses validasi dan pembayaran pajak transaksi properti Anda di Kabupaten Pasuruan.
            </p>
            
            <div className='flex flex-col sm:flex-row justify-center gap-6'>
                
                {/* TOMBOL 1: LOGIN e-BPHTB */}
                <button 
                    onClick={openSystem}
                    className='group relative px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-bold rounded-full shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 hover:-translate-y-1 hover:scale-105 transition-all duration-300 cursor-pointer flex items-center justify-center gap-3 overflow-hidden ring-4 ring-transparent hover:ring-purple-500/20'
                >
                    <div className="absolute inset-0 w-full h-full bg-white/20 group-hover:translate-x-full transition-transform duration-500 -skew-x-12 -translate-x-full"></div>
                    <span className='relative flex items-center gap-2'>
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"></path></svg>
                        Akses e-BPHTB
                    </span>
                </button>
                
                {/* TOMBOL 2: KONSULTASI */}
                <button 
                    onClick={() => { navigate('/contact'); window.scrollTo(0, 0); }}
                    className='group relative px-8 py-4 bg-white text-gray-900 font-bold rounded-full shadow-lg hover:shadow-white/20 hover:-translate-y-1 hover:scale-105 transition-all duration-300 cursor-pointer flex items-center justify-center gap-3 ring-4 ring-transparent hover:ring-white/20'
                >
                    <svg className="w-6 h-6 text-purple-600 group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path></svg>
                    <span>Bantuan Teknis</span>
                </button>

            </div>
        </div>
      </div>

    </div>
  )
}

export default Bphtb