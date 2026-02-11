import React, { useContext, useEffect, useState } from 'react'
import { AdminContext } from '../context/AdminContext'
import axios from 'axios'
import { toast } from 'react-toastify'

const ManageHeader = () => {
    const { backendUrl, aToken } = useContext(AdminContext)

    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')
    const [image, setImage] = useState(false) // File baru
    const [preview, setPreview] = useState('') // Preview URL lama/baru

    // Ambil data saat ini
    const fetchContent = async () => {
        try {
            const { data } = await axios.get(backendUrl + '/api/content/get')
            if (data.success && data.content) {
                setTitle(data.content.headerTitle)
                setDesc(data.content.headerDesc)
                setPreview(data.content.headerImage)
            }
        } catch (error) {
            toast.error(error.message)
        }
    }

    const onSubmitHandler = async (e) => {
        e.preventDefault()
        try {
            const formData = new FormData()
            formData.append('title', title)
            formData.append('desc', desc)
            if (image) formData.append('image', image)

            const { data } = await axios.post(backendUrl + '/api/content/update-header', formData, { headers: { aToken } })
            
            if (data.success) {
                toast.success(data.message)
                fetchContent() // Refresh data
                setImage(false) // Reset input file
            } else {
                toast.error(data.message)
            }
        } catch (error) {
            toast.error(error.message)
        }
    }

    useEffect(() => { fetchContent() }, [])

    return (
        <div className='m-5'>
            <h1 className='text-xl font-medium mb-4'>Edit Tampilan Header Client</h1>
            
            <form onSubmit={onSubmitHandler} className='bg-white p-6 border rounded-lg shadow-sm max-w-2xl'>
                
                {/* PREVIEW GAMBAR */}
                <div className='mb-4'>
                    <p className='text-sm mb-2'>Gambar Header (Hero Image)</p>
                    <label htmlFor="header-img" className='cursor-pointer block relative h-48 bg-gray-100 rounded-lg overflow-hidden border-2 border-dashed border-gray-300 hover:border-blue-500 transition-all group'>
                        {image ? (
                            <img src={URL.createObjectURL(image)} className='w-full h-full object-cover' />
                        ) : preview ? (
                            <img src={preview} className='w-full h-full object-cover' />
                        ) : (
                            <div className='flex items-center justify-center h-full text-gray-400'>Upload Gambar</div>
                        )}
                        {/* Overlay Text */}
                        <div className='absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity'>
                            <p className='text-white font-medium'>Klik untuk Ganti</p>
                        </div>
                    </label>
                    <input onChange={(e) => setImage(e.target.files[0])} type="file" id="header-img" hidden />
                </div>

                {/* INPUT TEXT */}
                <div className='mb-4'>
                    <p className='text-sm mb-1'>Judul Utama (Headline)</p>
                    <input value={title} onChange={e=>setTitle(e.target.value)} type="text" className='w-full border p-2 rounded focus:outline-blue-500' placeholder='Contoh: Layanan Pajak Digital' required />
                </div>

                <div className='mb-6'>
                    <p className='text-sm mb-1'>Deskripsi Sub-Judul</p>
                    <textarea value={desc} onChange={e=>setDesc(e.target.value)} className='w-full border p-2 rounded focus:outline-blue-500' rows="3" placeholder='Deskripsi singkat...' required />
                </div>

                <button className='bg-blue-600 text-white px-8 py-2 rounded hover:bg-blue-700 w-full md:w-auto'>Simpan Perubahan</button>
            </form>
        </div>
    )
}

export default ManageHeader