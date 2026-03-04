import petugasModel from "../models/petugasModel.js";

const getPetugasList = async (req, res) => {
    try {
        // Sequelize: findAll (Mengambil semua data)
        // Kita exclude password agar tidak terkirim ke frontend untuk keamanan
        const petugas = await petugasModel.findAll({
            attributes: { exclude: ['password'] },
            order: [['nama', 'ASC']] // Opsional: Urutkan berdasarkan nama
        });
        
        res.json({ success: true, petugas });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}

export { getPetugasList };