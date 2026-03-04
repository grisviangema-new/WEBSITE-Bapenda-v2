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
    const [jabatan, setJabatan] = useState('Kepala Badan Pendapatan Daerah')
    const [wilayah, setWilayah] = useState('')

    const onSubmitHandler = async (event) => {
        event.preventDefault()

        try {
            if (!docImg) {
                return toast.error('Foto Petugas Wajib Diupload!')
            }

            // Membungkus data untuk dikirim
            const formData = new FormData()
            
            // PENTING: Nama field 'image' harus sama dengan yang di backend (upload.single('image'))
            formData.append('image', docImg)
            formData.append('nip', nip)
            formData.append('nama', name)
            formData.append('email', email)
            formData.append('password', password)
            formData.append('jabatan', jabatan)
            formData.append('wilayah_kerja', wilayah)

            // Kirim ke Backend dengan Header yang benar
            const { data } = await axios.post(
                `${backendUrl}/api/admin/add-petugas`, 
                formData, 
                { headers: { aToken } } // Middleware authAdmin membaca token dari aToken di header
            )

            if (data.success) {
                toast.success(data.message)
                // Reset form
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
            // Menangkap pesan error dari backend jika ada
            const errorMsg = error.response?.data?.message || error.message
            toast.error(errorMsg)
            console.error("Upload Error:", error)
        }
    }

    return (
        <form onSubmit={onSubmitHandler} className='m-5 w-full'>
            <p className='mb-3 text-lg font-medium text-gray-700'>Tambah Petugas Pajak</p>

            <div className='bg-white px-8 py-8 border rounded-lg shadow-sm w-full max-w-4xl max-h-[85vh] overflow-y-auto'>
                
                {/* Upload Foto Section */}
                <div className='flex items-center gap-4 mb-8 text-gray-500'>
                    <label htmlFor="doc-img" className='cursor-pointer'>
                        <div className='w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center overflow-hidden border-2 border-dashed border-gray-300 hover:border-blue-400 transition-all'>
                            {docImg ? (
                                <img className='w-full h-full object-cover' src={URL.createObjectURL(docImg)} alt="Preview" />
                            ) : (
                                <div className='flex flex-col items-center text-xs'>
                                    <span className='text-2xl'>📷</span>
                                    <span>Pilih Foto</span>
                                </div>
                            )}
                        </div>
                    </label>
                    <input onChange={(e) => setDocImg(e.target.files[0])} type="file" id="doc-img" accept="image/*" hidden />
                    <div className='text-sm'>
                        <p className='font-medium text-gray-700'>Foto Profil Petugas</p>
                        <p className='text-xs'>Format: JPG, PNG. Max 2MB</p>
                    </div>
                </div>

                <div className='flex flex-col lg:flex-row items-start gap-10 text-gray-600'>
                    
                    {/* Kolom Kanan & Kiri Tetap Sama, pastikan ID input unik */}
                    <div className='w-full lg:flex-1 flex flex-col gap-4'>
                        <div className='flex flex-col gap-1'>
                            <p>Nama Lengkap</p>
                            <input onChange={(e)=> setName(e.target.value)} value={name} className='border rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500' type="text" placeholder="Budi Santoso" required />
                        </div>
                        <div className='flex flex-col gap-1'>
                            <p>NIP (Nomor Induk)</p>
                            <input onChange={(e)=> setNip(e.target.value)} value={nip} className='border rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500' type="text" placeholder="199001..." required />
                        </div>
                        <div className='flex flex-col gap-1'>
                            <p>Password Akun</p>
                            <input onChange={(e)=> setPassword(e.target.value)} value={password} className='border rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500' type="password" placeholder="Minimal 8 karakter" required />
                        </div>
                    </div>

                    <div className='w-full lg:flex-1 flex flex-col gap-4'>
                        <div className='flex flex-col gap-1'>
                            <p>Email Dinas</p>
                            <input onChange={(e)=> setEmail(e.target.value)} value={email} className='border rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500' type="email" placeholder="budi@pasuruan.go.id" required />
                        </div>
                        <div className='flex flex-col gap-1'>
                            <p>Jabatan</p>
                            <select onChange={(e) => setJabatan(e.target.value)} value={jabatan} className='border rounded-md px-3 py-2 bg-white w-full focus:outline-none focus:ring-1 focus:ring-blue-500'>
                                <optgroup label="Pimpinan">
                                    <option value="Kepala Badan Pendapatan Daerah">Kepala Badan Pendapatan Daerah</option>
                                    <option value="Sekretaris">Sekretaris</option>
                                    {/* ... Opsi Lainnya ... */}
                                </optgroup>
                                <optgroup label="Staff & Fungsional">
                                    <option value="Staff Bagian Umum dan Kepegawaian">Staff Umum dan Kepegawaian</option>
                                    {/* ... Opsi Lainnya ... */}
                                </optgroup>
                            </select>
                        </div>
                        <div className='flex flex-col gap-1'>
                            <p>Wilayah Kerja</p>
                            <input onChange={(e)=> setWilayah(e.target.value)} value={wilayah} className='border rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500' type="text" placeholder="Kec. Bangil" required />
                        </div>
                    </div>

                </div>

                <button type='submit' className='bg-blue-600 px-12 py-3 mt-8 text-white font-medium rounded-full hover:bg-blue-700 transition-colors shadow-md'>
                    Simpan Petugas
                </button>

            </div>
        </form>
    )
}

export default AddPetugas