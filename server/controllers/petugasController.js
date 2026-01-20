import petugasModel from "../models/petugasModel.js";

const getPetugasList = async (req, res) => {
    try {
        // Ambil semua petugas, TAPI sembunyikan email dan password
        const petugas = await petugasModel.find({}).select(['-password', '-email']);
        
        res.json({ success: true, petugas });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}

export { getPetugasList };