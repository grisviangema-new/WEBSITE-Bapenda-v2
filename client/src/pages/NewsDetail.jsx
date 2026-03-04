import React, { useContext, useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const NewsDetail = () => {
    const { id } = useParams() 
    const { newsList, backendUrl } = useContext(AppContext) // Ambil backendUrl
    const [newsData, setNewsData] = useState(null)
    const navigate = useNavigate()

    useEffect(() => {
        if (newsList.length > 0) {
            // PERBAIKAN: Gunakan 'id' (MySQL) bukan '_id'
            // Gunakan == agar aman jika ID berupa string atau number
            const foundNews = newsList.find((item) => item.id == id)
            if (foundNews) {
                setNewsData(foundNews)
            }
        }
    }, [id, newsList])

    if (!newsData) {
        return (
            <div className='min-h-screen flex flex-col items-center justify-center gap-4 bg-gray-50'>
                <div className='animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600'></div>
                <p className='text-gray-500 font-medium'>Memuat konten berita...</p>
            </div>
        )
    }

    return (
        <div className='bg-gray-50 min-h-screen py-12 px-4 md:px-10'>
            <div className='max-w-5xl mx-auto bg-white rounded-[2.5rem] shadow-sm overflow-hidden border border-gray-100'>
                
                {/* --- HEADER GAMBAR --- */}
                <div className='w-full h-72 md:h-[500px] bg-gray-200 relative'>
                    {newsData.image ? (
                        <img 
                            // PERBAIKAN: Resolve URL gambar dari backend
                            src={`${backendUrl}/uploads/images/${newsData.image}`} 
                            alt={newsData.title} 
                            className='w-full h-full object-cover'
                        />
                    ) : (
                        <div className='w-full h-full flex items-center justify-center bg-blue-50 text-blue-200 text-8xl font-black'>BAPENDA</div>
                    )}
                    
                    {/* Badge Kategori */}
                    <div className='absolute top-8 left-8'>
                        <span className='bg-blue-600/90 backdrop-blur-md text-white px-6 py-2 rounded-full text-xs font-black uppercase tracking-widest shadow-xl'>
                            {newsData.category}
                        </span>
                    </div>
                </div>

                {/* --- KONTEN BERITA --- */}
                <div className='p-8 md:p-16'>
                    {/* Tanggal & Info */}
                    <div className='flex items-center gap-3 text-gray-400 text-xs md:text-sm font-bold uppercase tracking-widest mb-6'>
                        <span className='w-2 h-2 bg-blue-500 rounded-full'></span>
                        {new Date(newsData.date).toLocaleDateString('id-ID', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                    </div>

                    {/* Judul Utama */}
                    <h1 className='text-3xl md:text-5xl font-black text-gray-900 mb-10 leading-tight tracking-tight'>
                        {newsData.title}
                    </h1>

                    {/* --- ISI BERITA (RENDER HTML) --- */}
                    {/* PENTING: Gunakan dangerouslySetInnerHTML agar tag <strong> <ul> dll dirender browser */}
                    <div 
                        className='ql-editor-view text-gray-700 leading-relaxed text-lg text-justify space-y-4'
                        dangerouslySetInnerHTML={{ __html: newsData.content }}
                    />

                    <div className='mt-16 pt-10 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6'>
                        <button 
                            onClick={() => navigate(-1)} 
                            className='group flex items-center gap-3 text-blue-600 font-black text-xs uppercase tracking-tighter hover:bg-blue-50 px-6 py-3 rounded-xl transition-all'
                        >
                            <span className='group-hover:-translate-x-2 transition-transform'>←</span> Kembali ke Daftar Berita
                        </button>

                        {/* --- FOOTER: TOMBOL KEMBALI & SHARE --- */}
                        <div className='mt-16 pt-10 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-8'>

                            {/* Bagian Media Sosial */}
                            <div className='flex items-center gap-5'>
                                <p className='text-[10px] text-gray-400 font-black uppercase tracking-widest mr-2'>Bagikan Artikel:</p>
                                
                                {/* FACEBOOK */}
                                <a 
                                    href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className='w-10 h-10 flex items-center justify-center rounded-xl bg-blue-50 text-[#1877F2] hover:bg-[#1877F2] hover:text-white transition-all duration-300 shadow-sm hover:shadow-blue-200'
                                    title="Bagikan ke Facebook"
                                >
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                                    </svg>
                                </a>

                                {/* TWITTER (X) */}
                                <a 
                                    href={`https://twitter.com/intent/tweet?text=${newsData.title}&url=${window.location.href}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className='w-10 h-10 flex items-center justify-center rounded-xl bg-gray-50 text-black hover:bg-black hover:text-white transition-all duration-300 shadow-sm hover:shadow-gray-300'
                                    title="Bagikan ke X (Twitter)"
                                >
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                                    </svg>
                                </a>

                                {/* WHATSAPP */}
                                <a 
                                    href={`https://api.whatsapp.com/send?text=${newsData.title}%20${window.location.href}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className='w-10 h-10 flex items-center justify-center rounded-xl bg-green-50 text-[#25D366] hover:bg-[#25D366] hover:text-white transition-all duration-300 shadow-sm hover:shadow-green-200'
                                    title="Kirim lewat WhatsApp"
                                >
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.067 2.877 1.215 3.076.149.198 2.095 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                                    </svg>
                                </a>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewsDetail