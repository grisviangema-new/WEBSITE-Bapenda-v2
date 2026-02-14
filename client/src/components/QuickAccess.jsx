import React from 'react'
import { useNavigate } from 'react-router-dom'

const QuickAccess = () => {
    const navigate = useNavigate();

    const menus = [
        {
            title: "e-SPTPD",
            desc: "Lapor Pajak",
            // Icon Document
            icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>,
            color: "bg-indigo-600",
            shadow: "shadow-indigo-200",
            link: "https://patriot.pasuruankab.go.id/apps/esptpd/"
        },
        {
            title: "Pembayaran dan SPPT",
            desc: "Cek Tagihan, Cetak Bukti Bayar dan e-SPPT",
            // Icon Printer
            icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"></path></svg>,
            color: "bg-orange-500",
            shadow: "shadow-orange-200",
            link: "https://patriot.pasuruankab.go.id/apps/cek-bayar/"
        },
        {
            title: "e-Payment",
            desc: "Bayar Online",
            // Icon Credit Card
            icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path></svg>,
            color: "bg-emerald-500",
            shadow: "shadow-emerald-200",
            link: "https://patriot.pasuruankab.go.id/apps/epayment/"
        },
        {
            title: "e-BPHTB",
            desc: "Pelaporan dan Pembayaran BPHTB",
            // Icon Home/Building
            icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>,
            color: "bg-blue-600",
            shadow: "shadow-blue-200",
            link: "https://patriot.pasuruankab.go.id/apps/bphtb/"
        },
    ]

    const handleClick = (link) => {
        if(link.startsWith('http')) {
            window.open(link, '_blank')
        } else {
            navigate(link)
            window.scrollTo(0,0)
        }
    }

    return (
        <div className='relative z-30 px-4 sm:px-6 lg:px-8'>
            {/* NEGATIVE MARGIN ADJUSTMENT:
               -mt-24 atau -mt-32 untuk menarik kartu ke atas menimpa header
            */}
            <div className='max-w-7xl mx-auto -mt-24 md:-mt-32'>
                
                {/* Grid Layout agar responsif */}
                <div className='grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8'>
                    
                    {menus.map((item, index) => (
                        <div 
                            key={index}
                            onClick={() => handleClick(item.link)}
                            className='group bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl border border-gray-100 cursor-pointer transition-all duration-300 transform hover:-translate-y-2 flex flex-col items-center text-center relative overflow-hidden'
                        >
                            {/* Dekorasi Background Tipis saat Hover */}
                            <div className={`absolute top-0 left-0 w-full h-1 ${item.color}`}></div>
                            <div className={`absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity ${item.color}`}></div>

                            {/* Icon Circle dengan Shadow Warna */}
                            <div className={`${item.color} w-14 h-14 rounded-2xl flex items-center justify-center text-white mb-4 shadow-lg ${item.shadow} group-hover:scale-110 transition-transform duration-300`}>
                                {item.icon}
                            </div>
                            
                            {/* Text Content */}
                            <div>
                                <h3 className='font-bold text-gray-800 text-base md:text-lg mb-1 group-hover:text-blue-900 transition-colors'>
                                    {item.title}
                                </h3>
                                <p className='text-gray-500 text-xs md:text-sm font-medium'>
                                    {item.desc}
                                </p>
                            </div>

                            {/* Tombol Panah Kecil (Opsional - Pemanis) */}
                            <div className='mt-4 opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-300'>
                                <span className='text-xs font-bold text-blue-600 flex items-center gap-1'>
                                    Akses <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                </span>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    )
}

export default QuickAccess