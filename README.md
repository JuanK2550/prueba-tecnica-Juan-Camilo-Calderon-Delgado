# Sistema de Gestión de Productos

Este proyecto consiste en una aplicación CRUD para la gestión de productos, desarrollada como parte de una prueba técnica. Permite registrar, consultar, actualizar y eliminar productos mediante una interfaz web sencilla conectada a una API creada con Node.js y Express. La información se almacena en un archivo JSON, lo que facilita el manejo de los datos sin necesidad de configurar una base de datos.

## Tecnologías utilizadas

- Node.js
- Express
- HTML5
- CSS3
- JavaScript
- JSON

## Funcionalidades

- Registrar nuevos productos.
- Visualizar la lista de productos registrados.
- Editar la información de un producto.
- Eliminar productos.
- Validar que el precio y el stock no sean valores negativos.

## Instalación y ejecución

1. Clonar o descargar el proyecto.
2. Abrir una terminal y entrar a la carpeta **backend**.

```bash
cd backend
```

3. Instalar las dependencias.

```bash
npm install
```

4. Iniciar el servidor.

```bash
node app.js
```

5. Abrir el archivo **frontend/index.html** con Live Server o directamente desde el navegador.

## Organización del proyecto

El proyecto está dividido en dos partes principales:

- **backend:** contiene las rutas, controladores, servicios y el archivo JSON donde se almacenan los productos.
- **frontend:** contiene la interfaz desarrollada con HTML, CSS y JavaScript encargada de consumir la API y mostrar la información al usuario.

Esta estructura permite mantener una separación entre la lógica del servidor y la interfaz, haciendo el código más organizado y fácil de mantener.

## Dificultad

Con estilo BLACKPINK.
