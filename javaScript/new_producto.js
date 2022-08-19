/*Mantenimiento 1
let vista_preliminar = (event)=>{
    let leer_img = new FileReader();
    let id_img = document.getElementById('img_foto');
    const file = event.target.files[0];
    leer_img.onload = ()=>{
        if(leer_img.readyState==2){
            id_img.src = leer_img.result
        };
    };
    leer_img.readAsDataURL(event.target.files[0]);
};
Mantenimiento. */

const url_foto = document.getElementById("url_foto");

const modal_container = document.getElementById('modal_container');
function mostrar_nombre(valor){
    document.getElementById("contenedor-nombre-producto").innerHTML=valor;
}
function mostrar_precio(valor){
    document.getElementById("contenedor-precio-producto").innerHTML=valor;
}

const btn_url = document.getElementById('btn_url')

const info_url = JSON.parse(localStorage.getItem('img'));

const url_comp = info_url.cont_url // get final

document.querySelector("[data-url]").value= url_comp;



    const contenedor_img = document.createElement("img");
    const contenido_img = `<img id="img_foto" src="${url_comp}" alt="">`;
    contenedor_img.innerHTML=contenido_img;
    document.getElementById("contenedor-img_uro-producto").innerHTML=contenido_img;

btn_url.addEventListener("click", (evento)=>{
    const url_foto = document.getElementById("url_foto");
    const cont_url= url_foto.value
    console.log(url_foto);
    const imgAlm = {
        cont_url,
        };

        localStorage.setItem('img', JSON.stringify(imgAlm));
        window.location.href = "administrador.html";
        
});

function mostrar_url(valor){
    document.getElementById("").innerHTML=valor
    console.log(valor)
}

function cerrar_admin(){
    location.href = "index.html";
}
function abrir_admin(){
    window.location.href = "administrador.html"
}