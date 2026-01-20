import React, { useContext, useState } from 'react'
import { AdminContext } from '../context/AdminContext'
import axios from 'axios'
import { toast } from 'react-toastify'

const Login = () => {

    const [state, setState] = useState('Admin') // Bisa dikembangkan jadi 'Petugas' nanti
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    // Ambil fungsi dari Context yang kita buat tadi
    const { setAToken, backendUrl } = useContext(AdminContext)

    const onSubmitHandler = async (event) => {
        event.preventDefault(); // Mencegah reload halaman

        try {
            if (state === 'Admin') {
                // Tembak API Login yang sudah kita buat di Backend
                const { data } = await axios.post(backendUrl + '/api/admin/login', { email, password })
                
                if (data.success) {
                    // Jika sukses, simpan token
                    localStorage.setItem('aToken', data.token)
                    setAToken(data.token)
                    toast.success('Login Berhasil! Selamat Datang.')
                } else {
                    toast.error(data.message)
                }
            }
        } catch (error) {
            toast.error(error.message)
        }
    }

    return (
        <div className='min-h-screen flex items-center justify-center bg-gray-100'>
            <form onSubmit={onSubmitHandler} className='bg-white p-8 rounded-xl shadow-lg w-[90%] sm:w-96 border border-gray-200'>
                <div className='text-center mb-6'>
                    <p className='text-2xl font-bold text-gray-800'>SIPD Pasuruan</p>
                    <p className='text-sm text-gray-500 mt-1'>Masuk sebagai <span className='text-blue-600 font-semibold'>{state}</span></p>
                </div>

                <div className='space-y-4'>
                    <div>
                        <p className='text-sm font-medium text-gray-700 mb-1'>Email</p>
                        <input onChange={(e) => setEmail(e.target.value)} value={email} className='w-full border border-gray-300 rounded px-3 py-2 outline-blue-500 transition-all' type="email" required />
                    </div>
                    <div>
                        <p className='text-sm font-medium text-gray-700 mb-1'>Password</p>
                        <input onChange={(e) => setPassword(e.target.value)} value={password} className='w-full border border-gray-300 rounded px-3 py-2 outline-blue-500 transition-all' type="password" required />
                    </div>
                    
                    <button className='w-full bg-blue-600 text-white py-2.5 rounded-lg font-medium hover:bg-blue-700 transition-colors shadow-md mt-4'>
                        Login Masuk
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Login