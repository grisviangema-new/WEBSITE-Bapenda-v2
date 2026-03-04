import React from 'react'
import { useNavigate } from 'react-router-dom'
import { MessageCircle, ArrowLeft } from 'lucide-react' // Opsional jika memakai lucide

const UnderDevelopment = ({ serviceName }) => {
  const navigate = useNavigate()

  // Nomor WA Admin (Ganti dengan nomor tujuan Anda)
  const phoneNumber = "628881800800" // Format 62, jangan pakai 0/+/spasi
  
  const handleWhatsApp = () => {
    const message = `Halo Admin Bapenda, saya ingin bertanya mengenai layanan ...... (sebutkan nama layanan). Apakah sudah bisa digunakan? Terima kasih.`
    const encodedMessage = encodeURIComponent(message)
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank')
  }

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6">
      <div className="max-w-md w-full bg-white rounded-[2.5rem] shadow-2xl p-8 md:p-10 text-center border-t-8 border-amber-500 relative overflow-hidden">
        
        {/* Dekorasi Latar Belakang */}
        <div className="absolute top-0 right-0 w-24 h-24 bg-amber-50 rounded-full -mr-10 -mt-10 opacity-50"></div>
        
        <div className="text-6xl mb-6 animate-bounce">🏗️</div>
        
        <h1 className="text-2xl font-black text-gray-900 mb-3 tracking-tight">
            Layanan {serviceName}
        </h1>
        
        <p className="text-gray-500 text-sm leading-relaxed mb-8">
          Mohon maaf, saat ini fitur sedang dalam tahap <strong>integrasi sistem</strong>. Anda tetap dapat melakukan konsultasi atau pengurusan secara manual melalui layanan pelanggan kami.
        </p>

        <div className="space-y-3">
          {/* TOMBOL WA */}
          <button 
            onClick={handleWhatsApp}
            className="w-full py-4 bg-[#25D366] text-white font-black rounded-2xl hover:bg-[#128C7E] transition-all flex items-center justify-center gap-3 shadow-lg shadow-green-100 active:scale-95"
          >
            <MessageCircle size={20} /> Hubungi via WhatsApp
          </button>

          {/* TOMBOL KEMBALI */}
          <button 
            onClick={() => navigate(-1)}
            className="w-full py-4 bg-white text-gray-400 font-bold rounded-2xl border-2 border-slate-50 hover:bg-slate-50 hover:text-gray-600 transition-all flex items-center justify-center gap-2"
          >
            <ArrowLeft size={18} /> Kembali
          </button>
        </div>

        <p className="mt-8 text-[10px] text-slate-400 uppercase tracking-widest font-bold">
            Bapenda Service Center
        </p>
      </div>
    </div>
  )
}

export default UnderDevelopment