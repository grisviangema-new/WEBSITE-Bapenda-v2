import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

const Login = () => {

  const [state, setState] = useState('Sign Up')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')

  // Ambil backendUrl, token, dan setToken dari Context
  const { backendUrl, token, setToken } = useContext(AppContext)
  const navigate = useNavigate()

  const onSubmitHandler = async (event) => {
    event.preventDefault()
    
    try {
        if (state === 'Sign Up') {
            // --- LOGIKA DAFTAR ---
            const { data } = await axios.post(backendUrl + '/api/user/register', { name, email, password })
            if (data.success) {
                localStorage.setItem('token', data.token)
                setToken(data.token)
                toast.success("Berhasil Mendaftar!")
            } else {
                toast.error(data.message)
            }
        } else {
            // --- LOGIKA LOGIN ---
            const { data } = await axios.post(backendUrl + '/api/user/login', { email, password })
            if (data.success) {
                localStorage.setItem('token', data.token)
                setToken(data.token)
                toast.success("Login Berhasil!")
            } else {
                toast.error(data.message)
            }
        }
    } catch (error) {
        toast.error(error.message)
    }
  }

  // Jika token sudah ada (berhasil login), lempar user ke Halaman Utama
  useEffect(() => {
    if (token) {
        navigate('/')
    }
  }, [token])

  return (
    <form onSubmit={onSubmitHandler} className='min-h-[80vh] flex items-center'>
        <div className='flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-zinc-600 text-sm shadow-lg'>
            <p className='text-2xl font-semibold'>{state === 'Sign Up' ? "Buat Akun" : "Masuk Akun"}</p>
            <p>Silakan {state === 'Sign Up' ? "daftar" : "masuk"} untuk cek tagihan pajak</p>
            
            { state === 'Sign Up' && 
              <div className='w-full'>
                <p>Nama Lengkap</p>
                <input onChange={(e)=>setName(e.target.value)} value={name} className='border border-zinc-300 rounded w-full p-2 mt-1' type="text" required />
              </div>
            }

            <div className='w-full'>
              <p>Email</p>
              <input onChange={(e)=>setEmail(e.target.value)} value={email} className='border border-zinc-300 rounded w-full p-2 mt-1' type="email" required />
            </div>

            <div className='w-full'>
              <p>Password</p>
              <input onChange={(e)=>setPassword(e.target.value)} value={password} className='border border-zinc-300 rounded w-full p-2 mt-1' type="password" required />
            </div>

            <button type='submit' className='bg-blue-600 text-white w-full py-2 rounded-md text-base hover:bg-blue-700 transition-all'>
                {state === 'Sign Up' ? "Daftar Akun" : "Login Masuk"}
            </button>

            {
                state === 'Sign Up'
                ? <p>Sudah punya akun? <span onClick={()=>setState('Login')} className='text-blue-600 underline cursor-pointer'>Login di sini</span></p>
                : <p>Belum punya akun? <span onClick={()=>setState('Sign Up')} className='text-blue-600 underline cursor-pointer'>Daftar di sini</span></p>
            }
        </div>
    </form>
  )
}

export default Login