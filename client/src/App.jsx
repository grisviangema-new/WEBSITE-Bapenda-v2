import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Login from './pages/Login'
import MyProfile from './pages/MyProfile'
// Import Halaman Baru
import About from './pages/About'
import Services from './pages/Services'
import News from './pages/News'
import Downloads from './pages/Downloads'
import Footer from './components/Footer'

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
        <ToastContainer />
        <Navbar />
        
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/my-profile' element={<MyProfile />} />
            {/* Route Baru */}
            <Route path='/about' element={<About />} />
            <Route path='/services' element={<Services />} />
            <Route path='/news' element={<News />} />
            <Route path='/downloads' element={<Downloads />} />
        </Routes>

        <Footer />
    </div>
  )
}

export default App