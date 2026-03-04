import React, { useContext, useEffect, useState } from 'react'
import { AdminContext } from '../context/AdminContext'
import axios from 'axios'
import { toast } from 'react-toastify'
import { PlusCircle, Trash2, HelpCircle, MessageSquare, List } from 'lucide-react'

const ManageFAQ = () => {
    const { backendUrl, aToken } = useContext(AdminContext)
    const [list, setList] = useState([])
    const [question, setQuestion] = useState('')
    const [answer, setAnswer] = useState('')
    const [loading, setLoading] = useState(false)

    const fetchFAQs = async () => {
        try {
            const { data } = await axios.get(backendUrl + '/api/faq/all')
            if (data.success) setList(data.faqs)
        } catch (error) { 
            toast.error("Gagal mengambil data FAQ") 
        }
    }

    const onSubmitHandler = async (e) => {
        e.preventDefault()
        setLoading(true)
        try {
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
            }
        } catch (error) { 
            toast.error(error.response?.data?.message || error.message) 
        } finally {
            setLoading(false)
        }
    }

    const deleteHandler = async (id) => {
        if (!window.confirm("Hapus pertanyaan ini secara permanen?")) return;
        try {
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

    useEffect(() => { fetchFAQs() }, [])

    return (
        <div className='p-6 lg:p-10 bg-slate-50 min-h-screen'>
            {/* --- HEADER --- */}
            <div className='flex items-center gap-3 mb-8'>
                <div className='p-3 bg-blue-600 rounded-2xl shadow-lg shadow-blue-200'>
                    <HelpCircle className='text-white' size={24} />
                </div>
                <div>
                    <h1 className='text-2xl font-black text-slate-800 tracking-tight'>Pusat Edukasi FAQ</h1>
                    <p className='text-slate-500 text-sm font-medium'>Kelola pertanyaan umum untuk memudahkan Wajib Pajak.</p>
                </div>
            </div>

            <div className='grid lg:grid-cols-12 gap-10 items-start'>
                
                {/* --- FORM INPUT (KIRI) --- */}
                <form onSubmit={onSubmitHandler} className='lg:col-span-5 bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-100'>
                    <h2 className='text-lg font-bold text-slate-800 mb-6 flex items-center gap-2'>
                        <PlusCircle size={20} className='text-blue-600' /> Tambah FAQ Baru
                    </h2>
                    
                    <div className='space-y-5'>
                        <div className='space-y-2'>
                            <label className='text-xs font-black text-slate-400 uppercase tracking-widest px-1'>Pertanyaan</label>
                            <div className='relative'>
                                <MessageSquare className='absolute left-4 top-4 text-slate-300' size={18} />
                                <input 
                                    value={question} 
                                    onChange={(e)=>setQuestion(e.target.value)} 
                                    type="text" 
                                    className='w-full pl-12 pr-4 py-4 bg-slate-50 rounded-2xl border border-slate-100 focus:border-blue-500 focus:ring-4 focus:ring-blue-50/50 outline-none transition-all font-medium text-slate-700' 
                                    placeholder="Apa syarat pengurusan PBB?" 
                                    required 
                                />
                            </div>
                        </div>

                        <div className='space-y-2'>
                            <label className='text-xs font-black text-slate-400 uppercase tracking-widest px-1'>Jawaban Detail</label>
                            <textarea 
                                value={answer} 
                                onChange={(e)=>setAnswer(e.target.value)} 
                                rows="5" 
                                className='w-full p-5 bg-slate-50 rounded-2xl border border-slate-100 focus:border-blue-500 focus:ring-4 focus:ring-blue-50/50 outline-none transition-all font-medium text-slate-600 leading-relaxed' 
                                placeholder="Tuliskan jawaban yang informatif di sini..." 
                                required 
                            />
                        </div>

                        <button 
                            disabled={loading}
                            type="submit" 
                            className='w-full bg-slate-900 text-white py-4 rounded-2xl font-bold hover:bg-blue-600 shadow-xl shadow-slate-200 transition-all active:scale-[0.98] disabled:bg-slate-300 flex items-center justify-center gap-2'
                        >
                            {loading ? "Menyimpan..." : "Simpan FAQ"}
                        </button>
                    </div>
                </form>

                {/* --- LIST FAQ (KANAN) --- */}
                <div className='lg:col-span-7 space-y-4'>
                    <div className='flex items-center justify-between mb-4 px-2'>
                        <h2 className='text-lg font-bold text-slate-800 flex items-center gap-2'>
                            <List size={20} className='text-blue-600' /> Daftar Tanya Jawab
                        </h2>
                        <span className='px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-[10px] font-black uppercase'>
                            Total: {list.length}
                        </span>
                    </div>

                    <div className='grid gap-4 max-h-[70vh] overflow-y-auto pr-2 custom-scrollbar'>
                        {list.map((item, index) => (
                            <div key={index} className='group bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-md hover:border-blue-100 transition-all'>
                                <div className='flex justify-between items-start gap-4'>
                                    <div className='flex-1'>
                                        <div className='flex items-start gap-3'>
                                            <span className='mt-1 flex items-center justify-center w-6 h-6 bg-blue-50 text-blue-600 rounded-lg text-[10px] font-black shrink-0'>Q</span>
                                            <p className='font-bold text-slate-800 text-base leading-snug'>{item.question}</p>
                                        </div>
                                        <div className='flex items-start gap-3 mt-4'>
                                            <span className='mt-1 flex items-center justify-center w-6 h-6 bg-emerald-50 text-emerald-600 rounded-lg text-[10px] font-black shrink-0'>A</span>
                                            <p className='text-slate-500 text-sm leading-relaxed'>{item.answer}</p>
                                        </div>
                                    </div>
                                    
                                    <button 
                                        onClick={()=>deleteHandler(item.id)} 
                                        className='p-3 bg-red-50 text-red-400 rounded-xl hover:bg-red-500 hover:text-white transition-all opacity-0 group-hover:opacity-100'
                                        title="Hapus FAQ"
                                    >
                                        <Trash2 size={18} />
                                    </button>
                                </div>
                            </div>
                        ))}

                        {list.length === 0 && (
                            <div className='p-20 text-center bg-white rounded-[2.5rem] border-2 border-dashed border-slate-100 text-slate-400'>
                                <HelpCircle size={48} className='mx-auto mb-4 opacity-20' />
                                <p className='font-medium'>Belum ada FAQ yang dibuat.</p>
                                <p className='text-xs'>Isi form di samping untuk mulai menambah data.</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ManageFAQ