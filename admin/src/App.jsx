import React, { useContext } from 'react'
import Login from './pages/Login'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AdminContext } from './context/AdminContext';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import { Route, Routes } from 'react-router-dom';
import AddPetugas from './pages/AddPetugas';
import AllPetugas from './pages/AllPetugas';
import ManageAnnouncement from './pages/ManageAnnouncement';
import ManageNews from './pages/ManageNews';
import ManageHeader from './pages/ManageHeader';

const App = () => {

  const { aToken } = useContext(AdminContext)

  return (
    <div className='bg-[#F8F9FD]'>
      <ToastContainer />
      
      { aToken ? (
        <div className='bg-[#F8F9FD]'>
            {/* 1. Tampilkan Navbar */}
            <Navbar />
            
            <div className='flex items-start'>
                {/* 2. Tampilkan Sidebar */}
                <Sidebar />
                
                {/* 3. Tampilkan Halaman sesuai Menu yang diklik */}
                <Routes>
                    {/* Halaman Utama Admin  */}
                    <Route path='/' element={<></>} />
                    <Route path='/add-petugas' element={<AddPetugas />} />
                    <Route path='/petugas-list' element={<AllPetugas />} />
                    <Route path='/manage-header' element={<ManageHeader />} />
                    <Route path='/announcement' element={<ManageAnnouncement />} />
                    <Route path='/news-management' element={<ManageNews />} />
                </Routes>

            </div>
        </div>
      ) : (
        <Login />
      )}
      
    </div>
  )
}

export default App