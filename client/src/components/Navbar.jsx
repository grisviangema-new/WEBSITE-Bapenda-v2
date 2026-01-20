import React, { useContext, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext';

const Navbar = () => {
    const navigate = useNavigate();
    
    // Ambil token dan setToken dari Context
    const { token, setToken } = useContext(AppContext)

    const [showMenu, setShowMenu] = useState(false) // Untuk dropdown menu mobile/profil

    const logout = () => {
        setToken(false)
        localStorage.removeItem('token')
        navigate('/login')
    }
    
    return (
        <div className='flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400'>
            {/* LOGO */}
            <div onClick={()=>navigate('/')} className='cursor-pointer flex items-center gap-2'>
                <div className='w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl'>B</div>
                <p className='text-xl font-bold text-blue-900'>BAPENDA <span className='text-gray-600 font-normal text-base'>Pasuruan</span></p>
            </div>

            {/* MENU TENGAH */}
            <ul className='hidden lg:flex items-start gap-5 font-medium'>
                <NavLink to='/' className={({isActive})=> isActive ? "text-blue-600 border-b-2 border-blue-600 pb-1" : "hover:text-blue-600"}>
                    BERANDA
                </NavLink>
                <NavLink to='/services' className={({isActive})=> isActive ? "text-blue-600 border-b-2 border-blue-600 pb-1" : "hover:text-blue-600"}>
                    LAYANAN
                </NavLink>
                <NavLink to='/news' className={({isActive})=> isActive ? "text-blue-600 border-b-2 border-blue-600 pb-1" : "hover:text-blue-600"}>
                    BERITA
                </NavLink>
                <NavLink to='/downloads' className={({isActive})=> isActive ? "text-blue-600 border-b-2 border-blue-600 pb-1" : "hover:text-blue-600"}>
                    UNDUHAN
                </NavLink>
                <NavLink to='/about' className={({isActive})=> isActive ? "text-blue-600 border-b-2 border-blue-600 pb-1" : "hover:text-blue-600"}>
                    TENTANG KAMI
                </NavLink>
            </ul>

            {/* LOGIKA LOGIN / PROFILE */}
            <div className='flex items-center gap-4'>
                {
                    token 
                    ? <div className='flex items-center gap-2 cursor-pointer group relative'>
                        {/* Foto Profil Placeholder (Lingkaran Abu-abu) */}
                        <div className='w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-gray-600 font-bold'>U</div>
                        <img className='w-2.5' src="" alt="" /> {/* Icon Panah Bawah (Opsional) */}
                        
                        {/* Dropdown Menu */}
                        <div className='absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block'>
                            <div className='min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4 shadow-lg'>
                                <p onClick={()=>navigate('/my-profile')} className='hover:text-black cursor-pointer'>Profil Saya</p>
                                <p onClick={()=>navigate('/my-invoices')} className='hover:text-black cursor-pointer'>Tagihan Pajak</p>
                                <p onClick={logout} className='hover:text-black cursor-pointer text-red-500'>Logout</p>
                            </div>
                        </div>
                    </div>
                    : <button onClick={()=> navigate('/login')} className='bg-blue-600 text-white px-8 py-3 rounded-full font-light hidden md:block hover:bg-blue-700 transition-all'>
                        Cek Tagihan (Login)
                      </button>
                }
            </div>
        </div>
    )
}

export default Navbar