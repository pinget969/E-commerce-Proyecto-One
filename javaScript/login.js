const open = document.getElementById('open');
const modal_container = document.getElementById('modal_container'); /* usuario */
const close = document.getElementById('close');
const entrar = document.getElementById('entrar');  /* Configurar ingreso */
const usuario = document.getElementById('usuario');


const usuario_0 = "usuario_123"
const contraseña_0 = "pass_123"

mantener_ingreso ();

// const btn_eliminar = document.getElementsByClassName('btn_eliminar-producto'); //revisar

open.addEventListener('click', () => {
    modal_container.classList.add('show');  
});
close.addEventListener('click', () => {
    modal_container.classList.remove('show');
});

//btn_eliminar[0].classList.remove('btn_eliminar-producto'); //no funciona

function ingresar(){
    const usuario = document.getElementById('usuario'); /* input usuario*/
    const usuario_1 = document.getElementById('usuario').value;
    const contraseña = document.getElementById('contraseña');
    const contraseña_1 = document.getElementById('contraseña').value;
    const open = document.getElementById('open');
    const usuario_incorrecto = document.getElementById('usuario-incorrecta_span');
    const contraseña_incorrecta =document.getElementById('contraseña-incorrecta_span');

    
    

    if(usuario.value != usuario_0){
        usuario_incorrecto.classList.replace('usuario_incorrecto', 'usuario_correcto'); 
    }else{
        usuario_incorrecto.classList.replace('usuario_correcto', 'usuario_incorrecto');
    };
    if(contraseña.value != contraseña_0){
        contraseña_incorrecta.classList.replace('contraseña_incorrecta','contraseña_correcta');
    }else{
        contraseña_incorrecta.classList.replace('contraseña_correcta','contraseña_incorrecta');
    };
    if(usuario.value== usuario_0 && contraseña.value==contraseña_0){
        let logeado = true
        const loginAlm = {
            usuario_1,
            contraseña_1,
            logeado,
        }
        localStorage.setItem('login', JSON.stringify(loginAlm)); //almacenando Usuario y contraseña
        localStorage.setItem('img_2', JSON.stringify(contenedor_url)); //enviado para el editor img
        sesion_on();
        window.location.href = "index.html";
    } ;
    //creacion objeto almacenador

};


function mantener_ingreso(){
    
    if(localStorage.getItem('login')){
    const confirmar = JSON.parse(localStorage.getItem('login'));
    if(confirmar.logeado == true){
        sesion_on();
    }
}

}
function sesion_on(){
    
    const li_cerrar_sesion = document.getElementById('cerrar_sesion');
    const li_new_producto = document.getElementById('new_producto')
    const usuario_incorrecto = document.getElementById('usuario-incorrecta_span');
    const contraseña_incorrecta =document.getElementById('contraseña-incorrecta_span');
    usuario_incorrecto.classList.replace('usuario_correcto', 'usuario_incorrecto');
        contraseña_incorrecta.classList.replace('contraseña_correcta','contraseña_incorrecta');
        modal_container.classList.remove('show');
        open.classList.add('btn-login-none');

        var cerrar_sesion = "Cerrar Sesion";
        var new_producto = "Agregar Producto";

        li_cerrar_sesion.innerHTML = cerrar_sesion;
        li_new_producto.innerHTML = new_producto

        li_cerrar_sesion.classList.toggle('cerrar_sesion');
        li_new_producto.classList.toggle('new_producto');

        li_new_producto.classList.add('new_producto_show');
        li_cerrar_sesion.classList.add('cerrar_sesion_show');

        
}
 
// HACIA ADMINISTRADOR
    //asignando url img predeterminada
const dato_img = "img/iconos-logos/picture_photo_image_icon_131252.png"
const contenedor_url= {
    dato_img,
}
function menu_agregar_producto(){
    localStorage.setItem('img_2', JSON.stringify(contenedor_url));
    location.href = "administrador.html";
}
function cerrar_sesicion_login(){
    const li_cerrar_sesion = document.getElementById('cerrar_sesion');
    const li_new_producto = document.getElementById('new_producto')

    li_cerrar_sesion.classList.toggle('cerrar_sesion');
    li_new_producto.classList.toggle('new_producto');

    localStorage.setItem('login', JSON.stringify("nada"));
    open.classList.toggle('btn-login-none');
    window.location.href = "index.html";
};

