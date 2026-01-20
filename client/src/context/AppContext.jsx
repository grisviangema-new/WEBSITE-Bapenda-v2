import { createContext, useEffect, useState } from "react";
import axios from 'axios';
import { toast } from 'react-toastify';

export const AppContext = createContext();

const AppContextProvider = (props) => {

    const [petugas, setPetugas] = useState([]);
    const backendUrl = import.meta.env.VITE_BACKEND_URL;

    const getPetugasData = async () => {
        try {
            // Panggil API Publik yang baru kita buat
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

    // Jalankan fungsi ini saat website pertama kali dibuka
    useEffect(() => {
        getPetugasData();
    }, []);

    const value = {
        petugas, backendUrl // Data ini bisa dipakai di mana saja
    }

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider;