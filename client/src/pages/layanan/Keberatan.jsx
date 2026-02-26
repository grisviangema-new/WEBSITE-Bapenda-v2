import React from 'react'
import { useNavigate } from 'react-router-dom'

const Keberatan = () => {

  const navigate = useNavigate()

  return (
    <div className='bg-slate-50 min-h-screen font-sans'>
      
      {/* --- HERO SECTION --- */}
      <div className='relative bg-gradient-to-br from-rose-900 via-red-900 to-orange-900 text-white py-20 md:py-28 px-4 md:px-6 overflow-hidden'>
        
        {/* Abstract Pattern */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <pattern id="circles" width="40" height="40" patternUnits="userSpaceOnUse">
                        <circle cx="20" cy="20" r="18" fill="none" stroke="white" strokeWidth="1"/>
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#circles)" />
            </svg>
        </div>

        <div className='relative z-10 max-w-7xl mx-auto text-center'>
          <span className='inline-block py-1.5 px-4 rounded-full bg-rose-700/50 border border-rose-400 text-rose-100 text-[10px] md:text-xs font-bold tracking-widest mb-6 animate-fade-in-up uppercase'>
            Hak Wajib Pajak
          </span>
          <h1 className='text-4xl md:text-6xl font-extrabold mb-6 leading-tight tracking-tight drop-shadow-lg'>
            Layanan <span className='text-transparent bg-clip-text bg-gradient-to-r from-rose-200 to-orange-200'>Keberatan & Keringanan</span>
          </h1>
          <p className='text-rose-100 text-base md:text-xl max-w-3xl mx-auto leading-relaxed font-light px-4'>
            Kami menjamin rasa keadilan bagi Wajib Pajak melalui mekanisme pengajuan keberatan atas ketetapan pajak dan permohonan keringanan sesuai ketentuan yang berlaku.
          </p>
        </div>
      </div>

      {/* --- DUAL CARDS (DEFINITION) --- */}
      <div className='max-w-6xl mx-auto px-4 md:px-6 -mt-16 relative z-20'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12'>
            
            {/* Card 1: Keberatan */}
            <div className='bg-white rounded-3xl shadow-xl p-8 border-t-8 border-rose-600 hover:-translate-y-2 transition-transform duration-300'>
                <div className='flex items-center gap-4 mb-4'>
                    <div className='w-12 h-12 bg-rose-100 text-rose-600 rounded-full flex items-center justify-center text-2xl'>⚖️</div>
                    <h2 className='text-2xl font-bold text-gray-800'>Keberatan Pajak</h2>
                </div>
                <p className='text-gray-600 text-sm leading-relaxed mb-4 min-h-[60px]'>
                    Diajukan jika Wajib Pajak berpendapat bahwa <strong>jumlah pajak terutang tidak sesuai</strong> (Data Luas, NJOP, atau Tarif tidak akurat).
                </p>
                <div className='bg-rose-50 p-4 rounded-xl border border-rose-100'>
                    <h4 className='font-bold text-rose-800 text-sm mb-2'>Syarat Utama:</h4>
                    <ul className='list-disc pl-4 text-xs text-rose-700 space-y-1'>
                        <li>Diajukan tertulis maks 3 bulan sejak SKPD diterbitkan.</li>
                        <li>Memiliki bukti pendukung (Sertifikat, Izin, Foto).</li>
                        <li>Telah membayar minimal 50% dari ketetapan (Opsional/Sesuai Perda).</li>
                    </ul>
                </div>
            </div>

            {/* Card 2: Keringanan */}
            <div className='bg-white rounded-3xl shadow-xl p-8 border-t-8 border-orange-500 hover:-translate-y-2 transition-transform duration-300'>
                <div className='flex items-center gap-4 mb-4'>
                    <div className='w-12 h-12 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center text-2xl'>📉</div>
                    <h2 className='text-2xl font-bold text-gray-800'>Keringanan Pajak</h2>
                </div>
                <p className='text-gray-600 text-sm leading-relaxed mb-4 min-h-[60px]'>
                    Diajukan jika data pajak sudah benar, namun Wajib Pajak <strong>tidak mampu membayar</strong> karena kondisi tertentu atau sebab kahar.
                </p>
                <div className='bg-orange-50 p-4 rounded-xl border border-orange-100'>
                    <h4 className='font-bold text-orange-800 text-sm mb-2'>Kondisi Penerima:</h4>
                    <ul className='list-disc pl-4 text-xs text-orange-700 space-y-1'>
                        <li>Pensiunan, Veteran, Masyarakat Berpenghasilan Rendah.</li>
                        <li>Terkena bencana alam (banjir, kebakaran, gempa).</li>
                        <li>Objek pajak lahan pertanian/cagar budaya.</li>
                    </ul>
                </div>
            </div>

        </div>
      </div>

      {/* --- KATEGORI PENGAJUAN --- */}
      <div className='max-w-7xl mx-auto px-4 md:px-6 py-20 md:py-28'>
        <div className='text-center mb-16'>
            <h2 className='text-3xl md:text-4xl font-bold text-gray-900'>Jenis Permohonan</h2>
            <p className='text-gray-500 mt-4 max-w-2xl mx-auto text-sm md:text-base'>
                Fasilitas pengurangan yang dapat diajukan oleh Wajib Pajak Daerah.
            </p>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
            {[
                { title: "Pengurangan Pokok", icon: "💰", desc: "Potongan harga pokok pajak karena kondisi ekonomi atau bencana." },
                { title: "Penghapusan Denda", icon: "🚫", desc: "Penghapusan sanksi administrasi (bunga/denda) karena kekhilafan." },
                { title: "Pembetulan SKPD", icon: "✏️", desc: "Koreksi atas kesalahan tulis atau hitung dalam surat ketetapan." },
                { title: "Pembatalan SKPD", icon: "❌", desc: "Pembatalan ketetapan pajak yang tidak seharusnya terutang." },
                { title: "Angsuran Pembayaran", icon: "🗓️", desc: "Permohonan mencicil pajak terutang dalam jangka waktu tertentu." },
                { title: "Penundaan Pembayaran", icon: "⏳", desc: "Mengundur waktu jatuh tempo pembayaran pajak." },
            ].map((item, idx) => (
                <div key={idx} className='bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-lg transition-all'>
                    <div className='flex items-start gap-4'>
                        <div className='text-3xl bg-gray-50 w-12 h-12 flex items-center justify-center rounded-lg'>{item.icon}</div>
                        <div>
                            <h3 className='font-bold text-gray-800'>{item.title}</h3>
                            <p className='text-sm text-gray-500 mt-1'>{item.desc}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </div>

      {/* --- ALUR PROSES --- */}
      <div className='bg-rose-900 py-20 px-4 md:px-6 text-white'>
        <div className='max-w-6xl mx-auto'>
            <div className='text-center mb-16'>
                <h2 className='text-3xl md:text-4xl font-bold mb-4'>Alur Pengajuan</h2>
                <p className='text-rose-200'>Proses transparan dan akuntabel. Maksimal 12 Bulan setelah tanggal pengajuan.</p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-4 gap-8 relative'>
                {/* Connecting Line (Desktop) */}
                <div className='hidden md:block absolute top-8 left-0 w-full h-1 bg-rose-800 -z-0'></div>

                {[
                    { step: "1", title: "Permohonan", desc: "WP mengajukan surat permohonan tertulis beserta lampiran dokumen pendukung ke Bapenda." },
                    { step: "2", title: "Verifikasi", desc: "Petugas meneliti kelengkapan berkas dan melakukan peninjauan lapangan jika diperlukan." },
                    { step: "3", title: "Penelitian", desc: "Tim Keberatan melakukan kajian teknis dan perhitungan ulang nilai pajak." },
                    { step: "4", title: "Keputusan", desc: "Penerbitan Surat Keputusan (SK) Menerima (Sebagian/Seluruhnya) atau Menolak." }
                ].map((item, idx) => (
                    <div key={idx} className='relative z-10 flex flex-col items-center text-center'>
                        <div className='w-16 h-16 bg-white text-rose-900 rounded-full flex items-center justify-center text-2xl font-bold border-4 border-rose-500 shadow-lg mb-6'>
                            {item.step}
                        </div>
                        <h3 className='text-xl font-bold text-white mb-2'>{item.title}</h3>
                        <p className='text-sm text-rose-100 leading-relaxed px-2'>{item.desc}</p>
                    </div>
                ))}
            </div>
        </div>
      </div>

      {/* --- PERSYARATAN DOKUMEN --- */}
      <div className='bg-white py-24 px-4 md:px-6'>
        <div className='max-w-4xl mx-auto'>
            <div className='text-center mb-12'>
                <h2 className='text-2xl md:text-3xl font-bold text-gray-900'>Dokumen Persyaratan Umum</h2>
            </div>
            
            <div className='bg-slate-50 border border-slate-200 rounded-2xl p-6 md:p-8'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8'>
                    <div className='flex items-start gap-3'>
                        <span className='text-green-500 mt-1'>✓</span>
                        <span className='text-gray-700 text-sm'>Surat Permohonan (Sebutkan alasan jelas).</span>
                    </div>
                    <div className='flex items-start gap-3'>
                        <span className='text-green-500 mt-1'>✓</span>
                        <span className='text-gray-700 text-sm'>Fotokopi KTP / Identitas Wajib Pajak.</span>
                    </div>
                    <div className='flex items-start gap-3'>
                        <span className='text-green-500 mt-1'>✓</span>
                        <span className='text-gray-700 text-sm'>Fotokopi SPPT / SKPD / STPD yang diajukan.</span>
                    </div>
                    <div className='flex items-start gap-3'>
                        <span className='text-green-500 mt-1'>✓</span>
                        <span className='text-gray-700 text-sm'>Bukti pembayaran pajak (SSPD) asli/fotokopi.</span>
                    </div>
                    <div className='flex items-start gap-3'>
                        <span className='text-green-500 mt-1'>✓</span>
                        <span className='text-gray-700 text-sm'>Foto objek pajak / bukti kondisi lapangan.</span>
                    </div>
                    <div className='flex items-start gap-3'>
                        <span className='text-green-500 mt-1'>✓</span>
                        <span className='text-gray-700 text-sm'>Surat Keterangan Tidak Mampu (Untuk Keringanan).</span>
                    </div>
                </div>
            </div>
        </div>
      </div>

      {/* --- CTA --- */}
      <div className='py-20 text-center px-4 bg-gray-50 border-t border-gray-200'>
        <h2 className='text-2xl md:text-3xl font-bold text-gray-800 mb-4'>Butuh Formulir Pengajuan?</h2>
        <p className='text-gray-500 mb-8 max-w-xl mx-auto'>
            Unduh formulir permohonan keberatan/keringanan atau konsultasikan masalah Anda dengan petugas kami.
        </p>
        <div className='flex justify-center gap-4'>
             <button className='px-8 py-3 bg-rose-600 text-white font-bold rounded-xl hover:bg-rose-700 transition shadow-lg hover:shadow-rose-200 flex items-center gap-2'
             onClick={() => window.open("https://drive.google.com/drive/folders/1nTsTwAQ4FPb6vf82PMo1G6dpZCFW-95D?usp=drive_link", '_blank', 'noopener,noreferrer')}>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
                Download Formulir
            </button>
             <button onClick={() => window.open('https://api.whatsapp.com/send/?phone=628881800800&text=Halo+Admin%2C+saya+butuh+bantuan.&type=phone_number&app_absent=0')} className='px-8 py-3 bg-white border border-gray-200 text-gray-700 font-bold rounded-xl hover:bg-gray-50 transition shadow-sm'>
                Hubungi Kami
            </button>
        </div>
      </div>

    </div>
  )
}

export default Keberatan