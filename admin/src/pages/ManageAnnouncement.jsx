import React, { useContext, useEffect, useState } from 'react'
import { AdminContext } from '../context/AdminContext'
import axios from 'axios'
import { toast } from 'react-toastify'

const ManageAnnouncement = () => {
    const { backendUrl, announcements, getAnnouncements } = useContext(AdminContext)
    
    // State Form
    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')
    const [image, setImage] = useState('📢')
    const [color, setColor] = useState('bg-blue-600')

    const onSubmitHandler = async (e) => {
        e.preventDefault()
        try {
            const { data } = await axios.post(backendUrl + '/api/announcement/add', { title, desc, image, color })
            if (data.success) {
                toast.success(data.message)
                setTitle(''); setDesc(''); 
                getAnnouncements() // Refresh list
            } else {
                toast.error(data.message)
            }
        } catch (error) {
            toast.error(error.message)
        }
    }

    const deleteHandler = async (id) => {
        try {
            const { data } = await axios.post(backendUrl + '/api/announcement/delete', { id })
            if(data.success) {
                toast.success("Dihapus");
                getAnnouncements();
            }
        } catch (error) {
            toast.error(error.message)
        }
    }

    useEffect(()=>{
        getAnnouncements()
    },[])

    return (
        <div className='m-5'>
            <h1 className='text-xl font-medium mb-4'>Kelola Pengumuman Popup</h1>
            
            {/* FORM INPUT */}
            <form onSubmit={onSubmitHandler} className='bg-white p-5 border rounded-lg shadow-sm max-w-2xl mb-8'>
                <div className='mb-3'>
                    <p className='text-sm mb-1'>Judul Pengumuman</p>
                    <input value={title} onChange={e=>setTitle(e.target.value)} type="text" className='w-full border p-2 rounded' required />
                </div>
                <div className='mb-3'>
                    <p className='text-sm mb-1'>Isi Pesan</p>
                    <textarea value={desc} onChange={e=>setDesc(e.target.value)} className='w-full border p-2 rounded' rows="3" required />
                </div>
                <div className='flex gap-4 mb-3'>
                    <div className='flex-1'>
                        <p className='text-sm mb-1'>Emoji / Icon</p>
                        <select value={image} onChange={e=>setImage(e.target.value)} className='w-full border p-2 rounded'>
                            <option value="📢">📢 Toa</option>
                            <option value="🎉">🎉 Pesta</option>
                            <option value="⚠️">⚠️ Peringatan</option>
                            <option value="🚗">🚗 Mobil</option>
                        </select>
                    </div>
                    <div className='flex-1'>
                        <p className='text-sm mb-1'>Warna Header</p>
                        <select value={color} onChange={e=>setColor(e.target.value)} className='w-full border p-2 rounded'>
                            <option value="bg-blue-600">Biru (Info)</option>
                            <option value="bg-green-600">Hijau (Sukses)</option>
                            <option value="bg-red-500">Merah (Penting)</option>
                        </select>
                    </div>
                </div>
                <button className='bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700'>Tambah Pengumuman</button>
            </form>

            {/* LIST PENGUMUMAN */}
            <div className='grid gap-4'>
                {announcements.map((item, index)=>(
                    <div key={index} className='bg-white border rounded p-4 flex justify-between items-center'>
                        <div className='flex items-center gap-4'>
                            <div className={`w-10 h-10 ${item.color} rounded-full flex items-center justify-center text-white`}>{item.image}</div>
                            <div>
                                <p className='font-medium'>{item.title}</p>
                                <p className='text-sm text-gray-500'>{item.desc}</p>
                            </div>
                        </div>
                        <button onClick={()=>deleteHandler(item._id)} className='text-red-500 text-sm border border-red-200 px-3 py-1 rounded hover:bg-red-50'>Hapus</button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ManageAnnouncement