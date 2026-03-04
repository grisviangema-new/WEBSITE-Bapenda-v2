import React, { useContext, useEffect, useState } from 'react'
import { AdminContext } from '../context/AdminContext'
import axios from 'axios'
import { toast } from 'react-toastify'

const ManageFAQ = () => {
    const { backendUrl, aToken } = useContext(AdminContext)
    const [list, setList] = useState([])
    const [question, setQuestion] = useState('')
    const [answer, setAnswer] = useState('')

    // Ambil semua FAQ
    const fetchFAQs = async () => {
        try {
            const { data } = await axios.get(backendUrl + '/api/faq/all')
            if (data.success) {
                setList(data.faqs)
            }
        } catch (error) { 
            toast.error("Gagal mengambil data FAQ") 
        }
    }

    // Simpan FAQ Baru
    const onSubmitHandler = async (e) => {
        e.preventDefault()
        try {
            // Mengirim objek JSON biasa
            const { data } = await axios.post(
                `${backendUrl}/api/faq/add`, 
                { question, answer }, 
                { headers: { aToken } }
            )
            
            if (data.success) {
                toast.success(data.message)
                setQuestion(''); 
                setAnswer('');
                fetchFAQs();
            } else { 
                toast.error(data.message) 
            }
        } catch (error) { 
            toast.error(error.response?.data?.message || error.message) 
        }
    }

    // Hapus FAQ
    const deleteHandler = async (id) => {
        if (!window.confirm("Hapus pertanyaan ini?")) return;
        
        try {
            // PERBAIKAN: Gunakan 'id' sesuai field primary key di MySQL
            const { data } = await axios.post(
                `${backendUrl}/api/faq/delete`, 
                { id }, 
                { headers: { aToken } }
            )
            
            if (data.success) {
                toast.success(data.message)
                fetchFAQs()
            }
        } catch (error) { 
            toast.error("Gagal menghapus data") 
        }
    }

    useEffect(() => { 
        fetchFAQs() 
    }, [])

    return (
        <div className='m-5'>
            <h1 className='text-2xl font-bold mb-6 text-gray-800'>Kelola Tanya Jawab (FAQ)</h1>
            
            {/* Form Input */}
            <form onSubmit={onSubmitHandler} className='bg-white p-6 rounded-xl shadow-sm border border-gray-100 mb-8 max-w-4xl'>
                <div className='mb-4'>
                    <label className='block text-sm font-semibold text-gray-700 mb-2'>Pertanyaan</label>
                    <input 
                        value={question} 
                        onChange={(e)=>setQuestion(e.target.value)} 
                        type="text" 
                        className='w-full border border-gray-300 p-2.5 rounded-lg focus:ring-1 focus:ring-blue-500 outline-none transition-all' 
                        placeholder="Misal: Bagaimana cara mengurus pemutihan denda PBB?" 
                        required 
                    />
                </div>
                <div className='mb-4'>
                    <label className='block text-sm font-semibold text-gray-700 mb-2'>Jawaban</label>
                    <textarea 
                        value={answer} 
                        onChange={(e)=>setAnswer(e.target.value)} 
                        rows="4" 
                        className='w-full border border-gray-300 p-2.5 rounded-lg focus:ring-1 focus:ring-blue-500 outline-none transition-all' 
                        placeholder="Jelaskan langkah-langkah atau syarat-syaratnya secara detail..." 
                        required 
                    />
                </div>
                <button type="submit" className='bg-blue-600 text-white px-8 py-2.5 rounded-full font-bold hover:bg-blue-700 shadow-md transition-all active:scale-95'>
                    Simpan FAQ
                </button>
            </form>

            <hr className='my-8 border-gray-200 max-w-4xl' />

            {/* List FAQ */}
            <div className='grid gap-4 max-w-4xl'>
                <p className='font-bold text-gray-700'>Pertanyaan yang Sering Diajukan</p>
                {list.map((item, index) => (
                    <div key={index} className='bg-white p-5 rounded-xl border border-gray-100 shadow-sm flex justify-between items-start hover:border-blue-200 transition-colors'>
                        <div className='pr-4'>
                            <p className='font-bold text-gray-900 text-base'>Q: {item.question}</p>
                            <p className='text-gray-600 text-sm mt-2 leading-relaxed'>A: {item.answer}</p>
                        </div>
                        {/* PERBAIKAN: Gunakan item.id menggantikan item._id */}
                        <button 
                            onClick={()=>deleteHandler(item.id)} 
                            className='text-red-400 hover:text-red-600 hover:bg-red-50 p-2 rounded-lg transition-all'
                            title="Hapus FAQ"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                        </button>
                    </div>
                ))}

                {list.length === 0 && (
                    <div className='p-10 text-center bg-gray-50 rounded-xl border-2 border-dashed border-gray-200 text-gray-400'>
                        Belum ada FAQ yang tersedia.
                    </div>
                )}
            </div>
        </div>
    )
}

export default ManageFAQ