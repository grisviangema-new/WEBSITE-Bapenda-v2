import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PajakMBLB = () => {
  const navigate = useNavigate();

  // Data Objek MBLB (Pasal 39)
  const mblbObjects = [
    "Asbes", "Batu Tulis", "Batu Setengah Permata", "Batu Kapur", "Batu Apung", 
    "Batu Permata", "Bentonit", "Dolomit", "Feldspar", "Garam Batu", 
    "Grafit", "Granit/Andesit", "Gips", "Kalsit", "Kaolin", 
    "Leusit", "Magnesit", "Mika", "Marmer", "Nitrat", 
    "Obsidian", "Oker", "Pasir dan Kerikil", "Pasir Kuarsa", "Perlit", 
    "Fosfat", "Talk", "Tanah Diatom", "Tanah Liat", "Tawas", 
    "Tras", "Yarosit", "Zeolit", "Basal", "Trakhit", "Belerang"
  ];

  return (
    <div className='bg-slate-50 min-h-screen font-sans antialiased'>
      
      {/* --- HERO SECTION --- */}
      <section className='relative bg-stone-950 text-white py-24 md:py-32 px-4 overflow-hidden'>
  
        {/* --- MOTIF 1: TOPOGRAPHIC GRID (Tekstur Tanah) --- */}
        <div className="absolute inset-0 opacity-10" 
            style={{ 
              backgroundImage: `radial-gradient(circle at 2px 2px, #f59e0b 1px, transparent 0)`, 
              backgroundSize: '32px 32px' 
            }}>
        </div>

        {/* --- MOTIF 2: CRYSTALLINE OVERLAY (Elemen Mineral) --- */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="hexagons" width="50" height="43.4" patternUnits="userSpaceOnUse" patternTransform="scale(2)">
                <path d="M24.8 0L49.6 14.4V43.2L24.8 57.6L0 43.2V14.4L24.8 0Z" fill="none" stroke="white" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hexagons)" />
          </svg>
        </div>

        {/* --- MOTIF 3: DYNAMIC EARTH GLOW --- */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-amber-600/10 rounded-full blur-[120px] -mr-48 -mt-48 animate-pulse" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-orange-900/20 rounded-full blur-[100px] -ml-24 -mb-24" />

        {/* --- CONTENT --- */}
        <div className='relative z-10 max-w-7xl mx-auto text-center'>
          <div className="flex justify-center mb-8">
            <span className='inline-block py-1.5 px-4 rounded-full bg-amber-900/40 border border-amber-500/30 text-amber-300 text-[10px] md:text-xs font-black tracking-[0.2em] uppercase backdrop-blur-md'>
              Sektor Pertambangan & Batuan
            </span>
          </div>

          <h1 className='text-5xl md:text-7xl font-black mb-8 leading-tight tracking-tighter'>
            Pajak <span className='text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-300 to-amber-500'>MBLB</span>
          </h1>
          
          <p className='text-stone-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed font-medium px-4'>
            Pengelolaan Pajak Mineral Bukan Logam dan Batuan untuk optimalisasi Pendapatan Daerah dan <span className="text-amber-500 font-bold">Pelestarian Lingkungan</span>.
          </p>

          {/* Elemen Dekoratif Bawah */}
          <div className="mt-12 flex justify-center items-center gap-3 opacity-50">
              <div className="w-16 h-[1px] bg-gradient-to-r from-transparent to-amber-500"></div>
              <div className="text-amber-500 text-xs">◆</div>
              <div className="w-16 h-[1px] bg-gradient-to-l from-transparent to-amber-500"></div>
          </div>
        </div>
      </section>

      {/* --- KETENTUAN & HARGA PATOKAN --- */}
      <section className='max-w-7xl mx-auto px-4 md:px-6 -mt-16 relative z-20'>
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-8'>
          
          {/* Card: Sistem Pemungutan */}
          <div className='lg:col-span-7 bg-white rounded-[2.5rem] shadow-2xl p-8 md:p-12 border-b-8 border-amber-600'>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-2 h-8 bg-amber-500 rounded-full" />
              <h2 className='text-3xl font-black text-slate-900'>Dasar Pengenaan</h2>
            </div>
            <p className='text-slate-600 leading-relaxed text-lg mb-8'>
              Dasar pengenaan Pajak MBLB adalah <strong>Nilai Jual</strong> hasil pengambilan MBLB, yang dihitung berdasarkan volume/tonase dikalikan dengan <strong>Harga Patokan Bupati</strong> yang berlaku di mulut tambang.
            </p>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
              <div className='p-6 bg-amber-50 rounded-3xl border border-amber-100'>
                <p className='text-[10px] font-black text-amber-600 uppercase mb-1'>Metode Hitung</p>
                <p className='font-bold text-slate-800 italic'>Volume (Ton/m³) × Harga Patokan</p>
              </div>
              <div className='p-6 bg-slate-50 rounded-3xl border border-slate-100'>
                <p className='text-[10px] font-black text-slate-500 uppercase mb-1'>Sistem</p>
                <p className='font-bold text-slate-800'>Official Assessment</p>
              </div>
            </div>
          </div>

          {/* Card: Opsen MBLB (Provinsi) */}
          <div className='lg:col-span-5 bg-amber-600 rounded-[2.5rem] p-8 md:p-10 text-white shadow-xl shadow-amber-200 relative overflow-hidden flex flex-col justify-center'>
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl" />
            <h3 className="text-sm font-black text-amber-100 uppercase tracking-widest mb-4">Pajak MBLB</h3>
            <h2 className="text-5xl font-black mb-4">Tarif 20%</h2>
            <p className="text-amber-50 text-sm leading-relaxed mb-6">
              Berdasarkan UU HKPD, tarif Pajak MBLB adalah 20% dari nilai jual hasil pengambilan MBLB yang dilakukan di wilayah Kabupaten Pasuruan.
            </p>
            <h3 className="text-sm font-black text-amber-100 uppercase tracking-widest mb-4">Pajak Provinsi</h3>
            <h2 className="text-5xl font-black mb-4">Opsen 25%</h2>
            <p className="text-amber-50 text-sm leading-relaxed mb-6">
              Berdasarkan UU HKPD, dikenakan tambahan Opsen sebesar 25% dari pokok pajak terutang yang diperuntukkan bagi Pendapatan Provinsi.
            </p>
            <div className="p-4 bg-white/10 rounded-2xl border border-white/20 text-[10px] uppercase font-bold tracking-widest">
                Terintegrasi dalam satu SPTPD
            </div>
          </div>
        </div>
      </section>

            {/* --- MENU LAYANAN WAJIB PAJAK (REKLAME) --- */}
      <div className='bg-white py-24 px-4 md:px-6'>
        <div className='max-w-7xl mx-auto'>
            <div className='text-center mb-16'>
                <h2 className='text-3xl md:text-4xl font-bold text-gray-900'>Layanan Pajak MBLB</h2>
                <p className='text-gray-500 mt-4 text-sm md:text-base'>Kemudahan administrasi penyelenggaraan MBLB di Kabupaten Pasuruan.</p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
                
                {/* 1. Pendaftaran dan pelaporan */}
                <div 
                    onClick={() => window.open('https://patriot.pasuruankab.go.id/apps/esptpd/', '_blank')}
                    className='group bg-slate-50 p-6 rounded-2xl border border-slate-200 hover:border-blue-500 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer'
                >
                    <div className='w-14 h-14 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center text-2xl mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors'>
                        📝
                    </div>
                    <h3 className='text-lg font-bold text-gray-800 mb-2'>Pendaftaran dan Pelaporan</h3>
                    <p className='text-sm text-gray-500 mb-4 h-10'>Ajukan permohonan pendaftaran dan pelaporan MBLB baru.</p>
                    <div className='text-blue-600 text-sm font-bold flex items-center gap-2 group-hover:gap-3 transition-all'>
                        Daftar & Lapor <span className='text-lg'>→</span>
                    </div>
                </div>

                {/* 2. Cek SKPD */}
                <div 
                    onClick={() => window.open('https://patriot.pasuruankab.go.id/apps/cek-bayar/ceknopbayar-pasuruan.kab?module=mblb', '_blank')}
                    className='group bg-slate-50 p-6 rounded-2xl border border-slate-200 hover:border-emerald-500 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer'
                >
                    <div className='w-14 h-14 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center text-2xl mb-4 group-hover:bg-emerald-600 group-hover:text-white transition-colors'>
                        📜
                    </div>
                    <h3 className='text-lg font-bold text-gray-800 mb-2'>Cek Tagihan/Tunggakan</h3>
                    <p className='text-sm text-gray-500 mb-4 h-10'>Lihat status penetapan dan jumlah tagihan pajak Anda.</p>
                    <div className='text-emerald-600 text-sm font-bold flex items-center gap-2 group-hover:gap-3 transition-all'>
                        Cek Tagihan <span className='text-lg'>→</span>
                    </div>
                </div>

                {/* 3. E-Billing & Bayar */}
                <div 
                    onClick={() => window.open('https://patriot.pasuruankab.go.id/apps/epayment/', '_blank')}
                    className='group bg-slate-50 p-6 rounded-2xl border border-slate-200 hover:border-green-500 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer'
                >
                    <div className='w-14 h-14 bg-green-100 text-green-600 rounded-xl flex items-center justify-center text-2xl mb-4 group-hover:bg-green-600 group-hover:text-white transition-colors'>
                        💳
                    </div>
                    <h3 className='text-lg font-bold text-gray-800 mb-2'>Bayar Pajak</h3>
                    <p className='text-sm text-gray-500 mb-4 h-10'>Buat kode billing dan lakukan pembayaran online.</p>
                    <div className='text-green-600 text-sm font-bold flex items-center gap-2 group-hover:gap-3 transition-all'>
                        Buat Billing <span className='text-lg'>→</span>
                    </div>
                </div>

                {/* 4. Perizinan */}
                <div 
                    onClick={() => window.open('https://oss.go.id/id')}
                    className='group bg-slate-50 p-6 rounded-2xl border border-slate-200 hover:border-yellow-500 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer'
                >
                    <div className='w-14 h-14 bg-yellow-100 text-yellow-600 rounded-xl flex items-center justify-center text-2xl mb-4 group-hover:bg-yellow-600 group-hover:text-white transition-colors'>
                        🔄
                    </div>
                    <h3 className='text-lg font-bold text-gray-800 mb-2'>Perizinan</h3>
                    <p className='text-sm text-gray-500 mb-4 h-10'>Ajukan permohonan izin tambang dan perpanjangan izin MBLB.</p>
                    <div className='text-yellow-600 text-sm font-bold flex items-center gap-2 group-hover:gap-3 transition-all'>
                        Ajukan Izin <span className='text-lg'>→</span>
                    </div>
                </div>

            </div>
        </div>
      </div>

            {/* --- ALUR LAYANAN & KEWAJIBAN --- */}
      <section className='py-24 px-4 max-w-7xl mx-auto'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-16'>
          
          {/* Alur Pelaporan */}
          <div className='space-y-8'>
            <h3 className='text-2xl font-black text-slate-900 flex items-center gap-3'>
              <span className='w-12 h-12 bg-amber-100 text-amber-600 rounded-2xl flex items-center justify-center'>🚛</span>
              Alur Pelaporan MBLB
            </h3>
            <div className='space-y-4'>
                {[
                  { t: "Pendaftaran IUP/SIPB", d: "Mendaftarkan izin usaha pertambangan sebagai dasar objek pajak." },
                  { t: "Pendaftaran Objek Pajak MBLB", d: "Mendaftarkan objek pajak MBLB di Bapenda Pasuruan." },
                  { t: "Laporan Tonase Bulanan dan Menghitung Pajak", d: "Melaporkan setiap bulan melalui PATRIOT e-SPTPD." },
                  { t: "Pembayaran Lunas", d: "Melakukan pembayaran pokok + opsen melalui Bank Jatim / Virtual Account." }
                ].map((step, idx) => (
                  <div key={idx} className='flex gap-4 p-5 bg-white border border-slate-100 rounded-3xl hover:shadow-md transition-shadow'>
                    <span className='font-black text-amber-500'>{idx + 1}</span>
                    <div>
                      <h4 className='font-bold text-slate-800 text-sm'>{step.t}</h4>
                      <p className='text-xs text-slate-500 mt-1'>{step.d}</p>
                    </div>
                  </div>
                ))}
            </div>
          </div>

          {/* Kewajiban WP */}
          <div className='bg-white p-8 md:p-12 rounded-[3rem] border border-slate-100 shadow-xl'>
            <h3 className='text-2xl font-black text-slate-900 mb-8'>Kewajiban Pengusaha</h3>
            <div className='space-y-6'>
              {[
                { h: "Pencatatan Volume", d: "Wajib mencatat setiap tonase keluar tambang dalam buku log." },
                { h: "Akses Jembatan Timbang", d: "Menyediakan akses timbangan atau alat ukur volume yang akurat." },
                { h: "Faktur Pajak Daerah", d: "Menerbitkan nota/invoice yang mencantumkan pungutan pajak MBLB." },
                { h: "Pelestarian Lingkungan", d: "Memenuhi kewajiban reklamasi pascatambang sesuai regulasi." }
              ].map((item, i) => (
                <div key={i} className='flex gap-4 items-start'>
                  <div className='mt-1 w-5 h-5 rounded-full bg-amber-500 flex items-center justify-center flex-shrink-0'>
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                  </div>
                  <div>
                    <h4 className='font-bold text-slate-800 text-sm'>{item.h}</h4>
                    <p className='text-xs text-slate-500 mt-1'>{item.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* --- KATALOG OBJEK MBLB --- */}
      <section className='max-w-7xl mx-auto py-24 px-4'>
        <div className='flex flex-col md:flex-row gap-12 items-start'>
          <div className='md:w-1/3'>
            <h3 className='text-3xl font-black text-slate-900 leading-tight mb-4'>Daftar Mineral & Batuan</h3>
            <p className='text-slate-500 text-sm leading-relaxed'>
              Terdapat <strong>38+ jenis</strong> mineral bukan logam dan batuan yang menjadi objek pajak sesuai Pasal 39 Perda Kab. Pasuruan No. 3 Tahun 2023.
            </p>
            <div className='mt-8 p-6 bg-red-50 rounded-3xl border border-red-100'>
                <h4 className='text-red-600 font-bold text-xs uppercase mb-3 flex items-center gap-2'>
                    <span>🚫</span> Dikecualikan
                </h4>
                <ul className='text-xs text-red-800/70 space-y-2'>
                    <li>• Konsumsi Dasar Rumah Tangga (Tidak Dijual)</li>
                    <li>• Pemancangan Tiang Listrik/Telepon/Pipa</li>
                </ul>
            </div>
          </div>
          
          <div className='md:w-2/3 bg-slate-900 rounded-[3rem] p-8 md:p-12 shadow-2xl'>
            <div className='grid grid-cols-2 sm:grid-cols-3 gap-3 h-[400px] overflow-y-auto pr-4 custom-scrollbar'>
              {mblbObjects.map((item, idx) => (
                <div key={idx} className='group p-4 bg-white/5 border border-white/10 rounded-2xl hover:bg-amber-600 hover:border-amber-500 transition-all duration-300'>
                  <p className='text-white font-bold text-xs group-hover:scale-105 transition-transform'>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- SIMULASI PERHITUNGAN --- */}
      <section className='bg-slate-900 py-24 px-4 text-white relative overflow-hidden'>
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent" />
        <div className='max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center'>
          <div>
            <h2 className='text-4xl font-black mb-6'>Simulasi <br/><span className='text-amber-500'>Perhitungan Pajak</span></h2>
            <div className='space-y-6'>
              <div className='flex gap-4 items-start'>
                <div className='w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center font-black'>1</div>
                <div>
                  <h4 className='font-bold text-amber-400'>Pokok Pajak (20%)</h4>
                  <p className='text-sm text-slate-400'>Dihitung dari volume pengambilan dikalikan harga patokan Bupati.</p>
                </div>
              </div>
              <div className='flex gap-4 items-start'>
                <div className='w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center font-black'>2</div>
                <div>
                  <h4 className='font-bold text-amber-400'>Opsen (25%)</h4>
                  <p className='text-sm text-slate-400'>Tambahan pajak provinsi dari nilai Pokok Pajak yang sudah dihitung.</p>
                </div>
              </div>
            </div>
          </div>

          <div className='bg-white rounded-[3rem] p-8 md:p-12 text-slate-900 shadow-2xl'>
            <div className='space-y-4 font-mono text-sm border-b border-slate-100 pb-6'>
                <div className='flex justify-between'><span>Volume (Contoh Pasir)</span><span>100 m³</span></div>
                <div className='flex justify-between'><span>Harga Patokan</span><span>Rp 75.000</span></div>
                <div className='flex justify-between font-bold text-indigo-600 bg-indigo-50 p-2 rounded-lg mt-4'>
                    <span>DPP (Dasar Pengenaan)</span><span>Rp 7.500.000</span>
                </div>
            </div>
            <div className='py-6 space-y-3 border-b border-slate-100'>
                <div className='flex justify-between items-center'>
                    <span className='text-xs font-bold text-slate-400 uppercase'>Pokok Pajak (20%)</span>
                    <span className='font-black'>Rp 1.500.000</span>
                </div>
                <div className='flex justify-between items-center'>
                    <span className='text-xs font-bold text-amber-600 uppercase'>Opsen Provinsi (25%)</span>
                    <span className='font-black text-amber-600'>+ Rp 375.000</span>
                </div>
            </div>
            <div className='pt-6 flex justify-between items-end'>
                <div>
                    <p className='text-[10px] font-black text-slate-400 uppercase'>Total Pajak Terutang</p>
                    <p className='text-4xl font-black tracking-tighter'>Rp 1.875.000</p>
                </div>
                <div className='bg-slate-900 text-white text-[10px] px-3 py-1 rounded-full font-bold uppercase'>SKPD</div>
            </div>
          </div>
        </div>
      </section>





      {/* --- FOOTER CTA --- */}
      <footer className='bg-white py-16 px-6 text-center text-slate-900 relative z-10'>
          <h2 className='text-3xl font-black mb-8'>Kelola Pajak Pertambangan Anda</h2>
          <div className='flex flex-wrap justify-center gap-4'>
              <button className='px-8 py-4 bg-amber-600 text-white font-bold rounded-2xl hover:bg-amber-500 transition-all'
                onClick={() => window.open('https://patriot.pasuruankab.go.id/apps/esptpd/')}
              >
                Lapor Tonase MBLB
              </button>
              <button className='px-8 py-4 bg-slate-800 text-white font-bold rounded-2xl border border-slate-700 hover:bg-slate-700 transition-all'
                onClick={() => navigate('/layanan/underdevelopment')}
              >
                Cek Harga Patokan
              </button>
          </div>
      </footer>
    </div>
  );
};

export default PajakMBLB;