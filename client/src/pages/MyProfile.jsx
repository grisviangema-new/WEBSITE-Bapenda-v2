import React, { useContext, useState } from 'react'
import { AppContext } from '../context/AppContext'
import axios from 'axios'        // Import axios
import { toast } from 'react-toastify' // Import toast

const MyProfile = () => {
    
    const { userData, setUserData, token, backendUrl, loadUserProfileData } = useContext(AppContext)
    const [isEdit, setIsEdit] = useState(false) 
    
    // --- FUNGSI BARU UNTUK UPDATE ---
    const updateUserProfileData = async () => {
        try {
            // Bungkus data yang mau dikirim
            const formData = new FormData()
            formData.append('name', userData.name)
            formData.append('phone', userData.phone)
            formData.append('address', userData.address)
            formData.append('gender', userData.gender)
            formData.append('dob', userData.dob)
            
            // Kirim ke Backend
            const { data } = await axios.post(backendUrl + '/api/user/update-profile', formData, { headers: { token } })

            if (data.success) {
                toast.success(data.message)
                await loadUserProfileData() // Ambil data terbaru dari server biar sinkron
                setIsEdit(false) // Keluar dari mode edit
            } else {
                toast.error(data.message)
            }

        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }
    }

    return userData && (
        <div className='max-w-lg flex flex-col gap-2 text-sm pt-5'>
            
            {/* ... (Bagian Foto Profil tetap sama) ... */}
             <div className='w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center text-4xl mb-4'>
                {userData.image ? <img className='w-full rounded-full' src={userData.image} /> : "👤"}
            </div>

            {/* ... (Bagian Input Nama tetap sama) ... */}
            {isEdit 
                ? <input className='bg-gray-50 text-3xl font-medium max-w-60 mt-4' type="text" value={userData.name} onChange={e => setUserData(prev => ({...prev, name: e.target.value}))}/>
                : <p className='font-medium text-3xl text-neutral-800 mt-4'>{userData.name}</p>
            }

            <hr className='bg-zinc-400 h-[1px] border-none' />
            
            {/* ... (Bagian Kontak tetap sama) ... */}
             <div>
                <p className='text-neutral-500 underline mt-3'>INFORMASI KONTAK</p>
                <div className='grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700'>
                    <p className='font-medium'>Email:</p>
                    <p className='text-blue-500'>{userData.email}</p>
                    
                    <p className='font-medium'>Telepon:</p>
                    {isEdit 
                        ? <input className='bg-gray-100 max-w-52' type="text" value={userData.phone} onChange={e => setUserData(prev => ({...prev, phone: e.target.value}))}/>
                        : <p className='text-blue-400'>{userData.phone}</p>
                    }

                    <p className='font-medium'>Alamat:</p>
                    {isEdit
                        ? <p>
                            <input className='bg-gray-50' type="text" onChange={(e) => setUserData(prev => ({ ...prev, address: e.target.value }))} value={userData.address} />
                          </p>
                        : <p className='text-gray-500'>{userData.address ? userData.address : "-"}</p>
                    }
                </div>
            </div>

            <div className='mt-10'>
                {
                    isEdit
                    // UBAH ONCLICK DI SINI: Panggil fungsi update, bukan cuma setIsEdit(false)
                    ? <button onClick={updateUserProfileData} className='border border-blue-600 px-8 py-2 rounded-full hover:bg-blue-600 hover:text-white transition-all'>Simpan Perubahan</button>
                    : <button onClick={()=>setIsEdit(true)} className='border border-blue-600 px-8 py-2 rounded-full hover:bg-blue-600 hover:text-white transition-all'>Edit Profil</button>
                }
            </div>

        </div>
    )
}

export default MyProfile