import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const swaggerDefinition = {
    openapi: "3.0.0",
    info: {
        title: "API REST nimOS",
        version: "1.0.0",
        description: "Documentación oficial de la API para el sistema nimOS. Incluye CRUD de productos, proveedores, sucursales, movimientos y pedidos."
    },
    servers: [
        {
            url: "http://localhost:4000",
            description: "Servidor local"
        }
    ]
};

const options = {
    swaggerDefinition,
    apis: ["./src/routes/*.js"],
};

const swaggerSpec = swaggerJSDoc(options);

export function swaggerDocs(app) {
    app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
}
