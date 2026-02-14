import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const TopOfficers = () => {
    
    const navigate = useNavigate()
    const { petugas } = useContext(AppContext)

    // Fallback image jika foto petugas tidak ada atau error
    const defaultImage = "https://via.placeholder.com/400x400?text=Petugas+Bapenda"

    return (
        <div className='py-20 px-4 md:px-10 bg-white' id='officers'>
            <div className='max-w-7xl mx-auto'>
                
                {/* --- HEADER SECTION --- */}
                <div className='text-center mb-16'>
                    <span className='text-blue-600 font-bold tracking-wider uppercase text-sm'>Tim Profesional</span>
                    <h1 className='text-3xl md:text-5xl font-extrabold text-gray-900 mt-2 mb-4'>Petugas Resmi Kami</h1>
                    <p className='text-gray-600 max-w-2xl mx-auto text-lg'>
                        Kami memastikan pelayanan terbaik dengan petugas yang terdaftar dan terverifikasi. Keamanan dan kenyamanan Anda adalah prioritas kami.
                    </p>
                    <div className='w-24 h-1.5 bg-blue-600 mx-auto mt-6 rounded-full'></div>
                </div>
                
                {/* --- EMPTY STATE --- */}
                {petugas.length === 0 ? (
                    <div className='flex flex-col items-center justify-center py-20 bg-white rounded-3xl shadow-sm border border-gray-100'>
                        <div className='w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mb-4 text-4xl text-gray-400'>
                            📇
                        </div>
                        <h3 className='text-xl font-bold text-gray-800 mb-2'>Data Belum Tersedia</h3>
                        <p className='text-gray-500'>Kami sedang memperbarui direktori petugas kami.</p>
                    </div>
                ) : (
                    /* --- GRID PETUGAS --- */
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
                        
                        {petugas.slice(0, 8).map((item, index) => (
                            <div 
                                key={index}
                                onClick={() => {
                                    navigate(`/appointment/${item._id}`);
                                    window.scrollTo(0, 0);
                                }} 
                                className='group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl border border-gray-100 cursor-pointer transition-all duration-300 hover:-translate-y-2 flex flex-col relative'
                            >
                                {/* Foto Profil */}
                                <div className='relative aspect-[4/5] overflow-hidden bg-gray-100'>
                                    <img 
                                        className='w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700' 
                                        src={item.image || defaultImage} 
                                        alt={item.nama} 
                                        onError={(e) => { e.target.src = defaultImage }}
                                    />
                                    
                                    {/* Overlay Gradient (Bawah ke Atas) agar teks putih terbaca */}
                                    <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300'></div>

                                    {/* Badge Status (Pojok Kanan Atas) */}
                                    <div className={`absolute top-4 right-4 px-3 py-1.5 rounded-full text-xs font-bold backdrop-blur-md shadow-sm border border-white/20 flex items-center gap-1.5 ${item.tersedia ? 'bg-green-500/90 text-white' : 'bg-red-500/90 text-white'}`}>
                                        <span className={`w-2 h-2 rounded-full ${item.tersedia ? 'bg-white animate-pulse' : 'bg-white'}`}></span>
                                        {item.tersedia ? 'Aktif' : 'Tidak Aktif'}
                                    </div>

                                    {/* Nama & Jabatan (Overlay di atas gambar) */}
                                    <div className='absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300'>
                                        <h3 className='text-xl font-bold mb-1 drop-shadow-md line-clamp-1'>
                                            {item.nama}
                                        </h3>
                                        <p className='text-blue-200 font-medium text-sm uppercase tracking-wide mb-3 drop-shadow-sm'>
                                            {item.jabatan}
                                        </p>
                                        
                                        {/* Divider Putih Kecil */}
                                        <div className='w-12 h-1 bg-blue-500 rounded-full mb-3 group-hover:w-20 transition-all duration-300'></div>
                                    </div>
                                </div>

                                {/* Informasi Tambahan (Di Bawah Gambar) */}
                                <div className='p-6 bg-white border-t border-gray-100'>
                                     <div className='flex items-start gap-3 text-sm text-gray-600 mb-4'>
                                        <svg className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                                        <span className='font-medium leading-relaxed'>{item.wilayah_kerja}</span>
                                     </div>

                                     {/* Tombol Aksi (Hanya muncul/highlight saat hover) */}
                                     <div className='w-full py-3 rounded-xl bg-gray-50 text-gray-600 font-bold text-center text-sm group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 flex items-center justify-center gap-2'>
                                        Lihat Profil
                                        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                     </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* --- TOMBOL LIHAT SEMUA --- */}
                {petugas.length > 0 && (
                    <div className='text-center mt-16'>
                        <button 
                            onClick={() => { navigate('/officers'); window.scrollTo(0, 0) }} 
                            className='inline-flex items-center gap-2 px-10 py-4 bg-white text-gray-800 font-bold rounded-full border border-gray-200 hover:border-blue-600 hover:text-blue-600 transition-all duration-300 shadow-sm hover:shadow-lg group'
                        >
                            Jelajahi Semua Petugas
                            <span className='bg-gray-100 group-hover:bg-blue-50 text-gray-600 group-hover:text-blue-600 w-6 h-6 rounded-full flex items-center justify-center text-xs transition-colors'>
                                →
                            </span>
                        </button>
                    </div>
                )}

            </div>
        </div>
    )
}

export default TopOfficers