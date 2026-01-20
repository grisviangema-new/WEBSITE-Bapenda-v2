import React, { useState } from 'react'

const Login = () => {

  // State untuk mengatur apakah user sedang di mode 'Sign Up' (Daftar) atau 'Login' (Masuk)
  const [state, setState] = useState('Sign Up')

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')

  const onSubmitHandler = async (event) => {
    event.preventDefault()
    
    // Nanti kita akan sambungkan ke Backend di sini
    if (state === 'Sign Up') {
        console.log("Mendaftar:", name, email, password)
    } else {
        console.log("Login:", email, password)
    }
  }

  return (
    <form onSubmit={onSubmitHandler} className='min-h-[80vh] flex items-center'>
        <div className='flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-zinc-600 text-sm shadow-lg'>
            <p className='text-2xl font-semibold'>{state === 'Sign Up' ? "Buat Akun" : "Masuk Akun"}</p>
            <p>Silakan {state === 'Sign Up' ? "daftar" : "masuk"} untuk cek tagihan pajak</p>
            
            {/* Input Nama hanya muncul kalau sedang mode Sign Up */}
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

            <button className='bg-blue-600 text-white w-full py-2 rounded-md text-base hover:bg-blue-700 transition-all'>
                {state === 'Sign Up' ? "Daftar Akun" : "Login Masuk"}
            </button>

            {/* Tombol ganti mode Login/Register */}
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