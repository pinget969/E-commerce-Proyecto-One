import { productosServices } from "../service/producto.servi.js";

const formulario = document.querySelector("[data-form]");
const info_url = JSON.parse(localStorage.getItem('img_2'));// revisar


const obtenerInformacion = ()=>{
    const url = new URL(window.location);
    const id = url.searchParams.get("id");
    console.log("bien");
    //vista preliminar borrador
    productosServices.detalleProducto(id).then(productos => {
        const url_preliminar = productos.img_url;
        const contenedor_img = document.createElement("img");  //a
        const contenido_img = `<img id="img_foto" src="${url_preliminar}" alt="">`; //b
        contenedor_img.innerHTML=contenido_img; // a + b
        document.getElementById("contenedor-img_uro-producto").innerHTML=contenido_img;
        
    });
    


    if(id==null){
        console.log("eroor");
    }

    const descripcion_nombre = document.getElementById("descripcion_nombre");
    const numero_precio = document.getElementById("numero_precio");
    const cont_descripcion = document.getElementById("contenido_descripcion");
     
    

    productosServices.detalleProducto(id).then(productos => {
        console.log(productos.categoria);
        descripcion_nombre.innerHTML = productos.nombre; 
        numero_precio.innerHTML = "$"+ productos.precio;
        cont_descripcion.innerHTML = productos.descripcion;
    });

};

obtenerInformacion();



const btn = document.querySelector("[data-cerrar]");

    btn.addEventListener("click", ()=>{
        window.location.href = "index.html";
});