import express from "express";
import Pedido from "../models/pedido.js";
import Producto from "../models/producto.js";
import { buildCrudRoutes } from "./_baseCrud.js";

const router = buildCrudRoutes(Pedido);

/**
 * @swagger
 * tags:
 *   name: Pedidos
 *   description: Gestión de pedidos de proveedores
 */

/**
 * @swagger
 * /api/pedidos:
 *   get:
 *     summary: Obtener todos los pedidos
 *     tags: [Pedidos]
 *     responses:
 *       200:
 *         description: Lista de pedidos
 */

/**
 * @swagger
 * /api/pedidos/{id}:
 *   get:
 *     summary: Obtener un pedido por ID
 *     tags: [Pedidos]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del pedido
 *     responses:
 *       200:
 *         description: Pedido encontrado
 *       404:
 *         description: Pedido no existe
 */

/**
 * @swagger
 * /api/pedidos:
 *   post:
 *     summary: Crear un pedido (CRUD general)
 *     tags: [Pedidos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       201:
 *         description: Pedido creado
 */

/**
 * @swagger
 * /api/pedidos/{id}:
 *   put:
 *     summary: Actualizar pedido por ID (CRUD general)
 *     tags: [Pedidos]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       200:
 *         description: Pedido actualizado
 *       404:
 *         description: Pedido no encontrado
 */

/**
 * @swagger
 * /api/pedidos/{id}:
 *   delete:
 *     summary: Eliminar un pedido por ID
 *     tags: [Pedidos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Pedido eliminado
 *       404:
 *         description: No existe ese pedido
 */

/**
 * @swagger
 * /api/pedidos/crear:
 *   post:
 *     summary: Crear pedido especial (automatizado, estilo Java)
 *     tags: [Pedidos]
 *     description: Genera ID pedX, valida producto y registra pedido Pendiente.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               productoId:
 *                 type: string
 *               proveedorId:
 *                 type: string
 *               cantidad:
 *                 type: number
 *     responses:
 *       200:
 *         description: Pedido creado correctamente
 *       404:
 *         description: Producto no encontrado
 */

/**
 * @swagger
 * /api/pedidos/{id}/estado:
 *   put:
 *     summary: Actualizar estado de un pedido
 *     tags: [Pedidos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               estado:
 *                 type: string
 *     responses:
 *       200:
 *         description: Estado actualizado
 *       404:
 *         description: Pedido no encontrado
 */

// -------------------- generar ID tipo pedX --------------------
async function generarIdPedido() {
    const total = await Pedido.countDocuments();
    return "ped" + (total + 1);
}

// -------------------- Crear solicitud de pedido --------------------
router.post("/crear", async (req, res) => {
    try {
        const { productoId, proveedorId, cantidad } = req.body;

        const producto = await Producto.findById(productoId);
        if (!producto) {
            return res.status(404).json({ error: "Producto no encontrado" });
        }

        const nuevoId = await generarIdPedido();

        const pedido = await Pedido.create({
            _id: nuevoId,
            productoId: producto._id,
            nombreProducto: producto.nombre,
            proveedorId,
            cantidadSolicitada: cantidad,
            estado: "Pendiente",
            fechaSolicitud: new Date()
        });

        res.json({
            mensaje: "Pedido creado correctamente",
            pedido
        });

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// -------------------- Actualizar estado --------------------
router.put("/:id/estado", async (req, res) => {
    try {
        const { id } = req.params;
        const { estado } = req.body;

        const pedido = await Pedido.findById(id);
        if (!pedido) {
            return res.status(404).json({ error: "Pedido no encontrado" });
        }

        pedido.estado = estado;
        await pedido.save();

        res.json({
            mensaje: "Estado actualizado",
            pedido
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

export default router;
