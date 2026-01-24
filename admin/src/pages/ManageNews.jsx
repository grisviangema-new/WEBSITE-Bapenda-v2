import React, { useContext, useEffect, useState } from 'react'
import { AdminContext } from '../context/AdminContext'
import axios from 'axios'
import { toast } from 'react-toastify'

const ManageNews = () => {
    const { backendUrl, newsList, getNewsList } = useContext(AdminContext)
    
    const [title, setTitle] = useState('')
    const [category, setCategory] = useState('Kegiatan')
    const [content, setContent] = useState('')
    const [image, setImage] = useState(false) // <--- State untuk gambar

    const onSubmitHandler = async (e) => {
        e.preventDefault()
        try {
            // Gunakan FormData untuk kirim text + file
            const formData = new FormData()
            formData.append('title', title)
            formData.append('category', category)
            formData.append('content', content)
            if (image) formData.append('image', image) // Masukkan gambar

            const { data } = await axios.post(backendUrl + '/api/news/add', formData)
            
            if (data.success) {
                toast.success(data.message)
                // Reset Form
                setTitle(''); setContent(''); setImage(false);
                getNewsList()
            } else {
                toast.error(data.message)
            }
        } catch (error) {
            toast.error(error.message)
        }
    }

    // ... (deleteHandler & useEffect TETAP SAMA) ...
    const deleteHandler = async (id) => {
        const { data } = await axios.post(backendUrl + '/api/news/delete', { id })
        if(data.success) {
            toast.success("Berita Dihapus");
            getNewsList();
        }
    }
    useEffect(()=>{ getNewsList() },[])


    return (
        <div className='m-5'>
            <h1 className='text-xl font-medium mb-4'>Kelola Berita Bapenda</h1>
            
            <form onSubmit={onSubmitHandler} className='bg-white p-5 border rounded-lg shadow-sm max-w-3xl mb-8'>
                
                {/* --- INPUT GAMBAR --- */}
                <div className='mb-4'>
                    <p className='text-sm mb-2'>Upload Gambar Utama</p>
                    <label htmlFor="news-img" className='cursor-pointer flex items-center gap-3 bg-gray-50 p-3 rounded border border-dashed border-gray-300 hover:bg-gray-100'>
                        {/* Preview Gambar */}
                        <div className='w-16 h-16 bg-gray-200 rounded flex items-center justify-center overflow-hidden'>
                            {image 
                             ? <img src={URL.createObjectURL(image)} className='w-full h-full object-cover'/> 
                             : <span className='text-2xl text-gray-400'>📷</span>
                            }
                        </div>
                        <p className='text-gray-500 text-sm'>
                            {image ? image.name : "Klik untuk pilih gambar (Max 2MB)"}
                        </p>
                    </label>
                    <input onChange={(e)=>setImage(e.target.files[0])} type="file" id="news-img" hidden />
                </div>
                {/* -------------------- */}

                <div className='flex gap-4 mb-3'>
                    <div className='flex-1'>
                        <p className='text-sm mb-1'>Judul Berita</p>
                        <input value={title} onChange={e=>setTitle(e.target.value)} type="text" className='w-full border p-2 rounded' required />
                    </div>
                    <div className='w-1/3'>
                        <p className='text-sm mb-1'>Kategori</p>
                        <select value={category} onChange={e=>setCategory(e.target.value)} className='w-full border p-2 rounded'>
                            <option>Kegiatan</option>
                            <option>Layanan</option>
                            <option>Pengumuman</option>
                        </select>
                    </div>
                </div>
                
                <div className='mb-3'>
                    <p className='text-sm mb-1'>Isi Berita</p>
                    <textarea value={content} onChange={e=>setContent(e.target.value)} className='w-full border p-2 rounded' rows="5" required />
                </div>
                
                <button className='bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700'>Posting Berita</button>
            </form>

            <div className='grid gap-4'>
                {newsList.map((item, index)=>(
                    <div key={index} className='bg-white border rounded p-4 flex gap-4'>
                        {/* Tampilkan Thumbnail Kecil di List Admin */}
                        <div className='w-20 h-20 bg-gray-100 rounded overflow-hidden flex-shrink-0'>
                            {item.image 
                                ? <img src={item.image} className='w-full h-full object-cover' />
                                : <div className='w-full h-full flex items-center justify-center text-gray-400'>No Img</div>
                            }
                        </div>

                        <div className='flex-1'>
                            <div className='flex justify-between items-start'>
                                <div>
                                    <span className='text-xs font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded'>{item.category}</span>
                                    <h3 className='font-bold text-lg mt-1'>{item.title}</h3>
                                    <p className='text-xs text-gray-400'>{new Date(item.date).toLocaleDateString()}</p>
                                </div>
                                <button onClick={()=>deleteHandler(item._id)} className='text-red-500 hover:bg-red-50 px-3 py-1 rounded border border-red-200 text-sm'>Hapus</button>
                            </div>
                            <p className='text-gray-600 text-sm mt-2 line-clamp-2'>{item.content}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ManageNews