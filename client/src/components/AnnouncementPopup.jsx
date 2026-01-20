import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AnnouncementPopup = () => {
    const [show, setShow] = useState(false)
    const [currentIndex, setCurrentIndex] = useState(0)
    const navigate = useNavigate()

    // --- DATA PENGUMUMAN (Bisa ditambah sesuka hati) ---
    const announcements = [
        {
            id: 1,
            title: "📢 Pemutihan Denda Pajak!",
            desc: "Kabar Gembira! Bebas Denda Administrasi untuk pembayaran PBB-P2 tunggakan tahun 2020-2024. Berlaku hingga 31 Desember 2026.",
            image: "🎉", // Bisa diganti URL gambar
            color: "bg-blue-600",
            link: "/news"
        },
        {
            id: 2,
            title: "🚗 Jadwal Mobil Keliling",
            desc: "Minggu ini mobil layanan kami berada di Alun-Alun Bangil dan Pasar Pandaan. Buka jam 08.00 - 12.00 WIB.",
            image: "🚐",
            color: "bg-green-600",
            link: "/services"
        },
        {
            id: 3,
            title: "⚠️ Jatuh Tempo PBB",
            desc: "Ingat! Jatuh tempo pembayaran PBB tahun 2026 adalah tanggal 31 Agustus. Bayar tepat waktu untuk hindari denda.",
            image: "📅",
            color: "bg-red-500",
            link: "/"
        }
    ]

    // --- LOGIKA MUNCUL & GESER OTOMATIS ---
    
    // 1. Munculkan popup setelah 1 detik website dibuka
    useEffect(() => {
        const timer = setTimeout(() => {
            setShow(true)
        }, 1000)
        return () => clearTimeout(timer)
    }, [])

    // 2. Auto Slide setiap 4 detik
    useEffect(() => {
        if (!show) return; // Jangan jalan kalau popup tertutup

        const slideInterval = setInterval(() => {
            setCurrentIndex((prevIndex) => 
                prevIndex === announcements.length - 1 ? 0 : prevIndex + 1
            )
        }, 4000) // Ganti slide setiap 4000ms (4 detik)

        return () => clearInterval(slideInterval)
    }, [show, announcements.length])


    if (!show) return null;

    return (
        <div className='fixed inset-0 z-[999] flex items-center justify-center bg-black/60 backdrop-blur-sm px-4 fade-in-animation'>
            
            <div className='bg-white w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden relative'>
                
                {/* TOMBOL CLOSE (X) */}
                <button 
                    onClick={() => setShow(false)} 
                    className='absolute top-3 right-3 text-white/80 hover:text-white bg-black/20 hover:bg-black/40 rounded-full w-8 h-8 flex items-center justify-center transition-all z-10'
                >
                    ✕
                </button>

                {/* CONTENT AREA (SLIDER) */}
                <div className='relative h-[300px]'>
                    {announcements.map((item, index) => (
                        <div 
                            key={item.id}
                            className={`absolute inset-0 transition-opacity duration-700 ease-in-out flex flex-col h-full
                                ${index === currentIndex ? 'opacity-100 z-0' : 'opacity-0 z-[-1]'}
                            `}
                        >
                            {/* Bagian Atas (Warna & Icon) */}
                            <div className={`${item.color} h-2/5 flex items-center justify-center text-6xl`}>
                                {item.image}
                            </div>

                            {/* Bagian Bawah (Teks) */}
                            <div className='p-6 h-3/5 flex flex-col items-center text-center justify-center'>
                                <h2 className='text-2xl font-bold text-gray-800 mb-2'>{item.title}</h2>
                                <p className='text-gray-600 text-sm leading-relaxed mb-4'>{item.desc}</p>
                                
                                <button 
                                    onClick={()=>{ setShow(false); navigate(item.link) }}
                                    className='text-blue-600 font-semibold text-sm hover:underline'
                                >
                                    Lihat Selengkapnya →
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* INDIKATOR DOTS (Titik-titik di bawah) */}
                <div className='absolute bottom-4 left-0 right-0 flex justify-center gap-2'>
                    {announcements.map((_, index) => (
                        <div 
                            key={index} 
                            onClick={() => setCurrentIndex(index)}
                            className={`w-2 h-2 rounded-full cursor-pointer transition-all ${
                                index === currentIndex ? 'bg-blue-600 w-6' : 'bg-gray-300'
                            }`}
                        ></div>
                    ))}
                </div>

            </div>
        </div>
    )
}

export default AnnouncementPopup