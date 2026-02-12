import React from 'react'
import { useNavigate } from 'react-router-dom'

const HomeServices = () => {
    const navigate = useNavigate();

    const quickLinks = [
        { title: "CEK TAGIHAN", icon: "🔍", color: "bg-red-50 text-red-600" },
        { title: "E-PAYMENT", icon: "💳", color: "bg-green-50 text-green-600" },
        { title: "PBB", icon: "🏠", color: "bg-blue-50 text-blue-600" },
        { title: "PBJT", icon: "🧾", color: "bg-emerald-50 text-emerald-600" },
        { title: "NPWPD", icon: "🆔", color: "bg-purple-50 text-purple-600" },
        { title: "PAJAK REKLAME", icon: "📢", color: "bg-rose-50 text-rose-600" },
        { title: "PAJAK AIR TANAH", icon: "⛲", color: "bg-sky-50 text-sky-600" },
        { title: "BPHTB", icon: "🤝", color: "bg-amber-50 text-amber-600" },
        { title: "KEBERATAN & KERINGANAN", icon: "⚖️", color: "bg-gray-100 text-gray-700" },
    ]

    return (
        <div className='py-24 bg-gray-50/50'>
            <div className='max-w-6xl mx-auto px-6 text-center'>
                <h2 className='text-3xl md:text-4xl font-black text-gray-900 mb-4'>Kemudahan Layanan</h2>
                <p className='text-gray-500 mb-16 max-w-2xl mx-auto'>Pantau kewajiban perpajakan Anda dan lakukan pembayaran secara praktis dan aman.</p>

                <div className='grid grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-6 md:gap-12'>
                    {quickLinks.map((item, index) => (
                        <div 
                            key={index}
                            onClick={() => { navigate('/services'); window.scrollTo(0,0); }}
                            className='group flex flex-col items-center cursor-pointer transition-all duration-300'
                        >
                            <div className={`w-16 h-16 md:w-24 md:h-24 rounded-[2rem] flex items-center justify-center text-3xl md:text-5xl mb-4 shadow-sm group-hover:shadow-2xl group-hover:scale-110 transition-all duration-500 ${item.color}`}>
                                {item.icon}
                            </div>
                            <h3 className='font-bold text-gray-800 text-[9px] md:text-sm tracking-widest uppercase group-hover:text-blue-600'>
                                {item.title}
                            </h3>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default HomeServices