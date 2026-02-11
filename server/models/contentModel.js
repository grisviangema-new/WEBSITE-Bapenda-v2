import mongoose from "mongoose";

const contentSchema = new mongoose.Schema({
    headerTitle: { type: String, default: "Selamat Datang di Bapenda" },
    headerDesc: { type: String, default: "Portal resmi pelayanan pajak daerah." },
    headerImage: { type: String, default: "" } // URL Cloudinary
});

const contentModel = mongoose.models.content || mongoose.model("content", contentSchema);

export default contentModel;