import express from "express";
import Usuario from "../models/usuario.js";
import { buildCrudRoutes } from "./_baseCrud.js";

const router = buildCrudRoutes(Usuario);

// -------------------- LOGIN --------------------
router.post("/login", async (req, res) => {
    try {
        const { correo, password } = req.body;

        if (!correo || !password) {
            return res.status(400).json({ error: "Correo y password son obligatorios" });
        }

        const usuario = await Usuario.findOne({ correo });

        if (!usuario) {
            return res.status(404).json({ error: "Usuario no encontrado" });
        }

        if (usuario.password !== password) {
            return res.status(401).json({ error: "Contraseña incorrecta" });
        }

        res.json({
            mensaje: "Login correcto",
            usuario: {
                id: usuario._id,
                correo: usuario.correo,
                rol: usuario.rol
            }
        });

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

export default router;
