const productoService = require("../services/productoService");

function obtenerProductos(req, res) {
    const productos = productoService.obtenerProductos();
    res.json(productos);
}

function crearProducto(req, res) {

    const { nombre, precio, stock, categoria } = req.body;

    if (!nombre || !categoria) {
        return res.status(400).json({
            mensaje: "Nombre y categoría son obligatorios"
        });
    }

    if (precio < 0) {
        return res.status(400).json({
            mensaje: "El precio no puede ser negativo"
        });
    }

    if (stock < 0) {
        return res.status(400).json({
            mensaje: "El stock no puede ser negativo"
        });
    }

    const nuevoProducto = productoService.crearProducto({
        nombre,
        precio,
        stock,
        categoria
    });

    res.status(201).json(nuevoProducto);
}

function actualizarProducto(req, res) {

    const id = Number(req.params.id);

    const productoActualizado = productoService.actualizarProducto(
        id,
        req.body
    );

    if (!productoActualizado) {
        return res.status(404).json({
            mensaje: "Producto no encontrado"
        });
    }

    res.json(productoActualizado);
}

function eliminarProducto(req, res) {

    const id = Number(req.params.id);

    const eliminado = productoService.eliminarProducto(id);

    if (!eliminado) {
        return res.status(404).json({
            mensaje: "Producto no encontrado"
        });
    }

    res.json({
        mensaje: "Producto eliminado correctamente"
    });
}

module.exports = {
    obtenerProductos,
    crearProducto,
    actualizarProducto,
    eliminarProducto
};