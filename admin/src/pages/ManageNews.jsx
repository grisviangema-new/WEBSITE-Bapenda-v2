import React, { useContext, useEffect, useState } from 'react'
import { AdminContext } from '../context/AdminContext'
import axios from 'axios'
import { toast } from 'react-toastify'
import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css'; // Pastikan CSS juga diupdate pathnya

const ManageNews = () => {
    const { backendUrl, newsList, getNewsList, aToken } = useContext(AdminContext)
    
    const [title, setTitle] = useState('')
    const [category, setCategory] = useState('Kegiatan')
    const [newCategory, setNewCategory] = useState('')
    const [isCustomCategory, setIsCustomCategory] = useState(false)
    const [content, setContent] = useState('') // Ini akan menampung HTML dari editor
    const [image, setImage] = useState(false)

    // Konfigurasi Toolbar Editor
    const modules = {
        toolbar: [
            [{ 'header': [1, 2, 3, false] }],
            ['bold', 'italic', 'underline', 'strike'], 
            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
            [{ 'align': [] }],
            ['link', 'clean']
        ],
    };

    const existingCategories = [...new Set(newsList.map(item => item.category)), 'Kegiatan', 'Layanan', 'Pengumuman'];

    const onSubmitHandler = async (e) => {
        e.preventDefault()
        try {
            if (!image) return toast.error("Gambar berita wajib diunggah!")
            if (content.replace(/<(.|\n)*?>/g, '').trim().length === 0) return toast.error("Isi berita tidak boleh kosong!")

            const formData = new FormData()
            formData.append('title', title)
            formData.append('category', isCustomCategory ? newCategory : category)
            formData.append('content', content) // Mengirim string HTML
            formData.append('image', image)

            const { data } = await axios.post(`${backendUrl}/api/news/add`, formData, {
                headers: { aToken }
            })
            
            if (data.success) {
                toast.success(data.message)
                setTitle(''); setContent(''); setImage(false); setNewCategory('');
                setIsCustomCategory(false);
                getNewsList()
            }
        } catch (error) {
            toast.error(error.response?.data?.message || error.message)
        }
    }

    const deleteHandler = async (id) => {
        if (!window.confirm("Hapus berita ini?")) return;
        try {
            const { data } = await axios.post(`${backendUrl}/api/news/delete`, { id }, { headers: { aToken } })
            if (data.success) {
                toast.success("Berita Dihapus");
                getNewsList();
            }
        } catch (error) { toast.error(error.message) }
    }

    useEffect(() => { if (aToken) getNewsList() }, [aToken])

    return (
        <div className='m-6 pb-20'>
            <div className='mb-8'>
                <h1 className='text-3xl font-extrabold text-gray-800 tracking-tight'>Editor Berita Profesional</h1>
                <p className='text-gray-500'>Format berita Anda dengan alat editor di bawah ini.</p>
            </div>
            
            <form onSubmit={onSubmitHandler} className='bg-white p-8 rounded-2xl shadow-sm border border-gray-100 w-full mb-12'>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
                    
                    {/* Sisi Kiri: Upload */}
                    <div className='lg:col-span-1'>
                        <p className='text-xs font-bold text-gray-400 uppercase tracking-widest mb-3'>Banner Berita</p>
                        <label htmlFor="news-img" className='cursor-pointer block relative h-64 lg:h-80 bg-gray-50 rounded-2xl overflow-hidden border-2 border-dashed border-gray-200 hover:border-blue-400 transition-all'>
                            {image ? (
                                <img src={URL.createObjectURL(image)} className='w-full h-full object-cover' alt="Preview"/> 
                            ) : (
                                <div className='flex flex-col items-center justify-center h-full text-gray-400 gap-3'>
                                    <span className='text-5xl'>📰</span>
                                    <p className='text-sm font-medium'>Pilih Cover</p>
                                </div>
                            )}
                        </label>
                        <input onChange={(e) => setImage(e.target.files[0])} type="file" id="news-img" accept="image/*" hidden />
                    </div>

                    {/* Sisi Kanan: Editor */}
                    <div className='lg:col-span-2 space-y-6'>
                        <div>
                            <p className='text-xs font-bold text-gray-400 uppercase tracking-widest mb-2'>Judul Artikel</p>
                            <input value={title} onChange={e=>setTitle(e.target.value)} type="text" className='w-full border border-gray-200 bg-gray-50 p-4 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all text-lg font-bold' placeholder="Tuliskan judul berita..." required />
                        </div>

                        <div>
                            <div className='flex justify-between items-center mb-2'>
                                <p className='text-xs font-bold text-gray-400 uppercase tracking-widest'>Kategori</p>
                                <button type="button" onClick={() => setIsCustomCategory(!isCustomCategory)} className='text-[10px] font-bold text-blue-600 uppercase underline'>
                                    {isCustomCategory ? "Batal" : "Tambah Kategori Baru"}
                                </button>
                            </div>
                            {isCustomCategory ? (
                                <input value={newCategory} onChange={e=>setNewCategory(e.target.value)} type="text" className='w-full border border-blue-200 bg-blue-50 p-3 rounded-xl outline-none text-sm font-bold' placeholder="Nama kategori baru..." required />
                            ) : (
                                <select value={category} onChange={e=>setCategory(e.target.value)} className='w-full border border-gray-200 bg-gray-50 p-3 rounded-xl outline-none text-sm font-bold'>
                                    {existingCategories.map((cat, idx) => <option key={idx} value={cat}>{cat}</option>)}
                                </select>
                            )}
                        </div>

                        {/* RICH TEXT EDITOR */}
                        <div>
                            <p className='text-xs font-bold text-gray-400 uppercase tracking-widest mb-2'>Isi Berita (Format Teks)</p>
                            <div className='bg-gray-50 rounded-xl overflow-hidden border border-gray-200'>
                                <ReactQuill 
                                    theme="snow" 
                                    value={content} 
                                    onChange={setContent} 
                                    modules={modules}
                                    className='bg-white h-72 mb-12 lg:mb-10'
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className='mt-12 flex justify-end'>
                    <button className='bg-blue-600 text-white font-bold px-12 py-4 rounded-xl hover:bg-blue-700 shadow-lg transition-all active:scale-95'>
                        Publikasikan Berita
                    </button>
                </div>
            </form>

            {/* Riwayat Berita tetap di bawah */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {newsList.map((item, index) => (
                    <div key={index} className='bg-white border rounded-2xl overflow-hidden shadow-sm flex flex-col'>
                        <img src={`${backendUrl}/uploads/images/${item.image}`} className='h-40 w-full object-cover' alt="" />
                        <div className='p-4'>
                            <h3 className='font-bold line-clamp-1'>{item.title}</h3>
                            {/* Menampilkan ringkasan teks tanpa tag HTML */}
                            <p className='text-xs text-gray-500 mt-2 line-clamp-2' dangerouslySetInnerHTML={{ __html: item.content.substring(0, 100) }}></p>
                            <button onClick={()=>deleteHandler(item.id)} className='mt-4 text-xs text-red-500 font-bold'>Hapus</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ManageNews