import { productosServices } from "../service/producto.servi.js";

const formulario = document.querySelector("[data-form]");


const obtenerInformacion = ()=>{
    const url = new URL(window.location);
    const id = url.searchParams.get("id");

    if(id==null){
        console.log("eroor");
    }

    const categoria = document.querySelector("[data-categoria]");

    const img_url = document.querySelector("[data-url]");
    const nombre = document.querySelector("[data-nombre-producto]");
    const precio = document.querySelector("[data-precio-producto]");
    

    productosServices.detalleProducto(id).then(productos => {
        img_url.value = productos.img_url;
        categoria.value = productos.categoria;
        nombre.value = productos.nombre;
        precio.value = productos.precio;
    });

};

obtenerInformacion();

formulario.addEventListener("submit", (evento)=>{
    evento.preventDefault();

    const url = new URL(window.location);
    const id = url.searchParams.get("id");

    const categoria = document.querySelector("[data-categoria]").value;

    const img_url = document.querySelector("[data-url]").value;
    const nombre = document.querySelector("[data-nombre-producto]").value;
    const precio = document.querySelector("[data-precio-producto]").value;

    console.log("categoria", categoria, " url", img_url,"nombre", nombre,"precio", precio);
    productosServices.actualizarProducto(categoria, img_url, nombre, precio, id).then(()=>{
        window.location.href = "index.html";
    })

});



const btn = document.querySelector("[data-cerrar]");

    btn.addEventListener("click", ()=>{
        window.location.href = "index.html";
});
