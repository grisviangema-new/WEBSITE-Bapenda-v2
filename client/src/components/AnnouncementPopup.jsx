import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const AnnouncementPopup = () => {
    const { announcements } = useContext(AppContext)
    const [show, setShow] = useState(false)
    const [currentIndex, setCurrentIndex] = useState(0)
    const navigate = useNavigate()

    // 1. Munculkan Popup jika data ada
    useEffect(() => {
        if (announcements && announcements.length > 0) {
            setShow(true)
        }
    }, [announcements])

    // 2. Auto Slide Sederhana
    useEffect(() => {
        if (!show || !announcements || announcements.length === 0) return;
        
        const slideInterval = setInterval(() => {
            setCurrentIndex((prev) => (prev === announcements.length - 1 ? 0 : prev + 1));
        }, 4000);

        return () => clearInterval(slideInterval);
    }, [show, announcements]);

    // Jika user menutup atau data kosong, jangan tampilkan apa-apa
    if (!show || !announcements || announcements.length === 0) return null;

    // Ambil data slide saat ini
    const currentItem = announcements[currentIndex];

    return (
        // Overlay Hitam
        <div className='fixed inset-0 z-[999] flex items-center justify-center bg-black/60'>
            
            {/* Kotak Putih (Konten) */}
            <div className='bg-white w-[90%] max-w-lg rounded-2xl shadow-2xl overflow-hidden relative p-6 flex flex-col items-center text-center animate-bounce-slow'>
                
                {/* Tombol Close (Pojok Kanan Atas) */}
                <button 
                    onClick={() => setShow(false)} 
                    className='absolute top-2 right-2 text-gray-400 hover:text-red-500 text-2xl font-bold w-10 h-10 flex items-center justify-center'
                >
                    &times;
                </button>

                {/* Ikon */}
                <div className={`w-20 h-20 rounded-full flex items-center justify-center text-4xl mb-4 text-white ${currentItem.color || 'bg-blue-600'}`}>
                    {currentItem.image || '📢'}
                </div>

                {/* Teks Judul */}
                <h2 className='text-2xl font-bold text-gray-800 mb-2'>
                    {currentItem.title}
                </h2>

                {/* Teks Isi */}
                <p className='text-gray-600 mb-6'>
                    {currentItem.desc}
                </p>

                {/* Tombol Aksi */}
                <button 
                    onClick={() => { setShow(false); navigate(currentItem.link || '/') }}
                    className='bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-all'
                >
                    Lihat Detail
                </button>

                {/* Indikator Slide (Titik-titik) */}
                <div className='flex gap-2 mt-4'>
                    {announcements.map((_, idx) => (
                        <div 
                            key={idx} 
                            className={`h-2 rounded-full transition-all ${idx === currentIndex ? 'w-6 bg-blue-600' : 'w-2 bg-gray-300'}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default AnnouncementPopup