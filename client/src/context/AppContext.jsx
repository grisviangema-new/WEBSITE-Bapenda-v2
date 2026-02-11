import { createContext, useEffect, useState } from "react";
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";

export const AppContext = createContext();

const AppContextProvider = (props) => {

    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    
    // --- STATE MANAGEMENT ---
    const [petugas, setPetugas] = useState([]);
    const [token, setToken] = useState(localStorage.getItem('token') ? localStorage.getItem('token') : false);
    const [userData, setUserData] = useState(false);
    const [announcements, setAnnouncements] = useState([]);
    const [newsList, setNewsList] = useState([]);
    const [headerContent, setHeaderContent] = useState(null) // State baru

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
            
            // Cek apakah expired?
            if (data.success) {
                setUserData(data.userData)
            } else {
                // Panggil pengecekan di sini
                if (data.message === 'jwt expired') {
                    setToken(false);
                    localStorage.removeItem('token');
                    toast.error("Sesi habis, silakan login ulang");
                } else {
                    toast.error(data.message)
                }
            }
        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }
    }

    //Fungsi mengambil pengumuman pop-up
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

    // Fungsui mengambil berita
    const getNewsList = async () => {
        try {
            const { data } = await axios.get(backendUrl + '/api/news/list');
            if (data.success) setNewsList(data.news);
        } catch (error) { console.log(error); }
    }

    // Fungsi mengambil content header
    const getHeaderContent = async () => {
        try {
            const { data } = await axios.get(backendUrl + '/api/content/get')
            if (data.success) {
                setHeaderContent(data.content)
            }
        } catch (error) {
            console.log(error)
        }
    }

    // --- FUNGSI CEK LOGOUT OTOMATIS ---
    const checkTokenExpiration = (error, data) => {
        // Jika server bilang token expired atau malformed
        if (data?.message === "jwt expired" || error?.response?.data?.message === "jwt expired") {
            toast.error("Sesi habis, silakan login kembali.");
            setToken(false);
            localStorage.removeItem('token');
            setUserData(false);
            return true; // Sesi habis
        }
        return false; // Sesi aman
    }


    // --- USE EFFECT ---
    // 1. Jalan saat pertama kali buka web
    useEffect(() => {
        getPetugasData();
        getAnnouncements();
        getNewsList();
        getHeaderContent();
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
        announcements,
        newsList,
        headerContent
    }

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider;