import mongoose from "mongoose";

const pedidoSchema = new mongoose.Schema({
    _id: { type: String },
    productoId: String,
    nombreProducto: String,
    proveedorId: String,
    cantidadSolicitada: Number,
    estado: String,
    fechaSolicitud: Date
});

export default mongoose.model("Pedido", pedidoSchema);
