const URL = "http://localhost:3000/productos";

const formulario = document.getElementById("formProducto");
const tablaProductos = document.getElementById("tablaProductos");

const id = document.getElementById("id");
const nombre = document.getElementById("nombre");
const precio = document.getElementById("precio");
const stock = document.getElementById("stock");
const categoria = document.getElementById("categoria");

cargarProductos();

async function cargarProductos() {

    const respuesta = await fetch(URL);
    const productos = await respuesta.json();

    tablaProductos.innerHTML = "";

    productos.forEach(producto => {

        tablaProductos.innerHTML += `
            <tr>
                <td>${producto.nombre}</td>
                <td>$${producto.precio}</td>
                <td>${producto.stock}</td>
                <td>${producto.categoria}</td>

                <td class="acciones">

                    <button onclick="editarProducto(${producto.id})">
                        Editar
                    </button>

                    <button onclick="eliminarProducto(${producto.id})">
                        Eliminar
                    </button>

                </td>

            </tr>
        `;

    });

}

formulario.addEventListener("submit", guardarProducto);

async function guardarProducto(evento){

    evento.preventDefault();

    const producto={

        nombre:nombre.value,
        precio:Number(precio.value),
        stock:Number(stock.value),
        categoria:categoria.value

    };

    if(id.value===""){

        await fetch(URL,{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(producto)
        });

    }else{

        await fetch(`${URL}/${id.value}`,{

            method:"PUT",

            headers:{
                "Content-Type":"application/json"
            },

            body:JSON.stringify(producto)

        });

    }

    formulario.reset();

    id.value="";

    cargarProductos();

}

async function eliminarProducto(idProducto){

    if(!confirm("¿Desea eliminar este producto?")){
        return;
    }

    await fetch(`${URL}/${idProducto}`,{
        method:"DELETE"
    });

    cargarProductos();

}

async function editarProducto(idProducto){

    const respuesta=await fetch(URL);

    const productos=await respuesta.json();

    const producto=productos.find(p=>p.id===idProducto);

    id.value=producto.id;
    nombre.value=producto.nombre;
    precio.value=producto.precio;
    stock.value=producto.stock;
    categoria.value=producto.categoria;

}