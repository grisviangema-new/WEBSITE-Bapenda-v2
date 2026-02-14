import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const TopOfficers = () => {
    
    const navigate = useNavigate()
    const { petugas } = useContext(AppContext)

    return (
        <div className='py-16 px-4 md:px-10 bg-white' id='officers'>
            <div className='max-w-7xl mx-auto'>
                
                {/* --- HEADER SECTION --- */}
                <div className='text-center mb-12'>
                    <h1 className='text-3xl md:text-4xl font-bold text-gray-900'>Petugas Resmi Kami</h1>
                    <p className='mt-3 text-gray-500 max-w-2xl mx-auto'>
                        Pastikan Anda dilayani oleh petugas yang terdaftar secara resmi di sistem Bapenda untuk menjamin keamanan transaksi Anda.
                    </p>
                    <div className='w-24 h-1 bg-blue-600 mx-auto mt-5 rounded-full'></div>
                </div>
                
                {/* --- EMPTY STATE (Jika data kosong) --- */}
                {petugas.length === 0 ? (
                    <div className='text-center py-20 bg-white rounded-xl shadow-sm'>
                        <p className='text-gray-400'>Data petugas belum tersedia saat ini.</p>
                    </div>
                ) : (
                    /* --- GRID PETUGAS --- */
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6'>
                        
                        {/* Tampilkan 10 Petugas Pertama */}
                        {petugas.slice(0, 10).map((item, index) => (
                            <div 
                                key={index}
                                onClick={() => {
                                    navigate(`/appointment/${item._id}`);
                                    window.scrollTo(0, 0);
                                }} 
                                className='group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-gray-100 cursor-pointer transition-all duration-300 transform hover:-translate-y-2'
                            >
                                {/* Foto Profil dengan Efek Zoom */}
                                <div className='relative h-64 overflow-hidden bg-blue-50'>
                                    <img 
                                        className='w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500' 
                                        src={item.image} 
                                        alt={item.nama} 
                                    />
                                    
                                    {/* Badge Status (Floating) */}
                                    <div className='absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-green-600 flex items-center gap-1 shadow-sm'>
                                        <span className='w-2 h-2 bg-green-500 rounded-full animate-pulse'></span>
                                        Tersedia
                                    </div>
                                </div>

                                {/* Informasi Petugas */}
                                <div className='p-5 text-center'>
                                    {/* Nama */}
                                    <h3 className='text-lg font-bold text-gray-900 truncate'>
                                        {item.nama}
                                    </h3>
                                    
                                    {/* Jabatan */}
                                    <p className='text-blue-600 text-sm font-medium mb-3 truncate'>
                                        {item.jabatan}
                                    </p>

                                    {/* Garis Pemisah Tipis */}
                                    <div className='w-full h-px bg-gray-100 mb-3'></div>

                                    {/* Wilayah Kerja (dengan Ikon) */}
                                    <div className='flex items-center justify-center gap-1 text-gray-500 text-xs'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                        </svg>
                                        <span className='truncate max-w-[150px]'>{item.wilayah_kerja}</span>
                                    </div>
                                </div>

                                {/* Hover Overlay Effect (Opsional: Memberikan warna biru tipis saat hover) */}
                                <div className='absolute inset-0 border-2 border-transparent group-hover:border-blue-500/20 rounded-2xl transition-all pointer-events-none'></div>
                            </div>
                        ))}
                    </div>
                )}

                {/* --- TOMBOL LIHAT SEMUA --- */}
                <div className='text-center mt-12'>
                    <button 
                        onClick={() => { navigate('/officers'); window.scrollTo(0, 0) }} 
                        className='px-10 py-3.5 bg-white text-gray-700 font-semibold rounded-full border border-gray-300 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-300 shadow-sm hover:shadow-lg'
                    >
                        Lihat Seluruh Direktori Petugas
                    </button>
                </div>

            </div>
        </div>
    )
}

export default TopOfficers