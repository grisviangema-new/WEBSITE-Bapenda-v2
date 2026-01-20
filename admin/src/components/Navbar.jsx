import React, { useContext } from 'react'
import { AdminContext } from '../context/AdminContext'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    const { aToken, setAToken } = useContext(AdminContext)
    const navigate = useNavigate()

    const logout = () => {
        navigate('/')
        aToken && setAToken('')
        aToken && localStorage.removeItem('aToken')
    }

    return (
        <div className='flex justify-between items-center px-4 sm:px-10 py-3 border-b bg-white'>
            <div className='flex items-center gap-2 text-xs'>
                <div className='w-30 h-10 flex items-center justify-center bg-blue-100 rounded text-blue-800 font-bold border border-blue-200'>
                    BAPENDA
                </div> 
                <p className='border px-2.5 py-0.5 rounded-full border-gray-500 text-gray-600'>Admin Panel</p>
            </div>
            <button onClick={logout} className='bg-blue-600 text-white text-sm px-10 py-2 rounded-full hover:bg-blue-700 transition-all'>Logout</button>
        </div>
    )
}

export default Navbar