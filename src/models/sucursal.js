import mongoose from "mongoose";

const sucursalSchema = new mongoose.Schema({
    _id: { type: mongoose.Schema.Types.Mixed },
    nombre: String,
    direccion: String,
    encargado: String
});

export default mongoose.model("Sucursal", sucursalSchema);
