import mongoose from "mongoose";

const newsSchema = new mongoose.Schema({
    title: { type: String, required: true },
    category: { type: String, default: "Umum" },
    content: { type: String, required: true },
    date: { type: Date, default: Date.now },
    image: { type: String, default: "" } // <--- TAMBAHKAN INI
});

const newsModel = mongoose.models.news || mongoose.model("news", newsSchema);

export default newsModel;