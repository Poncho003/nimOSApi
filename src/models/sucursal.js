import mongoose from "mongoose";

const sucursalSchema = new mongoose.Schema({
    _id: { type: String },
    nombre: String,
    direccion: String,
    encargado: String
});

export default mongoose.model("Sucursal", sucursalSchema, "sucursales");
