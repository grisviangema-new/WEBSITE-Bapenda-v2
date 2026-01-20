import { createContext, useEffect, useState } from "react";
import axios from 'axios';
import { toast } from 'react-toastify';

export const AppContext = createContext();

const AppContextProvider = (props) => {

    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    const [petugas, setPetugas] = useState([]);
    
    // 1. Tambahkan State Token & User Data
    const [token, setToken] = useState(localStorage.getItem('token') ? localStorage.getItem('token') : false);
    const [userData, setUserData] = useState(false);

    // Fungsi Ambil Data Petugas (Public)
    const getPetugasData = async () => {
        try {
            const { data } = await axios.get(backendUrl + '/api/petugas/list');
            if (data.success) {
                setPetugas(data.petugas);
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error(error.message);
        }
    }

    // 2. Fungsi Load User Data (Dipanggil saat login) - Nanti kita buat APInya
    const loadUserProfileData = async () => {
        // Untuk sementara kosong dulu, nanti kita isi
    }

    useEffect(() => {
        getPetugasData();
    }, []);

    // 3. Masukkan token & setToken ke value
    const value = {
        petugas, backendUrl,
        token, setToken,
        userData, setUserData, loadUserProfileData
    }

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider;