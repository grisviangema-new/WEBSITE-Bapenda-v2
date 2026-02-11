import React, { useContext, useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const NewsDetail = () => {
    const { id } = useParams() // 1. Ambil ID dari URL
    const { newsList } = useContext(AppContext) // Ambil semua berita dari context
    const [newsData, setNewsData] = useState(null)
    const navigate = useNavigate()

    useEffect(() => {
        if (newsList.length > 0) {
            // 2. Cari berita yang ID-nya cocok
            const foundNews = newsList.find((item) => item._id === id)
            if (foundNews) {
                setNewsData(foundNews)
            } else {
                // Jika tidak ketemu (misal ID salah), kembalikan ke list
                // navigate('/berita') 
            }
        }
    }, [id, newsList, navigate])

    if (!newsData) {
        return <div className='min-h-screen flex items-center justify-center'>Loading...</div>
    }

    return (
        <div className='bg-gray-50 min-h-screen py-10 px-4'>
            <div className='max-w-4xl mx-auto bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-100'>
                
                {/* --- HEADER GAMBAR --- */}
                <div className='w-full h-64 md:h-[400px] bg-gray-200 relative'>
                    {newsData.image ? (
                        <img 
                            src={newsData.image} 
                            alt={newsData.title} 
                            className='w-full h-full object-cover'
                        />
                    ) : (
                        <div className='w-full h-full flex items-center justify-center text-gray-400 text-6xl'>📰</div>
                    )}
                    {/* Badge Kategori */}
                    <div className='absolute top-5 left-5'>
                        <span className='bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg'>
                            {newsData.category}
                        </span>
                    </div>
                </div>

                {/* --- KONTEN BERITA --- */}
                <div className='p-6 md:p-10'>
                    {/* Tanggal */}
                    <p className='text-gray-500 text-sm mb-2 flex items-center gap-2'>
                        📅 {new Date(newsData.date).toLocaleDateString('id-ID', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                    </p>

                    {/* Judul Utama */}
                    <h1 className='text-3xl md:text-4xl font-bold text-gray-900 mb-8 leading-tight'>
                        {newsData.title}
                    </h1>

                    {/* Isi Berita (PENTING: whitespace-pre-line) */}
                    {/* whitespace-pre-line berguna agar Enter/Paragraf dari Textarea Admin terbaca di sini */}
                    <div className='prose max-w-none text-gray-700 leading-relaxed text-lg whitespace-pre-line text-justify'>
                        {newsData.content}
                    </div>

                    <hr className='my-10 border-gray-200' />

                    {/* Tombol Kembali */}
                    <button 
                        onClick={() => navigate(-1)} 
                        className='flex items-center gap-2 text-blue-600 font-semibold hover:underline'
                    >
                        ← Kembali ke Daftar Berita
                    </button>
                </div>
            </div>
        </div>
    )
}

export default NewsDetail