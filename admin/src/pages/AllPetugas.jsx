import React, { useContext, useEffect } from 'react'
import { AdminContext } from '../context/AdminContext'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom' // Import useNavigate

const AllPetugas = () => {

    const { aToken, petugas, getAllPetugas, changeAvailability, backendUrl } = useContext(AdminContext)
    const navigate = useNavigate() // Hook navigasi

    // Fungsi Hapus Petugas
    const removePetugas = async (id) => {
        // Konfirmasi browser standar
        if (!window.confirm("Yakin ingin menghapus petugas ini?")) return;

        try {
            const { data } = await axios.post(backendUrl + '/api/admin/delete-petugas', { id }, { headers: { aToken } })
            if (data.success) {
                toast.success(data.message)
                getAllPetugas() // Refresh data setelah hapus
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
        <div className='m-5 max-h-[90vh] overflow-y-scroll pb-10'>
            
            <div className='flex justify-between items-center mb-6'>
                <h1 className='text-2xl font-bold text-gray-800'>Manajemen Petugas</h1>
                <a href="/add-petugas" className='bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition flex items-center gap-2'>
                    + Tambah Petugas
                </a>
            </div>

            <div className='flex flex-wrap gap-6'>
                {petugas.map((item, index) => (
                    <div className='bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 w-full sm:w-72 flex flex-col' key={index}>
                        
                        {/* Foto & Jabatan */}
                        <div className='relative h-56 bg-blue-50 group'>
                            <img className='w-full h-full object-cover object-top' src={item.image} alt="" />
                            <div className='absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3'>
                                <p className='text-white text-xs font-bold uppercase tracking-wider'>{item.jabatan}</p>
                            </div>
                        </div>
                        
                        {/* Info Lengkap Petugas */}
                        <div className='p-5 flex-1 flex flex-col gap-2'>
                            <div>
                                <h3 className='text-lg font-bold text-gray-900 leading-tight'>{item.nama}</h3>
                                <p className='text-xs text-gray-500 mt-1 flex items-center gap-1'>
                                    📍 {item.wilayah_kerja}
                                </p>
                            </div>

                            {/* Data Tambahan (NIP & Email) */}
                            <div className='bg-gray-50 p-3 rounded-lg text-xs text-gray-600 space-y-1.5 mt-2 border border-gray-100'>
                                <p className='flex items-center gap-2'>
                                    <span className='font-bold w-10'>NIP:</span> 
                                    <span className='truncate'>{item.nip}</span>
                                </p>
                                <p className='flex items-center gap-2'>
                                    <span className='font-bold w-10'>Email:</span> 
                                    <span className='truncate' title={item.email}>{item.email}</span>
                                </p>
                            </div>

                            {/* --- CONTROLS AREA --- */}
                            <div className='mt-auto pt-4 border-t border-gray-100 flex items-center justify-between gap-2'>
                                
                                {/* Toggle Availability */}
                                <div className='flex items-center gap-2'>
                                    <label className="relative inline-flex items-center cursor-pointer">
                                        <input 
                                            type="checkbox" 
                                            checked={item.tersedia} 
                                            onChange={() => changeAvailability(item._id)} 
                                            className="sr-only peer" 
                                        />
                                        <div className="w-8 h-4 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-3 after:w-3 after:transition-all peer-checked:bg-green-500"></div>
                                    </label>
                                </div>

                                {/* Action Buttons */}
                                <div className='flex gap-2'>
                                    {/* Tombol Edit */}
                                    <button 
                                        onClick={() => navigate(`/edit-petugas/${item._id}`)}
                                        className='w-8 h-8 flex items-center justify-center rounded-full bg-blue-50 text-blue-600 hover:bg-blue-600 hover:text-white transition-all'
                                        title="Edit Data"
                                    >
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>
                                    </button>

                                    {/* Tombol Hapus */}
                                    <button 
                                        onClick={() => removePetugas(item._id)}
                                        className='w-8 h-8 flex items-center justify-center rounded-full bg-red-50 text-red-500 hover:bg-red-500 hover:text-white transition-all'
                                        title="Hapus"
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
