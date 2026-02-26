import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const PbbP2 = () => {
    
    const navigate = useNavigate();
    const [activeForm, setActiveForm] = useState('mutasi');

    const adminServices = {
    mutasi: {
      title: "Mutasi / Perubahan Data",
      desc: "Permohonan perubahan data objek atau subjek pajak karena peralihan hak (Jual Beli, Hibah, Waris, dll) atau perubahan luas tanah/bangunan.",
      downloadLink: "https://drive.google.com/drive/u/0/folders/1BAysnlINoNddRNR_EXchS_M-S4mfZi3Q",
      reqs: [
        "Surat Pemberitahuan Objek Pajak (SPOP) & Lampiran SPOP (LSPOP) diisi lengkap disertai gambar denah",
        "Foto copy KTP wajib pajak atau identitas lainnya/NPWP Badan",
        "Foto copy SPPT PBB tahun terakhir dan bukti pelunasan (SSP/STTS)",
        "Foto copy bukti kepemilikan (SHM/AJB/APHB/Akta Waris/Hibah) atau SK Kepala Desa/Lurah",
        "Surat Kuasa jika permohonan dikuasakan kepada pihak lain"
      ]
    },
    pendaftaran: {
      title: "Pendaftaran Objek Baru",
      desc: "Pendaftaran untuk data baru atas objek pajak PBB-P2 yang sampai saat ini belum pernah dikenakan pajak.",
      downloadLink: "https://drive.google.com/drive/u/0/folders/1BAysnlINoNddRNR_EXchS_M-S4mfZi3Q",
      reqs: [
        "SPOP & LSPOP diisi jelas, benar, lengkap dan ditandatangani disertai gambar denah",
        "Foto copy KTP wajib pajak atau NPWP Badan",
        "Foto copy bukti kepemilikan lahan atau surat keterangan dari Kepala Desa/Lurah",
        "Surat pernyataan dari wajib pajak bahwa objek tersebut belum pernah terbit SPPT PBB-P2",
        "Mencantumkan data NOP yang berbatasan langsung (Utara, Selatan, Timur, Barat)"
      ]
    },
    pembetulan: {
      title: "Pembetulan / Pembatalan",
      desc: "Pengajuan koreksi atas kesalahan tulis, kesalahan hitung, atau kekeliruan penerapan peraturan pada ketetapan pajak.",
      downloadLink: "https://drive.google.com/drive/u/0/folders/1BAysnlINoNddRNR_EXchS_M-S4mfZi3Q",
      reqs: [
        "Foto copy SPPT, SKPD, atau dokumen ketetapan lain yang diajukan pembetulan",
        "SPOP/LSPOP PBB yang telah diisi benar dan ditandatangani",
        "Bukti hak atau penguasaan terhadap objek PBB-P2",
        "Foto copy KTP atau NPWP Badan"
      ]
    },
    penghapusan: {
      title: "Penghapusan Objek",
      desc: "Permohonan penghapusan karena objek pajak tutup, tidak ada secara nyata, objek ganda, atau sudah tidak lagi menjadi objek pajak.",
      downloadLink: "https://drive.google.com/drive/u/0/folders/1BAysnlINoNddRNR_EXchS_M-S4mfZi3Q",
      reqs: [
        "SPOP & LSPOP yang telah diisi lengkap dan ditandatangani",
        "Asli SPPT, SKPD, atau dokumen ketetapan pajak lainnya",
        "Surat Keterangan Pejabat berwenang yang menyatakan alasan penghapusan",
        "Foto copy KTP, NPWPD, atau identitas lainnya dari wajib pajak"
      ]
    }
  };

  return (
    <div className='bg-slate-50 min-h-screen font-sans antialiased'>
      
      {/* --- HERO SECTION --- */}
      <section className='relative bg-[#064e3b] text-white py-24 md:py-32 px-4 overflow-hidden'>
        <div className="absolute inset-0 opacity-10" 
             style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='20' viewBox='0 0 100 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 10 Q 25 20 50 10 T 100 10' fill='none' stroke='white' stroke-width='2'/%3E%3C/svg%3E")`, backgroundSize: '100px 20px' }}>
        </div>
        
        <div className='relative z-10 max-w-7xl mx-auto text-center'>
          <span className='inline-block py-1.5 px-4 rounded-full bg-emerald-800/50 border border-emerald-400/30 text-emerald-200 text-[10px] md:text-xs font-black tracking-[0.2em] mb-8 uppercase backdrop-blur-md'>
            PERDA NO. 3 TAHUN 2023
          </span>
          <h1 className='text-5xl md:text-7xl font-black mb-8 leading-tight tracking-tighter'>
            Pajak <span className='text-emerald-400'>PBB-P2</span>
          </h1>
          <p className='text-emerald-100/80 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed'>
            Pajak Bumi dan Bangunan Perdesaan dan Perkotaan. Kontribusi wajib atas kepemilikan, penguasaan, atau pemanfaatan tanah dan bangunan.
          </p>
        </div>
      </section>

      {/* --- MENU LAYANAN DIGITAL --- */}
<section className='max-w-7xl mx-auto px-4 md:px-6 -mt-16 relative z-20'>
  <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
    {[
      { 
        t: "Cetak e-SPPT", 
        d: "Unduh surat pemberitahuan pajak Anda secara digital. (PASTIKAN ANDA MEMASUKKAN NOP DAN NAMA DENGAN BENAR)", 
        i: "📄", 
        c: "border-emerald-500", 
        link: "https://patriot.pasuruankab.go.id/apps/cek-bayar/ceknopbayar-pasuruan.kab?module=pbb",
        isExternal: true 
      },
      { 
        t: "Cek Tunggakan", 
        d: "Informasi tagihan PBB yang belum terbayar.", 
        i: "🔍", 
        c: "border-teal-500", 
        link: "https://patriot.pasuruankab.go.id/apps/cek-bayar/ceknopbayar-pasuruan.kab?module=pbb", // Sesuaikan dengan route internal Anda
        isExternal: true 
      },
      { 
        t: "Mutasi PBB", 
        d: "Urus balik nama atau pecah objek pajak.", 
        i: "🔄", 
        c: "border-blue-500", 
        link: "/layanan/underdevelopment", // Sesuaikan dengan route internal Anda
        isExternal: false 
      }
    ].map((item, i) => (
      <div 
        key={i} 
        onClick={() => {
          if (item.isExternal) {
            window.open(item.link, '_blank', 'noopener,noreferrer');
          } else {
            navigate(item.link); // Pastikan 'navigate' dari useNavigate() sudah didefinisikan
            window.scrollTo(0, 0);
          }
        }}
        className={`group bg-white p-8 rounded-[2.5rem] shadow-2xl border-b-4 ${item.c} hover:-translate-y-2 transition-all duration-300 cursor-pointer flex flex-col h-full`}
      >
        <div className='text-4xl mb-4 group-hover:scale-110 transition-transform duration-300 flex-shrink-0'>
          {item.i}
        </div>
        <div className='flex-1'>
          <h4 className='font-black text-slate-900 text-lg mb-2 group-hover:text-emerald-600 transition-colors'>
            {item.t}
          </h4>
          <p className='text-xs text-slate-500 leading-relaxed'>
            {item.d}
          </p>
        </div>
        <div className='mt-6 text-emerald-600 font-bold text-xs flex items-center gap-2 group-hover:gap-3 transition-all'>
          Akses Layanan <span className='text-sm'>→</span>
        </div>
      </div>
    ))}
  </div>
</section>

    {/* --- ADMINISTRASI PBB SECTION --- */}
    <section className='max-w-7xl mx-auto px-4 py-15'>
    <div className='grid lg:grid-cols-12 gap-8 items-start'>
        <div className='lg:col-span-4 space-y-6'>
        <h3 className='text-3xl font-black text-slate-900 flex items-center gap-3 mb-8'>
            <span className='w-2 h-8 bg-emerald-600 rounded-full'></span> Administrasi PBB
        </h3>
        <div className='flex flex-col gap-2 bg-white p-4 rounded-[2rem] shadow-xl border border-slate-100'>
            {Object.keys(adminServices).map((key) => (
            <button 
                key={key} 
                onClick={() => setActiveForm(key)} 
                className={`text-left px-6 py-4 rounded-2xl font-bold text-sm transition-all ${activeForm === key ? 'bg-emerald-600 text-white shadow-lg' : 'text-slate-500 hover:bg-emerald-50'}`}
            >
                {adminServices[key].title}
            </button>
            ))}
        </div>
        <div className='p-6 bg-[#0f172a] rounded-3xl text-white shadow-xl'>
            <p className='text-[10px] font-black text-emerald-400 uppercase mb-2'>Tujuan Surat </p>
            <p className='text-sm font-bold leading-relaxed'>
                Yth. Kepala Badan Pendapatan Daerah.
            </p>
            <p className='text-xs text-slate-400 mt-2'>Jalan Panglima Sudirman No. 24, Pasuruan 67115 </p>
        </div>
        </div>

        <div className='lg:col-span-8 bg-white rounded-[3rem] p-8 md:p-12 shadow-2xl border border-emerald-100 relative overflow-hidden'>
        <div className='relative z-10'>
            <div className='flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8'>
            <div>
                <h4 className='text-2xl font-black text-slate-900 mb-2'>{adminServices[activeForm].title}</h4>
                <p className='text-slate-500 text-sm leading-relaxed'>{adminServices[activeForm].desc}</p>
            </div>
            
            {/* Tombol Download Dinamis */}
            <button 
                onClick={() => window.open(adminServices[activeForm].downloadLink, '_blank')}
                className='flex items-center justify-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-2xl font-bold text-sm transition-all shadow-lg shadow-emerald-200 shrink-0 self-start md:self-center group'
            >
                <svg className="w-5 h-5 group-hover:translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                </svg>
                Unduh Formulir
            </button>
            </div>
            
            <p className='text-[10px] font-black text-emerald-600 uppercase mb-4 tracking-widest'>Persyaratan Lampiran Dokumen</p>
            <ul className='space-y-4'>
            {adminServices[activeForm].reqs.map((req, i) => (
                <li key={i} className='flex gap-4 items-start p-4 bg-slate-50 rounded-2xl border border-slate-100 hover:border-emerald-200 transition-colors group'>
                <div className='mt-1 w-2 h-2 bg-emerald-500 rounded-full group-hover:scale-125 transition-transform'></div>
                <span className='text-sm text-slate-700 leading-relaxed font-medium'>{req}</span>
                </li>
            ))}
            </ul>
            
            <div className='mt-12 p-6 bg-amber-50 rounded-2xl border border-amber-100 flex gap-4'>
                <span className='text-xl'>⚠️</span>
                <p className='text-[10px] text-amber-800 italic leading-relaxed'>
                    Bahwa data yang saya isikan pada semua formulir beserta lampirannya merupakan data yang sebenarnya, dan bukan data palsu serta sesuai dengan kondisi Objek Pajak di lapangan pada saat ini. Segala ketidakbenaran dapat berakibat pada tanggung jawab hukum sesuai ketentuan perundang-undangan.
                </p>
            </div>
        </div>
        </div>
    </div>
    </section>

    {/* --- SECTION ALUR PELAYANAN ADMINISTRASI PBB --- */}
    <section className='max-w-7xl mx-auto px-4 pb-15'>
    <div className='text-center mb-16'>
        <h2 className='text-3xl font-black text-slate-900'>Alur Pelayanan Administrasi</h2>
        <p className='text-slate-500 mt-4'>Tahapan pengajuan permohonan layanan PBB-P2 secara tertib dan sistematis.</p>
    </div>

    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative'>
        {/* Garis Penghubung (Hanya Desktop) */}
        <div className='hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-emerald-100 -translate-y-1/2 z-0'></div>

        {[
        { 
            n: "01", 
            t: "Persiapan Berkas", 
            d: "Menyiapkan formulir yang diisi lengkap dan dokumen lampiran sesuai jenis permohonan.",
            i: "📂"
        },
        { 
            n: "02", 
            t: "Penyerahan Dokumen", 
            d: "Menyerahkan berkas ke Kantor BPKPD Pasuruan atau melalui petugas di Kantor Desa/Kecamatan.",
            i: "📩"
        },
        { 
            n: "03", 
            t: "Verifikasi Data", 
            d: "Petugas melakukan validasi dokumen dan pengecekan kondisi objek pajak di lapangan jika diperlukan.",
            i: "🔍"
        },
        { 
            n: "04", 
            t: "Penyelesaian", 
            d: "Penerbitan keputusan pembetulan, pembatalan, atau update data pada sistem PBB-P2.",
            i: "✅"
        }
        ].map((step, idx) => (
        <div key={idx} className='relative z-10 flex flex-col items-center text-center group'>
            <div className='w-16 h-16 bg-white border-4 border-emerald-500 rounded-2xl flex items-center justify-center text-2xl shadow-xl group-hover:bg-emerald-600 group-hover:scale-110 transition-all duration-300'>
            <span className='group-hover:hidden'>{step.i}</span>
            <span className='hidden group-hover:block text-white font-black text-lg'>{step.n}</span>
            </div>
            <div className='mt-6 bg-white p-6 rounded-3xl shadow-lg border border-slate-100 h-full'>
            <h4 className='font-black text-slate-900 mb-2'>{step.t}</h4>
            <p className='text-xs text-slate-500 leading-relaxed'>{step.d}</p>
            </div>
        </div>
        ))}
    </div>

    {/* Info Tambahan Pelaporan Pejabat */}
    <div className='mt-16 bg-slate-900 rounded-[3rem] p-8 md:p-12 text-white shadow-2xl flex flex-col md:flex-row items-center gap-8'>
        <div className='text-5xl'>🏢</div>
        <div className='flex-1'>
        <h4 className='text-xl font-bold mb-2'>Lokasi Pelayanan Terpadu</h4>
        <p className='text-slate-400 text-sm leading-relaxed'>
            Seluruh berkas administrasi ditujukan kepada <strong>Kepala Badan Pengelolaan Keuangan dan Pendapatan Daerah Kabupaten Pasuruan</strong>. Sesuai ketentuan, permohonan harus melampirkan data yang sebenarnya sesuai kondisi lapangan saat ini[cite: 61, 141, 206, 245].
        </p>
        </div>
        <div className='bg-white/10 p-6 rounded-2xl border border-white/10 text-center shrink-0'>
        <p className='text-[10px] font-black text-emerald-400 uppercase mb-1'>Jam Operasional</p>
        <p className='text-sm font-bold'>Senin - Jumat</p>
        <p className='text-xs text-slate-400'>08:00 - 15:00 WIB</p>
        </div>
    </div>
    </section>

      {/* --- SECTION ALUR LAYANAN (OFFICIAL ASSESSMENT - PASAL 6 & 9) --- */}
      <section className='max-w-7xl mx-auto px-4 py-15'>
        <div className='bg-white rounded-[2.5rem] shadow-xl p-8 md:p-12 border border-slate-100 flex flex-col lg:flex-row gap-12 items-center'>
          
          <div className='lg:w-1/2'>
            <h2 className='text-3xl font-black text-slate-900 mb-6'>Sistem Official Assessment</h2>
            <p className='text-slate-600 leading-relaxed mb-10'>
              Berdasarkan <strong>Pasal 6 & 9</strong>, PBB-P2 menggunakan sistem <strong>Official Assessment</strong>. Besaran pajak ditetapkan berdasarkan keadaan objek pada <strong>1 Januari</strong> setiap tahun pajak.
            </p>
            
            <div className='grid grid-cols-2 gap-6'>
              <div className='p-6 bg-emerald-50 rounded-3xl border border-emerald-100'>
                <p className='text-[10px] font-black text-emerald-600 uppercase mb-2'>Dasar Pengenaan</p>
                <p className='font-bold text-slate-800'>NJOP (Hasil Penilaian)</p>
              </div>
              <div className='p-6 bg-emerald-50 rounded-3xl border border-emerald-100'>
                <p className='text-[10px] font-black text-emerald-600 uppercase mb-2'>Wilayah Pungut</p>
                <p className='font-bold text-slate-800 text-sm'>Letak Objek Pajak</p>
              </div>
            </div>
          </div>

          <div className='lg:w-1/2 w-full space-y-4'>
            {[
              { n: "1a", t: "Pendataan & Penilaian", d: "Penetapan NJOP oleh Bupati setiap 3 tahun (atau tiap tahun untuk objek tertentu).", c: "bg-slate-50" },
              { n: "1b", t: "Penyampaian SPOP oleh wajib pajak", d: "Wajib pajak menyampaikan SPOP (Surat Pemberitahuan Objek Pajak) kepada pihak Bapenda.", c: "bg-slate-50" },
              { n: "2", t: "Penerbitan SPPT", d: "Penetapan besaran pajak terutang melalui Surat Pemberitahuan Pajak Terutang.", c: "bg-emerald-50 border-emerald-200" },
              { n: "3", t: "Pembayaran", d: "Pembayaran berdasarkan jatuh tempo yang ditetapkan oleh Bupati.", c: "bg-slate-50" }
            ].map((step, idx) => (
              <div key={idx} className={`relative flex items-center gap-6 p-6 rounded-2xl border ${step.c}`}>
                <div className='w-10 h-10 bg-white shadow-sm rounded-full flex items-center justify-center font-black text-slate-400'>{step.n}</div>
                <div className='flex-1'>
                  <h4 className='font-black text-slate-800 text-sm'>{step.t}</h4>
                  <p className='text-xs text-slate-500'>{step.d}</p>
                </div>
                {idx < 2 && (
                  <div className='absolute -bottom-4 left-11 text-emerald-400 z-10'>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- OBJEK & PENGECEUALIAN (PASAL 4) --- */}
      <section className='max-w-7xl mx-auto px-4 pb-24'>
        <div className='grid lg:grid-cols-2 gap-16 items-start'>
          <div className='space-y-8'>
            <h3 className='text-3xl font-black text-slate-900 flex items-center gap-3'>
              <span className='w-2 h-8 bg-emerald-600 rounded-full'></span> Objek Pajak (Pasal 4)
            </h3>
            
            <div className='p-8 bg-white rounded-[2rem] border border-slate-100 shadow-md'>
              <ul className='space-y-4 text-sm md:text-base text-gray-700 font-medium'>
                <li className='flex items-start gap-3'>
                  <span className='text-emerald-500 mt-1'>•</span> 
                  <span>Bumi dan/atau Bangunan yang dimiliki, dikuasai, dan dimanfaatkan oleh pribadi/Badan.</span>
                </li>
                <li className='flex items-start gap-3'>
                  <span className='text-emerald-500 mt-1'>•</span> 
                  <span>Mencakup permukaan Bumi hasil reklamasi atau pengurukan.</span>
                </li>
                <li className='flex items-start gap-3 text-red-600'>
                  <span className='mt-1 text-red-500'>•</span> 
                  <span>Mengecualikan kawasan Perkebunan, Perhutanan, dan Pertambangan (P3).</span>
                </li>
              </ul>
            </div>

            <div className='bg-[#0f172a] rounded-[3rem] p-8 md:p-12 text-white shadow-2xl relative overflow-hidden'>
              <h3 className='text-xl font-bold mb-8 flex items-center gap-2'>
                <span className='text-red-400 text-2xl'>×</span> Pengecualian Objek (Pasal 4 ayat 3)
              </h3>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-3 text-[11px] md:text-xs text-slate-300'>
                {[
                  "Kantor Pemerintah & Penyelenggara Negara.",
                  "Tempat Ibadah, Panti Sosial, & Pendidikan (Non-Profit).",
                  "Makam & Peninggalan Purbakala.",
                  "Hutan Lindung & Taman Nasional.",
                  "Perwakilan Diplomatik & Konsulat.",
                  "Jalur Kereta Api (MRT/LRT) & sejenisnya.",
                  "Tempat tinggal berdasarkan NJOP tertentu (Bupati)."
                ].map((item, i) => (
                  <div key={i} className='flex gap-4 items-center p-3 bg-white/5 rounded-2xl border border-white/5'>
                    <span className='w-2 h-2 bg-emerald-500 rounded-full shrink-0'></span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* --- SIMULASI PERHITUNGAN PBB-P2 (PASAL 6, 7, 8) --- */}
          <div className='bg-white rounded-[3rem] p-8 md:p-12 shadow-2xl border border-emerald-100'>
            <h3 className='text-2xl font-black text-slate-900 mb-8 flex items-center gap-3'>
               <span className='w-10 h-10 bg-emerald-600 text-white rounded-xl flex items-center justify-center text-lg'>🧮</span>
               Simulasi Perhitungan (Pasal 7 & 8)
            </h3>
            
            <div className='space-y-6'>
              <div className='p-6 bg-slate-50 rounded-2xl border border-slate-100'>
                <p className='text-[10px] font-black text-slate-400 uppercase mb-2'>Langkah 1: NJOP Netto (Pasal 6 ayat 3)</p>
                <div className='flex justify-between items-center text-xs md:text-sm mb-1'>
                  <span>Total NJOP (Bumi + Bangunan)</span>
                  <span className='font-bold'>Rp 1.010.000.000</span>
                </div>
                <div className='flex justify-between items-center text-xs md:text-sm text-red-500'>
                  <span>NJOP Tidak Kena Pajak (NJOPTKP)</span>
                  <span className='font-bold'>- Rp 10.000.000</span>
                </div>
                <div className='border-t border-slate-200 my-2'></div>
                <div className='flex justify-between items-center font-bold text-emerald-600 text-sm'>
                  <span>NJOP untuk Perhitungan Pajak</span>
                  <span>Rp 1.000.000.000</span>
                </div>
              </div>

              <div className='p-6 bg-emerald-50 rounded-2xl border border-emerald-100'>
                <p className='text-[10px] font-black text-emerald-600 uppercase mb-2'>Langkah 2: Penentuan AR dan Tarif (Pasal 8)</p>
                <div className='space-y-2 text-[11px] md:text-xs'>
                  <div className='flex justify-between'><span>AR untuk NJOPKP s/d Rp 1 Miliar</span><span className='font-bold'>55%</span></div>
                  <div className='flex justify-between opacity-50'><span>>NJOP dasar Pengenaan (55% * Rp 1 milyar)</span><span className='font-bold'>Rp 550.000.000</span></div>
                  <div className='flex justify-between'><span>Tarif untuk NJOP dasar Pengenaan s/d Rp 1 Miliar</span><span className='font-bold'>0,1%</span></div>
                </div>
              </div>

              <div className='p-8 bg-slate-900 rounded-[2.5rem] text-white text-center'>
                 <p className='text-[10px] font-black text-emerald-400 uppercase mb-4'>Hasil Akhir (Pasal 9)</p>
                 <div className='text-sm md:text-base font-mono leading-tight space-y-2'>
                   <p>Rp 1.000.000.000 × 55% × 0,1%</p>
                   <div className='h-px bg-white/20 w-1/2 mx-auto'></div>
                   <p className='text-2xl font-black text-emerald-400'>Rp 550.000 / Tahun</p>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- FOOTER CTA --- */}
      <footer className='bg-[#064e3b] py-20 px-6 text-center text-white'>
          <h2 className='text-3xl md:text-5xl font-black mb-8'>Cek SPPT PBB Anda Sekarang</h2>
          <div className='flex flex-wrap justify-center gap-4'>
              <button className='px-10 py-4 bg-emerald-500 text-white font-bold rounded-2xl hover:bg-emerald-400 transition-all shadow-lg
              ' onClick={() => window.open("https://patriot.pasuruankab.go.id/apps/cek-bayar/ceknopbayar-pasuruan.kab?module=pbb", '_blank', 'noopener,noreferrer')}>
                Bayar PBB Sekarang
              </button>
              <button className='px-10 py-4 bg-white/10 text-white font-bold rounded-2xl border border-white/20 hover:bg-white/20 transition-all'
              onClick={() => navigate("/layanan/underdevelopment")}>
                Panduan Mutasi PBB
              </button>
          </div>
          <p className='text-emerald-500/50 text-[10px] mt-12 tracking-widest uppercase font-bold'>Bapenda Kabupaten Pasuruan</p>
      </footer>
    </div>
  );
};

export default PbbP2;