import React, { useContext } from 'react'
import Login from './pages/Login'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AdminContext } from './context/AdminContext';

const App = () => {

  const { aToken } = useContext(AdminContext)

  return (
    <div className='bg-[#F8F9FD]'>
      {/* Komponen untuk notifikasi popup */}
      <ToastContainer /> 
      
      {/* Logika Pengecekan Login */}
      { aToken ? (
        <div className='h-screen flex items-center justify-center'>
            <h1 className='text-4xl font-bold text-green-600'>ADMIN SUDAH LOGIN! ✅</h1>
            {/* Nanti di sini kita ganti jadi Dashboard Beneran */}
        </div>
      ) : (
        <Login />
      )}
      
    </div>
  )
}

export default App