import React, { useContext, useEffect, useState } from 'react'
import { AdminContext } from '../context/AdminContext'
import axios from 'axios'
import { toast } from 'react-toastify'
import  assets  from '../assets/react.svg' // Pastikan path ini benar

const ManageAnnouncement = () => {
    // Pastikan 'announcements' diambil dari context
    const { backendUrl, announcements, getAnnouncements, aToken } = useContext(AdminContext)
    
    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')
    const [link, setLink] = useState('')
    const [image, setImage] = useState(false)

    // --- FUNCTION SUBMIT (Upload) ---
    const onSubmitHandler = async (e) => {
        e.preventDefault()
        try {
            const formData = new FormData()
            formData.append('title', title)
            formData.append('desc', desc)
            formData.append('link', link)
            formData.append('image', image)

            const { data } = await axios.post(backendUrl + '/api/announcement/add', formData, {
                headers: { aToken } 
            })

            if (data.success) {
                toast.success(data.message)
                setTitle(''); setDesc(''); setLink(''); setImage(false);
                getAnnouncements() // Refresh list otomatis
            } else {
                toast.error(data.message)
            }
        } catch (error) {
            toast.error(error.message)
        }
    }

    // --- FUNCTION DELETE ---
    const deleteHandler = async (id) => {
        // Konfirmasi sebelum hapus (Opsional tapi disarankan)
        if(!window.confirm("Yakin ingin menghapus pengumuman ini?")) return;

        try {
            // Perbaikan: Biasanya delete pakai method POST atau DELETE, sesuaikan route backend
            const { data } = await axios.post(backendUrl + '/api/announcement/delete', { id }, {
                headers: { aToken }
            })
            if(data.success) {
                toast.success("Pengumuman Dihapus");
                getAnnouncements(); // Refresh list
            } else {
                toast.error(data.message)
            }
        } catch (error) {
            toast.error(error.message)
        }
    }

    // Load data saat halaman dibuka
    useEffect(()=>{
        if(aToken) {
            getAnnouncements()
        }
    },[aToken])

    return (
        <div className='m-5 w-full'>
            
            {/* --- BAGIAN 1: FORM INPUT --- */}
            <p className='mb-3 text-lg font-medium'>Tambah Pengumuman Baru</p>

            <form onSubmit={onSubmitHandler} className='bg-white px-8 py-8 border rounded w-full max-w-4xl shadow-md mb-10'>
                <div className='flex items-center gap-4 mb-8'>
                    <label htmlFor="doc-img">
                        <img 
                            className='w-32 h-32 bg-gray-100 rounded-lg object-cover cursor-pointer border-2 border-dashed border-blue-300 hover:border-blue-500 transition' 
                            src={image ? URL.createObjectURL(image) : assets.upload_area} 
                            alt="" 
                        />
                    </label>
                    <input onChange={(e) => setImage(e.target.files[0])} type="file" id="doc-img" hidden />
                    <p className='text-gray-500 text-sm'>Klik kotak untuk <br/> upload banner pengumuman</p>
                </div>

                <div className='flex flex-col gap-4 text-gray-600'>
                    <div className='flex flex-col gap-1'>
                        <p>Judul Pengumuman</p>
                        <input onChange={(e) => setTitle(e.target.value)} value={title} className='border rounded px-3 py-2 focus:outline-blue-500' type="text" placeholder="Contoh: Pemutihan Pajak 2026" required />
                    </div>
                    <div className='flex flex-col gap-1'>
                        <p>Deskripsi</p>
                        <textarea onChange={(e) => setDesc(e.target.value)} value={desc} className='border rounded px-3 py-2 h-32 focus:outline-blue-500' placeholder="Detail pengumuman..." required />
                    </div>
                    <div className='flex flex-col gap-1'>
                        <p>Link Tujuan (Opsional)</p>
                        <input onChange={(e) => setLink(e.target.value)} value={link} className='border rounded px-3 py-2 focus:outline-blue-500' type="text" placeholder="Contoh: /berita/detail" />
                    </div>
                    <button type='submit' className='bg-blue-600 text-white px-10 py-3 mt-4 rounded-full font-bold hover:bg-blue-700 transition'>Terbitkan</button>
                </div>
            </form>

            <hr className="my-10 border-gray-300" />

            {/* --- BAGIAN 2: DAFTAR PENGUMUMAN (YANG HILANG SEBELUMNYA) --- */}
            <p className='mb-3 text-lg font-medium'>Daftar Pengumuman Aktif</p>
            
            <div className='bg-white border rounded-xl w-full max-w-4xl overflow-hidden'>
                {/* Header Tabel */}
                <div className='hidden sm:grid grid-cols-[0.5fr_1fr_2fr_1fr_0.5fr] gap-4 py-3 px-6 border-b bg-gray-50 text-sm font-semibold text-gray-700'>
                    <p>#</p>
                    <p>Gambar</p>
                    <p>Judul & Deskripsi</p>
                    <p>Link</p>
                    <p className='text-center'>Aksi</p>
                </div>

                {/* Looping Data */}
                {announcements && announcements.map((item, index) => (
                    <div key={index} className='flex flex-col sm:grid sm:grid-cols-[0.5fr_1fr_2fr_1fr_0.5fr] gap-4 py-4 px-6 border-b hover:bg-gray-50 items-center text-gray-600'>
                        
                        {/* No */}
                        <p className='hidden sm:block'>{index + 1}</p>

                        {/* Gambar */}
                        <div className='w-full sm:w-24 h-16 bg-gray-100 rounded overflow-hidden'>
                            <img src={item.image} alt="" className='w-full h-full object-cover' />
                        </div>

                        {/* Judul & Desc */}
                        <div>
                            <p className='text-gray-900 font-semibold'>{item.title}</p>
                            <p className='text-xs text-gray-500 line-clamp-2'>{item.desc}</p>
                        </div>

                        {/* Link */}
                        <p className='text-xs text-blue-500 truncate'>{item.link || '-'}</p>

                        {/* Tombol Hapus */}
                        <div className='flex justify-center'>
                            <button 
                                onClick={() => deleteHandler(item._id)} 
                                className='bg-red-50 text-red-600 px-3 py-1 rounded-full text-xs font-semibold hover:bg-red-600 hover:text-white transition'
                            >
                                Hapus
                            </button>
                        </div>
                    </div>
                ))}

                {/* Jika Data Kosong */}
                {announcements.length === 0 && (
                    <div className='p-10 text-center text-gray-500'>
                        Belum ada pengumuman yang dibuat.
                    </div>
                )}
            </div>
        </div>
    )
}

export default ManageAnnouncement