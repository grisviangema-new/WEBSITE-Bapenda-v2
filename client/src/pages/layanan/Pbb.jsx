import React from 'react'
import { useNavigate } from 'react-router-dom'

const Pbb = () => {

  const navigate = useNavigate()

  // Helper untuk membuka link sistem PBB (Sesuaikan URL dengan sistem Pasuruan)
  const openPbbSystem = () => {
    window.open('https://pbb.pasuruankab.go.id', '_blank') // Contoh URL Portal PBB
  }

  const openPatriot = () => {
    window.open('https://patriot.pasuruankab.go.id', '_blank')
  }

  return (
    <div className='bg-slate-50 min-h-screen font-sans'>
      
      {/* --- HERO SECTION --- */}
      <div className='relative bg-gradient-to-br from-emerald-900 via-green-900 to-teal-800 text-white py-20 md:py-28 px-4 md:px-6 overflow-hidden'>
        
        {/* Contour Map Pattern */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <pattern id="contours" width="100" height="100" patternUnits="userSpaceOnUse">
                        <path d="M0 50 Q 25 25 50 50 T 100 50" fill="none" stroke="white" strokeWidth="2"/>
                        <path d="M0 20 Q 25 45 50 20 T 100 20" fill="none" stroke="white" strokeWidth="1" opacity="0.5"/>
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#contours)" />
            </svg>
        </div>

        <div className='relative z-10 max-w-7xl mx-auto text-center'>
          <span className='inline-block py-1.5 px-4 rounded-full bg-emerald-700/50 border border-emerald-400 text-emerald-100 text-[10px] md:text-xs font-bold tracking-widest mb-6 animate-fade-in-up uppercase'>
            Perda No. 3 Tahun 2023
          </span>
          <h1 className='text-4xl md:text-6xl font-extrabold mb-6 leading-tight tracking-tight drop-shadow-lg'>
            Pajak <span className='text-transparent bg-clip-text bg-gradient-to-r from-lime-300 to-green-300'>PBB-P2</span>
          </h1>
          <p className='text-emerald-100 text-base md:text-xl max-w-3xl mx-auto leading-relaxed font-light px-4'>
            Pajak Bumi dan Bangunan Perdesaan dan Perkotaan. Kontribusi wajib atas kepemilikan atau pemanfaatan tanah dan bangunan.
          </p>
        </div>
      </div>

      {/* --- DEFINISI & ALUR (Official Assessment) --- */}
      <div className='max-w-6xl mx-auto px-4 md:px-6 -mt-16 relative z-20'>
        <div className='bg-white rounded-3xl shadow-xl p-6 md:p-10 border-b-4 border-emerald-600 flex flex-col md:flex-row items-center gap-8 md:gap-12'>
            <div className='flex-1'>
                <h2 className='text-2xl md:text-3xl font-bold text-gray-800 mb-4'>Sistem Official Assessment</h2>
                <p className='text-gray-600 leading-relaxed text-sm md:text-base mb-6 text-justify'>
                    Berbeda dengan pajak lainnya, PBB-P2 menerapkan sistem <strong>Official Assessment</strong>. Artinya, besaran pajak ditetapkan oleh Bupati melalui penerbitan SPPT (Surat Pemberitahuan Pajak Terutang) setiap tahunnya berdasarkan data SPOP.
                </p>
                
                <div className='grid grid-cols-2 gap-4'>
                    <div className='bg-emerald-50 p-3 rounded-lg border border-emerald-100'>
                        <span className='block text-xs text-emerald-600 font-bold uppercase'>Dasar Pengenaan</span>
                        <span className='font-bold text-gray-800'>NJOP (Nilai Jual)</span>
                    </div>
                    <div className='bg-emerald-50 p-3 rounded-lg border border-emerald-100'>
                        <span className='block text-xs text-emerald-600 font-bold uppercase'>Jatuh Tempo</span>
                        <span className='font-bold text-gray-800'>Setiap Tahun</span>
                    </div>
                </div>
            </div>

            {/* Visualisasi Alur SPPT */}
            <div className='w-full md:w-2/5 flex flex-col gap-3'>
                 <div className='flex items-center gap-4 bg-gray-50 p-4 rounded-xl border border-gray-100'>
                    <div className='w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center font-bold text-gray-500'>1</div>
                    <div>
                        <h4 className='font-bold text-gray-800 text-sm'>Pendataan (SPOP)</h4>
                        <p className='text-xs text-gray-500'>Petugas memverifikasi luas tanah/bangunan</p>
                    </div>
                </div>
                <div className='flex justify-center text-emerald-500'>
                    <svg className="w-5 h-5 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
                </div>
                <div className='flex items-center gap-4 bg-emerald-50 p-4 rounded-xl border border-emerald-200 shadow-md'>
                    <div className='w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center font-bold text-white'>2</div>
                    <div>
                        <h4 className='font-bold text-gray-800 text-sm'>Penerbitan SPPT</h4>
                        <p className='text-xs text-gray-500'>Distribusi SPPT (Fisik/Elektronik)</p>
                    </div>
                </div>
                <div className='flex justify-center text-emerald-500'>
                    <svg className="w-5 h-5 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
                </div>
                <div className='flex items-center gap-4 bg-gray-50 p-4 rounded-xl border border-gray-100'>
                    <div className='w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center font-bold text-gray-500'>3</div>
                    <div>
                        <h4 className='font-bold text-gray-800 text-sm'>Pembayaran (NOP)</h4>
                        <p className='text-xs text-gray-500'>Bank Jatim, Minimarket, QRIS</p>
                    </div>
                </div>
            </div>
        </div>
      </div>

      {/* --- OBJEK & PENGECUALIAN --- */}
      <div className='max-w-7xl mx-auto px-4 md:px-6 py-20 md:py-28'>
        <div className='text-center mb-16'>
            <h2 className='text-3xl md:text-4xl font-bold text-gray-900'>Objek Pajak PBB-P2</h2>
            <p className='text-gray-500 mt-4 max-w-2xl mx-auto text-sm md:text-base'>
                Apa saja yang dikenakan pajak dan apa yang dikecualikan menurut Perda No. 3 Tahun 2023?
            </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            
            {/* Objek Kena Pajak */}
            <div className='bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-emerald-100'>
                <h3 className='text-xl font-bold text-emerald-700 mb-6 flex items-center gap-2'>
                    <span className='text-2xl'>✅</span> Objek Kena Pajak
                </h3>
                <div className='grid grid-cols-2 gap-4'>
                    {[
                        {name: "Rumah Tinggal", icon: "🏠"},
                        {name: "Apartemen/Rusun", icon: "🏢"},
                        {name: "Pabrik & Gudang", icon: "🏭"},
                        {name: "Tanah Kavling", icon: "🌳"},
                        {name: "Kolam Renang", icon: "🏊"},
                        {name: "Pagar Mewah", icon: "🚧"},
                        {name: "Jalan Tol", icon: "🛣️"},
                        {name: "Kilang Minyak", icon: "⛽"},
                    ].map((item, idx) => (
                        <div key={idx} className='flex items-center gap-3 bg-emerald-50 p-3 rounded-lg'>
                            <span className='text-xl'>{item.icon}</span>
                            <span className='text-sm font-semibold text-gray-700'>{item.name}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Objek TIDAK Kena Pajak */}
            <div className='bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-red-100'>
                <h3 className='text-xl font-bold text-red-600 mb-6 flex items-center gap-2'>
                    <span className='text-2xl'>❌</span> Objek Tidak Kena Pajak
                </h3>
                <ul className='space-y-4'>
                    <li className='flex gap-4 items-start'>
                        <div className='mt-1 bg-red-100 p-1 rounded text-red-600'><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg></div>
                        <div>
                            <h4 className='font-bold text-gray-800 text-sm'>Sosial & Umum</h4>
                            <p className='text-xs text-gray-500'>Tempat ibadah, kesehatan, pendidikan, dan panti sosial yang tidak mencari keuntungan.</p>
                        </div>
                    </li>
                    <li className='flex gap-4 items-start'>
                        <div className='mt-1 bg-red-100 p-1 rounded text-red-600'><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg></div>
                        <div>
                            <h4 className='font-bold text-gray-800 text-sm'>Kawasan Lindung</h4>
                            <p className='text-xs text-gray-500'>Hutan lindung, hutan suaka alam, taman nasional, tanah penggembalaan desa.</p>
                        </div>
                    </li>
                    <li className='flex gap-4 items-start'>
                        <div className='mt-1 bg-red-100 p-1 rounded text-red-600'><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg></div>
                        <div>
                            <h4 className='font-bold text-gray-800 text-sm'>Diplomatik & Internasional</h4>
                            <p className='text-xs text-gray-500'>Kantor kedutaan/konsulat dan badan internasional (asas timbal balik).</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
      </div>

      {/* --- TARIF & SIMULASI --- */}
      <div className='bg-emerald-900 py-20 px-4 md:px-6 text-white'>
        <div className='max-w-7xl mx-auto'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
                
                {/* Info Tarif */}
                <div>
                    <h2 className='text-3xl font-bold mb-6'>Cara Hitung PBB</h2>
                    <p className='text-emerald-200 mb-8'>
                        Besaran PBB dihitung dari NJOP (Nilai Jual Objek Pajak) dikurangi NJOPTKP (Nilai Jual Objek Pajak Tidak Kena Pajak).
                    </p>
                    
                    <div className='space-y-4'>
                        <div className='bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 flex items-start gap-4'>
                            <div className='text-3xl'>📉</div>
                            <div>
                                <h4 className='text-xl font-bold text-lime-300'>NJOPTKP</h4>
                                <p className='text-sm text-emerald-100 mt-1'>
                                    Setiap Wajib Pajak mendapatkan pengurangan (Minimal Rp 10 Juta sesuai UU HKPD/Perda) untuk satu objek pajak.
                                </p>
                            </div>
                        </div>

                        <div className='bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 flex items-start gap-4'>
                            <div className='text-3xl'>📊</div>
                            <div>
                                <h4 className='text-xl font-bold text-lime-300'>Tarif Berjenjang</h4>
                                <p className='text-sm text-emerald-100 mt-1'>
                                    Tarif bervariasi (misal: 0.1% s.d 0.3%) tergantung besarnya nilai NJOP. Lahan Produksi Pangan biasanya memiliki tarif lebih rendah.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Simulasi Kalkulator Visual */}
                <div className='bg-white text-gray-800 rounded-3xl p-6 md:p-8 shadow-2xl'>
                    <div className='flex items-center justify-between mb-6 border-b border-gray-100 pb-4'>
                        <h3 className='font-bold text-lg'>Simulasi Hitung</h3>
                        <span className='bg-emerald-100 text-emerald-700 text-xs px-2 py-1 rounded font-bold'>Rumah Tinggal</span>
                    </div>

                    <div className='space-y-4 font-mono text-sm md:text-base'>
                        <div className='flex justify-between'>
                            <span className='text-gray-500'>Tanah (100m² x Rp 2jt)</span>
                            <span>Rp 200.000.000</span>
                        </div>
                        <div className='flex justify-between'>
                            <span className='text-gray-500'>Bangunan (50m² x Rp 3jt)</span>
                            <span>Rp 150.000.000</span>
                        </div>
                        <div className='flex justify-between font-bold text-gray-800 pt-2 border-t border-dashed border-gray-300'>
                            <span>Total NJOP</span>
                            <span>Rp 350.000.000</span>
                        </div>
                        <div className='flex justify-between text-red-500'>
                            <span>(-) NJOPTKP</span>
                            <span>- Rp 10.000.000</span>
                        </div>
                        <div className='flex justify-between font-bold'>
                            <span>NJOP Kena Pajak</span>
                            <span>Rp 340.000.000</span>
                        </div>
                        <div className='flex justify-between text-emerald-700 font-bold items-center bg-emerald-50 p-2 rounded'>
                            <span>Tarif (Contoh: 0.1%)</span>
                            <span>x 0.001</span>
                        </div>
                        <div className='border-t-2 border-gray-800 my-2'></div>
                        <div className='flex justify-between text-xl font-extrabold'>
                            <span>PBB Terutang</span>
                            <span>Rp 340.000</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
      </div>

      {/* --- MENU LAYANAN WAJIB PAJAK (INTERAKTIF) --- */}
      <div className='bg-white py-24 px-4 md:px-6'>
        <div className='max-w-7xl mx-auto'>
            <div className='text-center mb-16'>
                <h2 className='text-3xl md:text-4xl font-bold text-gray-900'>Layanan Online PBB</h2>
                <p className='text-gray-500 mt-4 text-sm md:text-base'>Urus Pajak Bumi dan Bangunan kini lebih mudah tanpa antre.</p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
                
                {/* 1. Cek Tagihan NOP */}
                <div 
                    onClick={openPbbSystem}
                    className='group bg-slate-50 p-6 rounded-2xl border border-slate-200 hover:border-emerald-500 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer'
                >
                    <div className='w-14 h-14 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center text-2xl mb-4 group-hover:bg-emerald-600 group-hover:text-white transition-colors'>
                        🔎
                    </div>
                    <h3 className='text-lg font-bold text-gray-800 mb-2'>Cek Tagihan NOP</h3>
                    <p className='text-sm text-gray-500 mb-4 h-10'>Cek jumlah tagihan PBB Anda dengan memasukkan Nomor Objek Pajak.</p>
                    <div className='text-emerald-600 text-sm font-bold flex items-center gap-2 group-hover:gap-3 transition-all'>
                        Cek Sekarang <span className='text-lg'>→</span>
                    </div>
                </div>

                {/* 2. Cetak SPPT */}
                <div 
                    onClick={openPbbSystem}
                    className='group bg-slate-50 p-6 rounded-2xl border border-slate-200 hover:border-lime-500 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer'
                >
                    <div className='w-14 h-14 bg-lime-100 text-lime-600 rounded-xl flex items-center justify-center text-2xl mb-4 group-hover:bg-lime-600 group-hover:text-white transition-colors'>
                        🖨️
                    </div>
                    <h3 className='text-lg font-bold text-gray-800 mb-2'>E-SPPT</h3>
                    <p className='text-sm text-gray-500 mb-4 h-10'>Unduh dan cetak Salinan SPPT (Surat Pemberitahuan Pajak Terutang) Mandiri.</p>
                    <div className='text-lime-600 text-sm font-bold flex items-center gap-2 group-hover:gap-3 transition-all'>
                        Cetak SPPT <span className='text-lg'>→</span>
                    </div>
                </div>

                {/* 3. Mutasi / Balik Nama */}
                <div 
                    onClick={openPatriot}
                    className='group bg-slate-50 p-6 rounded-2xl border border-slate-200 hover:border-green-500 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer'
                >
                    <div className='w-14 h-14 bg-green-100 text-green-600 rounded-xl flex items-center justify-center text-2xl mb-4 group-hover:bg-green-600 group-hover:text-white transition-colors'>
                        📝
                    </div>
                    <h3 className='text-lg font-bold text-gray-800 mb-2'>Mutasi / Data Baru</h3>
                    <p className='text-sm text-gray-500 mb-4 h-10'>Ajukan perubahan data (Balik Nama/Pemecahan) atau pendaftaran baru.</p>
                    <div className='text-green-600 text-sm font-bold flex items-center gap-2 group-hover:gap-3 transition-all'>
                        Ajukan Perubahan <span className='text-lg'>→</span>
                    </div>
                </div>

                {/* 4. Pembayaran */}
                <div 
                    onClick={openPbbSystem}
                    className='group bg-slate-50 p-6 rounded-2xl border border-slate-200 hover:border-blue-500 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer'
                >
                    <div className='w-14 h-14 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center text-2xl mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors'>
                        💳
                    </div>
                    <h3 className='text-lg font-bold text-gray-800 mb-2'>Bayar PBB</h3>
                    <p className='text-sm text-gray-500 mb-4 h-10'>Bayar PBB via QRIS, Mobile Banking, atau Marketplace.</p>
                    <div className='text-blue-600 text-sm font-bold flex items-center gap-2 group-hover:gap-3 transition-all'>
                        Bayar Online <span className='text-lg'>→</span>
                    </div>
                </div>

            </div>
        </div>
      </div>

      {/* --- CTA SECTION --- */}
      <div className='relative bg-gray-900 py-20 px-6 overflow-hidden'>
        {/* Dekorasi Background */}
        <div className='absolute top-0 right-0 w-96 h-96 bg-emerald-600 rounded-full blur-[100px] opacity-20 pointer-events-none transform translate-x-1/2 -translate-y-1/2'></div>
        <div className='absolute bottom-0 left-0 w-96 h-96 bg-teal-600 rounded-full blur-[100px] opacity-20 pointer-events-none transform -translate-x-1/2 translate-y-1/2'></div>

        <div className='relative z-10 max-w-4xl mx-auto text-center'>
            <h2 className='text-3xl md:text-5xl font-extrabold text-white mb-6 tracking-tight'>
              Sudah Bayar PBB Tahun Ini?
            </h2>
            <p className='text-gray-300 text-lg mb-10 max-w-2xl mx-auto leading-relaxed'>
                Hindari denda administrasi 1% per bulan. Manfaatkan kemudahan pembayaran digital sekarang juga.
            </p>
            
            <div className='flex flex-col sm:flex-row justify-center gap-6'>
                
                {/* TOMBOL 1: CEK NOP */}
                <button 
                    onClick={openPbbSystem} 
                    className='group relative px-8 py-4 bg-gradient-to-r from-emerald-500 to-green-600 text-white font-bold rounded-full shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/50 hover:-translate-y-1 hover:scale-105 transition-all duration-300 cursor-pointer flex items-center justify-center gap-3 overflow-hidden ring-4 ring-transparent hover:ring-emerald-500/20'
                >
                    <div className="absolute inset-0 w-full h-full bg-white/20 group-hover:translate-x-full transition-transform duration-500 -skew-x-12 -translate-x-full"></div>
                    <span className='relative flex items-center gap-2'>
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                        Cek Tagihan NOP
                    </span>
                </button>
                
                {/* TOMBOL 2: LAPOR DATA */}
                <button 
                    onClick={() => { navigate('/contact'); window.scrollTo(0, 0); }}
                    className='group relative px-8 py-4 bg-white text-gray-900 font-bold rounded-full shadow-lg hover:shadow-white/20 hover:-translate-y-1 hover:scale-105 transition-all duration-300 cursor-pointer flex items-center justify-center gap-3 ring-4 ring-transparent hover:ring-white/20'
                >
                    <svg className="w-6 h-6 text-emerald-600 group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>
                    <span>Lapor Data Baru</span>
                </button>

            </div>
        </div>
      </div>

    </div>
  )
}

export default Pbb