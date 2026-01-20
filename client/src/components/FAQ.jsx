import React, { useState } from 'react'

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null)

    const questions = [
        { q: "Bagaimana cara membayar PBB Online?", a: "Anda bisa membayar melalui Tokopedia, Shopee, GoPay, atau melalui Mobile Banking Bank Jatim dengan memasukkan NOP Anda." },
        { q: "Apa syarat pengajuan keberatan pajak?", a: "Fotokopi KTP, SPPT asli, bukti kepemilikan tanah, dan surat pengantar dari Desa/Kelurahan." },
        { q: "Kapan jatuh tempo pembayaran PBB?", a: "Jatuh tempo pembayaran PBB setiap tahunnya adalah tanggal 31 Agustus." },
        { q: "Bagaimana jika SPPT saya hilang?", a: "Anda bisa mencetak salinan SPPT di kantor Bapenda atau meminta file PDF melalui menu 'Unduhan' di website ini." },
    ]

    const toggle = (index) => {
        if (openIndex === index) return setOpenIndex(null)
        setOpenIndex(index)
    }

    return (
        <div className='my-20 flex flex-col items-center px-4'>
            <h1 className='text-3xl font-bold text-gray-800 mb-2'>Pertanyaan Umum</h1>
            <p className='text-gray-500 mb-10 text-center'>Hal yang sering ditanyakan oleh Wajib Pajak</p>

            <div className='w-full max-w-2xl flex flex-col gap-4'>
                {questions.map((item, index) => (
                    <div key={index} className='border border-gray-200 rounded-lg overflow-hidden'>
                        <div 
                            onClick={() => toggle(index)} 
                            className='bg-white p-4 flex justify-between items-center cursor-pointer hover:bg-gray-50'
                        >
                            <p className='font-medium text-gray-800'>{item.q}</p>
                            <span className='text-gray-400'>{openIndex === index ? '−' : '+'}</span>
                        </div>
                        {openIndex === index && (
                            <div className='p-4 bg-blue-50 text-gray-600 text-sm border-t'>
                                {item.a}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default FAQ