import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { AppContext } from '../context/AppContext' // Sesuaikan path

const FAQ = () => {
    const { backendUrl } = useContext(AppContext) // Pastikan backendUrl ada di AppContext
    const [faqs, setFaqs] = useState([])
    const [openIndex, setOpenIndex] = useState(null)
    const [loading, setLoading] = useState(true)

    // Fetch Data dari Database
    useEffect(() => {
        const fetchFAQs = async () => {
            try {
                // Jika backendUrl belum diset di context, ganti manual untuk tes: 'http://localhost:4000'
                const { data } = await axios.get(backendUrl + '/api/faq/all')
                if (data.success) {
                    setFaqs(data.faqs)
                }
            } catch (error) {
                console.log(error)
            } finally {
                setLoading(false)
            }
        }
        fetchFAQs()
    }, [backendUrl])

    const toggle = (index) => {
        if (openIndex === index) return setOpenIndex(null)
        setOpenIndex(index)
    }

    return (
        <div className='py-20 bg-gray-50/50'>
            <div className='max-w-4xl mx-auto px-6'>
                
                {/* Header Section */}
                <div className='text-center mb-12'>
                    <h2 className='text-blue-600 font-bold text-sm tracking-widest uppercase mb-2'>Pusat Bantuan</h2>
                    <h1 className='text-3xl md:text-4xl font-extrabold text-gray-900 mb-4'>Pertanyaan Sering Diajukan</h1>
                    <p className='text-gray-500 max-w-2xl mx-auto'>
                        Temukan jawaban cepat atas pertanyaan umum seputar layanan pajak daerah Kabupaten Pasuruan.
                    </p>
                </div>

                {/* FAQ Container */}
                <div className='flex flex-col gap-4'>
                    {loading ? (
                        <p className='text-center text-gray-400'>Memuat pertanyaan...</p>
                    ) : (
                        faqs.map((item, index) => (
                            <div 
                                key={index} 
                                className={`bg-white rounded-2xl border transition-all duration-300 ${
                                    openIndex === index ? 'border-blue-200 shadow-md ring-2 ring-blue-50' : 'border-gray-200 hover:border-blue-300'
                                }`}
                            >
                                {/* Pertanyaan (Clickable) */}
                                <button 
                                    onClick={() => toggle(index)}
                                    className='w-full text-left px-6 py-5 flex justify-between items-center focus:outline-none'
                                >
                                    <span className={`font-bold text-lg transition-colors ${openIndex === index ? 'text-blue-700' : 'text-gray-800'}`}>
                                        {item.question}
                                    </span>
                                    
                                    {/* Icon Plus/Minus dengan Animasi Rotasi */}
                                    <span className={`ml-4 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${openIndex === index ? 'bg-blue-600 text-white rotate-180' : 'bg-gray-100 text-gray-500 rotate-0'}`}>
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                                    </span>
                                </button>

                                {/* Jawaban (Collapsible) */}
                                <div 
                                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                                        openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                                    }`}
                                >
                                    <div className='px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-100 pt-4'>
                                        {item.answer}
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>

                {/* Footer Link */}
                <div className='mt-12 text-center bg-blue-50 rounded-xl p-6 border border-blue-100'>
                    <p className='text-gray-700 font-medium'>
                        Masih punya pertanyaan lain?
                    </p>
                    <a 
                        href="https://wa.me/+628881800800" // Ganti nomor WA Bapenda
                        target="_blank"
                        rel="noreferrer"
                        className='inline-flex items-center gap-2 text-blue-600 font-bold mt-2 hover:underline'
                    >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.463 1.065 2.876 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
                        Hubungi WhatsApp Layanan
                    </a>
                </div>

            </div>
        </div>
    )
}

export default FAQ