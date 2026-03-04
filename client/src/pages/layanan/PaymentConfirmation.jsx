import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ClipboardCheck, FileSearch, History, ArrowRight, AlertCircle, Info } from 'lucide-react';

const PaymentConfirmation = () => {
    const navigate = useNavigate();

    const services = [
        {
            title: "Pelaporan Pembayaran",
            desc: "Unggah bukti bayar Anda untuk validasi manual jika status belum berubah otomatis.",
            icon: <ClipboardCheck className="text-blue-600" size={32} />,
            path: "/layanan/underdevelopment",
            color: "blue"
        },
        {
            title: "Pelaporan Piutang",
            desc: "Ajukan koreksi atau pelaporan atas tagihan pajak yang sudah kadaluwarsa atau tidak sesuai.",
            icon: <FileSearch className="text-purple-600" size={32} />,
            path: "/layanan/underdevelopment",
            color: "purple"
        },
        {
            title: "Status Konfirmasi",
            desc: "Pantau sejauh mana proses validasi laporan pembayaran Anda oleh tim admin Bapenda.",
            icon: <History className="text-emerald-600" size={32} />,
            path: "/layanan/underdevelopment",
            color: "emerald"
        }
    ];

    return (
        <div className='bg-slate-50 min-h-screen font-sans'>
            
            {/* --- HEADER --- */}
            <div className='bg-white border-b border-slate-200 py-12 px-6'>
                <div className='max-w-7xl mx-auto'>
                    <div className='flex flex-col md:flex-row md:items-center justify-between gap-6'>
                        <div>
                            <h1 className='text-3xl font-black text-slate-900 tracking-tight'>Pusat Layanan Keuangan</h1>
                            <p className='text-slate-500 mt-1'>Kelola pelaporan pajak dan pantau status tagihan Anda dalam satu pintu.</p>
                        </div>
                        <div className='flex gap-3 bg-blue-50 p-4 rounded-2xl border border-blue-100 items-center'>
                            <AlertCircle className='text-blue-600' size={20}/>
                            <p className='text-xs font-bold text-blue-800'>Butuh Bantuan? <span className='underline cursor-pointer'>Hubungi Helpdesk</span></p>
                        </div>
                    </div>
                </div>
            </div>

            {/* --- MAIN CONTENT --- */}
            <div className='max-w-7xl mx-auto px-6 py-12'>
                
                {/* Image of Payment Confirmation Workflow */}
                <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                    {services.map((item, index) => (
                        <div 
                            key={index}
                            onClick={() => navigate(item.path)}
                            className='group relative bg-white rounded-[2.5rem] p-8 shadow-sm border border-slate-200 hover:shadow-2xl hover:border-blue-300 transition-all cursor-pointer overflow-hidden'
                        >
                            {/* Decorative Background Icon */}
                            <div className='absolute -right-4 -bottom-4 opacity-[0.03] group-hover:scale-110 transition-transform'>
                                {item.icon}
                            </div>

                            <div className='mb-6 p-4 bg-slate-50 rounded-2xl w-fit group-hover:bg-white group-hover:shadow-md transition-all'>
                                {item.icon}
                            </div>

                            <h3 className='text-xl font-black text-slate-900 mb-3 tracking-tight'>
                                {item.title}
                            </h3>
                            <p className='text-slate-500 text-sm leading-relaxed mb-8'>
                                {item.desc}
                            </p>

                            <div className='flex items-center gap-2 text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors'>
                                Akses Layanan <ArrowRight size={16}/>
                            </div>
                        </div>
                    ))}
                </div>

                {/* --- INFO EDUKASI (FOOTER SECTION) --- */}
                <div className='mt-16 grid lg:grid-cols-2 gap-8'>
                    <div className='bg-slate-900 rounded-[2.5rem] p-10 text-white relative overflow-hidden'>
                        <div className='relative z-10'>
                            <div className='flex items-center gap-2 text-blue-400 font-black text-xs uppercase tracking-widest mb-4'>
                                <Info size={14}/> Informasi Penting
                            </div>
                            <h4 className='text-2xl font-bold mb-4 leading-snug'>Waspada Penipuan Pembayaran Pajak!</h4>
                            <p className='text-slate-400 text-sm leading-relaxed mb-6'>
                                Pembayaran pajak daerah hanya dilakukan melalui Bank Persepsi resmi dan Kanal Pembayaran yang terdaftar. Bapenda tidak pernah meminta transfer ke rekening pribadi.
                            </p>
                        </div>
                        <div className='absolute right-0 bottom-0 w-48 h-48 bg-blue-600/10 rounded-full blur-3xl'></div>
                    </div>

                    <div className='bg-white rounded-[2.5rem] p-10 border border-slate-200 shadow-sm'>
                        <h4 className='text-xl font-black text-slate-900 mb-6'>Alur Proses Konfirmasi</h4>
                        <div className='space-y-6'>
                            {[
                                { t: "Input Laporan", d: "WP mengisi formulir dan mengunggah bukti bayar." },
                                { t: "Verifikasi Admin", d: "Tim admin mencocokkan data dengan mutasi bank." },
                                { t: "Update Status", d: "Status piutang akan otomatis terhapus jika valid." }
                            ].map((step, i) => (
                                <div key={i} className='flex gap-4'>
                                    <div className='w-6 h-6 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center text-[10px] font-bold shrink-0'>{i+1}</div>
                                    <div>
                                        <p className='text-sm font-bold text-slate-800 leading-none mb-1'>{step.t}</p>
                                        <p className='text-xs text-slate-500'>{step.d}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PaymentConfirmation;