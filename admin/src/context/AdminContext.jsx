import { createContext, useState } from "react";
import axios from 'axios'; // Pastikan import axios
import { toast } from 'react-toastify'; // Pastikan import toast

// 1. Buat Wadahnya
export const AdminContext = createContext();

const AdminContextProvider = (props) => {

    // Ambil token dari memori browser (agar kalau di-refresh tidak logout)
    const [aToken, setAToken] = useState(localStorage.getItem('aToken') ? localStorage.getItem('aToken') : '');
    
    const [petugas, setPetugas] = useState([]) // <--- State untuk menyimpan list petugas

    // Fungsi mengambil data dari Server
    const getAllPetugas = async () => {
        try {
            const { data } = await axios.post(backendUrl + '/api/admin/all-petugas', {}, { headers: { aToken } })
            
            if (data.success) {
                setPetugas(data.petugas)
                console.log(data.petugas) // Cek di console browser nanti
            } else {
                toast.error(data.message)
            }
        } catch (error) {
            toast.error(error.message)
        }
    }

    // Alamat backend diambil dari .env
    const backendUrl = import.meta.env.VITE_BACKEND_URL;

    // Data yang bisa diakses oleh semua halaman
    const value = {
        aToken, setAToken,
        backendUrl,
        petugas, getAllPetugas // <--- Masukkan ke value agar bisa dipakai
    }

    // 2. Bungkus aplikasi dengan wadah ini
    return (
        <AdminContext.Provider value={value}>
            {props.children}
        </AdminContext.Provider>
    )
}

export default AdminContextProvider;