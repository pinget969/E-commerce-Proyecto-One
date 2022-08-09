let vista_preliminar = (event)=>{
    let leer_img = new FileReader();
    let id_img = document.getElementById('img_foto');

    leer_img.onload = ()=>{
        if(leer_img.readyState==2){
            id_img.src = leer_img.result
        };
    };
    leer_img.readAsDataURL(event.target.files[0]);
};

function mostrar_nombre(valor){
    document.getElementById("contenedor-nombre-producto").innerHTML=valor;
}
function mostrar_precio(valor){
    document.getElementById("contenedor-precio-producto").innerHTML=valor;
}
function cerrar_admin(){
    location.href = "index.html";
}