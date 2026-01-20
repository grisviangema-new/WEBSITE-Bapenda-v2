import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate = useNavigate();
    
    return (
        <div className='flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400'>
            {/* LOGO */}
            <div onClick={()=>navigate('/')} className='cursor-pointer flex items-center gap-2'>
                <div className='w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl'>B</div>
                <p className='text-xl font-bold text-blue-900'>BAPENDA <span className='text-gray-600 font-normal text-base'>Pasuruan</span></p>
            </div>

            {/* MENU TENGAH */}
            <ul className='hidden md:flex items-start gap-5 font-medium'>
                <NavLink to='/' className={({isActive})=> isActive ? "text-blue-600 border-b-2 border-blue-600 pb-1" : ""}>
                    BERANDA
                </NavLink>
                <NavLink to='/officers' className={({isActive})=> isActive ? "text-blue-600 border-b-2 border-blue-600 pb-1" : ""}>
                    DAFTAR PETUGAS
                </NavLink>
                <NavLink to='/about' className={({isActive})=> isActive ? "text-blue-600 border-b-2 border-blue-600 pb-1" : ""}>
                    TENTANG KAMI
                </NavLink>
            </ul>

            {/* TOMBOL LOGIN */}
            <div className='flex items-center gap-4'>
                 <button onClick={()=> navigate('/login')} className='bg-blue-600 text-white px-8 py-3 rounded-full font-light hidden md:block hover:bg-blue-700 transition-all'>
                    Cek Tagihan (Login)
                 </button>
            </div>
        </div>
    )
}

export default Navbar