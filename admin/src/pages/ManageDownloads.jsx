// components/ManageDownloads.jsx

import React, { useContext, useEffect, useState } from 'react'
import { AdminContext } from '../context/AdminContext'
import axios from 'axios'
import { toast } from 'react-toastify'

const ManageDownloads = () => {
    const { backendUrl, aToken } = useContext(AdminContext)
    
    // State Lokal (karena kita akan fetch langsung biar update real-time)
    const [list, setList] = useState([])
    const [title, setTitle] = useState('')
    const [category, setCategory] = useState('Formulir')
    const [file, setFile] = useState(false)

    // Fetch Data
    const fetchDownloads = async () => {
        try {
            const { data } = await axios.get(backendUrl + '/api/download/all')
            if (data.success) {
                setList(data.downloads)
            }
        } catch (error) {
            toast.error(error.message)
        }
    }

    // Submit Handler
    const onSubmitHandler = async (e) => {
        e.preventDefault()
        try {
            const formData = new FormData()
            formData.append('title', title)
            formData.append('category', category)
            formData.append('file', file)

            const { data } = await axios.post(backendUrl + '/api/download/add', formData, {
                headers: { aToken }
            })

            if (data.success) {
                toast.success(data.message)
                setTitle(''); setFile(false);
                fetchDownloads();
            } else {
                toast.error(data.message)
            }
        } catch (error) {
            toast.error(error.message)
        }
    }

    // Delete Handler
    const deleteHandler = async (id) => {
        if(!window.confirm("Hapus dokumen ini?")) return;
        try {
            const { data } = await axios.post(backendUrl + '/api/download/delete', { id }, { headers: { aToken } })
            if (data.success) {
                toast.success(data.message)
                fetchDownloads()
            }
        } catch (error) {
            toast.error(error.message)
        }
    }

    useEffect(() => {
        fetchDownloads()
    }, [])

    return (
        <div className='m-5'>
            <h1 className='text-2xl font-bold mb-6 text-gray-800'>Manajemen Dokumen & Unduhan</h1>

            {/* --- FORM UPLOAD --- */}
            <form onSubmit={onSubmitHandler} className='bg-white p-6 border rounded-xl shadow-sm max-w-4xl mb-10'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    
                    {/* Input Judul */}
                    <div>
                        <p className='text-sm font-medium mb-2'>Nama Dokumen</p>
                        <input onChange={(e)=>setTitle(e.target.value)} value={title} type="text" placeholder="Contoh: Formulir Pendaftaran NPWPD" className='w-full border p-2.5 rounded-lg focus:outline-blue-500' required />
                    </div>

                    {/* Input Kategori */}
                    <div>
                        <p className='text-sm font-medium mb-2'>Kategori</p>
                        <select onChange={(e)=>setCategory(e.target.value)} value={category} className='w-full border p-2.5 rounded-lg focus:outline-blue-500'>
                            <option value="Formulir">Formulir</option>
                            <option value="Peraturan">Peraturan & UU</option>
                            <option value="SOP">SOP / Panduan</option>
                            <option value="Lainnya">Lainnya</option>
                        </select>
                    </div>

                    {/* Input File */}
                    <div className='md:col-span-2'>
                        <p className='text-sm font-medium mb-2'>Upload File (PDF/Word/Excel)</p>
                        <label htmlFor="doc-upload" className='flex items-center justify-center w-full h-32 border-2 border-dashed border-blue-300 rounded-lg cursor-pointer bg-blue-50 hover:bg-blue-100 transition-colors'>
                            <div className='text-center'>
                                {file ? (
                                    <div className='flex items-center gap-2 text-blue-700 font-semibold'>
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                                        {file.name}
                                    </div>
                                ) : (
                                    <p className='text-gray-500'>Klik untuk pilih file <br/><span className='text-xs'>(Max 5MB)</span></p>
                                )}
                            </div>
                            <input onChange={(e)=>setFile(e.target.files[0])} type="file" id="doc-upload" accept=".pdf,.doc,.docx,.xls,.xlsx" hidden />
                        </label>
                    </div>
                </div>
                <button type="submit" className='mt-6 bg-blue-600 text-white px-8 py-2.5 rounded-lg font-bold hover:bg-blue-700 transition-all'>Upload Dokumen</button>
            </form>

            {/* --- LIST DOKUMEN --- */}
            <h2 className='text-lg font-semibold mb-4'>Daftar Dokumen Tersedia</h2>
            <div className='bg-white border rounded-xl overflow-hidden shadow-sm'>
                <div className='grid grid-cols-[0.5fr_3fr_1.5fr_1fr_1fr] bg-gray-100 p-4 text-sm font-bold text-gray-700 border-b'>
                    <p>#</p>
                    <p>Nama Dokumen</p>
                    <p>Kategori</p>
                    <p>Tanggal</p>
                    <p className='text-center'>Aksi</p>
                </div>
                
                {list.map((item, index) => (
                    <div key={index} className='grid grid-cols-[0.5fr_3fr_1.5fr_1fr_1fr] p-4 text-sm text-gray-600 border-b hover:bg-gray-50 items-center'>
                        <p>{index + 1}</p>
                        <p className='font-medium text-gray-800'>{item.title}</p>
                        <p><span className='bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs'>{item.category}</span></p>
                        <p>{new Date(item.date).toLocaleDateString()}</p>
                        <div className='flex justify-center gap-2'>
                            <a href={item.file} target="_blank" rel="noreferrer" className='text-blue-500 hover:text-blue-700 font-medium text-xs border border-blue-200 px-2 py-1 rounded'>Lihat</a>
                            <button onClick={()=>deleteHandler(item._id)} className='text-red-500 hover:text-red-700 font-medium text-xs border border-red-200 px-2 py-1 rounded'>Hapus</button>
                        </div>
                    </div>
                ))}
                {list.length === 0 && <p className='p-6 text-center text-gray-500'>Belum ada dokumen.</p>}
            </div>
        </div>
    )
}

export default ManageDownloads