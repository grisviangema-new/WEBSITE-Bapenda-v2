import React, { useContext } from 'react'
import { AdminContext } from '../context/AdminContext'
import { NavLink } from 'react-router-dom'


const Sidebar = () => {
    const { aToken } = useContext(AdminContext)

    return (
        <div className='min-h-screen bg-white border-r w-64 hidden md:block'>
            {aToken && <ul className='text-[#515151] mt-5'>
                
                <NavLink className={({isActive})=> `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive ? 'bg-[#F2F3FF] border-r-4 border-blue-600' : ''}`} to={'/add-petugas'}>
                    <p>➕ Tambah Petugas</p>
                </NavLink>

                <NavLink className={({isActive})=> `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive ? 'bg-[#F2F3FF] border-r-4 border-blue-600' : ''}`} to={'/petugas-list'}>
                    <p>📋 Daftar Petugas</p>
                </NavLink>

                <NavLink className={({isActive})=> `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive ? 'bg-[#F2F3FF] border-r-4 border-blue-600' : ''}`} to={'/manage-header'}>
                    <p>🖼️ Edit Landing Page Client</p>
                </NavLink>

                <NavLink className={({isActive})=> `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive ? 'bg-[#F2F3FF] border-r-4 border-blue-600' : ''}`} to={'/announcement'}>
                    <p>📢 Pengumuman</p>
                </NavLink>

                <NavLink className={({isActive})=> `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive ? 'bg-[#F2F3FF] border-r-4 border-blue-600' : ''}`} to={'/news-management'}>
                    <p>📰 Manajemen Berita</p>
                </NavLink>

                <NavLink className={({ isActive }) => `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive ? 'bg-[#F2F3FF] border-r-4 border-primary' : ''}`} to={'downloads-management'}>
                    {/* Ikon Dokumen Folder */}
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                    <p className='hidden md:block'>Kelola Unduhan</p>
                </NavLink>


            </ul>}
        </div>
    )
}

export default Sidebar