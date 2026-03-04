import React, { useContext, useState } from 'react'
import { AdminContext } from '../context/AdminContext'
import axios from 'axios'
import { toast } from 'react-toastify'

const Login = () => {
    const [state, setState] = useState('Admin')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const { setAToken, backendUrl } = useContext(AdminContext)

    const onSubmitHandler = async (event) => {
        event.preventDefault();

        try {
            if (state === 'Admin') {
                // Gunakan template literal untuk keamanan URL
                const { data } = await axios.post(`${backendUrl}/api/admin/login`, { email, password })
                
                if (data.success) {
                    localStorage.setItem('aToken', data.token)
                    setAToken(data.token)
                    toast.success('Login Berhasil!')
                } else {
                    // Ini menangkap pesan "Password Salah" atau "User Tidak Ditemukan" dari Backend
                    toast.error(data.message)
                }
            }
        } catch (error) {
            // Menangkap error 404, 500, atau koneksi mati
            const message = error.response?.data?.message || "Terjadi kesalahan pada server (404/500)";
            toast.error(message);
            console.error("Login Error:", error);
        }
    }

    return (
        <div className='min-h-screen flex items-center justify-center bg-gray-50'>
            <form onSubmit={onSubmitHandler} className='bg-white p-8 rounded-2xl shadow-xl w-[90%] sm:w-96 border border-gray-100'>
                <div className='text-center mb-8'>
                    {/* Logo atau Icon SIPD bisa ditaruh di sini */}
                    <div className='bg-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-blue-200 shadow-lg'>
                        <span className='text-white text-3xl font-bold'>P</span>
                    </div>
                    <p className='text-2xl font-extrabold text-gray-800 tracking-tight'>SIPD Pasuruan</p>
                    <p className='text-sm text-gray-400 mt-1'>Masuk Panel <span className='text-blue-600 font-bold'>{state}</span></p>
                </div>

                <div className='space-y-5'>
                    <div>
                        <p className='text-xs font-bold text-gray-500 uppercase tracking-widest mb-1.5 ml-1'>Email Address</p>
                        <input 
                            onChange={(e) => setEmail(e.target.value)} 
                            value={email} 
                            placeholder='admin@pasuruan.go.id'
                            className='w-full border border-gray-200 bg-gray-50 rounded-xl px-4 py-3 outline-none focus:border-blue-500 focus:bg-white transition-all text-sm' 
                            type="email" 
                            required 
                        />
                    </div>
                    <div>
                        <p className='text-xs font-bold text-gray-500 uppercase tracking-widest mb-1.5 ml-1'>Password</p>
                        <input 
                            onChange={(e) => setPassword(e.target.value)} 
                            value={password} 
                            placeholder='••••••••'
                            className='w-full border border-gray-200 bg-gray-50 rounded-xl px-4 py-3 outline-none focus:border-blue-500 focus:bg-white transition-all text-sm' 
                            type="password" 
                            required 
                        />
                    </div>
                    
                    <button className='w-full bg-blue-600 text-white py-3.5 rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-100 active:scale-[0.98] mt-4'>
                        Sign In
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Login