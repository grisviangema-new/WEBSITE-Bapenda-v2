import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true }, // Email tidak boleh kembar
    password: { type: String, required: true },
    image: { type: String, default: "" }, // Foto profil (opsional)
    address: { type: String, default: "" },
    gender: { type: String, default: "Not Selected" },
    dob: { type: String, default: "Not Selected" }, // Tanggal Lahir
    phone: { type: String, default: "0000000000" }
});

// Gunakan model yang sudah ada atau buat baru
const userModel = mongoose.models.user || mongoose.model("user", userSchema);

export default userModel;