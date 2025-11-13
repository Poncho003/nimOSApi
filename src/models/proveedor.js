import mongoose from "mongoose";

const proveedorSchema = new mongoose.Schema({
    _id: { type: String },
    nombre: String,
    contacto: String,
    telefono: String,
    direccion: String
});

export default mongoose.model("Proveedor", proveedorSchema, "proveedores");
