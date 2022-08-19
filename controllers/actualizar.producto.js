import { productosServices } from "../service/producto.servi.js";

const formulario = document.querySelector("[data-form]");
const info_url = JSON.parse(localStorage.getItem('img_2'));// revisar



btn_input_url_img.addEventListener("click",()=>{
    const info_url = JSON.parse(localStorage.getItem('img_2')); //import local
    const url_comp = info_url.dato_img // get final
    //const url_comp = "img/iconos-logos/picture_photo_image_icon_131252.png";
    const contenedor_img = document.createElement("img");  //a
    const contenido_img = `<img id="img_foto" src="${url_comp}" alt="">`; //b
    contenedor_img.innerHTML=contenido_img; // a + b
    console.log(info_url.dato_img);
    document.getElementById("contenedor-img_uro-producto").innerHTML=contenido_img;
    console.log("las weas")
    const contador = document.getElementById("input_url_img"); //valor nuevo input
    console.log(contador.value);//valor nuevo input
    
    const dato_img =contador.value;
    console.log(dato_img);
    const contenedor_url= {
        dato_img,
    }
    localStorage.setItem('img_2', JSON.stringify(contenedor_url));
    //nuevo dato input generado
    
});

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

    const categoria = document.querySelector("[data-categoria]");
    //const contador = document.getElementById("input_url_img");
    const img_url = document.querySelector("[data-url]");
    const nombre = document.querySelector("[data-nombre-producto]");
    const precio = document.querySelector("[data-precio-producto]");
    console.log(img_url);


    productosServices.detalleProducto(id).then(productos => {
        img_url.value = productos.img_url;
        categoria.value = productos.categoria;
        nombre.value = productos.nombre;
        precio.value = productos.precio;
        console.log(productos.img_url);
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
    productosServices.actualizarProducto(categoria, img_url, nombre, precio, id).then(()=>{
        window.location.href = "index.html";
    })

});



const btn = document.querySelector("[data-cerrar]");

    btn.addEventListener("click", ()=>{
        window.location.href = "index.html";
});

