import { createContext, useState } from "react";

// 1. Buat Wadahnya
export const AdminContext = createContext();

const AdminContextProvider = (props) => {

    // Ambil token dari memori browser (agar kalau di-refresh tidak logout)
    const [aToken, setAToken] = useState(localStorage.getItem('aToken') ? localStorage.getItem('aToken') : '');

    // Alamat backend diambil dari .env
    const backendUrl = import.meta.env.VITE_BACKEND_URL;

    // Data yang bisa diakses oleh semua halaman
    const value = {
        aToken, setAToken,
        backendUrl,
    }

    // 2. Bungkus aplikasi dengan wadah ini
    return (
        <AdminContext.Provider value={value}>
            {props.children}
        </AdminContext.Provider>
    )
}

export default AdminContextProvider;