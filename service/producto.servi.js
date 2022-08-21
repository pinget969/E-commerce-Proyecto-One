
const listaProductos = () => fetch("https://github.com/pinget969/E-commerce-Proyecto-One/blob/main/db.json/productos").then((respuesta) => respuesta.json());
const crearProducto = (categoria, img_url, nombre, precio) => {
    return fetch("https://github.com/pinget969/E-commerce-Proyecto-One/blob/main/db.json/productos", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({categoria, img_url, nombre, precio, id:uuid.v4()}),
    });
};

const eliminarProducto = (id) =>{
    return fetch(`https://github.com/pinget969/E-commerce-Proyecto-One/blob/main/db.json/productos/${id}`,{
        method: "DELETE",
    })
}

const detalleProducto = (id) =>{
    return fetch(`https://github.com/pinget969/E-commerce-Proyecto-One/blob/main/db.json/productos/${id}`).then((respuesta) => respuesta.json());
    
}


const actualizarProducto = (categoria, img_url, nombre, precio, id) =>{
    return fetch(`https://github.com/pinget969/E-commerce-Proyecto-One/blob/main/db.json/productos/${id}`,{
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