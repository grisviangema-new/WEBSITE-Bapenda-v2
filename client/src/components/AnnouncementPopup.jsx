import React, { useContext, useEffect, useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const AnnouncementPopup = () => {
    const { announcements, backendUrl } = useContext(AppContext)
    const [show, setShow] = useState(false)
    const [currentIndex, setCurrentIndex] = useState(0)
    const navigate = useNavigate()
    const slideInterval = useRef(null)

    useEffect(() => {
        const isClosed = sessionStorage.getItem('announcement_closed')
        if (!isClosed && announcements && announcements.length > 0) {
            const timer = setTimeout(() => setShow(true), 1500);
            return () => clearTimeout(timer);
        }
    }, [announcements])

    const startAutoSlide = () => {
        stopAutoSlide();
        if (show && announcements.length > 1) {
            slideInterval.current = setInterval(() => {
                setCurrentIndex((prev) => (prev === announcements.length - 1 ? 0 : prev + 1));
            }, 5000);
        }
    };

    const stopAutoSlide = () => {
        if (slideInterval.current) clearInterval(slideInterval.current);
    };

    useEffect(() => {
        startAutoSlide();
        return () => stopAutoSlide();
    }, [show, announcements]);

    const nextSlide = () => {
        stopAutoSlide();
        setCurrentIndex((prev) => (prev === announcements.length - 1 ? 0 : prev + 1));
        startAutoSlide();
    };

    const prevSlide = () => {
        stopAutoSlide();
        setCurrentIndex((prev) => (prev === 0 ? announcements.length - 1 : prev - 1));
        startAutoSlide();
    };

    const handleClose = () => {
        setShow(false);
        sessionStorage.setItem('announcement_closed', 'true');
    };

    const handleNavigate = (link) => {
        setShow(false);
        sessionStorage.setItem('announcement_closed', 'true');
        navigate(link);
    }

    if (!show || !announcements || announcements.length === 0) return null;

    const currentItem = announcements[currentIndex];
    // PERBAIKAN: Konstruksi URL gambar dari backend
    const imageUrl = currentItem.image ? `${backendUrl}/uploads/images/${currentItem.image}` : null;
    const hasLink = currentItem.link && currentItem.link !== '#' && currentItem.link.trim() !== '';

    return (
        <div className='fixed inset-0 z-[999] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm transition-opacity duration-300'>
            
            <div className='bg-white w-full max-w-5xl md:max-h-[85vh] h-auto rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row relative animate-scale-up'>
                
                {/* TOMBOL CLOSE (Floating di atas modal) */}
                <button 
                    onClick={handleClose} 
                    className='absolute top-4 right-4 z-50 bg-white shadow-lg text-gray-800 hover:bg-red-500 hover:text-white rounded-full w-10 h-10 flex items-center justify-center transition-all font-bold text-xl'
                >
                    &times;
                </button>

                {/* --- BAGIAN KIRI: AREA GAMBAR (MELEBAR) --- */}
                <div className='relative w-full md:flex-[1.5] bg-gray-50 flex items-center justify-center group overflow-hidden border-r border-gray-100'>
                    {imageUrl ? (
                        <img 
                            src={imageUrl} 
                            alt={currentItem.title} 
                            // PERBAIKAN: h-full dan object-cover agar gambar memenuhi area secara estetis
                            className='w-full h-full object-cover md:object-contain bg-gray-100 transition-all duration-700 group-hover:scale-105'
                        />
                    ) : (
                        <div className="text-9xl p-20">📢</div>
                    )}

                    {/* Navigasi Overlay */}
                    {announcements.length > 1 && (
                        <div className='absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-4 opacity-0 group-hover:opacity-100 transition-opacity'>
                            <button onClick={prevSlide} className='bg-white/80 p-3 rounded-full shadow-lg hover:bg-blue-600 hover:text-white transition-all'>❮</button>
                            <button onClick={nextSlide} className='bg-white/80 p-3 rounded-full shadow-lg hover:bg-blue-600 hover:text-white transition-all'>❯</button>
                        </div>
                    )}
                </div>

                {/* --- BAGIAN KANAN: KONTEN TEKS (FLEX-1) --- */}
                <div className='w-full md:flex-1 flex flex-col p-8 md:p-12 bg-white justify-center'>
                    
                    <div className='mb-6'>
                        <div className='flex items-center gap-2 mb-4'>
                            <span className="bg-blue-50 text-blue-600 text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-tighter">
                                Informasi Terbaru
                            </span>
                            <span className="text-[10px] text-gray-400 font-bold">
                                {currentIndex + 1} / {announcements.length}
                            </span>
                        </div>

                        <h2 className='text-2xl md:text-4xl font-black text-gray-900 mb-4 leading-tight'>
                            {currentItem.title}
                        </h2>

                        <div className="overflow-y-auto max-h-[200px] pr-4 custom-scrollbar">
                            <p className='text-gray-500 text-sm md:text-lg leading-relaxed whitespace-pre-line font-medium'>
                                {currentItem.desc}
                            </p>
                        </div>
                    </div>

                    {/* FOOTER ACTION */}
                    <div className="mt-4 space-y-3">
                        {hasLink && (
                            <button 
                                onClick={() => handleNavigate(currentItem.link)}
                                className='w-full bg-blue-600 text-white py-4 rounded-2xl font-bold text-sm hover:bg-blue-700 transition-all shadow-xl shadow-blue-100 active:scale-95'
                            >
                                Pelajari Selengkapnya
                            </button>
                        )}
                        <button 
                            onClick={handleClose}
                            className='w-full py-4 rounded-2xl border-2 border-gray-100 text-gray-400 font-bold text-sm hover:bg-gray-50 hover:text-gray-600 transition-all'
                        >
                            Tutup
                        </button>
                    </div>

                    {/* Progress Dots */}
                    {announcements.length > 1 && (
                        <div className='flex gap-2 mt-8 justify-center'>
                            {announcements.map((_, idx) => (
                                <div 
                                    key={idx} 
                                    className={`h-1.5 rounded-full transition-all duration-500 ${idx === currentIndex ? 'w-8 bg-blue-600' : 'w-2 bg-gray-200'}`}
                                />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default AnnouncementPopup