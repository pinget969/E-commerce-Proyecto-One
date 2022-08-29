import { productosServices } from "../service/producto.servi.js";
const formulario = document.querySelector("[data-form]");

formulario.addEventListener("submit", (evento) =>{
    evento.preventDefault();
    const categoria = document.querySelector("[data-categoria]").value;
    const img_url = document.querySelector("[data-url]").value;
    const nombre = document.querySelector("[data-nombre-producto]").value;
    const precio = document.querySelector("[data-precio-producto]").value;
    const descripcion = document.querySelector("[data-descripcion-producto]").value;

    productosServices.crearProducto(categoria, img_url, nombre, precio, descripcion).then(() =>{
        window.location.href = "/producto-completado.html"
    }).catch((err) => console.log(err)) 
})
