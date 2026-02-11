import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const AnnouncementPopup = () => {
    const { announcements } = useContext(AppContext)
    const [show, setShow] = useState(false)
    const [currentIndex, setCurrentIndex] = useState(0)
    const navigate = useNavigate()

    // 1. Trigger Popup
    useEffect(() => {
        if (announcements && announcements.length > 0) {
            const timer = setTimeout(() => setShow(true), 1500);
            return () => clearTimeout(timer);
        }
    }, [announcements])

    // 2. Auto Slide
    useEffect(() => {
        if (!show || !announcements || announcements.length === 0) return;
        const slideInterval = setInterval(() => {
            nextSlide();
        }, 5000);
        return () => clearInterval(slideInterval);
    }, [show, currentIndex, announcements]);

    // Helper: Next & Prev
    const nextSlide = () => {
        setCurrentIndex((prev) => (prev === announcements.length - 1 ? 0 : prev + 1));
    };
    const prevSlide = () => {
        setCurrentIndex((prev) => (prev === 0 ? announcements.length - 1 : prev - 1));
    };

    if (!show || !announcements || announcements.length === 0) return null;

    const currentItem = announcements[currentIndex];
    const isImageUrl = currentItem.image && (currentItem.image.includes('http') || currentItem.image.includes('/'));
    
    // --- LOGIKA BARU: Cek Validitas Link ---
    // Tombol hanya muncul jika link ada, tidak kosong, dan bukan '#'
    const hasLink = currentItem.link && currentItem.link !== '#' && currentItem.link.trim() !== '';

    return (
        <div className='fixed inset-0 z-[999] flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm transition-opacity duration-300'>
            
            <div className='bg-white w-full max-w-5xl md:h-[75vh] h-[85vh] rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row relative animate-scale-up'>
                
                {/* TOMBOL CLOSE (Floating - Pojok Kanan Atas) */}
                <button 
                    onClick={() => setShow(false)} 
                    className='absolute top-3 right-3 z-50 bg-gray-100/50 hover:bg-red-500 text-gray-600 hover:text-white rounded-full w-8 h-8 flex items-center justify-center backdrop-blur-md transition-all text-xl font-bold shadow-sm'
                >
                    &times;
                </button>

                {/* --- BAGIAN KIRI: GAMBAR --- */}
                <div className={`w-full md:w-1/2 h-[40%] md:h-full relative ${currentItem.color || 'bg-gray-100'} flex items-center justify-center p-4`}>
                    {isImageUrl ? (
                        <img 
                            src={currentItem.image} 
                            alt={currentItem.title} 
                            className='w-full h-full object-contain drop-shadow-xl'
                        />
                    ) : (
                        <div className="text-8xl md:text-9xl animate-bounce-slow drop-shadow-lg">
                            {currentItem.image || '📢'}
                        </div>
                    )}
                </div>

                {/* --- BAGIAN KANAN: KONTEN TEKS --- */}
                <div className='w-full md:w-1/2 h-[60%] md:h-full p-6 md:p-10 flex flex-col justify-center items-start text-left bg-white relative'>
                    
                    <span className="bg-blue-50 text-blue-600 text-xs font-bold px-3 py-1 rounded-full mb-3 uppercase tracking-wider">
                        Informasi Terbaru
                    </span>

                    <h2 className='text-2xl md:text-4xl font-bold text-gray-900 mb-3 leading-tight'>
                        {currentItem.title}
                    </h2>

                    <div className="overflow-y-auto max-h-[40vh] md:max-h-none pr-2 mb-6 scrollbar-thin scrollbar-thumb-gray-300 w-full">
                        <p className='text-gray-600 text-sm md:text-base leading-relaxed whitespace-pre-line'>
                            {currentItem.desc}
                        </p>
                    </div>

                    {/* --- ACTION BUTTONS --- */}
                    <div className="flex gap-3 w-full md:w-auto mt-auto">
                        
                        {/* HANYA TAMPILKAN JIKA LINK VALID */}
                        {hasLink && (
                            <button 
                                onClick={() => { setShow(false); navigate(currentItem.link) }}
                                className='flex-1 md:flex-none bg-blue-600 text-white px-6 py-2.5 rounded-lg font-semibold text-sm md:text-base hover:bg-blue-700 transition-all shadow-md'
                            >
                                Lihat Detail
                            </button>
                        )}

                        <button 
                             onClick={() => setShow(false)}
                             // Jika tidak ada tombol detail, tombol tutup jadi full width (opsional, agar rapi)
                             className={`px-6 py-2.5 rounded-lg border border-gray-300 text-gray-500 font-medium text-sm md:text-base hover:bg-gray-50 transition-all ${!hasLink ? 'w-full md:w-auto bg-gray-50' : ''}`}
                        >
                            Tutup
                        </button>
                    </div>

                    {/* --- NAVIGASI SLIDER --- */}
                    {announcements.length > 1 && (
                        <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 md:static md:translate-y-0 flex md:justify-start justify-between items-center md:mt-8 pointer-events-none md:pointer-events-auto px-4 md:px-0">
                            
                            <button onClick={prevSlide} className="pointer-events-auto w-10 h-10 rounded-full bg-white/80 md:bg-white shadow-md md:border border-gray-200 flex items-center justify-center hover:bg-gray-50 text-gray-700 md:-ml-2">
                                ❮
                            </button>

                            <div className='flex gap-2 mx-4'>
                                {announcements.map((_, idx) => (
                                    <div 
                                        key={idx} 
                                        onClick={() => setCurrentIndex(idx)}
                                        className={`h-2 rounded-full cursor-pointer transition-all duration-300 pointer-events-auto ${idx === currentIndex ? 'w-8 bg-blue-600' : 'w-2 bg-gray-300 hover:bg-blue-300'}`}
                                    />
                                ))}
                            </div>

                            <button onClick={nextSlide} className="pointer-events-auto w-10 h-10 rounded-full bg-white/80 md:bg-white shadow-md md:border border-gray-200 flex items-center justify-center hover:bg-gray-50 text-gray-700">
                                ❯
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default AnnouncementPopup