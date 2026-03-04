import React, { useContext, useState } from 'react'
import { AppContext } from '../context/AppContext'
import { useNavigate } from 'react-router-dom'

const News = () => {
    // Ambil backendUrl untuk resolusi gambar lokal
    const { newsList, backendUrl } = useContext(AppContext)
    const navigate = useNavigate()

    const [visibleCount, setVisibleCount] = useState(9)

    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString('id-ID', { 
            day: 'numeric', month: 'long', year: 'numeric' 
        })
    }

    // Fungsi Helper untuk membersihkan tag HTML agar ringkasan teks bersih
    const stripHtml = (html) => {
        const doc = new DOMParser().parseFromString(html, 'text/html');
        return doc.body.textContent || "";
    };

    const handleShowAll = () => {
        setVisibleCount(newsList.length)
    }

    return (
        <div className='py-20 px-4 md:px-8 bg-white min-h-screen' id="berita">
            <div className='max-w-7xl mx-auto'>
                
                {/* --- HEADER SECTION --- */}
                <div className='flex flex-col md:flex-row justify-between items-end mb-12 gap-4'>
                    <div className='text-left'>
                        <span className='text-blue-600 font-black tracking-widest text-xs uppercase bg-blue-50 px-3 py-1 rounded-md'>Informasi Terkini</span>
                        <h1 className='text-4xl md:text-5xl font-black text-gray-900 mt-4 tracking-tight'>Berita & Kegiatan Bapenda</h1>
                        <p className='text-gray-500 mt-2 text-lg'>Transparansi informasi untuk masyarakat Kabupaten Pasuruan.</p>
                    </div>
                    <div className='hidden md:block w-32 h-1 bg-blue-600 rounded-full mb-4'></div>
                </div>
                
                {/* --- CONTENT SECTION --- */}
                {newsList.length === 0 ? (
                    <div className='flex flex-col items-center justify-center py-32 bg-gray-50 rounded-[2.5rem] border-2 border-dashed border-gray-200'>
                        <span className='text-7xl mb-6 opacity-40'>📰</span>
                        <p className='text-gray-400 font-bold text-xl'>Belum ada arsip berita saat ini.</p>
                    </div>
                ) : (
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                        {/* Sort terbaru secara lokal sebelum slice */}
                        {[...newsList].sort((a,b) => new Date(b.date) - new Date(a.date)).slice(0, visibleCount).map((item, index) => (
                            <div 
                                key={index} 
                                onClick={() => {
                                    // PERBAIKAN: Gunakan item.id (MySQL) bukan _id
                                    navigate(`/berita/${item.id}`);
                                    window.scrollTo(0, 0);
                                }}
                                className='group bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl border border-gray-100 transition-all duration-500 flex flex-col h-full cursor-pointer hover:-translate-y-2'
                            >
                                {/* --- BAGIAN GAMBAR --- */}
                                <div className='relative h-60 overflow-hidden bg-gray-100'>
                                    <div className='absolute top-5 left-5 z-10'>
                                        <span className='bg-white/90 backdrop-blur-md text-blue-600 text-[10px] font-black px-3 py-1 rounded-lg shadow-sm uppercase'>
                                            {item.category || 'Umum'}
                                        </span>
                                    </div>

                                    {item.image ? (
                                        <img 
                                            // PERBAIKAN: Panggil dari backendUrl
                                            src={`${backendUrl}/uploads/images/${item.image}`} 
                                            alt={item.title} 
                                            className='w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000' 
                                            onError={(e) => { e.target.src = 'https://placehold.co/600x400?text=No+Image' }}
                                        />
                                    ) : (
                                        <div className='w-full h-full flex items-center justify-center bg-blue-50 text-blue-200'>
                                            <span className='text-4xl font-black opacity-20'>BAPENDA</span>
                                        </div>
                                    )}
                                </div>

                                {/* --- BAGIAN TEKS --- */}
                                <div className='p-8 flex flex-col flex-1'>
                                    <div className='flex items-center gap-2 text-gray-400 text-[10px] mb-4 font-bold uppercase tracking-widest'>
                                        <div className='w-2 h-2 bg-blue-500 rounded-full'></div>
                                        {formatDate(item.date)}
                                    </div>

                                    <h3 className='text-xl font-extrabold text-gray-800 mb-4 leading-tight group-hover:text-blue-600 transition-colors line-clamp-2'>
                                        {item.title}
                                    </h3>

                                    {/* PERBAIKAN: Gunakan stripHtml agar ringkasan bersih dari tag <p> dsb */}
                                    <p className='text-gray-500 text-sm leading-relaxed line-clamp-3 mb-6 font-medium'>
                                        {stripHtml(item.content)}
                                    </p>

                                    <div className='mt-auto pt-6 border-t border-gray-50 flex items-center justify-between'>
                                        <span className='text-blue-600 text-xs font-black uppercase tracking-tighter group-hover:gap-3 flex items-center gap-1 transition-all'>
                                            Baca Selengkapnya <span>&rarr;</span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* --- TOMBOL LIHAT SEMUA --- */}
                {newsList.length > visibleCount && (
                    <div className='text-center mt-20'>
                        <button 
                            onClick={handleShowAll}
                            className='px-12 py-4 bg-gray-900 text-white rounded-2xl font-black text-sm hover:bg-blue-600 transition-all shadow-xl shadow-gray-200 active:scale-95'
                        >
                            Muat Berita Lainnya ({newsList.length - visibleCount})
                        </button>
                    </div>
                )}
            </div>
        </div>
    )
}

export default News