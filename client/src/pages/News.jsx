import React from 'react'

const News = () => {
    const newsData = [
        { title: "Pemutihan Denda Pajak PBB 2026", date: "10 Jan 2026", cat: "Pengumuman" },
        { title: "Jadwal Mobil Keliling Bulan Januari", date: "05 Jan 2026", cat: "Layanan" },
        { title: "Sosialisasi Pajak Daerah di Kecamatan Bangil", date: "02 Jan 2026", cat: "Kegiatan" },
    ]

    return (
        <div className='pt-10 mb-20'>
            <h1 className='text-3xl font-bold text-gray-800 text-center mb-10'>Berita Terkini</h1>
            <div className='flex flex-col gap-5'>
                {newsData.map((item, index) => (
                    <div key={index} className='flex flex-col md:flex-row gap-4 border-b pb-5 items-start'>
                        <div className='w-full md:w-48 h-32 bg-gray-200 rounded-lg flex items-center justify-center text-gray-400'>
                            Foto
                        </div>
                        <div>
                            <span className='bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded'>{item.cat}</span>
                            <h3 className='text-lg font-bold text-gray-800 mt-2 hover:text-blue-600 cursor-pointer'>{item.title}</h3>
                            <p className='text-gray-500 text-sm mt-1'>{item.date}</p>
                            <p className='text-gray-600 text-sm mt-2 line-clamp-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default News