import React, { useContext, useEffect, useState } from 'react'
import { AdminContext } from '../context/AdminContext'
import axios from 'axios'
import { toast } from 'react-toastify'

const ManageAnnouncement = () => {
    const { backendUrl, announcements, getAnnouncements, aToken } = useContext(AdminContext)
     
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [link, setLink] = useState('')
    const [image, setImage] = useState(false)

    // --- FUNCTION SUBMIT (Upload ke Local Server) ---
    const onSubmitHandler = async (e) => {
        e.preventDefault()
        try {
            if (!image) return toast.error("Gambar Wajib Diupload!")

            const formData = new FormData()
            formData.append('title', title)
            formData.append('description', description)
            formData.append('link', link)
            formData.append('image', image) // Field name sesuai dengan backend upload.single('image')

            const { data } = await axios.post(`${backendUrl}/api/announcement/add`, formData, {
                headers: { aToken } 
            })

            if (data.success) {
                toast.success(data.message)
                setTitle(''); setDescription(''); setLink(''); setImage(false);
                getAnnouncements() // Refresh list otomatis
            } else {
                toast.error(data.message)
            }
        } catch (error) {
            toast.error(error.response?.data?.message || error.message)
        }
    }

    // --- FUNCTION DELETE (MySQL ID) ---
    const deleteHandler = async (id) => {
        if(!window.confirm("Yakin ingin menghapus pengumuman ini?")) return;

        try {
            // Perbaikan: Gunakan properti 'id' (integer) sesuai database MySQL
            const { data } = await axios.post(`${backendUrl}/api/announcement/delete`, { id }, {
                headers: { aToken }
            })
            if(data.success) {
                toast.success("Pengumuman Dihapus");
                getAnnouncements(); 
            } else {
                toast.error(data.message)
            }
        } catch (error) {
            toast.error(error.message)
        }
    }

    useEffect(()=>{
        if(aToken) {
            getAnnouncements()
        }
    },[aToken])

    return (
        <div className='m-5 w-full'>
            <p className='mb-3 text-lg font-bold text-gray-700'>Manajemen Pengumuman</p>

            {/* --- FORM INPUT --- */}
            <form onSubmit={onSubmitHandler} className='bg-white px-8 py-8 border rounded-xl w-full max-w-4xl shadow-sm mb-10'>
                <div className='flex items-center gap-4 mb-8'>
                    <label htmlFor="doc-img" className='cursor-pointer'>
                        <div className='w-32 h-32 bg-gray-50 rounded-lg flex items-center justify-center border-2 border-dashed border-blue-200 hover:border-blue-400 overflow-hidden'>
                            {image ? (
                                <img className='w-full h-full object-cover' src={URL.createObjectURL(image)} alt="Preview" />
                            ) : (
                                <span className='text-3xl'>🖼️</span>
                            )}
                        </div>
                    </label>
                    <input onChange={(e) => setImage(e.target.files[0])} type="file" id="doc-img" accept="image/*" hidden />
                    <div>
                        <p className='font-medium text-gray-700'>Banner Pengumuman</p>
                        <p className='text-xs text-gray-400'>Format: JPG, PNG (Rekomendasi 16:9)</p>
                    </div>
                </div>

                <div className='flex flex-col gap-4 text-gray-600'>
                    <div className='flex flex-col gap-1'>
                        <p className='text-sm font-semibold'>Judul Pengumuman</p>
                        <input onChange={(e) => setTitle(e.target.value)} value={title} className='border rounded-md px-3 py-2 outline-none focus:ring-1 focus:ring-blue-500' type="text" placeholder="Contoh: Pemutihan Pajak 2026" required />
                    </div>
                    <div className='flex flex-col gap-1'>
                        <p className='text-sm font-semibold'>Deskripsi Singkat</p>
                        <textarea onChange={(e) => setDescription(e.target.value)} value={description} className='border rounded-md px-3 py-2 h-24 outline-none focus:ring-1 focus:ring-blue-500' placeholder="Detail pengumuman..." required />
                    </div>
                    <div className='flex flex-col gap-1'>
                        <p className='text-sm font-semibold'>Link Tujuan (Opsional)</p>
                        <input onChange={(e) => setLink(e.target.value)} value={link} className='border rounded-md px-3 py-2 outline-none focus:ring-1 focus:ring-blue-500' type="text" placeholder="Contoh: /berita/detail" />
                    </div>
                    <button type='submit' className='bg-blue-600 text-white w-fit px-12 py-3 mt-4 rounded-full font-bold hover:bg-blue-700 transition-all shadow-md active:scale-95'>
                        Terbitkan Pengumuman
                    </button>
                </div>
            </form>

            <hr className="my-10 border-gray-200" />

            {/* --- DAFTAR PENGUMUMAN --- */}
            <p className='mb-3 text-lg font-bold text-gray-700'>Daftar Pengumuman Aktif</p>
            
            <div className='bg-white border rounded-xl w-full max-w-4xl overflow-hidden shadow-sm'>
                <div className='hidden sm:grid grid-cols-[0.5fr_1.5fr_3fr_1fr_1fr] gap-4 py-4 px-6 border-b bg-gray-50 text-xs font-bold uppercase tracking-wider text-gray-500'>
                    <p>#</p>
                    <p>Banner</p>
                    <p>Konten</p>
                    <p>Link</p>
                    <p className='text-center'>Aksi</p>
                </div>

                {announcements && announcements.map((item, index) => (
                    <div key={index} className='flex flex-col sm:grid sm:grid-cols-[0.5fr_1.5fr_3fr_1fr_1fr] gap-4 py-4 px-6 border-b hover:bg-blue-50/30 items-center text-sm text-gray-600 transition-colors'>
                        
                        <p className='hidden sm:block font-medium'>{index + 1}</p>

                        <div className='w-full sm:w-28 h-16 bg-gray-100 rounded-md overflow-hidden border border-gray-200'>
                            {/* PERBAIKAN: Path gambar lokal */}
                            <img 
                                src={`${backendUrl}/uploads/images/${item.image}`} 
                                alt="" 
                                className='w-full h-full object-cover' 
                                onError={(e) => { e.target.src = "https://placehold.co/600x400?text=No+Image" }}
                            />
                        </div>

                        <div>
                            <p className='text-gray-900 font-bold'>{item.title}</p>
                            <p className='text-xs text-gray-400 line-clamp-2 mt-1'>{item.description}</p>
                        </div>

                        <p className='text-xs text-blue-500 font-medium truncate'>{item.link || '-'}</p>

                        <div className='flex justify-center'>
                            <button 
                                // PERBAIKAN: Menggunakan item.id (MySQL)
                                onClick={() => deleteHandler(item.id)} 
                                className='bg-red-50 text-red-600 px-4 py-1.5 rounded-lg text-xs font-bold hover:bg-red-600 hover:text-white transition-all border border-red-100'
                            >
                                Hapus
                            </button>
                        </div>
                    </div>
                ))}

                {announcements.length === 0 && (
                    <div className='p-12 text-center text-gray-400 italic'>
                        Belum ada pengumuman yang diterbitkan.
                    </div>
                )}
            </div>
        </div>
    )
}

export default ManageAnnouncement