# 🚀 nimOSApi – API RESTful con Node.js, Express y MongoDB Atlas

![Status](https://img.shields.io/badge/Status-Online-success)
![Node](https://img.shields.io/badge/Node.js-22.x-blue)
![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-green)
![License](https://img.shields.io/badge/License-Academic-lightgrey)

---

# 📚 Índice

1. [Introducción](#introducción)
2. [Tecnologías utilizadas](#tecnologías-utilizadas)
3. [Base de Datos — MongoDB Atlas](#base-de-datos--mongodb-atlas)
4. [Estructura del Proyecto](#estructura-del-proyecto)
5. [Modelos](#🧩-modelos)
6. [Rutas](#🛣️-rutas)
7. [Swagger](#📘-swagger)
8. [Deploy en Render](#🚀-deploy-en-render)
9. [Conclusión](#🎯-conclusión)

---

# Introducción

Este proyecto corresponde a la traducción del backend original **Spring Boot** hacia una arquitectura moderna construida con **Node.js + Express**, respetando toda la lógica, entidades y comportamiento del sistema previo.  
Se desarrolló una API RESTful completa con CRUDs, endpoints especiales, login básico y documentación usando Swagger.  
La base de datos se alojó en **MongoDB Atlas**, mientras que el backend se desplegó en la nube mediante **Render** para acceso público.

---

# Tecnologías utilizadas

- **Node.js + Express**
- **MongoDB Atlas**
- **Mongoose**
- **Swagger UI + swagger-jsdoc**
- **Render (Free Tier)**
- **Paradigma modular (models/routes)** basado en el TO-DO App del profesor Alfredo

---

# Base de Datos — MongoDB Atlas

La base de datos proviene del sistema desarrollado previamente en **Spring Boot**, por lo que las colecciones no fueron rediseñadas.  
Se migraron las entidades originales: productos, movimientos, pedidos, proveedores, sucursales y usuarios.

El objetivo fue mantener compatibilidad funcional entre ambos backends.

Conexión mediante variable de entorno:

```
MONGO_URI=<cadena de conexión de Atlas>
```

---

# Estructura del Proyecto

```
nimos-api/
│── node_modules/
│── src/
│   ├── models/
│   │   ├── movimiento.js
│   │   ├── pedido.js
│   │   ├── producto.js
│   │   ├── proveedor.js
│   │   ├── sucursal.js
│   │   ├── usuario.js
│   ├── routes/
│   │   ├── movimiento.routes.js
│   │   ├── pedido.routes.js
│   │   ├── producto.routes.js
│   │   ├── proveedor.routes.js
│   │   ├── sucursal.routes.js
│   │   ├── usuario.routes.js
│   │   ├── _baseCrud.js
│   ├── swagger.js
│   ├── app.js
│── package.json
│── .env
│── README.md
```

---

# 🧩 Modelos

### 📌 movimiento.js  
Traducción directa de la clase `Movimiento`. Registra envíos, ajustes y movimientos de inventario.

### 📌 pedido.js  
Modelo equivalente a `Pedido` en Spring. Maneja solicitudes, proveedor, cantidad y fecha.

### 📌 producto.js  
Representa inventario, clasificación, precios y stock. Replica el POJO Java original.

### 📌 proveedor.js  
Entidad para proveedores registrados. Conserva estructura del backend previo.

### 📌 sucursal.js  
Esquema para sucursales destinos de envíos o zonas de inventario.

### 📌 usuario.js  
Modelo para login básico: correo, contraseña y rol. Similar al `UsuarioService` del backend en Java.

---

# 🛣️ Rutas

Para evitar código repetitivo, se creó **_baseCrud.js**, que genera automáticamente las operaciones CRUD para cada modelo:

- GET `/`
- GET `/:id`
- POST `/`
- PUT `/:id`
- DELETE `/:id`

### 📌 movimiento.routes.js  
CRUD base para movimientos.

### 📌 pedido.routes.js  
CRUD + crear pedido + actualizar estado (replica `PedidoService`).

### 📌 producto.routes.js  
CRUD + endpoint especial para envío, descuento de stock y registro de movimiento.

### 📌 proveedor.routes.js  
CRUD base.

### 📌 sucursal.routes.js  
CRUD generado automáticamente.

### 📌 usuario.routes.js  
CRUD + login comparando correo y contraseña.

---

# 📘 Swagger

Swagger permite visualizar y probar cada endpoint desde el navegador sin usar Postman.  
La documentación se encuentra en:

```
/api-docs
```

Incluye:
- Productos  
- Movimientos  
- Pedidos  
- Proveedores  
- Sucursales  
- Usuarios  
- Login  
- Envíos especiales  

---

# 🚀 Deploy en Render

El backend se desplegó en **Render** con el plan gratuito.  
Configuración utilizada:

**Build Command:**
```
npm install
```

**Start Command:**
```
node src/app.js
```

**Environment Variables:**
```
MONGO_URI
```

La API final quedó disponible en:

```
https://nimosapi.onrender.com/
```

Endpoint de prueba:
```
GET / → “API NIMOS funcionando”
```

---

## 👨‍💻 Autor

**Alfonso Medina**  
💼 Ingeniería en Tecnologías de la Información y Comunicación  
📧 Contacto: [alfonsomedinaalvarado@gmail.com](alfonsomedinaalvarado@gmail.com)  
💻 GitHub: [Poncho003](https://github.com/Poncho003)

---

## 📜 Licencia

Este proyecto está bajo la licencia **MIT**.
