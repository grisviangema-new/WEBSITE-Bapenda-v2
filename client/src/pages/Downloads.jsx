import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { AppContext } from '../context/AppContext'

const Downloads = () => {
    const { backendUrl } = useContext(AppContext)
    
    const [documents, setDocuments] = useState([])
    const [activeTab, setActiveTab] = useState('Semua')
    const [searchTerm, setSearchTerm] = useState('')
    const [loading, setLoading] = useState(true)

    // --- STATE UNTUK PREVIEW ---
    const [previewDoc, setPreviewDoc] = useState(null) // Menyimpan objek dokumen yang akan dipreview

    useEffect(() => {
        const fetchDocs = async () => {
            try {
                // Pastikan endpoint sesuai dengan backend Anda
                const { data } = await axios.get(backendUrl + '/api/download/list') 
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

    const filteredDocs = documents.filter(doc => {
        const matchesCategory = activeTab === 'Semua' ? true : doc.category === activeTab;
        const matchesSearch = doc.title.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    const categories = ['Semua', 'Formulir', 'Peraturan', 'SOP', 'Lainnya'];

    const getFileIcon = (fileName) => {
        const ext = fileName.split('.').pop().toLowerCase();
        if (ext === 'pdf') return { icon: '📄', color: 'bg-red-50 text-red-600', type: 'PDF' };
        if (['doc', 'docx'].includes(ext)) return { icon: '📝', color: 'bg-blue-50 text-blue-600', type: 'DOC' };
        if (['xls', 'xlsx'].includes(ext)) return { icon: '📊', color: 'bg-green-50 text-green-600', type: 'XLS' };
        return { icon: '📁', color: 'bg-gray-50 text-gray-600', type: 'FILE' };
    };

    return (
        <div className='min-h-screen bg-gray-50 pt-32 pb-20 relative'>
            <div className='max-w-6xl mx-auto px-6'>
                
                {/* --- HEADER --- */}
                <div className='text-center mb-12'>
                    <h1 className='text-4xl font-black text-gray-900 mb-4'>Pusat Unduhan & Regulasi</h1>
                    <p className='text-gray-500 max-w-2xl mx-auto mb-8'>
                        Klik dokumen untuk melihat pratinjau (preview) sebelum mengunduh file secara resmi.
                    </p>

                    {/* Search Bar */}
                    <div className='relative max-w-lg mx-auto'>
                        <div className='absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none'>
                            <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        </div>
                        <input 
                            type="text" 
                            className='block w-full pl-11 pr-4 py-4 bg-white border border-gray-200 rounded-2xl text-sm focus:ring-2 focus:ring-blue-600 outline-none shadow-sm transition-all'
                            placeholder="Cari dokumen..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                </div>

                {/* --- TABS --- */}
                <div className='flex flex-wrap justify-center gap-3 mb-12'>
                    {categories.map((cat) => (
                        <button key={cat} onClick={() => setActiveTab(cat)} className={`px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-widest transition-all ${activeTab === cat ? 'bg-blue-600 text-white shadow-lg' : 'bg-white text-gray-400 border border-gray-100 hover:bg-gray-50'}`}>{cat}</button>
                    ))}
                </div>

                {/* --- GRID --- */}
                {loading ? (
                    <div className='flex justify-center py-20'><div className='animate-spin rounded-full h-10 w-10 border-b-2 border-blue-600'></div></div>
                ) : (
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                        {filteredDocs.map((item, index) => {
                            const fileInfo = getFileIcon(item.file);
                            // Path lengkap file dari server
                            const fullFilePath = `${backendUrl}/uploads/documents/${item.file}`;

                            return (
                                <div 
                                    key={index} 
                                    onClick={() => setPreviewDoc(item)} // KLIK UNTUK PREVIEW
                                    className='group bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-xl hover:border-blue-500 cursor-pointer transition-all duration-300 flex flex-col relative overflow-hidden'
                                >
                                    <div className='flex justify-between items-start mb-4'>
                                        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-3xl ${fileInfo.color}`}>{fileInfo.icon}</div>
                                        <span className='text-[10px] font-black tracking-tighter bg-gray-100 text-gray-500 px-2 py-1 rounded'>{fileInfo.type}</span>
                                    </div>
                                    <div className='flex-grow'>
                                        <h3 className='text-lg font-bold text-gray-800 leading-snug group-hover:text-blue-600 transition-colors line-clamp-2'>{item.title}</h3>
                                        <p className='text-[10px] text-gray-400 mt-2 font-bold uppercase tracking-widest'>Kategori: {item.category}</p>
                                    </div>
                                    <div className='mt-6 text-blue-600 text-xs font-black uppercase flex items-center gap-2 group-hover:gap-4 transition-all'>
                                        Lihat Pratinjau <span>&rarr;</span>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                )}
            </div>

            {/* --- MODAL PREVIEW --- */}
            {previewDoc && (
                <div className='fixed inset-0 z-[1000] flex items-center justify-center p-4 md:p-10 bg-black/80 backdrop-blur-sm'>
                    <div className='bg-white w-full max-w-5xl h-full rounded-3xl overflow-hidden flex flex-col shadow-2xl animate-scale-up'>
                        
                        {/* Modal Header */}
                        <div className='p-6 border-b flex justify-between items-center bg-gray-50'>
                            <div>
                                <h2 className='text-lg font-black text-gray-800 line-clamp-1'>{previewDoc.title}</h2>
                                <p className='text-xs text-gray-500'>Pratinjau Dokumen Resmi Bapenda</p>
                            </div>
                            <button 
                                onClick={() => setPreviewDoc(null)}
                                className='bg-red-50 text-red-500 hover:bg-red-500 hover:text-white p-2 rounded-full transition-all'
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                            </button>
                        </div>

                        {/* Modal Body (IFRAME PREVIEW) */}
                        <div className='flex-grow bg-gray-200 relative'>
                            {/* Hanya Render Iframe jika file adalah PDF */}
                            {previewDoc.file.toLowerCase().endsWith('.pdf') ? (
                                <iframe 
                                    src={`${backendUrl}/uploads/documents/${previewDoc.file}#toolbar=0`} 
                                    className='w-full h-full'
                                    title="PDF Preview"
                                />
                            ) : (
                                <div className='flex flex-col items-center justify-center h-full text-center p-10'>
                                    <span className='text-6xl mb-4'>📑</span>
                                    <h3 className='font-bold text-gray-800'>Preview tidak tersedia untuk format ini</h3>
                                    <p className='text-sm text-gray-500'>Silakan unduh dokumen untuk melihat isinya.</p>
                                </div>
                            )}
                        </div>

                        {/* Modal Footer (DOWNLOAD BUTTON) */}
                        <div className='p-6 border-t flex flex-col md:flex-row gap-4 justify-between items-center'>
                            <p className='text-xs text-gray-400 italic'>* Pastikan Anda memiliki perangkat lunak pembaca file yang sesuai.</p>
                            <div className='flex gap-3 w-full md:w-auto'>
                                <button onClick={() => setPreviewDoc(null)} className='flex-1 md:flex-none px-8 py-3 rounded-xl border font-bold text-gray-500 hover:bg-gray-50'>Batal</button>
                                <a 
                                    href={`${backendUrl}/uploads/documents/${previewDoc.file}`} 
                                    download 
                                    className='flex-1 md:flex-none px-8 py-3 rounded-xl bg-blue-600 text-white font-bold text-center hover:bg-blue-700 shadow-lg shadow-blue-100 transition-all'
                                >
                                    Download Sekarang
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Downloads