import React, { useContext, useEffect, useState } from 'react'
import { AdminContext } from '../context/AdminContext'
import axios from 'axios'
import { toast } from 'react-toastify'

const ManageHeader = () => {
    const { backendUrl, aToken } = useContext(AdminContext)

    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')
    const [image, setImage] = useState(false)
    const [preview, setPreview] = useState('')

    const fetchContent = async () => {
        try {
            const { data } = await axios.get(`${backendUrl}/api/content/get`)
            if (data.success && data.content) {
                setTitle(data.content.headerTitle)
                setDesc(data.content.headerDesc)
                setPreview(data.content.headerImage)
            }
        } catch (error) {
            toast.error("Gagal mengambil data konten")
        }
    }

    const onSubmitHandler = async (e) => {
        e.preventDefault()
        try {
            const formData = new FormData()
            formData.append('title', title)
            formData.append('desc', desc)
            if (image) formData.append('image', image)

            const { data } = await axios.post(
                `${backendUrl}/api/content/update-header`, 
                formData, 
                { headers: { aToken } }
            )
            
            if (data.success) {
                toast.success(data.message)
                fetchContent()
                setImage(false)
            } else {
                toast.error(data.message)
            }
        } catch (error) {
            toast.error(error.response?.data?.message || error.message)
        }
    }

    useEffect(() => { fetchContent() }, [])

    return (
        <div className='m-6'>
            {/* Title Section */}
            <div className='mb-8'>
                <h1 className='text-2xl font-extrabold text-gray-800 tracking-tight'>Konfigurasi Landing Page</h1>
                <p className='text-sm text-gray-400 mt-1'>Sesuaikan teks utama dan gambar hero untuk halaman depan pengunjung.</p>
            </div>
            
            <div className='flex flex-col lg:flex-row gap-8'>
                {/* FORM SECTION */}
                <form onSubmit={onSubmitHandler} className='bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex-1 h-fit'>
                    <div className='space-y-6'>
                        
                        {/* INPUT GAMBAR */}
                        <div>
                            <p className='text-xs font-bold text-gray-500 uppercase tracking-widest mb-3 ml-1'>Hero Background Image</p>
                            <label htmlFor="header-img" className='cursor-pointer block relative h-64 bg-gray-50 rounded-2xl overflow-hidden border-2 border-dashed border-gray-200 hover:border-blue-400 transition-all group shadow-inner'>
                                {image ? (
                                    <img src={URL.createObjectURL(image)} className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-105' alt="New Preview" />
                                ) : preview ? (
                                    <img src={`${backendUrl}/uploads/images/${preview}`} className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-105' alt="Current Header" />
                                ) : (
                                    <div className='flex flex-col items-center justify-center h-full text-gray-400 gap-2'>
                                        <span className='text-4xl'>🏞️</span>
                                        <p className='text-sm font-medium'>Klik untuk unggah gambar baru</p>
                                    </div>
                                )}
                                
                                <div className='absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity'>
                                    <div className='bg-white/20 backdrop-blur-md px-5 py-2 rounded-full border border-white/30'>
                                        <p className='text-white text-xs font-bold uppercase tracking-wider'>Ganti Background</p>
                                    </div>
                                </div>
                            </label>
                            <input onChange={(e) => setImage(e.target.files[0])} type="file" id="header-img" accept="image/*" hidden />
                            <div className='flex justify-between mt-2 px-1'>
                                <p className='text-[10px] text-gray-400 italic font-medium'>* Rekomendasi: 1920x1080px (Lansekap)</p>
                                {image && <p className='text-[10px] text-blue-600 font-bold'>File siap diunggah: {image.name}</p>}
                            </div>
                        </div>

                        {/* INPUT TEXT */}
                        <div className='space-y-4'>
                            <div>
                                <p className='text-xs font-bold text-gray-500 uppercase tracking-widest mb-2 ml-1'>Headline Utama</p>
                                <input 
                                    value={title} 
                                    onChange={e=>setTitle(e.target.value)} 
                                    type="text" 
                                    className='w-full border border-gray-200 bg-gray-50 p-3.5 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 focus:bg-white outline-none transition-all text-sm font-semibold text-gray-700' 
                                    placeholder='Masukan judul besar...' 
                                    required 
                                />
                            </div>

                            <div>
                                <p className='text-xs font-bold text-gray-500 uppercase tracking-widest mb-2 ml-1'>Deskripsi Layanan</p>
                                <textarea 
                                    value={desc} 
                                    onChange={e=>setDesc(e.target.value)} 
                                    className='w-full border border-gray-200 bg-gray-50 p-3.5 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 focus:bg-white outline-none transition-all text-sm leading-relaxed text-gray-600 resize-none' 
                                    rows="5" 
                                    placeholder='Tuliskan deskripsi singkat mengenai layanan Bapenda...' 
                                    required 
                                />
                            </div>
                        </div>

                        <button type="submit" className='w-full bg-blue-600 text-white font-bold py-4 rounded-xl hover:bg-blue-700 shadow-lg shadow-blue-100 transition-all active:scale-[0.98] flex items-center justify-center gap-2'>
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            Simpan Konfigurasi
                        </button>
                    </div>
                </form>

                {/* LIVE PREVIEW SIMULATION (SIDEBAR) */}
                <div className='hidden xl:block w-80 space-y-4'>
                    <div className='bg-gray-800 p-6 rounded-2xl shadow-xl border border-gray-700'>
                        <p className='text-white text-xs font-bold uppercase tracking-widest mb-4 flex items-center gap-2'>
                            <span className='w-2 h-2 bg-green-500 rounded-full animate-pulse'></span>
                            Live Simulator
                        </p>
                        <div className='aspect-video rounded-lg overflow-hidden bg-gray-900 border border-gray-700 relative'>
                            {image ? (
                                <img src={URL.createObjectURL(image)} className='w-full h-full object-cover opacity-50' alt="Preview" />
                            ) : (
                                <img src={`${backendUrl}/uploads/images/${preview}`} className='w-full h-full object-cover opacity-50' alt="Current" />
                            )}
                            <div className='absolute inset-0 p-3 flex flex-col justify-center'>
                                <div className='h-2 w-10 bg-blue-500 mb-1 rounded-full'></div>
                                <p className='text-[8px] text-white font-bold line-clamp-1 uppercase'>{title || 'Judul Belum Diisi'}</p>
                                <p className='text-[6px] text-gray-300 line-clamp-2 mt-1'>{desc || 'Deskripsi belum diisi...'}</p>
                            </div>
                        </div>
                        <p className='text-[10px] text-gray-500 mt-4 leading-relaxed'>
                            Tampilan di atas adalah simulasi bagaimana pengunjung melihat header website Anda. Pastikan kontras teks dan gambar seimbang.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ManageHeader