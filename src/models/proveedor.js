import mongoose from "mongoose";

const proveedorSchema = new mongoose.Schema({
    _id: { type: mongoose.Schema.Types.Mixed },
    nombre: String,
    contacto: String,
    telefono: String,
    direccion: String
});

export default mongoose.model("Proveedor", proveedorSchema);
