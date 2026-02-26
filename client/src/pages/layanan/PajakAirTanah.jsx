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
      
      {/* --- SECTION PAJAK AIR TANAH (PAT) --- */}
      <section className='bg-white py-24 px-4 overflow-hidden'>
        <div className='max-w-7xl mx-auto'>
          
          {/* Header & Definisi */}
          <div className='flex flex-col lg:flex-row gap-16 items-center mb-20'>
            <div className='lg:w-1/2'>
              <div className='inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-100 text-cyan-700 text-[10px] font-black uppercase tracking-widest mb-6'>
                💧 Sumber Daya Alam
              </div>
              <h2 className='text-4xl md:text-5xl font-black text-slate-900 leading-none tracking-tighter mb-6'>
                Pajak <span className='text-cyan-600'>Air Tanah</span>
              </h2>
              <p className='text-slate-600 text-lg leading-relaxed'>
                Pajak atas pengambilan dan/atau pemanfaatan air tanah untuk kepentingan bisnis. Pengaturan ini bertujuan untuk <strong>pengendalian lingkungan</strong> dan pelestarian sumber daya air di Kabupaten Pasuruan.
              </p>
              
              <div className='mt-10 grid grid-cols-2 gap-4'>
                <div className='p-6 bg-slate-50 rounded-3xl border border-slate-100'>
                  <p className='text-xs font-bold text-slate-400 uppercase mb-2'>Tarif Pajak</p>
                  <p className='text-3xl font-black text-cyan-600'>20%</p>
                </div>
                <div className='p-6 bg-slate-50 rounded-3xl border border-slate-100'>
                  <p className='text-xs font-bold text-slate-400 uppercase mb-2'>Metode</p>
                  <p className='text-lg font-bold text-slate-800 leading-tight'>Official Assessment</p>
                </div>
              </div>
            </div>

            {/* Pengecualian (Kebutuhan Dasar) */}
            <div className='lg:w-1/2 w-full'>
              <div className='bg-cyan-900 rounded-[3rem] p-8 md:p-12 text-white relative shadow-2xl overflow-hidden'>
                <div className='absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-32 -mt-32'></div>
                <h4 className='text-sm font-bold text-cyan-400 uppercase tracking-widest mb-8'>Dikecualikan Dari Objek PAT</h4>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                  {[
                    { t: "Rumah Tangga", d: "Keperluan dasar harian", i: "🏠" },
                    { t: "Pertanian Rakyat", d: "Pengairan sawah/kebun", i: "🌾" },
                    { t: "Perikanan Rakyat", d: "Kolam ikan tradisional", i: "🐟" },
                    { t: "Peternakan Rakyat", d: "Skala kecil/tradisional", i: "🐄" },
                    { t: "Tempat Ibadah", d: "Keperluan keagamaan", i: "🕌" },
                    { t: "Pemerintah", d: "Penyelenggaraan negara", i: "🏛️" },
                  ].map((item, idx) => (
                    <div key={idx} className='flex items-center gap-3 p-3 bg-white/5 rounded-2xl border border-white/10'>
                      <span className='text-xl'>{item.i}</span>
                      <div>
                        <p className='text-xs font-bold'>{item.t}</p>
                        <p className='text-[9px] text-cyan-300/60 uppercase'>{item.d}</p>
                      </div>
                    </div>
                  ))}
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
                    onClick={() => window.open('https://patriot.pasuruankab.go.id/apps/esptpd/', '_blank')}
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
                    onClick={() => window.open('https://patriot.pasuruankab.go.id/apps/cek-bayar/ceknopbayar-pasuruan.kab?module=bphtb', '_blank')}
                    className='group bg-slate-50 p-6 rounded-2xl border border-slate-200 hover:border-cyan-500 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer'
                >
                    <div className='w-14 h-14 bg-cyan-100 text-cyan-600 rounded-xl flex items-center justify-center text-2xl mb-4 group-hover:bg-cyan-600 group-hover:text-white transition-colors'>
                        📜
                    </div>
                    <h3 className='text-lg font-bold text-gray-800 mb-2'>Cek SKPD</h3>
                    <p className='text-sm text-gray-500 mb-4 h-10'>Lihat Tagihan Surat Ketetapan Pajak Daerah yang telah terbit.</p>
                    <div className='text-cyan-600 text-sm font-bold flex items-center gap-2 group-hover:gap-3 transition-all'>
                        Lihat Tagihan <span className='text-lg'>→</span>
                    </div>
                </div>

                {/* 3. Pembayaran -> PATRIOT */}
                <div 
                    onClick={() => window.open('https://patriot.pasuruankab.go.id/apps/epayment/', '_blank')}
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

                {/* 4. Info SIPA -> OSS */}
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


            </div>
        </div>
      </div>

      {/* --- SECTION ALUR & KEWAJIBAN KHUSUS AIR TANAH --- */}
      <section className='bg-white py-24 px-4 overflow-hidden'>
        <div className='max-w-7xl mx-auto'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-start'>
            
            {/* Kolom Kiri: Alur Layanan PAT */}
            <div>
              <div className='inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-100 text-cyan-700 text-[10px] font-black uppercase tracking-widest mb-6'>
                Water Management Flow
              </div>
              <h2 className='text-4xl font-black text-slate-900 leading-tight mb-6'>
                Alur Layanan <br /><span className='text-cyan-600'>Pajak Air Tanah</span>
              </h2>
              <p className='text-slate-500 mb-12 max-w-lg'>
                Prosedur pemanfaatan air tanah untuk usaha, mulai dari perizinan teknis hingga ketetapan pajak resmi.
              </p>

              <div className='space-y-4'>
                {[
                  { step: "01", title: "Pendaftaran & Izin SIPA", desc: "Melaporkan titik sumur bor dan melampirkan Surat Izin Pengambilan Air (SIPA) dari Provinsi.", icon: "📑" },
                  { step: "02", title: "Pemasangan Water Meter", desc: "Wajib memasang meteran air yang telah dikalibrasi (tera) untuk memantau volume pengambilan.", icon: "⏲️" },
                  { step: "03", title: "Pencatatan & Pelaporan", desc: "Wajib pajak melaporkan volume pengambilan air tanah setiap bulan melalui PATRIOT e-SPTPD. Bapenda menerbitkan Surat Ketetapan Pajak (SKPD).", icon: "✍️" },
                  { step: "04", title: "Pembayaran Ketetapan", desc: "Membayar pokok pajak sesuai volume yang tertera pada SKPD melalui kanal pembayaran resmi.", icon: "💰" }
                ].map((item, idx) => (
                  <div key={idx} className='group flex items-start gap-6 p-6 bg-slate-50 rounded-3xl border border-slate-100 hover:border-cyan-500 hover:shadow-xl transition-all duration-300'>
                    <div className='flex-shrink-0 w-12 h-12 bg-white text-cyan-600 rounded-2xl flex items-center justify-center text-xl font-black group-hover:bg-cyan-600 group-hover:text-white transition-colors border border-slate-100'>
                      {item.step}
                    </div>
                    <div>
                      <h4 className='font-bold text-slate-900 text-lg mb-1 flex items-center gap-2'>
                        {item.title}
                      </h4>
                      <p className='text-sm text-slate-500 leading-relaxed'>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
                {/* Catatan Penting: Pajak Tetap Berlaku */}
                <div className='mt-6 p-6 bg-red-500/10 rounded-2xl border border-red-500/20'>
                  <div className='flex items-center gap-3 text-red-400 font-bold text-sm mb-2'>
                    <span>📢</span> Catatan Penting
                  </div>
                  <p className='text-xs text-black leading-relaxed italic'>
                    Pengambilan air tanah yang dilakukan <span className='text-red-400 font-bold'>tanpa SIPA (Izin)</span> dan/atau <span className='text-red-400 font-bold'>tanpa alat ukur (meter)</span> tetap menjadi objek pajak dan **wajib dibayarkan** pajaknya sesuai perhitungan taksiran teknis oleh petugas Bapenda, tanpa menghilangkan sanksi administratif atas ketiadaan izin tersebut.
                  </p>
                </div>
            </div>

            {/* Kolom Kanan: Kewajiban Khusus Wajib PAT */}
            <div className='relative'>
              <div className='absolute -inset-4 bg-cyan-500/10 rounded-[3rem] blur-3xl'></div>
              
              <div className='relative bg-slate-900 rounded-[3rem] p-8 md:p-12 shadow-2xl text-white'>
                <div className='flex items-center gap-4 mb-10'>
                  <div className='w-14 h-14 bg-cyan-600 text-white rounded-2xl flex items-center justify-center text-2xl shadow-lg shadow-cyan-900/50'>
                    💧
                  </div>
                  <div>
                    <h3 className='text-2xl font-black'>Kewajiban WP PAT</h3>
                    <p className='text-sm text-cyan-400 font-medium tracking-tight uppercase'>Water Conservation Rules</p>
                  </div>
                </div>

                <div className='space-y-8'>
                  {[
                    { h: "Pemasangan Meter Air", d: "Wajib memasang meter air di setiap titik pengambilan/sumur bor untuk akurasi data volume." },
                    { h: "Pemeliharaan Alat Ukur", d: "Menjamin alat ukur berfungsi dengan baik dan tidak rusak atau segelnya terlepas." },
                    { h: "Pencatatan Mandiri", d: "Melakukan pencatatan debit air secara berkala sebagai data pembanding internal." },
                    { h: "Pelaporan Perubahan", d: "Wajib melapor jika terdapat penambahan titik sumur baru atau perubahan kapasitas pompa." },
                    { h: "Akses Pemeriksaan", d: "Memberikan izin kepada petugas untuk memeriksa lokasi sumur dan membaca meter air setiap bulan." },
                  ].map((list, i) => (
                    <div key={i} className='flex gap-4 group'>
                      <div className='mt-1 flex-shrink-0 w-6 h-6 rounded-full border-2 border-cyan-800 flex items-center justify-center group-hover:border-cyan-400 transition-colors'>
                        <div className='w-2 h-2 bg-cyan-400 rounded-full scale-0 group-hover:scale-100 transition-transform'></div>
                      </div>
                      <div>
                        <h4 className='font-bold text-slate-100 text-sm md:text-base group-hover:text-cyan-300 transition-colors'>{list.h}</h4>
                        <p className='text-xs md:text-sm text-slate-400 mt-1 leading-relaxed'>{list.d}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Sanksi Khusus PAT */}
                <div className='mt-12 p-6 bg-white/5 rounded-2xl border border-white/10'>
                  <div className='flex items-center gap-3 text-cyan-400 font-bold text-sm mb-2'>
                    <span>🚫</span> Larangan Keras
                  </div>
                  <p className='text-xs text-slate-400 leading-relaxed'>
                    Dilarang melakukan perusakan segel, mematikan alat ukur, atau melakukan pengambilan air tanah tanpa izin SIPA. Pelanggaran dapat berakibat pada sanksi administratif hingga penyegelan titik sumur.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

          {/* Dasar Pengenaan (NPA) */}
          <div className='bg-slate-900 rounded-[3rem] p-8 md:p-16 text-white'>
            <div className='text-center mb-16'>
              <h3 className='text-2xl md:text-3xl font-bold mb-4'>Nilai Perolehan Air Tanah (NPA)</h3>
              <p className='text-slate-400 max-w-2xl mx-auto'>
                NPA adalah nilai dasar yang dihitung berdasarkan volume pemanfaatan dikalikan dengan bobot kualitas dan dampak lingkungan.
              </p>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
              {/* Variabel Bobot (Pasal 36) */}
              <div className='space-y-6'>
                <h4 className='text-cyan-400 font-black text-xs uppercase tracking-widest mb-6'>Komponen Koefisien Bobot</h4>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                  {[
                    "Jenis Sumber Air", "Lokasi Sumber Air", "Tujuan Pemanfaatan", 
                    "Volume Air Tanah", "Kualitas Air", "Tingkat Kerusakan Lingkungan"
                  ].map((factor, i) => (
                    <div key={i} className='flex items-center gap-3 p-4 bg-white/5 rounded-2xl border border-white/5 group hover:border-cyan-500/50 transition-colors'>
                      <div className='w-8 h-8 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center text-xs font-bold'>
                        {i + 1}
                      </div>
                      <span className='text-sm font-medium text-slate-300'>{factor}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Rumus Akhir */}
              <div className='flex flex-col justify-center bg-white/5 p-8 rounded-[2rem] border border-white/10'>
                <div className='space-y-6'>
                  <div className='flex justify-between items-center text-center'>
                    <div className='flex-1'>
                      <p className='text-[10px] text-slate-500 uppercase font-bold mb-2'>Harga Air Baku</p>
                      <div className='p-4 bg-slate-800 rounded-2xl font-mono text-cyan-400'>HAB</div>
                    </div>
                    <div className='px-4 text-slate-600 font-bold'>×</div>
                    <div className='flex-1'>
                      <p className='text-[10px] text-slate-500 uppercase font-bold mb-2'>Bobot Air</p>
                      <div className='p-4 bg-slate-800 rounded-2xl font-mono text-cyan-400'>KOEF</div>
                    </div>
                  </div>
                  
                  <div className='flex justify-center text-slate-600'>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </div>

                  <div className='p-6 bg-cyan-600 rounded-2xl text-center'>
                    <p className='text-[10px] font-black uppercase text-cyan-100 mb-1'>NPA (Dasar Pengenaan)</p>
                    <p className='text-2xl font-black italic'>× 20% (Tarif)</p>
                  </div>

                  <div className='pt-4 text-center'>
                    <p className='text-[10px] text-slate-500 font-bold uppercase tracking-widest'>Status Pajak</p>
                    <p className='text-xl font-bold'>TERUTANG SAAT PENGAMBILAN</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className='mt-12 flex flex-col md:flex-row gap-6 items-center justify-between p-8 bg-cyan-50 rounded-[2rem] border border-cyan-100'>
            <div className='flex items-center gap-4'>
                <span className='text-3xl'>📍</span>
                <p className='text-sm text-cyan-800 leading-relaxed'>
                    <strong>Wilayah Pemungutan:</strong> Pajak terutang di tempat pengambilan dan/atau pemanfaatan air tanah dilakukan (Kabupaten Pasuruan).
                </p>
            </div>
            <button className='whitespace-nowrap px-8 py-3 bg-cyan-600 text-white font-bold rounded-xl hover:bg-cyan-700 transition-colors shadow-lg shadow-cyan-200'
                onClick={() => { navigate('/layanan/underdevelopment'); window.scrollTo(0, 0); }}
            >
                Konsultasi Pemasangan Meteran
            </button>
          </div>
        </div>
      </section>

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
                    onClick={() => { navigate('/layanan/underdevelopment'); window.scrollTo(0, 0); }}
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