import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const HomeNews = () => {
    // Tambahkan backendUrl untuk memanggil gambar
    const { newsList, backendUrl } = useContext(AppContext)
    const navigate = useNavigate()

    // Ambil 3 berita terbaru
    const latestNews = [...newsList]
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        .slice(0, 3);

    // Fungsi Helper untuk membersihkan tag HTML agar ringkasan teks tidak berantakan
    const stripHtml = (html) => {
        const doc = new DOMParser().parseFromString(html, 'text/html');
        return doc.body.textContent || "";
    };

    return (
        <div className='py-20 px-4 md:px-10 bg-gray-50'>
            <div className='max-w-7xl mx-auto'>
                
                {/* --- HEADER SECTION --- */}
                <div className='text-center mb-16'>
                    <h2 className='text-3xl md:text-5xl font-black text-gray-900 tracking-tight'>Warta Bapenda</h2>
                    <p className='text-gray-500 mt-4 max-w-2xl mx-auto text-lg'>
                        Eksplorasi kegiatan terbaru dan informasi transparan seputar pajak daerah Kabupaten Pasuruan.
                    </p>
                    <div className='w-24 h-2 bg-blue-600 mx-auto mt-6 rounded-full'></div>
                </div>

                {/* --- GRID BERITA --- */}
                <div className='grid grid-cols-1 md:grid-cols-3 gap-10 mb-16'>
                    {latestNews.map((item, index) => (
                        <div 
                            key={index} 
                            onClick={() => {
                                // PERBAIKAN: Gunakan item.id (MySQL) bukan item._id (MongoDB)
                                navigate(`/berita/${item.id}`);
                                window.scrollTo(0,0);
                            }}
                            className='group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl cursor-pointer transition-all duration-500 hover:-translate-y-2 flex flex-col border border-gray-100'
                        >
                            {/* AREA GAMBAR */}
                            <div className='h-56 overflow-hidden relative'>
                                <div className='absolute top-4 left-4 z-10'>
                                    <span className='bg-white/90 backdrop-blur-md text-blue-600 text-[10px] font-black px-3 py-1.5 rounded-lg shadow-sm uppercase'>
                                        {item.category}
                                    </span>
                                </div>
                                
                                {item.image ? (
                                    <img 
                                        // PERBAIKAN: Panggil dari folder uploads backend
                                        src={`${backendUrl}/uploads/images/${item.image}`} 
                                        alt={item.title} 
                                        className='w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700' 
                                    />
                                ) : (
                                    <div className='w-full h-full bg-blue-50 flex items-center justify-center text-blue-200 font-bold'>
                                        BAPENDA
                                    </div>
                                )}
                            </div>

                            {/* AREA KONTEN */}
                            <div className='p-8 flex flex-col flex-grow'>
                                <p className='text-[11px] font-bold text-gray-400 mb-3 flex items-center gap-2 uppercase tracking-widest'>
                                    <span className='w-2 h-2 bg-blue-500 rounded-full'></span>
                                    {new Date(item.date).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}
                                </p>
                                
                                <h3 className='text-xl font-bold text-gray-800 mb-4 line-clamp-2 leading-snug group-hover:text-blue-600 transition-colors'>
                                    {item.title}
                                </h3>
                                
                                {/* PERBAIKAN: Membersihkan tag HTML agar tidak muncul <p> dsb di ringkasan */}
                                <p className='text-gray-500 text-sm line-clamp-2 leading-relaxed mb-6'>
                                    {stripHtml(item.content)}
                                </p>
                                
                                <div className='mt-auto flex items-center text-blue-600 text-xs font-black uppercase tracking-tighter gap-1 group-hover:gap-3 transition-all'>
                                    Selengkapnya <span>&rarr;</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* --- TOMBOL LIHAT SEMUA --- */}
                <div className='text-center'>
                    <button 
                        onClick={() => {
                            navigate('/news');
                            window.scrollTo(0,0);
                        }}
                        className='group px-10 py-4 bg-gray-900 text-white font-bold rounded-2xl hover:bg-blue-600 transition-all shadow-xl shadow-gray-200 flex items-center gap-3 mx-auto active:scale-95'
                    >
                        Lihat Arsip Berita
                        <span className='group-hover:translate-x-1 transition-transform'>→</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default HomeNews