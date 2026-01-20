import React, { useContext, useState } from 'react'
import { AdminContext } from '../context/AdminContext'
import { toast } from 'react-toastify'
import axios from 'axios'

const AddPetugas = () => {

    const { backendUrl, aToken } = useContext(AdminContext)

    // State untuk menyimpan inputan form
    const [docImg, setDocImg] = useState(false)
    const [nip, setNip] = useState('')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [jabatan, setJabatan] = useState('Staff')
    const [wilayah, setWilayah] = useState('')

    const onSubmitHandler = async (event) => {
        event.preventDefault()

        try {
            if (!docImg) {
                return toast.error('Foto Petugas Wajib Diupload!')
            }

            // Membungkus data untuk dikirim (karena ada file gambar, pakai FormData)
            const formData = new FormData()
            formData.append('image', docImg)
            formData.append('nip', nip)
            formData.append('nama', name)
            formData.append('email', email)
            formData.append('password', password)
            formData.append('jabatan', jabatan)
            formData.append('wilayah_kerja', wilayah)

            // Kirim ke Backend
            const { data } = await axios.post(backendUrl + '/api/admin/add-petugas', formData, { headers: { aToken } })

            if (data.success) {
                toast.success(data.message)
                // Reset form kalau sukses
                setDocImg(false)
                setName('')
                setPassword('')
                setEmail('')
                setNip('')
                setWilayah('')
            } else {
                toast.error(data.message)
            }

        } catch (error) {
            toast.error(error.message)
        }
    }

    return (
        <form onSubmit={onSubmitHandler} className='m-5 w-full'>
            <p className='mb-3 text-lg font-medium'>Tambah Petugas Pajak</p>

            <div className='bg-white px-8 py-8 border rounded w-full max-w-4xl max-h-[80vh] overflow-y-scroll'>
                
                {/* Upload Foto */}
                <div className='flex items-center gap-4 mb-8 text-gray-500'>
                    <label htmlFor="doc-img">
                        <div className='w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center cursor-pointer overflow-hidden border border-gray-300'>
                             {/* Preview Foto */}
                            {docImg ? <img className='w-full h-full object-cover' src={URL.createObjectURL(docImg)} alt="" /> : <span className='text-4xl'>📷</span>}
                        </div>
                    </label>
                    <input onChange={(e) => setDocImg(e.target.files[0])} type="file" id="doc-img" hidden />
                    <p>Upload foto <br /> petugas</p>
                </div>

                <div className='flex flex-col lg:flex-row items-start gap-10 text-gray-600'>
                    
                    {/* Kolom Kiri */}
                    <div className='w-full lg:flex-1 flex flex-col gap-4'>
                        <div className='flex-1 flex flex-col gap-1'>
                            <p>Nama Lengkap</p>
                            <input onChange={(e)=> setName(e.target.value)} value={name} className='border rounded px-3 py-2' type="text" placeholder="Budi Santoso" required />
                        </div>
                        <div className='flex-1 flex flex-col gap-1'>
                            <p>NIP (Nomor Induk)</p>
                            <input onChange={(e)=> setNip(e.target.value)} value={nip} className='border rounded px-3 py-2' type="text" placeholder="199001..." required />
                        </div>
                        <div className='flex-1 flex flex-col gap-1'>
                            <p>Password Akun</p>
                            <input onChange={(e)=> setPassword(e.target.value)} value={password} className='border rounded px-3 py-2' type="password" placeholder="Minimal 8 karakter" required />
                        </div>
                    </div>

                    {/* Kolom Kanan */}
                    <div className='w-full lg:flex-1 flex flex-col gap-4'>
                        <div className='flex-1 flex flex-col gap-1'>
                            <p>Email Dinas</p>
                            <input onChange={(e)=> setEmail(e.target.value)} value={email} className='border rounded px-3 py-2' type="email" placeholder="budi@pasuruan.go.id" required />
                        </div>
                        <div className='flex-1 flex flex-col gap-1'>
                            <p>Jabatan</p>
                            <select onChange={(e) => setJabatan(e.target.value)} value={jabatan} className='border rounded px-3 py-2'>
                                <option value="Kolektor">Kolektor Desa</option>
                                <option value="Staff">Staff Penagihan</option>
                                <option value="Koordinator">Koordinator Kecamatan</option>
                            </select>
                        </div>
                        <div className='flex-1 flex flex-col gap-1'>
                            <p>Wilayah Kerja</p>
                            <input onChange={(e)=> setWilayah(e.target.value)} value={wilayah} className='border rounded px-3 py-2' type="text" placeholder="Kec. Bangil" required />
                        </div>
                    </div>

                </div>

                <button type='submit' className='bg-blue-600 px-10 py-3 mt-4 text-white rounded-full hover:bg-blue-700'>Simpan Petugas</button>

            </div>
        </form>
    )
}

export default AddPetugas