import React from 'react'
import { useNavigate } from 'react-router-dom'

const PajakReklame = () => {

  const navigate = useNavigate()

  return (
    <div className='bg-slate-50 min-h-screen font-sans antialiased'>
      
  {/* --- HERO SECTION + KETENTUAN UMUM --- */}
      <section className='relative bg-slate-950 text-white py-24 md:py-32 px-4 overflow-hidden'>
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-emerald-500/20 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 -right-24 w-80 h-80 bg-teal-500/10 rounded-full blur-[100px]" />
        
        <div className="absolute inset-0 opacity-20" 
             style={{ backgroundImage: `radial-gradient(circle at 2px 2px, #14b8a6 1px, transparent 0)`, backgroundSize: '40px 40px' }}>
        </div>

        <div className='relative z-10 max-w-7xl mx-auto text-center'>
          <span className='inline-block py-1.5 px-4 rounded-full bg-teal-900/40 border border-teal-500/30 text-teal-300 text-[10px] md:text-xs font-black tracking-[0.2em] mb-8 uppercase backdrop-blur-md'>
            Regulasi Terbaru 2025
          </span>
          <h1 className='text-5xl md:text-7xl font-black mb-8 leading-tight tracking-tighter'>
            Pajak <span className='text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-teal-200 to-green-300'>Reklame</span>
          </h1>
          
          {/* Deskripsi Ketentuan Umum (Pasal 27) */}
          <div className='max-w-4xl mx-auto'>
            <p className='text-slate-300 text-lg md:text-xl leading-relaxed font-medium mb-10'>
              Pajak Reklame dipungut atas semua penyelenggaraan reklame. Sistem pemungutan bersifat <span className="text-emerald-400 font-bold italic underline decoration-emerald-500/30 decoration-4 underline-offset-4">Official Assessment</span>, di mana besaran pajak ditetapkan secara resmi oleh Badan Pendapatan Daerah melalui SKPD (Surat Ketetapan Pajak Daerah).
            </p>
            
            <div className='flex flex-wrap justify-center gap-4'>
              <div className='bg-white/5 backdrop-blur-md border border-white/10 px-6 py-3 rounded-2xl'>
                <span className='block text-[10px] text-teal-400 font-black uppercase tracking-widest mb-1 text-left'>Dasar Hukum</span>
                <span className='font-bold text-slate-100'>Perda No. 3/2023</span>
              </div>
              <div className='bg-white/5 backdrop-blur-md border border-white/10 px-6 py-3 rounded-2xl'>
                <span className='block text-[10px] text-teal-400 font-black uppercase tracking-widest mb-1 text-left'>Pelaksanaan</span>
                <span className='font-bold text-slate-100'>Perbup No. 17/2025</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- MENU LAYANAN WAJIB PAJAK --- */}
      <section className='max-w-7xl mx-auto px-4 md:px-6 -mt-16 relative z-20'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
          {[
            { 
              t: "Pendaftaran & Lapor", 
              d: "Ajukan permohonan pendaftaran reklame baru.", 
              i: "📝", 
              link: 'https://patriot.pasuruankab.go.id/apps/esptpd/',
              color: "hover:border-blue-500",
              iconBg: "bg-blue-100 text-blue-600 group-hover:bg-blue-600"
            },
            { 
              t: "Cek Tagihan SKPD", 
              d: "Lihat status penetapan dan tagihan pajak Anda.", 
              i: "📜", 
              link: 'https://patriot.pasuruankab.go.id/apps/cek-bayar/ceknopbayar-pasuruan.kab?module=reklame',
              color: "hover:border-emerald-500",
              iconBg: "bg-emerald-100 text-emerald-600 group-hover:bg-emerald-600"
            },
            { 
              t: "Bayar Pajak", 
              d: "Buat kode billing dan lakukan pembayaran online.", 
              i: "💳", 
              link: 'https://patriot.pasuruankab.go.id/apps/epayment/',
              color: "hover:border-green-500",
              iconBg: "bg-green-100 text-green-600 group-hover:bg-green-600"
            },
            { 
              t: "Perizinan", 
              d: "Izin reklame baru dan perpanjangan izin habis.", 
              i: "🔄", 
              link: 'https://dpmptsp.pasuruankab.go.id/#',
              color: "hover:border-yellow-500",
              iconBg: "bg-yellow-100 text-yellow-600 group-hover:bg-yellow-600"
            }
          ].map((item, idx) => (
            <div 
              key={idx}
              onClick={() => window.open(item.link, '_blank')}
              className={`group bg-white p-8 rounded-[2rem] border border-slate-100 shadow-xl ${item.color} transition-all duration-500 hover:-translate-y-2 cursor-pointer flex flex-col h-full`}
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-6 transition-colors duration-300 ${item.iconBg} group-hover:text-white`}>
                {item.i}
              </div>
              <h3 className='text-lg font-bold text-slate-800 mb-2'>{item.t}</h3>
              <p className='text-sm text-slate-500 mb-6 flex-1'>{item.d}</p>
              <div className='text-slate-900 text-sm font-bold flex items-center gap-2 group-hover:gap-4 transition-all'>
                Akses Portal <span>→</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- ALUR LAYANAN (Visual Timeline) --- */}
      <section className='py-24 px-4 bg-slate-50'>
        <div className='max-w-7xl mx-auto'>
          <div className='text-center mb-16'>
            <span className='text-emerald-600 font-black text-xs uppercase tracking-widest'>Workflow</span>
            <h2 className='text-3xl md:text-4xl font-black text-slate-900 mt-2'>Alur Penyelenggaraan Reklame</h2>
            <div className='w-12 h-1 bg-emerald-500 mx-auto mt-4 rounded-full'></div>
          </div>

          <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 relative'>
            {/* Garis Penghubung (Hanya Desktop) */}
            <div className='hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-200 -translate-y-1/2 z-0'></div>

            {[
              { 
                step: "01", 
                t: "Pendaftaran & Lapor", 
                d: "Wajib lapor ke Bapenda sebelum reklame dipasang.",
                sub: "Pasal 5 Perbup 17/2025"
              },
              { 
                step: "02", 
                stepName: "SKPD",
                t: "Penetapan Resmi", 
                d: "Penetapan NSR dan besaran pajak melalui SKPD oleh Bapenda.",
                sub: "Official Assessment"
              },
              { 
                step: "03", 
                t: "Pembayaran & Stiker", 
                d: "Pelunasan pajak untuk mendapatkan stiker izin lunas.",
                sub: "Legalitas Fisik"
              }
            ].map((item, idx) => (
              <div key={idx} className='relative z-10 group'>
                <div className='bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-lg text-center hover:border-emerald-500 transition-colors duration-500'>
                  <div className='w-16 h-16 bg-slate-900 text-white rounded-3xl flex items-center justify-center font-black text-xl mx-auto mb-6 group-hover:bg-emerald-600 transition-colors duration-500 shadow-xl group-hover:shadow-emerald-500/20'>
                    {item.step}
                  </div>
                  <h4 className='text-xl font-bold text-slate-800 mb-2'>{item.t}</h4>
                  <p className='text-sm text-slate-500 leading-relaxed mb-4'>{item.d}</p>
                  <span className='inline-block px-3 py-1 bg-slate-100 rounded-lg text-[10px] font-black text-slate-400 uppercase tracking-widest group-hover:bg-emerald-50 group-hover:text-emerald-600 transition-colors'>
                    {item.sub}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SECTION PAJAK REKLAME --- */}
      <section className='bg-slate-950 py-24 px-4 relative overflow-hidden'>
        {/* Latar Belakang Dekoratif (Glow Effect) */}
        <div className='absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] -mr-64 -mt-64'></div>
        <div className='absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px] -ml-64 -mb-64'></div>

        <div className='max-w-7xl mx-auto relative z-10'>
          
          {/* Header Section */}
          <div className='flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8'>
            <div className='max-w-2xl'>
              <span className='text-blue-400 font-black text-xs uppercase tracking-[0.3em] mb-4 block'>Ruang Publik & Visual</span>
              <h2 className='text-4xl md:text-5xl font-black text-white leading-none tracking-tighter'>
                Pajak <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400'>Reklame</span>
              </h2>
              <p className='text-slate-400 mt-6 text-lg'>
                Semua penyelenggaraan reklame yang menggunakan ruang publik atau dapat dilihat oleh umum merupakan objek pajak daerah.
              </p>
            </div>
            
            {/* Subjek & Wajib Pajak Mini Card */}
            <div className='flex gap-4'>
              <div className='bg-white/5 backdrop-blur-md border border-white/10 p-4 rounded-2xl'>
                <p className='text-[10px] font-bold text-slate-500 uppercase mb-1'>Subjek Pajak</p>
                <p className='text-white font-bold text-sm'>Pengguna Reklame</p>
              </div>
              <div className='bg-white/5 backdrop-blur-md border border-white/10 p-4 rounded-2xl'>
                <p className='text-[10px] font-bold text-slate-500 uppercase mb-1'>Wajib Pajak</p>
                <p className='text-white font-bold text-sm'>Penyelenggara Reklame</p>
              </div>
            </div>
          </div>

          {/* Grid Objek Reklame (Katalog Visual) */}
          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-16'>
            {[
              { t: "Billboard / Videotron", i: "🏙️", d: "Papan, Megatron, & Large LED" },
              { t: "Reklame Kain", i: "🚩", d: "Spanduk, Umbul-umbul, Banner" },
              { t: "Stiker / Melekat", i: "🏷️", d: "Reklame tempel permanen" },
              { t: "Selebaran", i: "📄", d: "Brosur, Flyer, & Leaflet" },
              { t: "Reklame Berjalan", i: "🚐", d: "Branding pada kendaraan" },
              { t: "Reklame Udara", i: "🎈", d: "Balon udara & Pesawat" },
              { t: "Reklame Apung", i: "⛵", d: "Media reklame di air" },
              { t: "Film / Slide", i: "🎞️", d: "Tampilan layar proyeksi" },
              { t: "Reklame Peragaan", i: "🚶", d: "Fashion show / Manusia iklan" },
              { t: "Reklame Lainnya", i: "✨", d: "Sesuai perkembangan teknologi" },
            ].map((item, idx) => (
              <div key={idx} className='group bg-white/5 hover:bg-white/10 border border-white/10 p-6 rounded-[2rem] transition-all duration-300 hover:-translate-y-2'>
                <div className='text-3xl mb-4 group-hover:scale-110 transition-transform'>{item.i}</div>
                <h4 className='text-white font-bold text-sm mb-1 leading-tight'>{item.t}</h4>
                <p className='text-[10px] text-slate-500 uppercase tracking-tighter'>{item.d}</p>
              </div>
            ))}
          </div>

          {/* Section Pengecualian (White Glassmorphism) */}
          <div className='bg-white rounded-[3rem] p-8 md:p-16 relative overflow-hidden'>
            <div className='absolute top-0 right-0 w-32 h-32 bg-red-500/10 rounded-full blur-3xl'></div>
            
            <div className='relative z-10 grid lg:grid-cols-2 gap-16 items-center'>
              <div>
                <h3 className='text-3xl font-black text-slate-900 mb-8 tracking-tight'>
                  Yang <span className='text-red-500'>Dikecualikan</span> <br/>dari Pajak Reklame
                </h3>
                <div className='space-y-4'>
                  {[
                    { h: "Media Massa & Digital", p: "Internet, Televisi, Radio, Koran, Majalah." },
                    { h: "Label Produk", p: "Merek yang melekat pada barang dagangan." },
                    { h: "Nama Pengenal Usaha", p: "Papan nama toko/profesi yang melekat di lokasi usaha." },
                    { h: "Pemerintah", p: "Reklame resmi milik Pemerintah Pusat/Daerah." },
                    { h: "Non-Komersial", p: "Kegiatan Politik, Sosial, dan Keagamaan tanpa iklan produk." }
                  ].map((exc, i) => (
                    <div key={i} className='flex gap-4 items-start p-4 rounded-2xl hover:bg-slate-50 transition-colors'>
                      <div className='w-6 h-6 rounded-full bg-red-100 text-red-500 flex items-center justify-center text-xs font-bold'>✕</div>
                      <div>
                        <p className='font-bold text-slate-800 text-sm'>{exc.h}</p>
                        <p className='text-xs text-slate-500 mt-1 leading-relaxed'>{exc.p}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Box Info Tambahan (Pasal 29 c) */}
              <div className='bg-slate-900 rounded-[2.5rem] p-8 md:p-12 text-white shadow-2xl'>
                <div className='flex items-center gap-4 mb-6'>
                    <div className='w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center text-2xl'>🏢</div>
                    <h4 className='text-xl font-bold italic text-blue-400 font-serif'>Catatan Nama Toko</h4>
                </div>
                <p className='text-slate-400 text-sm leading-relaxed mb-6'>
                    Nama pengenal usaha (papan nama toko) yang dipasang melekat pada bangunan tempat usaha <strong>dikecualikan</strong>, namun tetap wajib mengikuti aturan jenis, ukuran, dan bentuk yang diatur dalam <strong>Peraturan Bupati</strong>.
                </p>
                <div className='h-px bg-white/10 mb-6'></div>
                <p className='text-xs text-slate-500'>*Pastikan ukuran papan nama tidak melebihi 2 meter persegi dan jumlah papan hanya satu.</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* --- SECTION DPP PAJAK REKLAME (PASAL 68 - 70) --- */}
      <section className='bg-white py-24 px-4 overflow-hidden'>
        <div className='max-w-7xl mx-auto'>
          
          {/* Header & Definisi NSR */}
          <div className='flex flex-col lg:flex-row gap-12 mb-16 items-center'>
            <div className='lg:w-1/2'>
              <h2 className='text-3xl md:text-4xl font-black text-slate-900 leading-tight mb-6'>
                Nilai Sewa Reklame <span className='text-blue-600'>(NSR)</span>
              </h2>
              <p className='text-gray-600 leading-relaxed mb-6'>
                Dasar Pengenaan Pajak Reklame adalah <strong>Nilai Sewa Reklame (NSR)</strong>. Cara penetapannya dibedakan berdasarkan siapa yang menyelenggarakan reklame tersebut.
              </p>
              
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                <div className='p-6 bg-slate-50 rounded-2xl border border-slate-100'>
                  <span className='block text-[10px] font-black text-blue-600 uppercase mb-2'>Pihak Ketiga</span>
                  <p className='text-sm font-bold text-slate-800'>Berdasarkan Nilai Kontrak Reklame.</p>
                </div>
                <div className='p-6 bg-blue-50 rounded-2xl border border-blue-100'>
                  <span className='block text-[10px] font-black text-blue-600 uppercase mb-2'>Diselenggarakan Sendiri</span>
                  <p className='text-sm font-bold text-slate-800'>Dihitung berdasarkan variabel teknis & lokasi.</p>
                </div>
              </div>
            </div>

            {/* Formula Visual (Pasal 69) */}
            <div className='lg:w-1/2 w-full'>
              <div className='bg-slate-900 rounded-[3rem] p-8 md:p-10 text-white shadow-2xl relative overflow-hidden'>
                <div className='absolute top-0 right-0 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl'></div>
                <h4 className='text-sm font-bold text-blue-400 uppercase tracking-[0.2em] mb-8'>Rumus Perhitungan NSR</h4>
                <div className='space-y-4 font-mono text-xs md:text-sm'>
                  <div className='flex justify-between p-3 bg-white/5 rounded-xl border border-white/10 italic text-slate-400'>
                    <span>NJOPR (Biaya Buat + Pasang + Rawat)</span>
                  </div>
                  <div className='text-center text-blue-500 font-bold'>×</div>
                  <div className='flex justify-between p-3 bg-white/5 rounded-xl border border-white/10'>
                    <span>Ukuran (P × L) × Sisi × Jumlah × Lama</span>
                  </div>
                  <div className='text-center text-blue-500 font-bold'>×</div>
                  <div className='flex justify-between p-3 bg-blue-600/20 rounded-xl border border-blue-500/30 text-blue-200'>
                    <span>Koefisien (Lama, Strategis Lokasi, Tinggi)</span>
                  </div>
                  <div className='pt-4 border-t border-white/10 mt-4 flex justify-between items-center'>
                    <span className='font-black text-lg'>TOTAL NSR</span>
                    <span className='text-2xl font-black text-blue-400'>DPP</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Variabel Penentu (Pasal 70) */}
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20'>
            {[
              { t: "Klasifikasi Jalan", d: "Ditentukan oleh kelas jalan (Utama, A, B, C, D). Semakin strategis, koefisien semakin tinggi.", icon: "🛣️" },
              { t: "Durasi Waktu", d: "Dihitung dalam satuan tahun, bulan, minggu, hari, hingga jam.", icon: "⏳" },
              { t: "Ketinggian", d: "Ketinggian reklame mempengaruhi koefisien risiko dan nilai estetika.", icon: "📏" },
              { t: "Cara Ukur", d: "Dihitung dari batas bingkai terluar atau garis lurus gambar/logo.", icon: "📐" }
            ].map((item, i) => (
              <div key={i} className='p-8 bg-white border border-slate-100 rounded-3xl shadow-sm hover:shadow-lg transition-all'>
                <div className='text-3xl mb-4'>{item.icon}</div>
                <h4 className='font-bold text-slate-900 mb-2'>{item.t}</h4>
                <p className='text-xs text-gray-500 leading-relaxed'>{item.d}</p>
              </div>
            ))}
          </div>

          {/* Aturan Penyesuaian (Pasal 69 Ayat 2-6) */}
          <div className='bg-slate-900 rounded-[3rem] overflow-hidden'>
            <div className='grid grid-cols-1 lg:grid-cols-3'>
              
              {/* Kolom 1: Iklan Rokok */}
              <div className='p-10 border-b lg:border-b-0 lg:border-r border-white/5'>
                <div className='flex items-center gap-4 mb-6'>
                  <div className='w-12 h-12 bg-red-500/20 text-red-500 rounded-2xl flex items-center justify-center text-xl'>🚬</div>
                  <h4 className='text-white font-bold'>Produk Tembakau</h4>
                </div>
                <p className='text-slate-400 text-sm leading-relaxed'>
                  Reklame dengan materi berupa <span className='text-red-400 font-bold'>Rokok</span> atau hasil olahan tembakau, besarnya NSR <span className='text-red-400 font-black'>DITAMBAH 15%</span>.
                </p>
              </div>

              {/* Kolom 2: Reklame Indoor */}
              <div className='p-10 border-b lg:border-b-0 lg:border-r border-white/5'>
                <div className='flex items-center gap-4 mb-6'>
                  <div className='w-12 h-12 bg-emerald-500/20 text-emerald-500 rounded-2xl flex items-center justify-center text-xl'>🏠</div>
                  <h4 className='text-white font-bold'>Reklame Indoor</h4>
                </div>
                <ul className='space-y-4 text-xs text-slate-400'>
                  <li className='flex items-start gap-2'>
                    <span className='text-emerald-500'>●</span>
                    <span>Ukuran <span className='text-white'>&lt; 1 m²</span>: Tidak dikenakan NSR (Gratis).</span>
                  </li>
                  <li className='flex items-start gap-2'>
                    <span className='text-emerald-500'>●</span>
                    <span>Ukuran <span className='text-white'>&ge; 1 m²</span>: Mendapatkan <span className='text-emerald-400 font-bold'>Pengurangan 50%</span>.</span>
                  </li>
                  <li className='text-[10px] italic mt-2'>*Tidak berlaku untuk Restoran & Rumah Makan.</li>
                </ul>
              </div>

              {/* Kolom 3: Nama Pengenal Toko */}
              <div className='p-10 bg-blue-600'>
                <div className='flex items-center gap-4 mb-6'>
                  <div className='w-12 h-12 bg-white/20 text-white rounded-2xl flex items-center justify-center text-xl'>🏪</div>
                  <h4 className='text-white font-bold'>Nama Toko / Profesi</h4>
                </div>
                <p className='text-blue-100 text-sm leading-relaxed mb-4'>
                  Papan nama pengenal usaha yang melekat pada bangunan <span className='font-bold underline'>Bukan Objek Pajak</span> dengan syarat:
                </p>
                <div className='flex gap-2 mb-2'>
                  <span className='px-2 py-1 bg-white/20 rounded-md text-[10px] font-bold'>Max 2 m²</span>
                  <span className='px-2 py-1 bg-white/20 rounded-md text-[10px] font-bold'>Hanya 1 Papan</span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION PERHITUNGAN AKHIR PAJAK REKLAME (PASAL 68 & 27) --- */}
      <section className='bg-slate-50 py-24 px-4 relative'>
        <div className='max-w-7xl mx-auto'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-center'>
            
            {/* Kiri: Penjelasan Tarif & Saat Terutang */}
            <div>
              <div className='inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-[10px] font-black uppercase tracking-widest mb-6'>
                <span className='relative flex h-2 w-2'>
                  <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75'></span>
                  <span className='relative inline-flex rounded-full h-2 w-2 bg-emerald-500'></span>
                </span>
                Ketetapan Tarif Daerah
              </div>
              <h2 className='text-4xl font-black text-slate-900 leading-tight mb-6'>
                Besaran Pokok <br /><span className='text-emerald-600'>Pajak Terutang</span>
              </h2>
              <p className='text-slate-600 text-lg leading-relaxed mb-8'>
                Berdasarkan <strong>Pasal 27</strong>, tarif Pajak Reklame ditetapkan secara tunggal. Berbeda dengan PBJT, perhitungan reklame bersifat <em>official</em> berdasarkan nilai sewa yang telah dikalikan koefisien strategis.
              </p>

              <div className='space-y-4'>
                <div className='flex items-center gap-4 p-5 bg-white rounded-2xl border border-slate-200 shadow-sm'>
                  <div className='w-12 h-12 bg-emerald-600 text-white rounded-xl flex items-center justify-center text-xl font-black'>25%</div>
                  <div>
                    <h4 className='font-bold text-slate-900'>Tarif Pajak Reklame</h4>
                    <p className='text-xs text-slate-500'>Berlaku untuk semua jenis objek reklame tanpa terkecuali.</p>
                  </div>
                </div>
                <div className='flex items-center gap-4 p-5 bg-white rounded-2xl border border-slate-200 shadow-sm'>
                  <div className='w-12 h-12 bg-slate-100 text-slate-600 rounded-xl flex items-center justify-center text-xl'>📍</div>
                  <div>
                    <h4 className='font-bold text-slate-900'>Wilayah Pemungutan</h4>
                    <p className='text-xs text-slate-500'>Tempat reklame diselenggarakan atau dipasang (Kab. Pasuruan).</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Kanan: Kalkulator Visual / Simulator Pokok */}
            <div className='relative'>
              {/* Background Glow */}
              <div className='absolute -inset-4 bg-emerald-500/20 rounded-[3rem] blur-2xl'></div>
              
              <div className='relative bg-slate-900 rounded-[3rem] p-8 md:p-12 text-white shadow-2xl'>
                <div className='mb-10 text-center'>
                  <p className='text-emerald-400 font-black text-xs uppercase tracking-[0.3em] mb-2'>Simulasi Rumus Akhir</p>
                  <div className='h-1 w-20 bg-emerald-500 mx-auto rounded-full'></div>
                </div>

                <div className='space-y-8'>
                  {/* Step 1: NSR */}
                  <div className='flex justify-between items-center'>
                    <div>
                      <h4 className='text-slate-400 text-xs font-bold uppercase'>Nilai Sewa Reklame (DPP)</h4>
                      <p className='text-xl font-mono'>Rp 1.000.000</p>
                    </div>
                    <div className='text-slate-700 text-2xl font-light'>────────</div>
                  </div>

                  {/* Step 2: Tarif */}
                  <div className='flex justify-between items-center bg-white/5 p-6 rounded-3xl border border-white/10'>
                    <div>
                      <h4 className='text-emerald-400 text-xs font-bold uppercase mb-1'>Tarif Perda</h4>
                      <p className='text-3xl font-black italic'>25%</p>
                    </div>
                    <div className='text-right'>
                      <p className='text-[10px] text-slate-500 uppercase font-bold mb-1'>Metode Hitung</p>
                      <p className='text-sm font-medium'>NSR × 25%</p>
                    </div>
                  </div>

                  {/* Step 3: Total */}
                  <div className='pt-6 border-t border-white/10'>
                    <div className='flex justify-between items-end'>
                      <div>
                        <h4 className='text-slate-400 text-xs font-bold uppercase mb-1'>Pajak Harus Dibayar</h4>
                        <p className='text-4xl font-black text-white tracking-tighter'>Rp 250.000</p>
                      </div>
                      <div className='bg-emerald-500 text-slate-900 text-[10px] font-black px-3 py-1 rounded-lg uppercase mb-2'>
                        Terutang
                      </div>
                    </div>
                  </div>
                </div>

                {/* Info Note */}
                <div className='mt-10 flex gap-3 p-4 bg-white/5 rounded-2xl border border-white/5'>
                  <span className='text-yellow-500 text-lg'>⚠️</span>
                  <p className='text-[10px] text-slate-400 leading-relaxed italic'>
                    *Nilai ini merupakan simulasi. Besaran pajak tetap (SKPD) akan diterbitkan oleh Bapenda dengan mempertimbangkan koefisien lokasi dan masa tayang.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>



      {/* --- CTA SECTION (Modern) --- */}
      <div className='relative bg-gray-900 py-20 px-6 overflow-hidden'>
        {/* Dekorasi Background */}
        <div className='absolute top-0 right-0 w-96 h-96 bg-teal-600 rounded-full blur-[100px] opacity-20 pointer-events-none transform translate-x-1/2 -translate-y-1/2'></div>
        <div className='absolute bottom-0 left-0 w-96 h-96 bg-green-600 rounded-full blur-[100px] opacity-20 pointer-events-none transform -translate-x-1/2 translate-y-1/2'></div>

        <div className='relative z-10 max-w-4xl mx-auto text-center'>
            <h2 className='text-3xl md:text-5xl font-extrabold text-white mb-6 tracking-tight'>
              Pasang Reklame Tanpa Was-was?
            </h2>
            <p className='text-gray-300 text-lg mb-10 max-w-2xl mx-auto leading-relaxed'>
                Pastikan reklame Anda berizin dan taat pajak. Reklame ilegal dapat ditertibkan sewaktu-waktu sesuai Perbup 17/2025.
            </p>
            
            <div className='flex flex-col sm:flex-row justify-center gap-6'>
                
                {/* TOMBOL 1: Lapor Pajak */}
                <button 
                    onClick={() => window.open('https://patriot.pasuruankab.go.id/apps/esptpd/', '_blank')} 
                    className='group relative px-8 py-4 bg-gradient-to-r from-teal-500 to-green-600 text-white font-bold rounded-full shadow-lg shadow-teal-500/30 hover:shadow-teal-500/50 hover:-translate-y-1 hover:scale-105 transition-all duration-300 cursor-pointer flex items-center justify-center gap-3 overflow-hidden ring-4 ring-transparent hover:ring-teal-500/20'
                >
                    <div className="absolute inset-0 w-full h-full bg-white/20 group-hover:translate-x-full transition-transform duration-500 -skew-x-12 -translate-x-full"></div>
                    <span className='relative flex items-center gap-2'>
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>
                        Lapor Pajak Reklame
                    </span>
                </button>
                
                {/* TOMBOL 2: KONSULTASI */}
                <button 
                    onClick={() => { window.open('https://dpmptsp.pasuruankab.go.id/#', '_blank'); }}
                    className='group relative px-8 py-4 bg-white text-gray-900 font-bold rounded-full shadow-lg hover:shadow-white/20 hover:-translate-y-1 hover:scale-105 transition-all duration-300 cursor-pointer flex items-center justify-center gap-3 ring-4 ring-transparent hover:ring-white/20'
                >
                    <svg className="w-6 h-6 text-teal-600 group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path></svg>
                    <span>Daftar Izin Reklame </span>
                </button>

            </div>
        </div>
      </div>

    </div>
  )
}

export default PajakReklame