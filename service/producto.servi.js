
const listaProductos = () => fetch("http://localhost:3000/productos").then((respuesta) => respuesta.json());
const crearProducto = (categoria, img_url, nombre, precio) => {
    return fetch("http://localhost:3000/productos", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({categoria, img_url, nombre, precio, id:uuid.v4()}),
    });
};

const eliminarProducto = (id) =>{
    return fetch(`http://localhost:3000/productos/${id}`,{
        method: "DELETE",
    })
}

const detalleProducto = (id) =>{
    return fetch(`http://localhost:3000/productos/${id}`).then((respuesta) => respuesta.json());
}

const actualizarProducto = (categoria, img_url, nombre, precio, id) =>{
    return fetch(`http://localhost:3000/productos/${id}`,{
    method: "PUT",
     headers:{
        "Content-Type": "application/json",
    },
    body: JSON.stringify({categoria, img_url, nombre, precio}),
})
.then((respuesta) => respuesta)
.catch((err) => console.log(err));
};


export const productosServices ={
    listaProductos,
    crearProducto,
    eliminarProducto,
    detalleProducto,
    actualizarProducto,
};