import mongoose from "mongoose";

const productoSchema = new mongoose.Schema({
    _id: { type: mongoose.Schema.Types.Mixed },
    nombre: String,
    tipo: String,
    clasificacion: String,
    precioCompra: Number,
    precioVenta: Number,
    cantidad: Number,
    proveedorId: String,
    sucursal: String
});

export default mongoose.model("Producto", productoSchema);
