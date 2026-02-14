import petugasModel from "../models/petugasModel.js";

const getPetugasList = async (req, res) => {
    try {
        const petugas = await petugasModel.find({});      
        res.json({ success: true, petugas });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}

export { getPetugasList };