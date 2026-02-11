import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const HomeNews = () => {
    const { newsList } = useContext(AppContext)
    const navigate = useNavigate()

    // LOGIKA UTAMA:
    // 1. Sort berdasarkan tanggal (Terbaru di atas)
    // 2. Slice (Ambil 3 item pertama saja)
    const latestNews = newsList
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        .slice(0, 3);

    return (
        <div className='py-16 px-4 md:px-10 bg-white'>
            <div className='max-w-7xl mx-auto'>
                
                {/* --- HEADER SECTION --- */}
                <div className='text-center mb-12'>
                    <h2 className='text-3xl md:text-4xl font-bold text-gray-800'>Berita Terkini</h2>
                    <p className='text-gray-500 mt-3 max-w-2xl mx-auto'>
                        Dapatkan informasi terbaru seputar kegiatan, layanan, dan pengumuman penting dari Bapenda.
                    </p>
                    <div className='w-20 h-1.5 bg-blue-600 mx-auto mt-5 rounded-full'></div>
                </div>

                {/* --- GRID 3 BERITA --- */}
                <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-12'>
                    {latestNews.map((item, index) => (
                        <div 
                            key={index} 
                            onClick={() => {
                                navigate(`/berita/${item._id}`);
                                window.scrollTo(0,0);
                            }}
                            className='group bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl cursor-pointer transition-all duration-300 hover:-translate-y-1'
                        >
                            {/* GAMBAR */}
                            <div className='h-48 overflow-hidden relative'>
                                {/* Badge Kategori */}
                                <span className='absolute top-3 left-3 bg-blue-600/90 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full z-10'>
                                    {item.category}
                                </span>
                                
                                {item.image ? (
                                    <img 
                                        src={item.image} 
                                        alt={item.title} 
                                        className='w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500' 
                                    />
                                ) : (
                                    <div className='w-full h-full bg-gray-100 flex items-center justify-center text-gray-400'>
                                        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"></path></svg>
                                    </div>
                                )}
                            </div>

                            {/* KONTEN */}
                            <div className='p-6'>
                                <p className='text-xs text-gray-400 mb-2 flex items-center gap-1'>
                                    🗓 {new Date(item.date).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}
                                </p>
                                <h3 className='text-lg font-bold text-gray-800 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors'>
                                    {item.title}
                                </h3>
                                <p className='text-gray-500 text-sm line-clamp-2'>
                                    {item.content || item.desc}
                                </p>
                                <div className='mt-4 text-blue-600 text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all'>
                                    Baca Selengkapnya <span>&rarr;</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* --- TOMBOL LIHAT SEMUA --- */}
                <div className='text-center'>
                    <button 
                        onClick={() => {
                            navigate('/news'); // Arahkan ke halaman list berita lengkap
                            window.scrollTo(0,0);
                        }}
                        className='px-8 py-3 bg-white text-blue-600 border border-blue-600 font-semibold rounded-full hover:bg-blue-600 hover:text-white transition-all shadow-sm hover:shadow-md'
                    >
                        Lihat Semua Berita
                    </button>
                </div>

            </div>
        </div>
    )
}

export default HomeNews