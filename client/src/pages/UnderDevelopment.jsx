import React from 'react'
import { useNavigate } from 'react-router-dom'

const UnderDevelopment = ({ serviceName }) => {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6">
      <div className="max-w-md w-full bg-white rounded-3xl shadow-2xl p-8 text-center border-t-8 border-amber-500">
        <div className="text-6xl mb-6">🏗️</div>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Layanan {serviceName}</h1>
        <p className="text-gray-500 leading-relaxed mb-8">
          Mohon maaf, saat ini fitur sedang dalam tahap <strong>integrasi sistem</strong> dan pengembangan. Kami akan segera hadir untuk melayani Anda.
        </p>
        <button 
          onClick={() => navigate(-1)}
          className="w-full py-3 bg-gray-900 text-white font-bold rounded-xl hover:bg-gray-800 transition-all"
        >
          Kembali ke Layanan
        </button>
      </div>
    </div>
  )
}

export default UnderDevelopment