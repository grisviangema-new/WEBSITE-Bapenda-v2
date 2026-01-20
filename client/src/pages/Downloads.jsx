import React from 'react'

const Downloads = () => {
    const files = [
        { name: "Perda No. 1 Tahun 2024 tentang Pajak Daerah", size: "2.4 MB", type: "PDF" },
        { name: "Formulir Pendaftaran NPWPD", size: "500 KB", type: "DOCX" },
        { name: "Formulir Keberatan Pajak PBB", size: "450 KB", type: "PDF" },
        { name: "Panduan Pembayaran Online", size: "1.2 MB", type: "PDF" },
    ]

    return (
        <div className='pt-10 mb-20'>
             <h1 className='text-3xl font-bold text-gray-800 text-center mb-10'>Unduh Dokumen</h1>
             <div className='border rounded-lg overflow-hidden'>
                <table className='w-full text-sm text-left text-gray-500'>
                    <thead className='text-xs text-gray-700 uppercase bg-gray-50'>
                        <tr>
                            <th className='px-6 py-3'>Nama Dokumen</th>
                            <th className='px-6 py-3'>Ukuran</th>
                            <th className='px-6 py-3'>Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {files.map((file, index) => (
                            <tr key={index} className='bg-white border-b hover:bg-gray-50'>
                                <td className='px-6 py-4 font-medium text-gray-900'>{file.name}</td>
                                <td className='px-6 py-4'>{file.size}</td>
                                <td className='px-6 py-4'>
                                    <button className='text-blue-600 hover:underline font-medium'>Download</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
             </div>
        </div>
    )
}

export default Downloads