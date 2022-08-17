import { productosServices } from "../service/producto.servi.js";
console.log(productosServices);
const crearNuevaLinea = (nombre, precio) =>{
    const linea = document.createElement("div");
    const contenido = `<div class="contenedor">
    <div class="contenedor-producto" data-producto>
        <div class="producto-ind">
            <img id="img_foto" src="img/iconos-logos/picture_photo_image_icon_131252.png" alt="">
            <p>Ver producto</p>
        </div>
        <div id="contenedor-nombre-producto" class="contenedor-nombre-producto"> 
        <p>${nombre}</p>
        </div>
        <div id="contenedor-precio-producto" class="contenedor-precio-producto"> 
            <p>${precio}</p>
        </div>
        <div class="contenedor-cerrar_form-administrador">
            <button id="cerrar_admin" type="button" class="cerrar_form-administrador" onclick="cerrar_admin(this)">cancelar</button>
        </div>
    </div>
</div>`;
    linea.innerHTML = contenido;
//const btn = linea.querySelector()
    return linea;
};
const contenidoNuevo = document.querySelector("[data-contenido]")

productosServices.listaProductos().then((data) => {
    data.forEach((producto) => {
        const nuevaLinea = crearNuevaLinea(producto.nombre, producto.precio);
        contenidoNuevo.appendChild(nuevaLinea);
    });
})
.catch((error) => alert("error1"));
