import React, { useContext, useEffect } from 'react'
import { AdminContext } from '../context/AdminContext'

const AllPetugas = () => {

    const { aToken, petugas, getAllPetugas } = useContext(AdminContext)

    // Panggil data saat halaman pertama kali dibuka
    useEffect(() => {
        if (aToken) {
            getAllPetugas()
        }
    }, [aToken])

    return (
        <div className='m-5 max-h-[90vh] overflow-y-scroll'>
            <h1 className='text-lg font-medium mb-4'>Daftar Petugas Pajak</h1>
            
            <div className='w-full flex flex-wrap gap-4 pt-5 gap-y-6'>
                {petugas.map((item, index) => (
                    <div className='border border-blue-200 rounded-xl overflow-hidden cursor-pointer group hover:bg-blue-50 transition-all max-w-56' key={index}>
                        <div className='bg-blue-50'>
                             <img className='w-full h-40 object-cover bg-blue-50 group-hover:bg-blue-600 transition-all duration-500' src={item.image} alt="" />
                        </div>
                       
                        <div className='p-4'>
                            <p className='text-neutral-800 text-lg font-medium'>{item.nama}</p>
                            <p className='text-zinc-600 text-sm'>{item.jabatan}</p>
                            <p className='text-xs text-gray-500 mt-1'>Wilayah: {item.wilayah_kerja}</p>
                            
                            <div className='mt-2 flex items-center gap-2 text-sm'>
                                <div className={`w-2 h-2 rounded-full ${item.tersedia ? 'bg-green-500' : 'bg-red-500'}`}></div>
                                <p>{item.tersedia ? 'Aktif' : 'Non-Aktif'}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default AllPetugas