import React, { useContext } from 'react'
import { AdminContext } from '../context/AdminContext'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    const { aToken, setAToken } = useContext(AdminContext)
    const navigate = useNavigate()

    const logout = () => {
        // Alihkan ke halaman login dulu baru hapus token
        navigate('/')
        if (aToken) {
            setAToken('')
            localStorage.removeItem('aToken')
        }
    }

    return (
        <div className='flex justify-between items-center px-6 sm:px-12 py-4 border-b bg-white sticky top-0 z-10 shadow-sm'>
            
            {/* Sisi Kiri: Brand & Role */}
            <div className='flex items-center gap-4'>
                <div className='flex flex-col'>
                    <div className='flex items-center gap-2'>
                        <span className='w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-black shadow-md shadow-blue-100'>
                            B
                        </span>
                        <h1 className='text-lg font-extrabold text-gray-800 tracking-tight hidden sm:block'>
                            BAPENDA <span className='text-blue-600'>PASURUAN</span>
                        </h1>
                    </div>
                </div>
                <span className='h-6 w-[1px] bg-gray-200 hidden sm:block'></span>
                <p className='border px-3 py-1 rounded-full border-blue-100 bg-blue-50 text-blue-600 text-[10px] font-bold uppercase tracking-wider'>
                    Admin Panel
                </p>
            </div>

            {/* Sisi Kanan: User Info & Logout */}
            <div className='flex items-center gap-6'>
                <div className='hidden lg:flex flex-col items-end'>
                    <p className='text-xs font-bold text-gray-700'>Administrator Utama</p>
                    <p className='text-[10px] text-green-500 font-medium flex items-center gap-1'>
                        <span className='w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse'></span> 
                        Sistem Online
                    </p>
                </div>
                
                <button 
                    onClick={logout} 
                    className='bg-red-50 text-red-600 border border-red-100 text-xs font-bold px-6 py-2.5 rounded-xl hover:bg-red-600 hover:text-white transition-all duration-300 shadow-sm active:scale-95 flex items-center gap-2'
                >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                    </svg>
                    Logout
                </button>
            </div>
        </div>
    )
}

export default Navbar