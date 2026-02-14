import React, { useContext, useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { AdminContext } from '../context/AdminContext'
import { toast } from 'react-toastify'
import axios from 'axios'

const EditPetugas = () => {
    const { id } = useParams() // Ambil ID dari URL
    const navigate = useNavigate()
    const { backendUrl, aToken, petugas, getAllPetugas } = useContext(AdminContext)

    const [docImg, setDocImg] = useState(false)
    const [prevImg, setPrevImg] = useState('') // Untuk preview gambar lama
    const [nip, setNip] = useState('')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [jabatan, setJabatan] = useState('')
    const [wilayah, setWilayah] = useState('')

    // Isi form saat halaman dimuat
    useEffect(() => {
        if (petugas.length > 0) {
            const data = petugas.find(p => p._id === id)
            if (data) {
                setNip(data.nip)
                setName(data.nama)
                setEmail(data.email)
                setJabatan(data.jabatan)
                setWilayah(data.wilayah_kerja)
                setPrevImg(data.image)
            } else {
                toast.error("Data petugas tidak ditemukan")
                navigate('/petugas-list')
            }
        } else {
            getAllPetugas() // Fetch ulang jika refresh halaman
        }
    }, [petugas, id])

    const onSubmitHandler = async (event) => {
        event.preventDefault()
        try {
            const formData = new FormData()
            formData.append('id', id)
            formData.append('nip', nip)
            formData.append('nama', name)
            formData.append('email', email)
            formData.append('jabatan', jabatan)
            formData.append('wilayah_kerja', wilayah)
            
            // Hanya kirim gambar jika user upload baru
            if (docImg) formData.append('image', docImg)

            const { data } = await axios.post(backendUrl + '/api/admin/edit-petugas', formData, { headers: { aToken } })

            if (data.success) {
                toast.success(data.message)
                getAllPetugas()
                navigate('/petugas-list')
            } else {
                toast.error(data.message)
            }
        } catch (error) {
            toast.error(error.message)
        }
    }

    return (
        <form onSubmit={onSubmitHandler} className='m-5 w-full'>
            <p className='mb-3 text-lg font-medium'>Edit Petugas Pajak</p>
            <div className='bg-white px-8 py-8 border rounded w-full max-w-4xl max-h-[80vh] overflow-y-scroll'>
                
                {/* Upload Foto */}
                <div className='flex items-center gap-4 mb-8 text-gray-500'>
                    <label htmlFor="doc-img">
                        <div className='w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center cursor-pointer overflow-hidden border border-gray-300'>
                            <img 
                                className='w-full h-full object-cover' 
                                src={docImg ? URL.createObjectURL(docImg) : prevImg} 
                                alt="" 
                            />
                        </div>
                    </label>
                    <input onChange={(e) => setDocImg(e.target.files[0])} type="file" id="doc-img" hidden />
                    <p className='text-sm'>Klik foto untuk <br /> mengganti</p>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    <div>
                        <p className='text-sm font-medium mb-1'>Nama Lengkap</p>
                        <input onChange={(e)=> setName(e.target.value)} value={name} className='border rounded px-3 py-2 w-full' type="text" required />
                    </div>
                    <div>
                        <p className='text-sm font-medium mb-1'>NIP</p>
                        <input onChange={(e)=> setNip(e.target.value)} value={nip} className='border rounded px-3 py-2 w-full' type="text" required />
                    </div>
                    <div>
                        <p className='text-sm font-medium mb-1'>Email Dinas</p>
                        <input onChange={(e)=> setEmail(e.target.value)} value={email} className='border rounded px-3 py-2 w-full' type="email" required />
                    </div>
                    <div>
                        <p className='text-sm font-medium mb-1'>Wilayah Kerja</p>
                        <input onChange={(e)=> setWilayah(e.target.value)} value={wilayah} className='border rounded px-3 py-2 w-full' type="text" required />
                    </div>
                    <div className='md:col-span-2'>
                        <p className='text-sm font-medium mb-1'>Jabatan</p>
                        <select onChange={(e) => setJabatan(e.target.value)} value={jabatan} className='border rounded px-3 py-2 w-full bg-white'>
                            <option value="Kepala Badan Pendapatan Daerah">Kepala Badan Pendapatan Daerah</option>
                                <option value="Sekretaris">Sekretaris</option>
                                <option value="Kasubbag Umum dan Kepegawain">Kasubbag Umum dan Kepegawain</option>
                                <option value="Staff Bagian Umum dan Kepegawaian">Staff Bagian Umum dan Kepegawaian</option>
                                
                                <option value="Kabid Perencanaan dan pengembangan Pendapatan Daerah">Kabid Perencanaan dan pengembangan Pendapatan Daerah</option>
                                <option value="Kasubbid Pengembangan dan Kebijakan">Kasubbid Pengembangan dan Kebijakan</option>
                                <option value="Staff Subbid Pengembangan dan Kebijakan">Staff Subbid Pengembangan dan Kebijakan</option>
                                <option value="Subbid Pengelolaan Data dan Informasi">Subbid Pengelolaan Data dan Informasi</option>
                                <option value="Staff Pengelolaan Data dan Informasi">Staff Pengelolaan Data dan Informasi</option>

                                <option value="Kepala Bidang Pengelolaan Pendapatan">Kepala Bidang Pengelolaan Pendapatan</option>
                                <option value="Kasubbid Pendataan dan Pelayanan">Kasubbid Pendataan dan Pelayanan</option>
                                <option value="Staff Subbid Pendataan dan Pelayanan">Staff Subbid Pendataan dan Pelayanan</option>
                                <option value="Kasubbid Penetapan dan Pelaporan">Kasubbid Penetapan dan Pelaporan</option>
                                <option value="Staff Subbid Penetapan dan Pelaporan">Staff Subbid Penetapan dan Pelaporan</option>
                                
                                <option value="Kabid Pengendalian dan Evaluasi Pendapatan Daerah">Kabid Pengendalian dan Evaluasi Pendapatan Daerah</option>
                                <option value="Kasubbid  Pengendalian dan Pengawasan">Kasubbid Pengendalian dan Pengawasan</option>
                                <option value="Staff Subbid Pengendalian dan Pengawasan">Staff Subbid Pengendalian dan Pengawasan</option>
                                <option value="Kasubbid Bidang Evaluasi dan Penagihan">Kasubbid Bidang Evaluasi dan Penagihan</option>
                                <option value="Staff Subbid Evaluasi dan Penagihan">Staff Subbid Evaluasi dan Penagihan</option>
                                <option value="Kepala UPT 1">Kepala UPT 1</option>
                                <option value="Staff UPT 1">Staff UPT 1</option>
                                <option value="Kepala UPT 2">Kepala UPT 2</option>
                                <option value="Staff UPT 2">Staff UPT 2</option>
                                <option value="Fungsional">Fungsional</option>
                        </select>
                    </div>
                </div>

                <button type='submit' className='bg-blue-600 px-10 py-3 mt-8 text-white rounded-full hover:bg-blue-700 font-medium'>
                    Simpan Perubahan
                </button>
            </div>
        </form>
    )
}

export default EditPetugas