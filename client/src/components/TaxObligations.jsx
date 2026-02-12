import React, { useState } from 'react'

const TaxObligations = () => {
    const [activeTab, setActiveTab] = useState('kewajiban') // 'kewajiban' atau 'hak'

    // Data Kewajiban (Wajib Pajak harus melakukan ini)
    const obligations = [
        {
            title: "Mendaftarkan Diri",
            desc: "Setiap wajib pajak wajib mendaftarkan objek pajaknya untuk mendapatkan NPWPD.",
            icon: "📝"
        },
        {
            title: "Menghitung & Membayar",
            desc: "Menghitung pajak terutang secara mandiri (Self Assessment) dan membayarnya tepat waktu.",
            icon: "🧮"
        },
        {
            title: "Melaporkan (SPTPD)",
            desc: "Wajib menyampaikan Surat Pemberitahuan Pajak Daerah (SPTPD) setiap bulan.",
            icon: "📅"
        },
        {
            title: "Memberikan Data",
            desc: "Memperlihatkan catatan atau dokumen pendukung saat ada pemeriksaan pajak.",
            icon: "📂"
        }
    ]

    // Data Hak (Wajib Pajak berhak mendapatkan ini)
    const rights = [
        {
            title: "Bukti Pembayaran",
            desc: "Berhak menerima tanda bukti pembayaran yang sah atas pajak yang telah disetor.",
            icon: "🧾"
        },
        {
            title: "Mengajukan Keberatan",
            desc: "Dapat mengajukan keberatan atau banding jika tidak setuju dengan ketetapan pajak.",
            icon: "⚖️"
        },
        {
            title: "Kerahasiaan Data",
            desc: "Data perpajakan Anda dijamin kerahasiaannya sesuai dengan peraturan perundang-undangan.",
            icon: "🔒"
        },
        {
            title: "Pengembalian (Restitusi)",
            desc: "Berhak meminta pengembalian jika terjadi kelebihan pembayaran pajak.",
            icon: "💰"
        }
    ]

    const displayData = activeTab === 'kewajiban' ? obligations : rights

    return (
        <div className='py-20 bg-white'>
            <div className='max-w-6xl mx-auto px-6'>
                
                {/* --- HEADER & TOGGLE SWITCH --- */}
                <div className='text-center mb-16'>
                    <h2 className='text-3xl md:text-4xl font-extrabold text-gray-900 mb-6'>
                        Edukasi Perpajakan
                    </h2>
                    <p className='text-gray-500 mb-8 max-w-2xl mx-auto'>
                        Memahami peran Anda dalam pembangunan daerah. Ketahui apa yang menjadi tanggung jawab dan hak Anda sebagai Wajib Pajak.
                    </p>

                    {/* SWITCH BUTTON */}
                    <div className='inline-flex bg-gray-100 p-1 rounded-full relative'>
                        {/* Background Slider Animation */}
                        <div className={`absolute top-1 bottom-1 w-1/2 bg-white rounded-full shadow-sm transition-all duration-300 ease-in-out ${activeTab === 'kewajiban' ? 'left-1' : 'left-[49%]'}`}></div>
                        
                        <button 
                            onClick={() => setActiveTab('kewajiban')}
                            className={`relative z-10 px-8 py-3 rounded-full text-sm font-bold transition-colors ${activeTab === 'kewajiban' ? 'text-blue-600' : 'text-gray-500'}`}
                        >
                            Kewajiban Wajib Pajak
                        </button>
                        <button 
                            onClick={() => setActiveTab('hak')}
                            className={`relative z-10 px-8 py-3 rounded-full text-sm font-bold transition-colors ${activeTab === 'hak' ? 'text-green-600' : 'text-gray-500'}`}
                        >
                            Hak Wajib Pajak
                        </button>
                    </div>
                </div>

                {/* --- CONTENT GRID --- */}
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
                    {displayData.map((item, index) => (
                        <div 
                            key={index}
                            className={`group p-8 rounded-3xl border transition-all duration-300 hover:-translate-y-2 cursor-default ${
                                activeTab === 'kewajiban' 
                                ? 'bg-blue-50/30 border-blue-100 hover:border-blue-300 hover:shadow-blue-100' 
                                : 'bg-green-50/30 border-green-100 hover:border-green-300 hover:shadow-green-100'
                            } shadow-sm`}
                        >
                            {/* Icon Circle */}
                            <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-sm transition-transform group-hover:scale-110 ${
                                activeTab === 'kewajiban' ? 'bg-blue-100 text-blue-600' : 'bg-green-100 text-green-600'
                            }`}>
                                {item.icon}
                            </div>

                            <h3 className='text-xl font-bold text-gray-800 mb-3'>
                                {item.title}
                            </h3>
                            <p className='text-gray-600 text-sm leading-relaxed'>
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>

                {/* --- FOOTER INFO --- */}
                <div className='mt-16 text-center'>
                    <p className='text-gray-400 text-sm'>
                        Ingin mengetahui peraturan daerah selengkapnya? 
                        <a href="/downloads" className='ml-2 text-blue-600 font-bold hover:underline'>Unduh Dokumen Regulasi →</a>
                    </p>
                </div>

            </div>
        </div>
    )
}

export default TaxObligations