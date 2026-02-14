import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Login from './pages/Login'
import MyProfile from './pages/MyProfile'
import About from './pages/About'
import Services from './pages/Services'
import News from './pages/News'
import Downloads from './pages/Downloads'
import Footer from './components/Footer'
import FloatingWA from './components/FloatingWA'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AnnouncementPopup from './components/AnnouncementPopup'
import NewsDetail from './pages/NewsDetail'

const App = () => {
  return (
    <div className='flex flex-col min-h-screen'>
      {/* Komponen Global */}
      <ToastContainer position="top-right" autoClose={3000} />0
      <AnnouncementPopup />
      
      {/* 1. Navbar tetap di atas */}
      <Navbar className="bg-white shadow-md"/>

      {/* 2. Main Content Wrapper */}
      {/* pt-20 atau pt-24 sangat penting agar konten tidak tertutup Navbar Fixed */}
      <main className='flex-grow pt-24 md:pt-14 bg-gray-50'>
        
        {/* Konten dengan pembatas lebar (Container) */}
        <div className='mx-4 sm:mx-[5%] max-w-[1440px] mx-auto transition-all duration-300'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/my-profile' element={<MyProfile />} />
            <Route path='/about' element={<About />} />
            <Route path='/services' element={<Services />} />
            <Route path='/news' element={<News />} />
            <Route path='/berita/:id' element={<NewsDetail />} /> 
            <Route path='/downloads' element={<Downloads />} />
          </Routes>
        </div>

        {/* Widget Melayang */}
        <FloatingWA />
      </main>

      {/* 3. Footer di luar container agar background-nya bisa full-width */}
      <Footer />
    </div>
  )
}

export default App