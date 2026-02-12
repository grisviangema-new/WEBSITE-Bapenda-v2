import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { AppContext } from '../context/AppContext'

const Downloads = () => {
    const { backendUrl } = useContext(AppContext)
    
    const [documents, setDocuments] = useState([])
    const [activeTab, setActiveTab] = useState('Semua')
    const [searchTerm, setSearchTerm] = useState('') // State untuk pencarian
    const [loading, setLoading] = useState(true)

    // Fetch Data
    useEffect(() => {
        const fetchDocs = async () => {
            try {
                const { data } = await axios.get(backendUrl + '/api/download/all')
                if (data.success) {
                    setDocuments(data.downloads)
                }
            } catch (error) {
                console.log(error)
            } finally {
                setLoading(false)
            }
        }
        fetchDocs()
    }, [backendUrl])

    // --- LOGIC FILTERING & SEARCH ---
    const filteredDocs = documents.filter(doc => {
        const matchesCategory = activeTab === 'Semua' ? true : doc.category === activeTab;
        const matchesSearch = doc.title.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    const categories = ['Semua', 'Formulir', 'Peraturan', 'SOP', 'Lainnya'];

    // Helper: Mendeteksi ekstensi file untuk ikon
    const getFileIcon = (fileUrl) => {
        if (fileUrl.includes('.pdf')) return { icon: '📄', color: 'bg-red-50 text-red-600', type: 'PDF' };
        if (fileUrl.includes('.doc')) return { icon: '📝', color: 'bg-blue-50 text-blue-600', type: 'DOC' };
        if (fileUrl.includes('.xls')) return { icon: '📊', color: 'bg-green-50 text-green-600', type: 'XLS' };
        return { icon: '📁', color: 'bg-gray-50 text-gray-600', type: 'FILE' };
    };

    return (
        <div className='min-h-screen bg-gray-50 pt-32 pb-20'>
            <div className='max-w-6xl mx-auto px-6'>
                
                {/* --- HEADER & SEARCH --- */}
                <div className='text-center mb-12'>
                    <h1 className='text-3xl md:text-4xl font-extrabold text-gray-900 mb-4'>Pusat Unduhan & Regulasi</h1>
                    <p className='text-gray-500 max-w-2xl mx-auto mb-8'>
                        Temukan dan unduh formulir pajak, peraturan daerah, serta panduan resmi Bapenda dengan mudah.
                    </p>

                    {/* Search Bar */}
                    <div className='relative max-w-lg mx-auto'>
                        <div className='absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none'>
                            <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </div>
                        <input 
                            type="text" 
                            className='block w-full pl-11 pr-4 py-4 bg-white border border-gray-200 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm transition-all'
                            placeholder="Cari nama dokumen (Contoh: Peraturan Reklame)..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                </div>

                {/* --- TABS KATEGORI --- */}
                <div className='flex flex-wrap justify-center gap-3 mb-12'>
                    {categories.map((cat) => (
                        <button 
                            key={cat}
                            onClick={() => setActiveTab(cat)}
                            className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all border ${
                                activeTab === cat 
                                ? 'bg-blue-600 border-blue-600 text-white shadow-lg transform -translate-y-1' 
                                : 'bg-white border-gray-200 text-gray-500 hover:bg-gray-50 hover:border-gray-300'
                            }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* --- CONTENT GRID --- */}
                {loading ? (
                    <div className='flex justify-center py-20'>
                        <div className='animate-spin rounded-full h-10 w-10 border-b-2 border-blue-600'></div>
                    </div>
                ) : (
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                        {filteredDocs.length > 0 ? (
                            filteredDocs.map((item, index) => {
                                const fileInfo = getFileIcon(item.file);
                                return (
                                    <div key={index} className='group bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-xl hover:border-blue-200 transition-all duration-300 flex flex-col h-full relative overflow-hidden'>
                                        
                                        {/* Dekorasi Background */}
                                        <div className={`absolute top-0 right-0 w-24 h-24 rounded-bl-full opacity-10 transition-colors ${fileInfo.color.replace('text', 'bg')}`}></div>

                                        {/* Bagian Atas: Icon & Tanggal */}
                                        <div className='flex justify-between items-start mb-4 relative z-10'>
                                            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-3xl shadow-sm ${fileInfo.color}`}>
                                                {fileInfo.icon}
                                            </div>
                                            <span className='text-[10px] font-bold tracking-wider bg-gray-100 text-gray-500 px-2 py-1 rounded uppercase'>
                                                {fileInfo.type}
                                            </span>
                                        </div>

                                        {/* Bagian Tengah: Judul */}
                                        <div className='flex-grow relative z-10'>
                                            <h3 className='text-lg font-bold text-gray-800 leading-snug group-hover:text-blue-600 transition-colors line-clamp-2' title={item.title}>
                                                {item.title}
                                            </h3>
                                            <p className='text-xs text-gray-400 mt-2 font-medium'>
                                                Diunggah: {new Date(item.date).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}
                                            </p>
                                        </div>

                                        {/* Bagian Bawah: Tombol Download */}
                                        <div className='mt-6 relative z-10'>
                                            <a 
                                                href={item.file} 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                className='flex items-center justify-center gap-2 w-full bg-gray-50 hover:bg-blue-600 text-gray-700 hover:text-white py-3 rounded-xl font-bold text-sm transition-all duration-300 group-hover:shadow-md'
                                            >
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
                                                Unduh Dokumen
                                            </a>
                                        </div>
                                    </div>
                                )
                            })
                        ) : (
                            // Empty State
                            <div className='col-span-full flex flex-col items-center justify-center py-20 bg-white rounded-3xl border-2 border-dashed border-gray-200'>
                                <div className='text-6xl mb-4'>📂</div>
                                <h3 className='text-lg font-bold text-gray-800'>Tidak ada dokumen ditemukan</h3>
                                <p className='text-gray-400 text-sm'>Coba ubah kata kunci pencarian atau kategori Anda.</p>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    )
}

export default Downloads