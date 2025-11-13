import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import { swaggerDocs } from "./swagger.js";
import productoRoutes from "./routes/producto.routes.js";
import proveedorRoutes from "./routes/proveedor.routes.js";
import sucursalRoutes from "./routes/sucursal.routes.js";
import pedidoRoutes from "./routes/pedido.routes.js";
import movimientoRoutes from "./routes/movimiento.routes.js";
import usuarioRoutes from "./routes/usuario.routes.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

// Ruta de prueba
app.get("/", (req, res) => {
    res.send("API NIMOS funcionando");
});

// Rutas REST correctas
app.use("/api/productos", productoRoutes);
app.use("/api/proveedores", proveedorRoutes);
app.use("/api/sucursales", sucursalRoutes);
app.use("/api/pedidos", pedidoRoutes);
app.use("/api/movimientos", movimientoRoutes);
app.use("/api/usuarios", usuarioRoutes);
swaggerDocs(app);

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("Conectado a MongoDB Atlas");
        app.listen(process.env.PORT || 4000, () => {
            console.log("Servidor en puerto", process.env.PORT || 4000);
        });
    })
    .catch(err => console.error("Error al conectar:", err));
