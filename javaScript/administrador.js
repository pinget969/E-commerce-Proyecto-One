//const nombre = document.getElementById('input-nombre_form');
//console.log(nombre.value);

const btn = document.querySelector('[data-form-btn]');

const createProducto =  (evento) =>{
    evento.preventDefault();
    const input_nombre = document.querySelector('[data-nombre-producto]');
    const input_precio = document.querySelector('[data-precio-producto]');
    

    const precio = input_precio.value;
    const nombre = input_nombre.value;

    //const producto = document.querySelector('[data-producto]'); //selecion total
    const list = document.querySelector("[data-list]");
    const producto_nombre = document.createElement('div');
    producto_nombre.classList.add('contenedor-nombre-producto');
    const texto = document.createElement('p');
    texto.innerHTML=nombre;
    producto_nombre.appendChild(texto);

    input_precio.value = '';
    input_nombre.value = '';

    const div = document.createElement("div");
    div.classList.add("contenedor-nombre-producto");
    div.innerText = value
    const content = `<div class="producto-ind">
                        <img src="img/iconos-logos/picture_photo_image_icon_131252.png" alt="">
                        <p>Ver producto</p>
                        
                    </div>
                    <div class="contenedor-nombre-producto"> 
                        <p>${nombre}</p>
                    </div>
                    <div class="contenedor-precio-producto"> 
                        <p>${precio}</p>
                    </div>
                    <div class="contenedor-cerrar_form-administrador">
                        <button id="cerrar_admin" type="button" class="cerrar_form-administrador" data-cerrar>cancelaar</button>
                    </div>`
    producto.innerHTML = content;

    list.appendChild(producto);

    console.log(content);
    //console.log(evento);
    
};

btn.addEventListener('click', createProducto);
