import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const TopOfficers = () => {
    const navigate = useNavigate()
    
    // Ambil backendUrl untuk resolusi gambar
    const { petugas, backendUrl } = useContext(AppContext)

    // Fallback image jika foto petugas tidak ada atau error
    const defaultImage = "https://placehold.co/400x500?text=Petugas+Bapenda"

    return (
        <div className='py-24 px-4 md:px-10 bg-white' id='officers'>
            <div className='max-w-7xl mx-auto'>
                
                {/* --- HEADER SECTION --- */}
                <div className='text-center mb-16'>
                    <span className='bg-blue-50 text-blue-600 px-4 py-1.5 rounded-full font-black tracking-widest uppercase text-[10px] border border-blue-100'>
                        Struktur Organisasi
                    </span>
                    <h1 className='text-3xl md:text-5xl font-black text-gray-900 mt-6 mb-4 tracking-tight'>
                        Petugas Resmi Bapenda
                    </h1>
                    <p className='text-gray-500 max-w-2xl mx-auto text-base md:text-lg leading-relaxed'>
                        Guna menjamin keamanan transaksi Anda, pastikan Anda hanya berurusan dengan petugas kami yang terverifikasi dan memiliki ID resmi.
                    </p>
                    <div className='w-24 h-2 bg-blue-600 mx-auto mt-8 rounded-full'></div>
                </div>
                
                {/* --- EMPTY STATE --- */}
                {petugas.length === 0 ? (
                    <div className='flex flex-col items-center justify-center py-24 bg-gray-50 rounded-[2.5rem] border-2 border-dashed border-gray-200'>
                        <div className='w-24 h-24 bg-white rounded-full flex items-center justify-center mb-6 text-5xl shadow-sm'>
                            📂
                        </div>
                        <h3 className='text-2xl font-black text-gray-800 mb-2'>Direktori Kosong</h3>
                        <p className='text-gray-400 font-medium'>Data petugas sedang disinkronkan oleh admin.</p>
                    </div>
                ) : (
                    /* --- GRID PETUGAS --- */
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10'>
                        
                        {petugas.slice(0, 8).map((item, index) => (
                            <div 
                                key={index}
                                className='group bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 flex flex-col relative'
                            >
                                {/* Foto Profil */}
                                <div className='relative aspect-[4/5] overflow-hidden bg-gray-100'>
                                    <img 
                                        className='w-full h-full object-cover object-top transition-transform duration-1000 group-hover:scale-110' 
                                        // PERBAIKAN: Gunakan backendUrl untuk mengambil gambar dari folder uploads
                                        src={item.image ? `${backendUrl}/uploads/images/${item.image}` : defaultImage} 
                                        alt={item.nama} 
                                        onError={(e) => { e.target.src = defaultImage }}
                                    />
                                    
                                    {/* Overlay Gradient (Dibuat lebih sinematik) */}
                                    <div className='absolute inset-0 bg-gradient-to-t from-blue-900/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>

                                    {/* Badge Status (Modern Look) */}
                                    <div className={`absolute top-5 right-5 px-3 py-1 rounded-lg text-[10px] font-black backdrop-blur-md shadow-lg border border-white/20 flex items-center gap-2 ${item.tersedia ? 'bg-green-500 text-white' : 'bg-red-500 text-white'}`}>
                                        <span className={`w-2 h-2 rounded-full ${item.tersedia ? 'bg-white animate-pulse' : 'bg-white opacity-50'}`}></span>
                                        {item.tersedia ? 'ONLINE' : 'OFFLINE'}
                                    </div>

                                    {/* Nama & Jabatan (Selalu terlihat dengan gradien halus) */}
                                    <div className='absolute bottom-0 left-0 right-0 p-8 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 bg-gradient-to-t from-black/80 to-transparent'>
                                        <p className='text-blue-400 text-[10px] font-black uppercase tracking-widest mb-1'>
                                            {item.jabatan}
                                        </p>
                                        <h3 className='text-xl font-extrabold mb-4 leading-tight drop-shadow-md'>
                                            {item.nama}
                                        </h3>
                                        
                                        <div className='w-0 group-hover:w-full h-1 bg-blue-500 rounded-full transition-all duration-700'></div>
                                    </div>
                                </div>

                                {/* Informasi Wilayah */}
                                <div className='p-6 bg-white'>
                                     <div className='flex items-center gap-3 text-xs text-gray-500 font-bold'>
                                        <div className='w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 flex-shrink-0'>
                                            📍
                                        </div>
                                        <span className='leading-tight uppercase tracking-tighter'>{item.wilayah_kerja}</span>
                                     </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* --- TOMBOL LIHAT SEMUA --- */}
                {petugas.length > 0 && (
                    <div className='text-center mt-20'>
                        <button 
                            onClick={() => { navigate('/officers'); window.scrollTo(0, 0) }} 
                            className='group relative px-12 py-5 bg-gray-900 text-white font-black rounded-2xl overflow-hidden transition-all hover:bg-blue-600 active:scale-95 shadow-xl shadow-gray-200'
                        >
                            <span className='relative z-10 flex items-center gap-3'>
                                LIHAT SEMUA DIREKTORI
                                <span className='group-hover:translate-x-2 transition-transform duration-300'>→</span>
                            </span>
                        </button>
                    </div>
                )}

            </div>
        </div>
    )
}

export default TopOfficers