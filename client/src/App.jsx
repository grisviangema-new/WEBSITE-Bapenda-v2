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
import Officers from './pages/Officers'
import Npwpd from './pages/layanan/Npwpd'
import Pbjt from './pages/layanan/Pbjt'
import PajakReklame from './pages/layanan/PajakReklame'
import PajakAirTanah from './pages/layanan/PajakAirTanah'
import Pbb from './pages/layanan/Pbb'
import Bphtb from './pages/layanan/Bphtb'
import Keberatan from './pages/layanan/Keberatan'
import UnderDevelopment from './pages/UnderDevelopment'
import PajakMBLB from './pages/layanan/Mblb'

const App = () => {
  return (
    <div className='flex flex-col min-h-screen bg-gray-50'>
      {/* Komponen Global */}
      <ToastContainer position="top-right" autoClose={3000} />
      <AnnouncementPopup />
      
      {/* 1. Navbar: Gunakan w-full agar background memenuhi layar, 
          tapi isi navbar di dalamnya harus dibatasi max-width (di dalam komponen Navbar) */}
      <Navbar className="fixed top-0 left-0 w-full z-50 bg-white shadow-md"/>

      {/* 2. Main Content Wrapper */}
      <main className='flex-grow py-0 md:py-0'>
        
        {/* PERBAIKAN DI SINI:
            - mx-auto: Memastikan container berada di tengah layar.
            - w-full: Mengambil ruang yang tersedia.
            - max-w-screen-xl atau 2xl: Membatasi lebar agar tidak "melar" di monitor besar.
            - px-4: Padding agar konten tidak menempel ke pinggir di layar kecil.
        */}
        <div className='w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-300'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<UnderDevelopment />} />
            <Route path='/my-profile' element={<MyProfile />} />
            <Route path='/about' element={<About />} />
            <Route path='/services' element={<Services />} />
            <Route path='layanan/npwpd' element={<Npwpd />} />
            <Route path='layanan/pbjt' element={<Pbjt />} />
            <Route path='layanan/pajakreklame' element={<PajakReklame />} />
            <Route path='layanan/pajakairtanah' element={<PajakAirTanah />} />
            <Route path='layanan/pbb' element={<Pbb />} />
            <Route path='layanan/bphtb' element={<Bphtb />} />
            <Route path='layanan/mblb' element={<PajakMBLB />} />
            <Route path='layanan/keberatan' element={<Keberatan />} />
            <Route path='layanan/underdevelopment' element={<UnderDevelopment />} />
            <Route path='/news' element={<News />} />
            <Route path='/berita/:id' element={<NewsDetail />} /> 
            <Route path='/officers' element={<Officers />} />
            <Route path='/downloads' element={<Downloads />} />
          </Routes>
        </div>

        {/* Widget Melayang */}
        <FloatingWA />
      </main>

      {/* 3. Footer */}
      <Footer />
    </div>
  )
}

export default App
