import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const News = () => {
    const { newsList } = useContext(AppContext)

    return (
        <div className='pt-10 mb-20'>
            <h1 className='text-3xl font-bold text-gray-800 text-center mb-10'>Berita & Kegiatan Bapenda</h1>
            
            {newsList.length === 0 ? (
                <p className='text-center text-gray-500'>Belum ada berita terbaru.</p>
            ) : (
                <div className='flex flex-col gap-5'>
                    {newsList.map((item, index) => (
                        <div key={index} className='flex flex-col md:flex-row gap-4 border-b pb-5 items-start hover:bg-gray-50 p-4 rounded-lg transition-all'>
                            {/* --- UPDATE BAGIAN GAMBAR --- */}
                            <div className='w-full md:w-48 h-32 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0'>
                                {item.image 
                                    ? <img src={item.image} alt={item.title} className='w-full h-full object-cover hover:scale-110 transition-all duration-500' />
                                    : <div className='w-full h-full flex items-center justify-center text-blue-400 text-4xl font-bold bg-blue-50'>📰</div>
                                }
                            </div>
                            {/* ---------------------------- */}
                            <div className='flex-1'>
                                <div className='flex items-center gap-3'>
                                    <span className='bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded font-medium'>{item.category}</span>
                                    <p className='text-gray-400 text-xs'>{new Date(item.date).toLocaleDateString('id-ID', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
                                </div>
                                <h3 className='text-xl font-bold text-gray-800 mt-2 cursor-pointer'>{item.title}</h3>
                                <p className='text-gray-600 text-sm mt-2 line-clamp-3 leading-relaxed'>{item.content}</p>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default News