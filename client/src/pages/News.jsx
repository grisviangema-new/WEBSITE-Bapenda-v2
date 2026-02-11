import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import { useNavigate } from 'react-router-dom' // Aktifkan jika ingin link berfungsi

const News = () => {
    const { newsList } = useContext(AppContext)
    const navigate = useNavigate()

    // Helper untuk format tanggal
    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString('id-ID', { 
            day: 'numeric', month: 'long', year: 'numeric' 
        })
    }

    return (
        <div className='py-16 px-4 md:px-8 bg-gray-50' id="berita">
            <div className='max-w-7xl mx-auto'>
                
                {/* --- HEADER SECTION --- */}
                <div className='text-center mb-12'>
                    <span className='text-blue-600 font-bold tracking-wider text-sm uppercase'>Informasi Terkini</span>
                    <h1 className='text-3xl md:text-4xl font-bold text-gray-900 mt-2'>Berita & Kegiatan Bapenda</h1>
                    <div className='w-20 h-1 bg-blue-600 mx-auto mt-4 rounded-full'></div>
                </div>
                
                {/* --- CONTENT SECTION --- */}
                {newsList.length === 0 ? (
                    <div className='flex flex-col items-center justify-center py-20 bg-white rounded-xl shadow-sm border border-gray-100'>
                        <span className='text-6xl mb-4'>📭</span>
                        <p className='text-gray-500 font-medium'>Belum ada berita terbaru saat ini.</p>
                    </div>
                ) : (
                    // GRID SYSTEM: 1 Kolom (Mobile), 2 (Tablet), 3 (Desktop)
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                        {newsList.map((item, index) => (
                            <div 
                                key={index} 
                                onClick={() => {
                                    navigate(`/berita/${item._id}`);
                                    window.scrollTo(0, 0); // Scroll ke paling atas saat pindah halaman
                                }}
                                
                                className='group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-gray-100 transition-all duration-300 flex flex-col h-full cursor-pointer hover:-translate-y-1'
                            >
                                {/* --- BAGIAN GAMBAR --- */}
                                <div className='relative h-52 overflow-hidden bg-gray-200'>
                                    {/* Badge Kategori Melayang */}
                                    <div className='absolute top-4 left-4 z-10'>
                                        <span className='bg-blue-600/90 backdrop-blur-sm text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg'>
                                            {item.category || 'Umum'}
                                        </span>
                                    </div>

                                    {item.image ? (
                                        <img 
                                            src={item.image} 
                                            alt={item.title} 
                                            className='w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700' 
                                        />
                                    ) : (
                                        <div className='w-full h-full flex items-center justify-center bg-blue-50 text-blue-300'>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                            </svg>
                                        </div>
                                    )}
                                </div>

                                {/* --- BAGIAN TEKS --- */}
                                <div className='p-6 flex flex-col flex-1'>
                                    {/* Tanggal */}
                                    <div className='flex items-center gap-2 text-gray-400 text-xs mb-3 font-medium'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                        {formatDate(item.date)}
                                    </div>

                                    {/* Judul (Line Clamp 2 baris) */}
                                    <h3 className='text-xl font-bold text-gray-800 mb-3 leading-snug group-hover:text-blue-600 transition-colors line-clamp-2'>
                                        {item.title}
                                    </h3>

                                    {/* Konten (Line Clamp 3 baris) */}
                                    <p className='text-gray-600 text-sm leading-relaxed line-clamp-3 mb-4'>
                                        {item.content || item.desc}
                                    </p>

                                    {/* Footer Kartu (Read More) */}
                                    <div className='mt-auto pt-4 border-t border-gray-100 flex items-center justify-between'>
                                        <span className='text-blue-600 text-sm font-semibold group-hover:underline'>
                                            Baca Selengkapnya
                                        </span>
                                        {/* Icon panah */}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* Tombol Lihat Semua (Opsional) */}
                {newsList.length > 0 && (
                    <div className='text-center mt-12'>
                        <button className='px-8 py-3 border border-blue-600 text-blue-600 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-sm hover:shadow-md'>
                            Lihat Arsip Berita
                        </button>
                    </div>
                )}
            </div>
        </div>
    )
}

export default News