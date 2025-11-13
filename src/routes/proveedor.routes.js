import Proveedor from "../models/proveedor.js";
import { buildCrudRoutes } from "./_baseCrud.js";

/**
 * @swagger
 * tags:
 *   name: Proveedores
 *   description: CRUD de proveedores
 */

/**
 * @swagger
 * /api/proveedores:
 *   get:
 *     summary: Obtener todos los proveedores
 *     tags: [Proveedores]
 *     responses:
 *       200:
 *         description: Lista de todos los proveedores
 */

/**
 * @swagger
 * /api/proveedores/{id}:
 *   get:
 *     summary: Obtener un proveedor por ID
 *     tags: [Proveedores]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del proveedor
 *     responses:
 *       200:
 *         description: Proveedor encontrado
 *       404:
 *         description: No existe un proveedor con ese ID
 */

/**
 * @swagger
 * /api/proveedores:
 *   post:
 *     summary: Registrar un nuevo proveedor
 *     tags: [Proveedores]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *               contacto:
 *                 type: string
 *               telefono:
 *                 type: string
 *               direccion:
 *                 type: string
 *     responses:
 *       201:
 *         description: Proveedor registrado correctamente
 */

/**
 * @swagger
 * /api/proveedores/{id}:
 *   put:
 *     summary: Actualizar un proveedor por ID
 *     tags: [Proveedores]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del proveedor
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       200:
 *         description: Proveedor actualizado
 *       404:
 *         description: Proveedor no encontrado
 */

/**
 * @swagger
 * /api/proveedores/{id}:
 *   delete:
 *     summary: Eliminar un proveedor por ID
 *     tags: [Proveedores]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Proveedor eliminado correctamente
 *       404:
 *         description: No existe un proveedor con ese ID
 */

export default buildCrudRoutes(Proveedor);
