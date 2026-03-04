import React, { useContext } from 'react'
import { AdminContext } from '../context/AdminContext'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
    const { aToken } = useContext(AdminContext)

    // Helper untuk style NavLink agar kode lebih bersih
    const navLinkClass = ({ isActive }) => 
        `flex items-center gap-3 py-3.5 px-6 md:px-9 cursor-pointer transition-all duration-300 border-r-4 ${
            isActive 
            ? 'bg-blue-50 text-blue-600 border-blue-600 font-semibold' 
            : 'text-gray-500 border-transparent hover:bg-gray-50 hover:text-gray-700'
        }`

    return (
        <div className='min-h-screen bg-white border-r w-72 hidden md:block shadow-sm'>
            {aToken && (
                <div className='flex flex-col h-full'>
                    {/* Header Sidebar (Opsional) */}
                    <div className='p-6 border-b mb-4'>
                        <p className='text-xs font-bold text-gray-400 uppercase tracking-widest'>Menu Navigasi</p>
                    </div>

                    <ul className='flex flex-col'>
                        {/* 1. DAFTAR PETUGAS */}
                        <NavLink className={navLinkClass} to='/petugas-list'>
                            <span className='text-xl'>👥</span>
                            <p className='text-sm'>Daftar Petugas</p>
                        </NavLink>

                        {/* 2. EDIT LANDING PAGE */}
                        <NavLink className={navLinkClass} to='/manage-header'>
                            <span className='text-xl'>🎨</span>
                            <p className='text-sm'>Landing Page Client</p>
                        </NavLink>

                        {/* 3. PENGUMUMAN */}
                        <NavLink className={navLinkClass} to='/announcement'>
                            <span className='text-xl'>📣</span>
                            <p className='text-sm'>Pengumuman</p>
                        </NavLink>

                        {/* 4. MANAJEMEN BERITA */}
                        <NavLink className={navLinkClass} to='/news-management'>
                            <span className='text-xl'>🗞️</span>
                            <p className='text-sm'>Manajemen Berita</p>
                        </NavLink>

                        {/* 5. KELOLA UNDUHAN */}
                        <NavLink className={navLinkClass} to='/downloads-management'>
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                            </svg>
                            <p className='text-sm'>Kelola Unduhan</p>
                        </NavLink>

                        {/* 6. KELOLA FAQ */}
                        <NavLink className={navLinkClass} to='/manage-faq'>
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                            <p className='text-sm'>Kelola FAQ</p>
                        </NavLink>
                    </ul>

                    {/* Footer Sidebar (Info Sesi) */}
                    <div className='mt-auto p-6 bg-gray-50 text-[10px] text-gray-400 text-center uppercase tracking-tighter'>
                        SIPD Pasuruan v2.0 &bull; 2026
                    </div>
                </div>
            )}
        </div>
    )
}

export default Sidebar