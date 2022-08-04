const open = document.getElementById('open');
const modal_container = document.getElementById('modal_container'); /* usuario */
const close = document.getElementById('close');
const entrar = document.getElementById('entrar');  /* Configurar ingreso */
const usuario = document.getElementById('usuario');

const usuario_0 = "usuario_123"
const contraseña_0 = "pass_123"

open.addEventListener('click', () => {
    modal_container.classList.add('show');  
});
close.addEventListener('click', () => {
    modal_container.classList.remove('show');
});

/*entrar.addEventListener('click', () => {

    ingresar();
}); */

function ingresar(){
    const usuario = document.getElementById('usuario'); /* input usuario*/
    const contraseña = document.getElementById('contraseña');
    const open = document.getElementById('open');

    const li_cerrar_sesion = document.getElementById('cerrar_sesion');
    const li_new_producto = document.getElementById('new_producto')
    
    if(usuario.value != usuario_0){
        alert("Usuario incorrecto");  
    };
    if(contraseña.value != contraseña_0){
        alert("Contraseña Incorrecta");
    };
    if(usuario.value== usuario_0 && contraseña.value==contraseña_0){
        alert("ingreso correcto");
        modal_container.classList.remove('show');
        document.getElementById('open').style.display = "none";
        var cerrar_sesion = "Cerrar Sesion";
        var new_producto = "Agregar Producto";

        li_cerrar_sesion.innerHTML = cerrar_sesion;
        li_new_producto.innerHTML = new_producto

        li_cerrar_sesion.classList.toggle('cerrar_sesion');
        li_new_producto.classList.toggle('new_producto');

        li_new_producto.classList.add('new_producto_show');
        li_cerrar_sesion.classList.add('cerrar_sesion_show');
    } 
    
};
function menu_agregar_producto(){
    location.href = "administrador.html";
}


