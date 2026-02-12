import { createContext, useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom"; // Opsional, untuk redirect paksa

export const AdminContext = createContext();

const AdminContextProvider = (props) => {

    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    
    // State
    const [aToken, setAToken] = useState(localStorage.getItem('aToken') ? localStorage.getItem('aToken') : '');
    const [petugas, setPetugas] = useState([]);
    const [dashData, setDashData] = useState(false); 
    const [announcements, setAnnouncements] = useState([]);
    const [newsList, setNewsList] = useState([]);
    const [downloads, setDownloads] = useState([])

    // --- 1. FUNGSI LOGOUT (Dipakai Satpam) ---
    const forceLogout = () => {
        console.log("Melakukan Logout Otomatis...");
        setAToken('');
        localStorage.removeItem('aToken');
        toast.error("Sesi Habis. Silakan Login Ulang.");
    }

    // --- 2. SATPAM OTOMATIS (INTERCEPTOR) ---
    // Kode ini akan jalan sekali saat aplikasi dibuka.
    // Dia memantau SEMUA request axios di file ini.
    useEffect(() => {
        // Membuat Pencegat Respon
        const interceptor = axios.interceptors.response.use(
            (response) => {
                // Cek jika server menjawab sukses (200 OK) TAPI isinya pesan error token
                if (response.data && (response.data.message === "jwt expired" || response.data.message === "invalid token")) {
                    forceLogout();
                    // Kita 'reject' agar fungsi pemanggil (getAllPetugas) berhenti dan tidak lanjut
                    return Promise.reject(new Error("Session Expired")); 
                }
                return response;
            },
            (error) => {
                // Cek jika server menjawab error HTTP (401/403/500)
                if (error.response && error.response.data && error.response.data.message === "jwt expired") {
                    forceLogout();
                }
                return Promise.reject(error);
            }
        );

        // Bersihkan satpam saat komponen mati (agar tidak numpuk)
        return () => {
            axios.interceptors.response.eject(interceptor);
        };
    }, []); // Array kosong artinya dijalankan sekali di awal

    // --- 3. FUNGSI API (JADI LEBIH BERSIH) ---
    // Lihat! Kita TIDAK PERLU lagi menulis "if jwt expired" di setiap fungsi di bawah ini.
    // Satpam di atas sudah menanganinya.

    const getAllPetugas = async () => {
        try {
            const { data } = await axios.get(backendUrl + '/api/admin/all-petugas', { headers: { aToken } });
            if (data.success) {
                setPetugas(data.petugas);
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            // Error expired sudah ditangkap Interceptor, jadi di sini cuma handle error lain
            if(error.message !== "Session Expired") toast.error(error.message);
        }
    }

    const changeAvailability = async (docId) => {
        try {
            const { data } = await axios.post(backendUrl + '/api/admin/change-availability', { docId }, { headers: { aToken } })
            if (data.success) {
                toast.success(data.message);
                getAllPetugas();
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            if(error.message !== "Session Expired") toast.error(error.message);
        }
    }

    const getDashData = async () => {
        try {
            const { data } = await axios.get(backendUrl + '/api/admin/dashboard', { headers: { aToken } })
            if (data.success) {
                setDashData(data.dashData)
            } else {
                toast.error(data.message)
            }
        } catch (error) {
            if(error.message !== "Session Expired") toast.error(error.message);
        }
    }

    const getAnnouncements = async () => {
        try {
            const { data } = await axios.get(backendUrl + '/api/announcement/list');
            if (data.success) setAnnouncements(data.announcements);
        } catch (error) {
            toast.error(error.message);
        }
    }

    const getNewsList = async () => {
        try {
            const { data } = await axios.get(backendUrl + '/api/news/list');
            if (data.success) setNewsList(data.news);
        } catch (error) {
            toast.error(error.message);
        }
    }

    const getDownloads = async () => {
        try {
            // Memanggil API yang sudah kita buat di backend
            const { data } = await axios.get(backendUrl + '/api/download/all')
            
            if (data.success) {
                setDownloads(data.downloads) // Simpan data ke state
                console.log("Data Downloads:", data.downloads) // Cek di console
            } else {
                toast.error(data.message)
            }
        } catch (error) {
            toast.error(error.message)
        }
    }

    const value = {
        aToken, setAToken,
        backendUrl,
        petugas, getAllPetugas,
        changeAvailability,
        dashData, getDashData, 
        announcements, getAnnouncements,
        newsList, getNewsList,
        forceLogout,
        downloads, setDownloads, getDownloads
    }

    return (
        <AdminContext.Provider value={value}>
            {props.children}
        </AdminContext.Provider>
    )
}

export default AdminContextProvider;