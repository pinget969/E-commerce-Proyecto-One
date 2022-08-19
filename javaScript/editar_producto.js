
//borrador
const contenedor_nombre_producto = document.querySelector('[data-nombre-producto]');
const clase_producto = document.getElementsByClassName('input_producto');
const producto_creado = document.getElementById('contenedor-img_uro-producto');
const img_creada = document.getElementsByTagName('img');
const nombre_fom = document.getElementById('nombre_editado_producto');
console.log(img_creada)
console.log(producto_creado)
console.log(clase_producto.value)
console.log(nombre_fom.textContent);
console.log(contenedor_nombre_producto.value);  

//fin borrador
const input = document.getElementById("input_url_img");

console.log(input.value);
const btn_input_url_img = document.getElementById("btn_input_url_img");

const info_url = JSON.parse(localStorage.getItem('img_2'));
const url_comp = info_url.dato_img // get final
document.querySelector("[data-url]").value= url_comp;

const contenedor_img = document.createElement("img");
const contenido_img = `<img id="img_foto" src="${url_comp}" alt="">`;
contenedor_img.innerHTML=contenido_img;
document.getElementById("contenedor-img_uro-producto").innerHTML=contenido_img;

btn_input_url_img.addEventListener("click",()=>{
    console.log("las weas")
    console.log(input.value);
    
    const dato_img =input.value;
    
    console.log(dato_img);
    
    const contenedor_url= {
        dato_img,
    }
    localStorage.setItem('img_2', JSON.stringify(contenedor_url));
    //window.location.href = "editar.html";
})

