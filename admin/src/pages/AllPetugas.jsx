import React, { useContext, useEffect } from 'react'
import { AdminContext } from '../context/AdminContext'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

const AllPetugas = () => {

    const { aToken, petugas, getAllPetugas, changeAvailability, backendUrl } = useContext(AdminContext)
    const navigate = useNavigate()

    const removePetugas = async (id) => {
        if (!window.confirm("Yakin ingin menghapus petugas ini secara permanen?")) return;

        try {
            const { data } = await axios.post(`${backendUrl}/api/admin/delete-petugas`, { id }, { headers: { aToken } })
            if (data.success) {
                toast.success(data.message)
                getAllPetugas() 
            } else {
                toast.error(data.message)
            }
        } catch (error) {
            toast.error(error.message)
        }
    }

    useEffect(() => {
        if (aToken) {
            getAllPetugas()
        }
    }, [aToken])

    return (
        <div className='m-6 pb-10'>
            
            {/* Header Section */}
            <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8 bg-white p-6 rounded-2xl shadow-sm border border-gray-100'>
                <div>
                    <h1 className='text-2xl font-extrabold text-gray-800 tracking-tight'>Manajemen Petugas</h1>
                    <p className='text-sm text-gray-400 mt-1'>Kelola data profil dan ketersediaan petugas lapangan.</p>
                </div>
                <button 
                    onClick={() => navigate('/add-petugas')} 
                    className='bg-blue-600 text-white px-6 py-3 rounded-xl text-sm font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-100 flex items-center gap-2 active:scale-95'
                >
                    <span className='text-lg'>+</span> Tambah Petugas Baru
                </button>
            </div>

            {/* Cards Grid */}
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
                {petugas.map((item, index) => (
                    <div className='bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col group' key={index}>
                        
                        {/* Foto & Status Badge */}
                        <div className='relative h-60 bg-gray-50 overflow-hidden'>
                            <img 
                                className='w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105' 
                                src={`${backendUrl}/uploads/images/${item.image}`} 
                                alt={item.nama} 
                                onError={(e) => { e.target.src = "https://placehold.co/400x600?text=No+Photo" }} 
                            />
                            
                            {/* Status Availability Badge */}
                            <div className='absolute top-3 left-3'>
                                <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-sm ${item.tersedia ? 'bg-green-500 text-white' : 'bg-gray-500 text-white'}`}>
                                    {item.tersedia ? '● Tersedia' : '● Sibuk'}
                                </span>
                            </div>

                            <div className='absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4'>
                                <p className='text-white text-[10px] font-bold uppercase tracking-widest opacity-80'>{item.jabatan}</p>
                                <h3 className='text-white text-lg font-bold leading-tight mt-1'>{item.nama}</h3>
                            </div>
                        </div>
                        
                        {/* Info Content */}
                        <div className='p-5 flex-1 flex flex-col gap-4'>
                            <div className='space-y-2'>
                                <div className='flex items-center gap-3 text-gray-500'>
                                    <span className='text-base'>📍</span>
                                    <p className='text-xs font-medium'>{item.wilayah_kerja}</p>
                                </div>
                                <div className='flex items-center gap-3 text-gray-500'>
                                    <span className='text-base'>🆔</span>
                                    <p className='text-xs font-mono'>{item.nip}</p>
                                </div>
                                <div className='flex items-center gap-3 text-gray-500'>
                                    <span className='text-base'>✉️</span>
                                    <p className='text-xs truncate' title={item.email}>{item.email}</p>
                                </div>
                            </div>

                            {/* Action Area */}
                            <div className='mt-auto pt-4 border-t border-gray-50 flex items-center justify-between'>
                                
                                {/* Toggle Switch */}
                                <div className='flex items-center gap-2'>
                                    <span className='text-[10px] font-bold text-gray-400 uppercase'>Status</span>
                                    <label className="relative inline-flex items-center cursor-pointer">
                                        <input 
                                            type="checkbox" 
                                            checked={item.tersedia} 
                                            onChange={() => changeAvailability(item.id)} 
                                            className="sr-only peer" 
                                        />
                                        <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-green-500"></div>
                                    </label>
                                </div>

                                {/* Edit & Delete Buttons */}
                                <div className='flex gap-2'>
                                    <button 
                                        onClick={() => navigate(`/edit-petugas/${item.id}`)}
                                        className='p-2 rounded-lg bg-blue-50 text-blue-600 hover:bg-blue-600 hover:text-white transition-all shadow-sm'
                                        title="Edit Profile"
                                    >
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>
                                    </button>

                                    <button 
                                        onClick={() => removePetugas(item.id)}
                                        className='p-2 rounded-lg bg-red-50 text-red-500 hover:bg-red-500 hover:text-white transition-all shadow-sm'
                                        title="Hapus Petugas"
                                    >
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                                    </button>
                                </div>

                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default AllPetugas