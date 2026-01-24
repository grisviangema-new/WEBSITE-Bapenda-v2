import { createContext, useEffect, useState } from "react";
import axios from 'axios';
import { toast } from 'react-toastify';

export const AppContext = createContext();

const AppContextProvider = (props) => {

    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    
    // --- STATE MANAGEMENT ---
    const [petugas, setPetugas] = useState([]);
    const [token, setToken] = useState(localStorage.getItem('token') ? localStorage.getItem('token') : false);
    const [userData, setUserData] = useState(false);
    const [announcements, setAnnouncements] = useState([]);

    // --- FUNGSI 1: AMBIL DATA PETUGAS (PUBLIK) ---
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

    // --- FUNGSI 2: AMBIL DATA PROFIL USER (PRIVAT) ---
    const loadUserProfileData = async () => {
        try {
            const token = localStorage.getItem('token');
            if (!token) return; 

            // Kirim token di header agar dikenali backend
            const { data } = await axios.get(backendUrl + '/api/user/get-profile', { headers: { token } })
            
            if (data.success) {
                setUserData(data.userData)
            } else {
                toast.error(data.message)
            }
        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }
    }

    // Tambahkan Fungsi
    const getAnnouncements = async () => {
        try {
            const { data } = await axios.get(backendUrl + '/api/announcement/list');
            if (data.success) {
                setAnnouncements(data.announcements);
            }
        } catch (error) {
            console.log(error);
        }
    }

    // --- USE EFFECT ---
    // 1. Jalan saat pertama kali buka web
    useEffect(() => {
        getPetugasData();
        getAnnouncements();
    }, []);

    // 2. Jalan setiap kali user Login/Logout (Token berubah)
    useEffect(() => {
        if (token) {
            loadUserProfileData()
        } else {
            setUserData(false)
        }
    }, [token])

    // --- VALUE YANG DI-SHARE KE SEMUA HALAMAN ---
    const value = {
        backendUrl,
        petugas, getPetugasData,
        token, setToken,
        userData, setUserData, loadUserProfileData,
        announcements
    }

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider;