import mongoose from "mongoose";

const movimientoSchema = new mongoose.Schema({
    _id: { type: String },  // <-- ID STRING
    usuarioId: String,
    proveedorId: String,
    fecha: Date,
    productos: [
        {
            _id: { type: mongoose.Schema.Types.Mixed },
            nombre: String,
            cantidad: Number,
            tipo: String,
            precioCompra: Number,
            precioVenta: Number,
            proveedorId: String,
            sucursal: String
        }
    ],
    estado: String
});

export default mongoose.model("Movimiento", movimientoSchema);
