import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Login from './pages/Login'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MyProfile from './pages/MyProfile'

const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
        {/* 2. PASANG INI DI SINI */}
        <ToastContainer />
        
        <Navbar />
        
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            
            <Route path='/my-profile' element={<MyProfile />} />  
        </Routes>
    </div>
  )
}

export default App