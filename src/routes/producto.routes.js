import Producto from "../models/producto.js";
import Movimiento from "../models/movimiento.js";
import { buildCrudRoutes } from "./_baseCrud.js";

/**
 * @swagger
 * tags:
 *   name: Productos
 *   description: Endpoints para gestión de productos
 */

/**
* @swagger
* /api/productos:
*   get:
*     summary: Obtener todos los productos
*     tags: [Productos]
*     responses:
*       200:
*         description: Lista completa de productos
*/

/**
 * @swagger
 * /api/productos/{id}:
 *   get:
 *     summary: Obtener un producto por ID
 *     tags: [Productos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del producto
 *     responses:
 *       200:
 *         description: Producto encontrado
 *       404:
 *         description: Producto no existe
 */

/**
 * @swagger
 * /api/productos:
 *   post:
 *     summary: Crear un nuevo producto
 *     tags: [Productos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *               tipo:
 *                 type: string
 *               clasificacion:
 *                 type: string
 *               precioCompra:
 *                 type: number
 *               precioVenta:
 *                 type: number
 *               cantidad:
 *                 type: number
 *               proveedorId:
 *                 type: string
 *               sucursal:
 *                 type: string
 *     responses:
 *       201:
 *         description: Producto creado correctamente
 */

/**
 * @swagger
 * /api/productos/{id}:
 *   put:
 *     summary: Actualizar un producto por ID
 *     tags: [Productos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del producto
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       200:
 *         description: Producto actualizado
 *       404:
 *         description: Producto no encontrado
 */

/**
 * @swagger
 * /api/productos/{id}:
 *   delete:
 *     summary: Eliminar un producto por ID
 *     tags: [Productos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del producto
 *     responses:
 *       200:
 *         description: Producto eliminado correctamente
 *       404:
 *         description: Producto no encontrado
 */


/**
 * @swagger
 * /api/productos/enviar:
 *   post:
 *     summary: Enviar un producto a una sucursal (registra movimiento y descuenta stock)
 *     tags: [Productos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               productoId:
 *                 type: string
 *               cantidad:
 *                 type: number
 *               sucursalDestino:
 *                 type: string
 *               usuarioId:
 *                 type: string
 *                 default: "u2"
 *     responses:
 *       200:
 *         description: Movimiento creado y stock actualizado
 *       400:
 *         description: Stock insuficiente o datos inválidos
 *       404:
 *         description: Producto no encontrado
 */

const router = buildCrudRoutes(Producto);

// -------------------- LÓGICA ESPECIAL: ENVIAR PRODUCTO --------------------
router.post("/enviar", async (req, res) => {
    try {
        const { productoId, cantidad, sucursalDestino, usuarioId = "u2" } = req.body;

        const producto = await Producto.findById(productoId);
        if (!producto) return res.status(404).json({ error: "Producto no encontrado" });

        if (producto.cantidad < cantidad)
            return res.status(400).json({ error: "Stock insuficiente" });

        producto.cantidad -= cantidad;
        await producto.save();

        const totalMov = await Movimiento.countDocuments();
        const nuevoId = "mov" + (totalMov + 1);

        const movimiento = await Movimiento.create({
            _id: nuevoId,
            usuarioId,
            proveedorId: producto.proveedorId,
            fecha: new Date(),
            productos: [
                {
                    _id: producto._id,
                    nombre: producto.nombre,
                    cantidad
                }
            ],
            estado: "ENVIADO",
            sucursalDestino
        });

        res.json({
            mensaje: "Movimiento registrado y stock actualizado",
            movimiento,
            stockActual: producto.cantidad
        });

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

export default router;
