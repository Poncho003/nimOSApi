import express from "express";

export function buildCrudRoutes(Model) {
    const router = express.Router();

    // Crear
    router.post("/", async (req, res) => {
        try {
            const item = await Model.create(req.body);
            res.status(201).json(item);
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    });

    // Listar todos
    router.get("/", async (req, res) => {
        try {
            const items = await Model.find();
            res.json(items);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    });

    // Obtener por ID
    router.get("/:id", async (req, res) => {
        try {
            const item = await Model.findById(req.params.id);
            if (!item) return res.status(404).json({ error: "No encontrado" });
            res.json(item);
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    });

    // Actualizar
    router.put("/:id", async (req, res) => {
        try {
            const item = await Model.findByIdAndUpdate(
                req.params.id,
                req.body,
                { new: true }
            );
            if (!item) return res.status(404).json({ error: "No encontrado" });
            res.json(item);
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    });

    // Eliminar
    router.delete("/:id", async (req, res) => {
        try {
            const item = await Model.findByIdAndDelete(req.params.id);
            if (!item) return res.status(404).json({ error: "No encontrado" });
            res.json({ mensaje: "Eliminado correctamente" });
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    });

    return router;
}
