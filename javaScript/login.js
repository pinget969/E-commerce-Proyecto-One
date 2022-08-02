const open = document.getElementById('open');
const modal_container = document.getElementById('modal_container'); /* usuario */
const close = document.getElementById('close');
const entrar = document.getElementById('entrar');  /* Configurar ingreso */

open.addEventListener('click', () => {
    modal_container.classList.add('show');  
});
close.addEventListener('click', () => {
    modal_container.classList.remove('show');
});

entrar.addEventListener('click', () => {
    modal_container.classList.remove('show');
});