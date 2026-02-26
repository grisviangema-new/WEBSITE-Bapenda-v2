import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Services = () => {
    const [selectedService, setSelectedService] = useState(null);
    const navigate = useNavigate();

    // Fungsi pintar untuk menangani Link
    const handleServiceClick = (link) => {
        if (!link) return alert("Layanan ini sedang dalam pemeliharaan.");
        
        // Jika link diawali 'http', buka di tab baru (External)
        if (link.startsWith('http')) {
            window.open(link, '_blank');
        } else {
            // Jika tidak, buka di halaman ini (Internal)
            navigate(link);
            window.scrollTo(0, 0);
        }
    }

    const services = [
        { 
            title: "NPWPD", 
            icon: "🆔",
            desc: "Nomor Pokok Wajib Pajak Daerah sebagai identitas resmi wajib pajak.",
            link: "/layanan/npwpd", // <--- Contoh Link Eksternal (Sistem PAD)
            subServices: ["Pendaftaran Baru", "Perubahan Data Objek Pajak", "Penonaktifan/Penghapusan NPWPD"]
        },
        { 
            title: "PBJT", 
            icon: "🧾",
            desc: "Pajak Atas Barang dan Jasa Tertentu (Hotel, Restoran, Parkir, Kesenian).",
            link: "/layanan/pbjt", // <--- Contoh Link Eksternal (E-SPTPD)
            subServices: ["Pendaftaran Objek Pajak", "Pelaporan Omzet Bulanan", "E-Billing Pajak", "Pengajuan Keringanan"]
        },        { 
            title: "Pajak MBLB", 
            icon: "⛏️",
            desc: "Pajak atas mineral bukan logam dan batuan.",
            link: "/layanan/mblb", // <--- Route Internal Form MBLB
            subServices: ["Pendaftaran Objek Pajak", "Pelaporan Hasil Tambang", "E-Billing Pajak", "Perizinan Tambang"]
        },
        { 
            title: "BPHTB", 
            icon: "🤝",
            desc: "Bea Perolehan Hak atas Tanah dan Bangunan.",
            link: "/layanan/bphtb", // <--- Contoh Link Eksternal (E-BPHTB)
            subServices: ["E-BPHTB"]
        },
        { 
            title: "Pajak Reklame", 
            icon: "📢",
            desc: "Pajak atas penyelenggaraan berbagai media reklame di ruang publik.",
            link: "/layanan/pajakreklame", 
            subServices: ["Pendaftaran dan Pelaporan", "Cek Tagihan SKPD", "Bayar Pajak", "Perizinan Reklame"]
        },
        { 
            title: "Pajak Air Tanah", 
            icon: "⛲",
            desc: "Pajak atas pengambilan dan pemanfaatan sumber air tanah.",
            link: "/layanan/pajakairtanah",
            subServices: ["Input Meteran Mandiri", "Izin Sumur Bor", "Cek Tagihan NPA"]
        },
        { 
            title: "PBB-P2", 
            icon: "🏠",
            desc: "Pajak Bumi dan Bangunan Perdesaan dan Perkotaan.",
            link: "/layanan/pbb", // <--- Contoh Link Eksternal (E-SPPT)
            subServices: ["Cek Tagihan & History", "E-SPPT Digital", "Mutasi Nama", "Layanan Kolektif"]
        },
        { 
            title: "Keberatan & Keringanan", 
            icon: "⚖️",
            desc: "Layanan pengajuan sanggahan atau permohonan pengurangan denda.",
            link: "/layanan/keberatan", // <--- Route Internal Form Keberatan
            subServices: ["Pengajuan Keberatan", "Keringanan Denda", "Penghapusan Sanksi Admin"]
        },
        { 
            title: "SIOPD", 
            icon: "🏠",
            desc: "Aplikasi Pengelolaan PBB-P2 untuk Desa/Kelurahan.",
            link: "https://patriot.pasuruankab.go.id/apps/epbb/module/login.php",
            subServices: ["Realisasi PBB-P2", "Manajemen Data Objek Pajak"]
        },
        { 
            title: "Konfirmasi Pembayaran/Piutang", 
            icon: "💳",
            desc: "Fitur untuk mengkonfirmasi pembayaran atau piutang pajak.", // <--- Halaman panduan bayar
            link: "layanan/underdevelopment", // <--- Route Internal Form Konfirmasi
            subServices: ["Pelaporan Pembayaran", "Pelaporan Piutang", "Status Konfirmasi"]
        },

    ]

    return (
        <div className='py-16'>
            <div className='text-center mb-16'>
                <h1 className='text-4xl font-extrabold text-gray-900'>Portal Layanan Pajak</h1>
                <p className='text-gray-500 mt-4 max-w-xl mx-auto'>Transparansi, kemudahan cek tunggakan, dan kecepatan pembayaran dalam satu genggaman.</p>
                <div className='w-20 h-1.5 bg-blue-600 mx-auto mt-6 rounded-full'></div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
                {services.map((item, index) => (
                    <div 
                        key={index} 
                        onClick={() => setSelectedService(selectedService === index ? null : index)}
                        className={`group p-8 rounded-2xl border transition-all duration-300 cursor-pointer ${
                            selectedService === index 
                            ? 'border-blue-500 bg-blue-50/50 shadow-xl' 
                            : 'border-gray-100 bg-white hover:border-blue-300 hover:shadow-lg'
                        }`}
                    >
                        <div className='text-4xl mb-6 group-hover:scale-110 transition-transform'>
                            {item.icon}
                        </div>
                        <h3 className='text-2xl font-bold text-gray-800 mb-3'>{item.title}</h3>
                        <p className='text-gray-600 text-sm leading-relaxed mb-6'>{item.desc}</p>

                        <div className={`overflow-hidden transition-all duration-500 ${
                            selectedService === index ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
                        }`}>
                            <div className='pt-5 border-t border-blue-200'>
                                <p className='text-xs font-bold text-blue-600 uppercase mb-4 text-left'>Fitur Digital:</p>
                                <ul className='space-y-3 mb-8'>
                                    {item.subServices.map((sub, i) => (
                                        <li key={i} className='flex items-center gap-3 text-sm text-gray-700 font-medium'>
                                            <div className='w-1.5 h-1.5 bg-blue-500 rounded-full'></div>
                                            {sub}
                                        </li>
                                    ))}
                                </ul>
                                
                                {/* TOMBOL AKSI UTAMA */}
                                <button 
                                    onClick={(e) => {
                                        e.stopPropagation(); // Mencegah kartu menutup saat tombol diklik
                                        handleServiceClick(item.link);
                                    }}
                                    className='w-full bg-blue-600 text-white py-3 rounded-xl font-bold hover:bg-blue-700 shadow-md transition-all active:scale-95 flex items-center justify-center gap-2'
                                >
                                    Buka Layanan 
                                    {/* Icon panah kecil jika eksternal */}
                                    {item.link && item.link.startsWith('http') && (
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                                    )}
                                </button>
                            </div>
                        </div>

                        <div className={`mt-5 text-xs font-bold tracking-widest ${selectedService === index ? 'hidden' : 'text-blue-500'}`}>
                            PILIH LAYANAN <span className='animate-pulse'>→</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Services