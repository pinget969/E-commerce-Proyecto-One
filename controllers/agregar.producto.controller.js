import { productosServices } from "../service/producto.servi.js";
const formulario = document.querySelector("[data-form]");

formulario.addEventListener("submit", (evento) =>{
    evento.preventDefault();
    const categoria = document.querySelector("[data-categoria]").value;
    const img_url = document.querySelector("[data-url]").value;
    const nombre = document.querySelector("[data-nombre-producto]").value;
    const precio = document.querySelector("[data-precio-producto]").value;

    productosServices.crearProducto(categoria, img_url, nombre, precio).then(() =>{
        window.location.href = "/completado.html"
    }).catch((err) => console.log(err)) 
})