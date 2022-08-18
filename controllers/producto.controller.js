import { productosServices } from "../service/producto.servi.js";
console.log(productosServices);

//inicio cambiar clase
let miClase1 = "btn_ocultar-eliminar"
let miClase_editar = "btn_ocultar-editar"
const crearNuevaLinea = (categoria, nombre, precio, id) =>{
    console.log(categoria,"  ", nombre, "   ", precio)
    if(localStorage.getItem('login')){
        const confirmar = JSON.parse(localStorage.getItem('login'));
        if(confirmar.logeado == true){
            miClase1 = "btn_mostrar-eliminar"
            miClase_editar = "btn_mostrar-editar"
            console.log(miClase1)
        }else{
            miClase1 = "btn_ocultar-eliminar"
            miClase_editar = "btn_ocultar-editar"
            console.log(miClase1)
        }
    }

//Fin cambiar clase
    const linea = document.createElement("div");
    const contenido = `<div class="contenedor">
    <div class="contenedor-producto" data-producto>
        <div class="modificacion">
        <button id="${id}" class=${miClase1}>eliminar</button>
        <button><a href="/editar.html?id=${id}"  class=${miClase_editar}>editar</a></button>
        </div>
        <div class="producto-ind">
            <img id="img_foto" src="img/iconos-logos/picture_photo_image_icon_131252.png" alt="">
            <p>Ver producto</p>
        </div>
        <div id="contenedor-nombre-producto" class="contenedor-nombre-producto"> 
        <p>${nombre}</p>
        </div>
        <div id="contenedor-precio-producto" class="contenedor-precio-producto"> 
            <p> $ ${precio}</p>
        </div>
    </div>
</div>`;
    
    linea.innerHTML = contenido;
    const btn = linea.querySelector("button");
    btn.addEventListener("click", ()=>{
        const id = btn.id;
        productosServices.eliminarProducto(id).then(respuesta =>{
            console.log(respuesta);
        }).catch((err) => alert("error"));
    })
//const btn = linea.querySelector()
 
    return linea;
};




//Recorriendo api
productosServices.listaProductos().then((data) => {
    data.forEach((producto) => {
        const nuevaLinea = crearNuevaLinea(producto.categoria, producto.nombre, producto.precio, producto.id);
        const contenidoNuevo = document.querySelector(`[data-${producto.categoria}]`) //asignacion de categoria
        contenidoNuevo.appendChild(nuevaLinea);
    });
})
.catch((error) => alert("error1"));
