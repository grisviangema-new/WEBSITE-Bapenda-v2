import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';



const Bphtb = () => {
    const navigate = useNavigate();
  return (
    <div className='bg-slate-50 min-h-screen font-sans antialiased'>
      
      {/* --- HERO SECTION --- */}
      <div className='relative bg-gradient-to-br from-purple-950 via-violet-900 to-indigo-900 text-white py-20 md:py-28 px-4 md:px-6 overflow-hidden'>
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
          <span className='inline-block py-1.5 px-4 rounded-full bg-purple-700/50 border border-purple-400 text-purple-100 text-[10px] md:text-xs font-black tracking-widest mb-6 uppercase backdrop-blur-sm'>
            Pasal 10 - 17 Perda No. 3 Tahun 2023
          </span>
          <h1 className='text-4xl md:text-6xl font-extrabold mb-6 leading-tight tracking-tight'>
            Panduan Pajak <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-200 to-pink-200'>BPHTB</span>
          </h1>
          <p className='text-purple-100 text-base md:text-xl max-w-3xl mx-auto leading-relaxed font-light px-4'>
            Bea Perolehan Hak atas Tanah dan/atau Bangunan yang terutang pada saat terjadinya peristiwa hukum perolehan hak.
          </p>
        </div>
      </div>

      {/* --- DEFINISI & ALUR (SINKRONISASI PASAL 14 & 15) --- */}
      <div className='max-w-6xl mx-auto px-4 md:px-6 -mt-16 relative z-20'>
        <div className='bg-white rounded-[2.5rem] shadow-xl p-8 md:p-12 border-b-8 border-purple-600 grid lg:grid-cols-12 gap-12 items-center'>
            <div className='lg:col-span-7'>
                <h2 className='text-3xl font-black text-gray-800 mb-6 tracking-tighter'>Subjek & Wajib Pajak</h2>
                <p className='text-gray-600 leading-relaxed mb-8 text-justify'>
                    Berdasarkan <strong>Pasal 11</strong>, Subjek dan Wajib Pajak BPHTB adalah orang pribadi atau Badan yang <strong>memperoleh</strong> Hak atas Tanah dan/atau Bangunan. Pembayaran wajib dilakukan sebelum penandatanganan akta oleh PPAT atau Risalah Lelang.
                </p>
                
                <div className='grid grid-cols-2 gap-4'>
                    <div className='bg-purple-50 p-4 rounded-2xl border border-purple-100'>
                        <span className='block text-[10px] text-purple-600 font-black uppercase mb-1'>Tarif (Pasal 13)</span>
                        <span className='font-bold text-gray-800 text-2xl'>5%</span>
                    </div>
                    <div className='bg-purple-50 p-4 rounded-2xl border border-purple-100'>
                        <span className='block text-[10px] text-purple-600 font-black uppercase mb-1'>Metode</span>
                        <span className='font-bold text-gray-800 text-sm italic'>Self Assessment & Validasi</span>
                    </div>
                </div>
            </div>

            <div className='lg:col-span-5 space-y-3'>
                 <h4 className='text-xs font-black text-slate-400 uppercase tracking-widest mb-2'>Syarat Penandatanganan (Pasal 15)</h4>
                 {[
                    { t: "PPAT / Notaris", d: "Hanya menandatangani akta setelah WP bayar BPHTB." },
                    { t: "Pejabat Lelang", d: "Hanya menandatangani Risalah Lelang setelah pelunasan." },
                    { t: "Kantor Pertanahan", d: "Hanya mendaftarkan hak setelah bukti bayar diserahkan." }
                 ].map((step, i) => (
                    <div key={i} className='flex items-center gap-4 bg-slate-50 p-4 rounded-2xl border border-slate-100 shadow-sm'>
                        <div className='w-8 h-8 bg-purple-600 text-white rounded-lg flex items-center justify-center font-bold text-xs shrink-0'>{i+1}</div>
                        <div>
                            <p className='font-bold text-gray-800 text-xs'>{step.t}</p>
                            <p className='text-[10px] text-gray-500'>{step.d}</p>
                        </div>
                    </div>
                 ))}
            </div>
        </div>
      </div>

      {/* --- OBJEK PAJAK (PASAL 10) --- */}
      <section className='max-w-7xl mx-auto px-4 py-24'>
        <div className='grid lg:grid-cols-2 gap-16 items-start'>
            {/* Kiri: Jenis Perolehan & Hak (Dibuat Lebih Besar) */}
            <div className='space-y-8'>
                <h3 className='text-3xl font-black text-gray-900 mb-8 flex items-center gap-3'>
                    <span className='w-2 h-8 bg-purple-600 rounded-full'></span> Objek Pajak (Pasal 10)
                </h3>
                
                <div className='grid grid-cols-1 gap-6'>
                    {/* Pemindahan Hak - Card Besar */}
                    <div className='p-8 bg-white rounded-[2rem] border border-slate-100 shadow-md hover:shadow-lg transition-shadow'>
                        <p className='text-sm font-black text-purple-600 uppercase tracking-widest mb-6 border-b border-purple-100 pb-2'>
                            Pemindahan Hak Karena:
                        </p>
                        <ul className='grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-8 text-sm md:text-base text-gray-700 font-medium'>
                            <li className='flex items-center gap-2'><span className='text-purple-400'>•</span> Jual Beli / Tukar Menukar</li>
                            <li className='flex items-center gap-2'><span className='text-purple-400'>•</span> Hibah / Hibah Wasiat / Waris</li>
                            <li className='flex items-center gap-2'><span className='text-purple-400'>•</span> Pemasukan dalam Perseroan</li>
                            <li className='flex items-center gap-2'><span className='text-purple-400'>•</span> Penunjukan Pembeli dalam Lelang</li>
                            <li className='flex items-center gap-2'><span className='text-purple-400'>•</span> Penggabungan / Peleburan Usaha</li>
                            <li className='flex items-center gap-2'><span className='text-purple-400'>•</span> Hadiah / Putusan Hakim</li>
                        </ul>
                    </div>

                    {/* Jenis Hak - Card Besar */}
                    <div className='p-8 bg-white rounded-[2rem] border border-slate-100 shadow-md hover:shadow-lg transition-shadow'>
                        <p className='text-sm font-black text-purple-600 uppercase tracking-widest mb-6 border-b border-purple-100 pb-2'>
                            Jenis Hak Meliputi:
                        </p>
                        <ul className='grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-8 text-sm md:text-base text-gray-700 font-medium'>
                            <li className='flex items-center gap-2'><span className='text-purple-400'>•</span> Hak Milik / HGB / HGU</li>
                            <li className='flex items-center gap-2'><span className='text-purple-400'>•</span> Hak Pakai</li>
                            <li className='flex items-center gap-2'><span className='text-purple-400'>•</span> Hak Milik Satuan Rumah Susun</li>
                            <li className='flex items-center gap-2'><span className='text-purple-400'>•</span> Hak Pengelolaan</li>
                            <li className='flex items-center gap-2'><span className='text-purple-400'>•</span> Pemberian Hak Baru</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Kanan: Pengecualian (Tetap Sesuai Desain Sebelumnya) */}
            <div className='bg-slate-900 rounded-[3rem] p-8 md:p-12 text-white shadow-2xl relative overflow-hidden self-stretch flex flex-col justify-center'>
                <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl" />
                <h3 className='text-xl font-bold mb-8 flex items-center gap-2'>
                    <span className='text-red-400 text-2xl'>×</span> Pengecualian Objek (Pasal 10 ayat 4)
                </h3>
                <div className='grid gap-4 text-xs md:text-sm text-slate-300'>
                    {[
                        "Kantor Pemerintah / Penyelenggara Negara.",
                        "Kepentingan Umum / Pelaksanaan Pembangunan.",
                        "Badan / Perwakilan Lembaga Internasional.",
                        "Perwakilan Diplomatik (Timbal Balik).",
                        "Konversi Hak tanpa perubahan nama.",
                        "Wakaf & Kepentingan Ibadah.",
                        "Masyarakat Berpenghasilan Rendah (Rumah Pertama)."
                    ].map((item, i) => (
                        <div key={i} className='flex gap-3 items-center p-4 bg-white/5 rounded-2xl border border-white/5'>
                            <span className='w-2 h-2 bg-purple-500 rounded-full'></span>
                            {item}
                        </div>
                    ))}
                </div>
            </div>
        </div>
      </section>

      {/* --- DASAR PENGENAAN (PASAL 12) --- */}
      <section className='bg-purple-50 py-24 px-4'>
        <div className='max-w-7xl mx-auto'>
            <div className='text-center mb-16'>
                <h2 className='text-3xl font-black text-gray-900'>Dasar Pengenaan Pajak (DPP)</h2>
                <p className='text-slate-500 mt-2 italic'>Penentuan Nilai Perolehan Objek Pajak (NPOP) berdasarkan Pasal 12</p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-16'>
                <div className='bg-white p-8 rounded-3xl border border-purple-100 text-center shadow-sm'>
                    <h4 className='font-bold text-gray-800 mb-2'>Harga Transaksi</h4>
                    <p className='text-xs text-gray-500'>Berlaku khusus untuk transaksi <strong>Jual Beli</strong>.</p>
                </div>
                <div className='bg-white p-8 rounded-3xl border border-purple-100 text-center shadow-sm'>
                    <h4 className='font-bold text-gray-800 mb-2'>Harga Risalah Lelang</h4>
                    <p className='text-xs text-gray-500'>Khusus untuk perolehan melalui <strong>Lelang</strong>.</p>
                </div>
                <div className='bg-white p-8 rounded-3xl border border-purple-100 text-center shadow-sm'>
                    <h4 className='font-bold text-gray-800 mb-2'>Nilai Pasar / NJOP</h4>
                    <p className='text-xs text-gray-500'>Untuk Hibah, Waris, Tukar Menukar, & Peristiwa lainnya.</p>
                </div>
            </div>

            {/* NPOPTKP Cards */}
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
                <div className='bg-white rounded-3xl p-8 border-l-8 border-purple-600 shadow-xl flex items-center justify-between'>
                    <div>
                        <h4 className='text-xs font-black text-purple-600 uppercase tracking-widest mb-1'>NPOPTKP Umum (Ayat 4)</h4>
                        <p className='text-sm text-gray-600'>Perolehan Hak Pertama di Wilayah Daerah.</p>
                    </div>
                    <div className='text-3xl font-black text-gray-900 text-right'>Rp 80.000.000</div>
                </div>
                <div className='bg-indigo-900 rounded-3xl p-8 border-l-8 border-pink-500 shadow-xl flex items-center justify-between text-white'>
                    <div>
                        <h4 className='text-pink-400 text-xs font-black uppercase tracking-widest mb-1'>NPOPTKP Waris / Hibah Sedarah (Ayat 5)</h4>
                        <p className='text-sm text-indigo-200'>Hubungan keluarga sedarah lurus satu derajat.</p>
                    </div>
                    <div className='text-3xl font-black text-white text-right'>Rp 300.000.000</div>
                </div>
            </div>
            <p className='mt-8 text-center text-[11px] text-black-400 px-14'>
                *Catatan (Pasal 12 ayat 3): Jika NPOP lebih rendah dari NJOP PBB tahun berjalan, maka dasar pengenaan yang digunakan adalah <strong>NJOP PBB</strong>.
            </p>
        </div>
      </section>

      {/* --- KEWAJIBAN & SANKSI PPAT (PASAL 16) --- */}
      <section className='max-w-7xl mx-auto py-24 px-4'>
        <div className='bg-white rounded-[3rem] p-8 md:p-16 border border-slate-100 shadow-2xl overflow-hidden relative'>
            <div className='absolute top-0 right-0 w-32 h-full bg-purple-600/5'></div>
            <div className='grid lg:grid-cols-2 gap-16 relative z-10'>
                <div>
                    <h3 className='text-3xl font-black text-gray-900 mb-6'>Kewajiban Pejabat <br/><span className='text-purple-600'>PPAT / Notaris</span></h3>
                    <p className='text-sm text-gray-600 leading-relaxed mb-8'>
                        Berdasarkan <strong>Pasal 16</strong>, Pejabat wajib meminta bukti bayar BPHTB sebelum tanda tangan akta dan wajib lapor ke Bupati paling lambat tanggal 10 bulan berikutnya.
                    </p>
                    <div className='space-y-4'>
                        <div className='flex justify-between p-4 bg-red-50 rounded-2xl border border-red-100 items-center'>
                            <span className='text-xs font-bold text-red-700'>Denda Langgar Tanda Tangan Akta</span>
                            <span className='font-black text-red-600 uppercase text-xs'>Rp 10.000.000 / Akta</span>
                        </div>
                        <div className='flex justify-between p-4 bg-red-50 rounded-2xl border border-red-100 items-center'>
                            <span className='text-xs font-bold text-red-700'>Denda Keterlambatan Laporan</span>
                            <span className='font-black text-red-600 uppercase text-xs'>Rp 1.000.000 / Laporan</span>
                        </div>
                    </div>
                </div>

                <div className='bg-slate-900 rounded-[2rem] p-8 text-white flex flex-col justify-center'>
                    <h4 className='text-purple-400 font-bold text-xs uppercase tracking-widest mb-6'>Saat Terutang (Pasal 14)</h4>
                    <div className='space-y-4 text-[11px]'>
                        <div className='flex justify-between border-b border-white/10 pb-2'>
                            <span className='text-slate-400 uppercase'>Jual Beli</span>
                            <span className='font-bold'>Tanggal PPJB / Akta</span>
                        </div>
                        <div className='flex justify-between border-b border-white/10 pb-2'>
                            <span className='text-slate-400 uppercase'>Hibah / Hadiah / Tukar</span>
                            <span className='font-bold'>Tanggal Akta</span>
                        </div>
                        <div className='flex justify-between border-b border-white/10 pb-2'>
                            <span className='text-slate-400 uppercase'>Waris</span>
                            <span className='font-bold'>Tanggal Pendaftaran BPN</span>
                        </div>
                        <div className='flex justify-between border-b border-white/10 pb-2'>
                            <span className='text-slate-400 uppercase'>Lelang</span>
                            <span className='font-bold'>Tanggal Penunjukan Pemenang</span>
                        </div>
                        <div className='flex justify-between border-b border-white/10 pb-2'>
                            <span className='text-slate-400 uppercase'>Putusan Hakim</span>
                            <span className='font-bold'>Tanggal Putusan Tetap (Inkracht)</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* --- FOOTER CTA --- */}
      <footer className='bg-purple-950 py-16 px-6 text-center text-white'>
          <h2 className='text-3xl font-black mb-8'>Urus Sertifikat & BPHTB Anda</h2>
          <div className='flex flex-wrap justify-center gap-4'>
              <button className='px-10 py-4 bg-white text-purple-900 font-bold rounded-2xl hover:bg-purple-50 transition-all shadow-lg'
                onClick={() => window.open('https://patriot.pasuruankab.go.id/apps/bphtb/', '_blank')}
              >
                Akses e-BPHTB
              </button>
              <button className='px-10 py-4 bg-purple-700 text-white font-bold rounded-2xl border border-purple-500 hover:bg-purple-800 transition-all'
                onClick={() => navigate('/layanan/underdevelopment')}
              >
                Panduan Pelaporan PPAT
              </button>
          </div>
          <p className='text-purple-400 text-[10px] mt-12 tracking-widest uppercase'>Bapenda Kabupaten Pasuruan | Berdasarkan Perda No. 3 Tahun 2023</p>
      </footer>
    </div>
  );
};

export default Bphtb;