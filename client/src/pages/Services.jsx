import React from 'react'

const Services = () => {
    
    const services = [
        { title: "PBB-P2", desc: "Pajak Bumi dan Bangunan Perdesaan dan Perkotaan." },
        { title: "BPHTB", desc: "Bea Perolehan Hak atas Tanah dan Bangunan." },
        { title: "Pajak Restoran", desc: "Pajak atas pelayanan yang disediakan restoran." },
        { title: "Pajak Hotel", desc: "Pajak atas pelayanan yang disediakan hotel." },
        { title: "Pajak Reklame", desc: "Pajak atas penyelenggaraan reklame." },
        { title: "Pajak Air Tanah", desc: "Pajak atas pengambilan dan/atau pemanfaatan air tanah." },
    ]

    return (
        <div className='pt-10 mb-20'>
            <h1 className='text-3xl font-bold text-gray-800 text-center mb-10'>Layanan Pajak Daerah</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {services.map((item, index) => (
                    <div key={index} className='border border-gray-200 p-6 rounded-lg hover:shadow-lg hover:border-blue-300 transition-all cursor-default'>
                        <div className='w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold mb-4 text-xl'>
                            {index + 1}
                        </div>
                        <h3 className='text-xl font-semibold text-gray-800'>{item.title}</h3>
                        <p className='text-gray-500 mt-2 text-sm'>{item.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Services