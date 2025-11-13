import mongoose from "mongoose";

const usuarioSchema = new mongoose.Schema({
    _id: { type: mongoose.Schema.Types.Mixed },
    correo: String,
    password: String,
    rol: String
});

export default mongoose.model("Usuario", usuarioSchema);
