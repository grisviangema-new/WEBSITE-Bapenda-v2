import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Login from './pages/Login'

const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
        <Navbar />
        
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            {/* Route lain akan kita tambahkan nanti */}
        </Routes>
    </div>
  )
}

export default App