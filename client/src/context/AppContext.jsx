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
    const [newsList, setNewsList] = useState([]);
    const [downloads, setDownloads] = useState([]); // State untuk Dokumen
    const [headerContent, setHeaderContent] = useState(null);

    // --- FUNGSI 1: AMBIL DATA PETUGAS (PUBLIK) ---
    const getPetugasData = async () => {
        try {
            const { data } = await axios.get(`${backendUrl}/api/petugas/list`);
            if (data.success) {
                setPetugas(data.petugas);
            }
        } catch (error) {
            console.log(error);
        }
    }

    // --- FUNGSI 2: AMBIL DATA PROFIL USER (PRIVAT) ---
    const loadUserProfileData = async () => {
        try {
            if (!token) return; 

            const { data } = await axios.get(`${backendUrl}/api/user/get-profile`, { headers: { token } })
            
            if (data.success) {
                setUserData(data.userData)
            } else {
                if (data.message === 'jwt expired') {
                    logout();
                    toast.error("Sesi habis, silakan login ulang");
                }
            }
        } catch (error) {
            console.log(error)
            if (error.response?.data?.message === 'jwt expired') logout();
        }
    }

    // --- FUNGSI 3: AMBIL PENGUMUMAN ---
    const getAnnouncements = async () => {
        try {
            const { data } = await axios.get(`${backendUrl}/api/announcement/list`);
            if (data.success) setAnnouncements(data.announcements);
        } catch (error) {
            console.log(error);
        }
    }

    // --- FUNGSI 4: AMBIL BERITA ---
    const getNewsList = async () => {
        try {
            const { data } = await axios.get(`${backendUrl}/api/news/list`);
            if (data.success) setNewsList(data.news);
        } catch (error) { console.log(error); }
    }

    // --- FUNGSI 5: AMBIL DOKUMEN UNDUHAN ---
    const getDownloads = async () => {
        try {
            const { data } = await axios.get(`${backendUrl}/api/download/list`);
            if (data.success) setDownloads(data.downloads);
        } catch (error) {
            console.log(error);
        }
    }

    // --- FUNGSI 6: AMBIL HEADER CONTENT ---
    const getHeaderContent = async () => {
        try {
            const { data } = await axios.get(`${backendUrl}/api/content/get`)
            if (data.success) setHeaderContent(data.content)
        } catch (error) {
            console.log(error)
        }
    }

    // --- HELPER: LOGOUT ---
    const logout = () => {
        setToken(false);
        setUserData(false);
        localStorage.removeItem('token');
    }

    // --- USE EFFECT ---
    useEffect(() => {
        getPetugasData();
        getAnnouncements();
        getNewsList();
        getDownloads(); // Panggil data download
        getHeaderContent();
    }, []);

    useEffect(() => {
        if (token) {
            loadUserProfileData()
        } else {
            setUserData(false)
        }
    }, [token])

    // --- VALUE SHARE ---
    const value = {
        backendUrl,
        petugas, getPetugasData,
        token, setToken,
        userData, setUserData, loadUserProfileData,
        announcements, getAnnouncements,
        newsList, getNewsList,
        downloads, getDownloads, // Share data unduhan
        headerContent, getHeaderContent,
        logout
    }

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider;