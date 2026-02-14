import React, { useContext, useEffect, useState } from 'react'
import { AdminContext } from '../context/AdminContext'
import axios from 'axios'
import { toast } from 'react-toastify'

const ManageFAQ = () => {
    const { backendUrl, aToken } = useContext(AdminContext)
    const [list, setList] = useState([])
    const [question, setQuestion] = useState('')
    const [answer, setAnswer] = useState('')

    const fetchFAQs = async () => {
        try {
            const { data } = await axios.get(backendUrl + '/api/faq/all')
            if (data.success) setList(data.faqs)
        } catch (error) { toast.error(error.message) }
    }

    const onSubmitHandler = async (e) => {
        e.preventDefault()
        try {
            const { data } = await axios.post(backendUrl + '/api/faq/add', { question, answer }, { headers: { aToken } })
            if (data.success) {
                toast.success(data.message)
                setQuestion(''); setAnswer('');
                fetchFAQs();
            } else { toast.error(data.message) }
        } catch (error) { toast.error(error.message) }
    }

    const deleteHandler = async (id) => {
        try {
            const { data } = await axios.post(backendUrl + '/api/faq/delete', { id }, { headers: { aToken } })
            if (data.success) {
                toast.success(data.message); fetchFAQs();
            }
        } catch (error) { toast.error(error.message) }
    }

    useEffect(() => { fetchFAQs() }, [])

    return (
        <div className='m-5'>
            <h1 className='text-2xl font-bold mb-6'>Kelola Tanya Jawab (FAQ)</h1>
            
            {/* Form Input */}
            <form onSubmit={onSubmitHandler} className='bg-white p-6 rounded-xl shadow-sm border mb-8 max-w-4xl'>
                <div className='mb-4'>
                    <label className='block text-sm font-medium mb-2'>Pertanyaan</label>
                    <input value={question} onChange={(e)=>setQuestion(e.target.value)} type="text" className='w-full border p-2 rounded focus:outline-blue-500' placeholder="Misal: Cara bayar PBB?" required />
                </div>
                <div className='mb-4'>
                    <label className='block text-sm font-medium mb-2'>Jawaban</label>
                    <textarea value={answer} onChange={(e)=>setAnswer(e.target.value)} rows="4" className='w-full border p-2 rounded focus:outline-blue-500' placeholder="Jelaskan langkah-langkahnya..." required />
                </div>
                <button type="submit" className='bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700'>Simpan FAQ</button>
            </form>

            {/* List FAQ */}
            <div className='grid gap-4 max-w-4xl'>
                {list.map((item, index) => (
                    <div key={index} className='bg-white p-4 rounded-lg border shadow-sm flex justify-between items-start'>
                        <div>
                            <p className='font-bold text-gray-800'>{item.question}</p>
                            <p className='text-gray-600 text-sm mt-1'>{item.answer}</p>
                        </div>
                        <button onClick={()=>deleteHandler(item._id)} className='text-red-500 hover:bg-red-50 p-2 rounded'>
                            🗑
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ManageFAQ