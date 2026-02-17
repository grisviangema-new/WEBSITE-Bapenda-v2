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

            // Membungkus data untuk dikirim (karena ada file gambar, pakai FormData)
            const formData = new FormData()
            formData.append('image', docImg)
            formData.append('nip', nip)
            formData.append('nama', name)
            formData.append('email', email)
            formData.append('password', password)
            formData.append('jabatan', jabatan)
            formData.append('wilayah_kerja', wilayah)

            // Debugging: Cek isi formData di console sebelum dikirim
            // (FormData tidak bisa di-console.log langsung, harus di-loop)
            for (let pair of formData.entries()) {
                console.log(pair[0] + ': ' + pair[1]); 
            }

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
                            <select onChange={(e) => setJabatan(e.target.value)} value={jabatan} className='border rounded px-3 py-2 bg-white w-full'>
                                {/* --- KATEGORI PIMPINAN --- */}
                                <optgroup label="Pimpinan">
                                    <option value="Kepala Badan Pendapatan Daerah">Kepala Badan Pendapatan Daerah</option>
                                    <option value="Sekretaris">Sekretaris</option>
                                    <option value="Kasubbag Umum dan Kepegawain">Kasubbag Umum dan Kepegawain</option>
                                    
                                    <option value="Kabid Perencanaan dan pengembangan Pendapatan Daerah">Kabid Perencanaan dan Pengembangan</option>
                                    <option value="Kasubbid Pengembangan dan Kebijakan">Kasubbid Pengembangan dan Kebijakan</option>
                                    <option value="Subbid Pengelolaan Data dan Informasi">Kasubbid Pengelolaan Data dan Informasi</option>

                                    <option value="Kepala Bidang Pengelolaan Pendapatan">Kabid Pengelolaan Pendapatan</option>
                                    <option value="Kasubbid Pendataan dan Pelayanan">Kasubbid Pendataan dan Pelayanan</option>
                                    <option value="Kasubbid Penetapan dan Pelaporan">Kasubbid Penetapan dan Pelaporan</option>

                                    <option value="Kabid Pengendalian dan Evaluasi Pendapatan Daerah">Kabid Pengendalian dan Evaluasi</option>
                                    <option value="Kasubbid Pengendalian dan Pengawasan">Kasubbid Pengendalian dan Pengawasan</option>
                                    <option value="Kasubbid Bidang Evaluasi dan Penagihan">Kasubbid Evaluasi dan Penagihan</option>

                                    <option value="Kepala UPT 1">Kepala UPT 1</option>
                                    <option value="Kepala UPT 2">Kepala UPT 2</option>
                                </optgroup>

                                {/* --- KATEGORI STAFF / FUNGSIONAL --- */}
                                <optgroup label="Staff & Fungsional">
                                    <option value="Staff Bagian Umum dan Kepegawaian">Staff Umum dan Kepegawaian</option>
                                    <option value="Staff Subbid Pengembangan dan Kebijakan">Staff Pengembangan dan Kebijakan</option>
                                    <option value="Staff Pengelolaan Data dan Informasi">Staff Pengelolaan Data dan Informasi</option>
                                    <option value="Staff Subbid Pendataan dan Pelayanan">Staff Pendataan dan Pelayanan</option>
                                    <option value="Staff Subbid Penetapan dan Pelaporan">Staff Penetapan dan Pelaporan</option>
                                    <option value="Staff Subbid Pengendalian dan Pengawasan">Staff Pengendalian dan Pengawasan</option>
                                    <option value="Staff Subbid Evaluasi dan Penagihan">Staff Evaluasi dan Penagihan</option>
                                    <option value="Fungsional">Pejabat Fungsional</option>
                                </optgroup>

                                {/* --- KATEGORI UPT --- */}
                                <optgroup label="UPT (Unit Pelaksana Teknis)">
                                    <option value="Staff UPT 1">Staff UPT 1</option>
                                    <option value="Staff UPT 2">Staff UPT 2</option>
                                </optgroup>
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