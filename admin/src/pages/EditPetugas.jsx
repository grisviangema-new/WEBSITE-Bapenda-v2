import React, { useContext, useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { AdminContext } from '../context/AdminContext'
import { toast } from 'react-toastify'
import axios from 'axios'

const EditPetugas = () => {
    const { id } = useParams() 
    const navigate = useNavigate()
    const { backendUrl, aToken, petugas, getAllPetugas } = useContext(AdminContext)

    const [docImg, setDocImg] = useState(false)
    const [prevImg, setPrevImg] = useState('') 
    const [nip, setNip] = useState('')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [jabatan, setJabatan] = useState('')
    const [wilayah, setWilayah] = useState('')

    useEffect(() => {
        if (petugas.length > 0) {
            // PERBAIKAN: Gunakan p.id (MySQL integer) dan bandingkan dengan Number(id)
            const data = petugas.find(p => p.id === Number(id))
            
            if (data) {
                setNip(data.nip)
                setName(data.nama)
                setEmail(data.email)
                setJabatan(data.jabatan)
                setWilayah(data.wilayah_kerja)
                
                // PERBAIKAN: Path gambar lokal
                setPrevImg(`${backendUrl}/uploads/images/${data.image}`)
            } else {
                toast.error("Data petugas tidak ditemukan")
                navigate('/all-petugas')
            }
        } else {
            getAllPetugas() 
        }
    }, [petugas, id, backendUrl])

    const onSubmitHandler = async (event) => {
        event.preventDefault()
        try {
            const formData = new FormData()
            // PERBAIKAN: Kirim ID sebagai integer ke backend
            formData.append('id', id)
            formData.append('nip', nip)
            formData.append('nama', name)
            formData.append('email', email)
            formData.append('jabatan', jabatan)
            formData.append('wilayah_kerja', wilayah)
            
            if (docImg) formData.append('image', docImg)

            const { data } = await axios.post(
                `${backendUrl}/api/admin/edit-petugas`, 
                formData, 
                { headers: { aToken } }
            )

            if (data.success) {
                toast.success(data.message)
                getAllPetugas()
                navigate('/all-petugas')
            } else {
                toast.error(data.message)
            }
        } catch (error) {
            toast.error(error.response?.data?.message || error.message)
        }
    }

    return (
        <form onSubmit={onSubmitHandler} className='m-5 w-full'>
            <p className='mb-3 text-lg font-medium text-gray-700'>Edit Petugas Pajak</p>
            <div className='bg-white px-8 py-8 border rounded-lg shadow-sm w-full max-w-4xl max-h-[85vh] overflow-y-auto'>
                
                {/* Upload Foto */}
                <div className='flex items-center gap-4 mb-8 text-gray-500'>
                    <label htmlFor="doc-img" className='cursor-pointer'>
                        <div className='w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center overflow-hidden border-2 border-dashed border-gray-300 hover:border-blue-400 transition-all'>
                            <img 
                                className='w-full h-full object-cover' 
                                src={docImg ? URL.createObjectURL(docImg) : prevImg} 
                                alt="Preview" 
                                onError={(e) => { e.target.src = "/default-avatar.png" }}
                            />
                        </div>
                    </label>
                    <input onChange={(e) => setDocImg(e.target.files[0])} type="file" id="doc-img" accept="image/*" hidden />
                    <div>
                        <p className='text-sm font-medium text-gray-700'>Klik foto untuk mengganti</p>
                        <p className='text-xs text-gray-400'>Hanya jika ingin mengubah foto lama</p>
                    </div>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-600'>
                    <div>
                        <p className='text-sm font-medium mb-1'>Nama Lengkap</p>
                        <input onChange={(e)=> setName(e.target.value)} value={name} className='border rounded-md px-3 py-2 w-full focus:ring-1 focus:ring-blue-500 outline-none' type="text" required />
                    </div>
                    <div>
                        <p className='text-sm font-medium mb-1'>NIP</p>
                        <input onChange={(e)=> setNip(e.target.value)} value={nip} className='border rounded-md px-3 py-2 w-full focus:ring-1 focus:ring-blue-500 outline-none' type="text" required />
                    </div>
                    <div>
                        <p className='text-sm font-medium mb-1'>Email Dinas</p>
                        <input onChange={(e)=> setEmail(e.target.value)} value={email} className='border rounded-md px-3 py-2 w-full focus:ring-1 focus:ring-blue-500 outline-none' type="email" required />
                    </div>
                    <div>
                        <p className='text-sm font-medium mb-1'>Wilayah Kerja</p>
                        <input onChange={(e)=> setWilayah(e.target.value)} value={wilayah} className='border rounded-md px-3 py-2 w-full focus:ring-1 focus:ring-blue-500 outline-none' type="text" required />
                    </div>
                    <div className='md:col-span-2'>
                        <p className='text-sm font-medium mb-1'>Jabatan</p>
                        <select onChange={(e) => setJabatan(e.target.value)} value={jabatan} className='border rounded-md px-3 py-2 bg-white w-full focus:ring-1 focus:ring-blue-500 outline-none'>
                            <optgroup label="Pimpinan">
                                <option value="Kepala Badan Pendapatan Daerah">Kepala Badan Pendapatan Daerah</option>
                                <option value="Sekretaris">Sekretaris</option>
                                {/* ... opsi lainnya ... */}
                            </optgroup>
                            {/* ... group lainnya ... */}
                        </select>
                    </div>
                </div>

                <button type='submit' className='bg-blue-600 px-10 py-3 mt-8 text-white rounded-full hover:bg-blue-700 font-medium shadow-md transition-all'>
                    Simpan Perubahan
                </button>
            </div>
        </form>
    )
}

export default EditPetugas