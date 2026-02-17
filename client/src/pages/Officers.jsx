import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import { useNavigate } from 'react-router-dom'

const Officers = () => {

  const { petugas } = useContext(AppContext)
  const navigate = useNavigate()

  // State
  const [filterPetugas, setFilterPetugas] = useState([])
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('Semua') 
  const [showFilter, setShowFilter] = useState(false) 

  // Gambar Default
  const defaultImage = "https://via.placeholder.com/400x400?text=Petugas+Bapenda"

  // --- LOGIKA FILTER TERBARU ---
  const applyFilter = () => {
    let temp = petugas.slice()

    // 1. Filter Pencarian (Nama / Wilayah)
    if (search) {
      temp = temp.filter(item => 
        item.nama.toLowerCase().includes(search.toLowerCase()) || 
        item.wilayah_kerja.toLowerCase().includes(search.toLowerCase())
      )
    }

    // 2. Filter Kategori
    if (category !== 'Semua') {
      
      if (category === 'Pimpinan') {
        // UPDATE: Hapus pengecualian UPT. 
        // Semua yang ada kata 'Kepala' (termasuk Kepala UPT) masuk sini.
        temp = temp.filter(item => 
          item.jabatan.includes('Kepala') ||      // Kepala Badan, Kepala Bidang, KEPALA UPT
          item.jabatan.includes('Sekretaris') || 
          item.jabatan.includes('Kabid') ||      
          item.jabatan.includes('Kasubbid') ||   
          item.jabatan.includes('Kasubbag')      
        );

      } else if (category === 'Staff') {
        // Staff Biasa & Fungsional (Bukan UPT)
        temp = temp.filter(item => {
           const jab = item.jabatan;
           return !jab.includes('UPT') && (jab.includes('Staff') || jab.includes('Fungsional'));
        });

      } else if (category === 'UPT') {
        temp = temp.filter(item => 
            item.jabatan.includes('UPT')
        );
      }
    }

    setFilterPetugas(temp)
  }

  useEffect(() => {
    applyFilter()
  }, [petugas, search, category])

  return (
    <div className='bg-gray-50 min-h-screen pt-10 pb-20'>
      <div className='container mx-auto px-4 md:px-10'>

        {/* --- HEADER --- */}
        <div className='text-center mb-10'>
          <h1 className='text-3xl font-bold text-gray-800'>Direktori Petugas Resmi</h1>
          <p className='text-gray-500 mt-2'>Cari dan verifikasi identitas petugas Bapenda Kabupaten Pasuruan.</p>
        </div>

        {/* --- SEARCH & FILTER BAR --- */}
        <div className='bg-white p-6 rounded-2xl shadow-sm border border-gray-100 mb-10'>
          <div className='flex flex-col md:flex-row gap-4 justify-between items-center'>
            
            {/* Input Pencarian */}
            <div className='relative w-full md:w-1/2'>
              <input 
                type="text" 
                placeholder="Cari nama petugas atau wilayah kerja..." 
                className='w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all outline-none'
                onChange={(e) => setSearch(e.target.value)}
                value={search}
              />
              <svg className="w-5 h-5 text-gray-400 absolute left-3 top-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            </div>

            {/* Tombol Filter (Desktop) */}
            <div className='hidden md:flex gap-2 bg-gray-100 p-1 rounded-xl'>
              {['Semua', 'Pimpinan', 'Staff', 'UPT'].map((cat) => (
                <button 
                  key={cat}
                  onClick={() => setCategory(cat)}
                  className={`px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 ${category === cat ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Tombol Filter (Mobile) */}
            <button 
              className='md:hidden w-full py-3 bg-blue-50 text-blue-600 font-bold rounded-xl flex justify-center items-center gap-2'
              onClick={() => setShowFilter(!showFilter)}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"></path></svg>
              {showFilter ? 'Tutup Filter' : 'Filter Kategori'}
            </button>
          </div>

          {/* Opsi Filter Mobile (Dropdown) */}
          {showFilter && (
            <div className='mt-4 flex flex-wrap gap-2 md:hidden animate-fade-in'>
               {['Semua', 'Pimpinan', 'Staff', 'UPT'].map((cat) => (
                <button 
                  key={cat}
                  onClick={() => { setCategory(cat); setShowFilter(false); }}
                  className={`flex-1 px-4 py-2 rounded-lg text-sm font-medium border transition-all ${category === cat ? 'bg-blue-600 text-white border-blue-600' : 'bg-white text-gray-600 border-gray-200'}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* --- HASIL PENCARIAN (GRID) --- */}
        {filterPetugas.length > 0 ? (
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
            {filterPetugas.map((item, index) => (
              <div 
                key={index}
                onClick={() => {
                   navigate(`/appointment/${item._id}`);
                   window.scrollTo(0,0);
                }}
                className='group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-gray-100 cursor-pointer transition-all duration-300 transform hover:-translate-y-1'
              >
                {/* Bagian Foto */}
                <div className='relative h-72 bg-gray-100 overflow-hidden'>
                  <img 
                    className='w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500' 
                    src={item.image || defaultImage} 
                    alt={item.nama} 
                    onError={(e) => { e.target.src = defaultImage }}
                  />
                  
                  {/* Overlay Gradient Hitam di Bawah */}
                  <div className='absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent'></div>

                  {/* Badge Status */}
                  <div className={`absolute top-3 right-3 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-sm backdrop-blur-md border border-white/20 ${item.tersedia ? 'bg-green-500/90 text-white' : 'bg-red-500/90 text-white'}`}>
                    {item.tersedia ? 'Aktif' : 'Cuti'}
                  </div>

                  {/* Teks di Atas Gambar (Nama & Jabatan) */}
                  <div className='absolute bottom-0 left-0 right-0 p-5 text-white'>
                    <h3 className='text-lg font-bold leading-tight mb-1 drop-shadow-md'>{item.nama}</h3>
                    <p className='text-blue-200 text-xs font-bold uppercase tracking-wide drop-shadow-sm line-clamp-1'>
                      {item.jabatan.replace('Badan Pendapatan Daerah', '')} 
                    </p>
                  </div>
                </div>

                {/* Bagian Info Bawah */}
                <div className='p-4 bg-white'>
                  <div className='flex items-start gap-2 text-gray-500 text-sm'>
                    <svg className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                    <span className='font-medium text-gray-600 leading-snug'>{item.wilayah_kerja}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* --- EMPTY STATE --- */
          <div className='flex flex-col items-center justify-center py-20 text-center bg-white rounded-3xl border border-gray-100 border-dashed'>
            <div className='w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center text-4xl mb-4'>🕵️‍♂️</div>
            <h3 className='text-xl font-bold text-gray-800'>Tidak ditemukan</h3>
            <p className='text-gray-500 max-w-md mt-2'>Tidak ada petugas yang cocok dengan filter atau pencarian Anda.</p>
            <button 
                onClick={() => { setSearch(''); setCategory('Semua'); }}
                className='mt-6 px-6 py-2 bg-gray-900 text-white rounded-full font-medium hover:bg-gray-700 transition'
            >
                Reset Pencarian
            </button>
          </div>
        )}

      </div>
    </div>
  )
}

export default Officers