const fs = require("fs");
const path = require("path");

const ruta = path.join(__dirname, "../data/productos.json");

function obtenerProductos() {

    const datos = fs.readFileSync(ruta, "utf8");

    if (!datos) {
        return [];
    }

    return JSON.parse(datos);
}

function guardarProductos(productos) {

    fs.writeFileSync(
        ruta,
        JSON.stringify(productos, null, 2)
    );
}

function crearProducto(producto) {

    const productos = obtenerProductos();

    const nuevoProducto = {
        id: Date.now(),
        nombre: producto.nombre,
        precio: producto.precio,
        stock: producto.stock,
        categoria: producto.categoria
    };

    productos.push(nuevoProducto);

    guardarProductos(productos);

    return nuevoProducto;
}

function actualizarProducto(id, datos) {

    const productos = obtenerProductos();

    const indice = productos.findIndex(
        producto => producto.id === id
    );

    if (indice === -1) {
        return null;
    }

    productos[indice] = {
        ...productos[indice],
        ...datos
    };

    guardarProductos(productos);

    return productos[indice];
}

function eliminarProducto(id) {

    const productos = obtenerProductos();

    const nuevosProductos = productos.filter(
        producto => producto.id !== id
    );

    if (nuevosProductos.length === productos.length) {
        return false;
    }

    guardarProductos(nuevosProductos);

    return true;
}

module.exports = {
    obtenerProductos,
    crearProducto,
    actualizarProducto,
    eliminarProducto
};