import Sucursal from "../models/sucursal.js";
import { buildCrudRoutes } from "./_baseCrud.js";

/**
 * @swagger
 * tags:
 *   name: Sucursales
 *   description: CRUD de sucursales
 */

/**
 * @swagger
 * /api/sucursales:
 *   get:
 *     summary: Obtener todas las sucursales
 *     tags: [Sucursales]
 *     responses:
 *       200:
 *         description: Lista de todas las sucursales
 */

/**
 * @swagger
 * /api/sucursales/{id}:
 *   get:
 *     summary: Obtener una sucursal por ID
 *     tags: [Sucursales]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de la sucursal
 *     responses:
 *       200:
 *         description: Sucursal encontrada
 *       404:
 *         description: No existe una sucursal con ese ID
 */

/**
 * @swagger
 * /api/sucursales:
 *   post:
 *     summary: Registrar una nueva sucursal
 *     tags: [Sucursales]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *               direccion:
 *                 type: string
 *               encargado:
 *                 type: string
 *     responses:
 *       201:
 *         description: Sucursal registrada correctamente
 */

/**
 * @swagger
 * /api/sucursales/{id}:
 *   put:
 *     summary: Actualizar una sucursal por ID
 *     tags: [Sucursales]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de la sucursal
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       200:
 *         description: Sucursal actualizada
 *       404:
 *         description: Sucursal no encontrada
 */

/**
 * @swagger
 * /api/sucursales/{id}:
 *   delete:
 *     summary: Eliminar una sucursal por ID
 *     tags: [Sucursales]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Sucursal eliminada correctamente
 *       404:
 *         description: No existe una sucursal con ese ID
 */

export default buildCrudRoutes(Sucursal);
