import React, { useContext, useEffect, useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const AnnouncementPopup = () => {
    const { announcements } = useContext(AppContext)
    const [show, setShow] = useState(false)
    const [currentIndex, setCurrentIndex] = useState(0)
    const navigate = useNavigate()
    
    // Ref untuk menyimpan ID timer agar bisa di-reset
    const slideInterval = useRef(null)

    // 1. Trigger Popup (Hanya jika belum ditutup sebelumnya)
    useEffect(() => {
        const isClosed = sessionStorage.getItem('announcement_closed') // Cek memori browser

        if (!isClosed && announcements && announcements.length > 0) {
            const timer = setTimeout(() => setShow(true), 1500);
            return () => clearTimeout(timer);
        }
    }, [announcements])

    // 2. Fungsi Reset Timer (Agar tidak bentrok saat diklik manual)
    const startAutoSlide = () => {
        stopAutoSlide(); // Hapus timer lama dulu
        if (show && announcements.length > 1) {
            slideInterval.current = setInterval(() => {
                setCurrentIndex((prev) => (prev === announcements.length - 1 ? 0 : prev + 1));
            }, 5000);
        }
    };

    const stopAutoSlide = () => {
        if (slideInterval.current) {
            clearInterval(slideInterval.current);
        }
    };

    // Jalankan Auto Slide saat komponen tampil
    useEffect(() => {
        startAutoSlide();
        return () => stopAutoSlide();
    }, [show, announcements]); // Hapus dependency currentIndex agar timer tidak reset tiap detik, tapi tiap interaksi

    // Helper: Next & Prev (Dengan Reset Timer)
    const nextSlide = () => {
        stopAutoSlide();
        setCurrentIndex((prev) => (prev === announcements.length - 1 ? 0 : prev + 1));
        startAutoSlide(); // Mulai lagi hitungan 5 detiknya
    };

    const prevSlide = () => {
        stopAutoSlide();
        setCurrentIndex((prev) => (prev === 0 ? announcements.length - 1 : prev - 1));
        startAutoSlide();
    };

    // Fungsi Tutup Popup & Simpan ke Session
    const handleClose = () => {
        setShow(false);
        sessionStorage.setItem('announcement_closed', 'true'); // Simpan status tutup
    };

    const handleNavigate = (link) => {
        setShow(false);
        sessionStorage.setItem('announcement_closed', 'true'); // Anggap sudah dibaca
        navigate(link);
    }

    if (!show || !announcements || announcements.length === 0) return null;

    const currentItem = announcements[currentIndex];
    const isImageUrl = currentItem.image && (currentItem.image.includes('http') || currentItem.image.includes('/'));
    
    // Cek Link Valid
    const hasLink = currentItem.link && currentItem.link !== '#' && currentItem.link.trim() !== '';

    return (
        <div className='fixed inset-0 z-[999] flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm transition-opacity duration-300'>
            
            <div className='bg-white w-full max-w-4xl md:h-[65vh] h-auto min-h-[500px] rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row relative animate-scale-up'>
                
                {/* TOMBOL CLOSE */}
                <button 
                    onClick={handleClose} 
                    className='absolute top-3 right-3 z-50 bg-white/80 hover:bg-red-500 text-gray-600 hover:text-white rounded-full w-8 h-8 flex items-center justify-center backdrop-blur-md transition-all font-bold shadow-md'
                >
                    &times;
                </button>

                {/* --- BAGIAN KIRI: GAMBAR --- */}
                <div className={`w-full md:w-1/2 h-64 md:h-full relative ${currentItem.color || 'bg-blue-50'} flex items-center justify-center p-6`}>
                    {isImageUrl ? (
                        <img 
                            src={currentItem.image} 
                            alt={currentItem.title} 
                            className='w-full h-full object-contain drop-shadow-xl hover:scale-105 transition-transform duration-500'
                        />
                    ) : (
                        <div className="text-8xl md:text-9xl animate-bounce-slow drop-shadow-lg">
                            {currentItem.image || '📢'}
                        </div>
                    )}

                    {/* Navigasi Arrows (Mobile: Overlay di Gambar) */}
                    {announcements.length > 1 && (
                        <>
                            <button onClick={prevSlide} className='md:hidden absolute left-2 top-1/2 -translate-y-1/2 bg-white/50 p-2 rounded-full hover:bg-white text-gray-800'>❮</button>
                            <button onClick={nextSlide} className='md:hidden absolute right-2 top-1/2 -translate-y-1/2 bg-white/50 p-2 rounded-full hover:bg-white text-gray-800'>❯</button>
                        </>
                    )}
                </div>

                {/* --- BAGIAN KANAN: KONTEN TEKS --- */}
                <div className='w-full md:w-1/2 flex flex-col p-6 md:p-10 bg-white relative'>
                    
                    <div className='flex-grow'>
                        <span className="bg-blue-100 text-blue-700 text-[10px] md:text-xs font-bold px-3 py-1 rounded-full mb-3 uppercase tracking-wider inline-block">
                            Pengumuman {currentIndex + 1} dari {announcements.length}
                        </span>

                        <h2 className='text-xl md:text-3xl font-bold text-gray-900 mb-3 leading-tight mt-2'>
                            {currentItem.title}
                        </h2>

                        <div className="overflow-y-auto max-h-[150px] md:max-h-[250px] pr-2 scrollbar-thin scrollbar-thumb-gray-200">
                            <p className='text-gray-600 text-sm md:text-base leading-relaxed whitespace-pre-line'>
                                {currentItem.desc}
                            </p>
                        </div>
                    </div>

                    {/* --- FOOTER: TOMBOL & NAVIGASI DESKTOP --- */}
                    <div className="mt-6 pt-4 border-t border-gray-100">
                        <div className="flex gap-3 mb-4">
                            {hasLink && (
                                <button 
                                    onClick={() => handleNavigate(currentItem.link)}
                                    className='flex-1 bg-blue-600 text-white px-4 py-2.5 rounded-lg font-semibold text-sm hover:bg-blue-700 transition-all shadow-md'
                                >
                                    Lihat Detail
                                </button>
                            )}
                            <button 
                                onClick={handleClose}
                                className={`px-4 py-2.5 rounded-lg border border-gray-300 text-gray-600 font-medium text-sm hover:bg-gray-50 transition-all ${!hasLink ? 'w-full' : ''}`}
                            >
                                Tutup
                            </button>
                        </div>

                        {/* Navigasi Desktop (Dots & Arrows) */}
                        {announcements.length > 1 && (
                            <div className="hidden md:flex justify-between items-center">
                                <button onClick={prevSlide} className="w-8 h-8 rounded-full border hover:bg-gray-100 text-gray-500 flex items-center justify-center">❮</button>
                                <div className='flex gap-1.5'>
                                    {announcements.map((_, idx) => (
                                        <div 
                                            key={idx} 
                                            onClick={() => { stopAutoSlide(); setCurrentIndex(idx); startAutoSlide(); }}
                                            className={`h-1.5 rounded-full cursor-pointer transition-all duration-300 ${idx === currentIndex ? 'w-6 bg-blue-600' : 'w-1.5 bg-gray-300 hover:bg-blue-400'}`}
                                        />
                                    ))}
                                </div>
                                <button onClick={nextSlide} className="w-8 h-8 rounded-full border hover:bg-gray-100 text-gray-500 flex items-center justify-center">❯</button>
                            </div>
                        )}
                    </div>

                </div>
            </div>
        </div>
    )
}

export default AnnouncementPopup