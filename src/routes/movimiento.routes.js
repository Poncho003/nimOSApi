import Movimiento from "../models/movimiento.js";
import { buildCrudRoutes } from "./_baseCrud.js";

/**
 * @swagger
 * tags:
 *   name: Movimientos
 *   description: Registro de movimientos (envíos, ajustes, operaciones del inventario)
 */

/**
 * @swagger
 * /api/movimientos:
 *   get:
 *     summary: Obtener todos los movimientos
 *     tags: [Movimientos]
 *     responses:
 *       200:
 *         description: Lista de todos los movimientos registrados
 */

/**
 * @swagger
 * /api/movimientos/{id}:
 *   get:
 *     summary: Obtener un movimiento por ID
 *     tags: [Movimientos]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del movimiento
 *     responses:
 *       200:
 *         description: Movimiento encontrado
 *       404:
 *         description: No existe un movimiento con ese ID
 */

/**
 * @swagger
 * /api/movimientos:
 *   post:
 *     summary: Registrar un nuevo movimiento (CRUD general)
 *     tags: [Movimientos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               usuarioId:
 *                 type: string
 *               proveedorId:
 *                 type: string
 *               fecha:
 *                 type: string
 *                 format: date-time
 *               productos:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     _id:
 *                       type: string
 *                     nombre:
 *                       type: string
 *                     cantidad:
 *                       type: number
 *               estado:
 *                 type: string
 *     responses:
 *       201:
 *         description: Movimiento registrado correctamente
 */

/**
 * @swagger
 * /api/movimientos/{id}:
 *   put:
 *     summary: Actualizar un movimiento por ID
 *     tags: [Movimientos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del movimiento
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       200:
 *         description: Movimiento actualizado
 *       404:
 *         description: Movimiento no encontrado
 */

/**
 * @swagger
 * /api/movimientos/{id}:
 *   delete:
 *     summary: Eliminar un movimiento por ID
 *     tags: [Movimientos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Movimiento eliminado correctamente
 *       404:
 *         description: No existe un movimiento con ese ID
 */

export default buildCrudRoutes(Movimiento);