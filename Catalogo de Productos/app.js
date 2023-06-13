

/* Para button 'toggle' */

/*  cuando hago CLICK .button .nav TOGGLE '.activo' */
const button = document.querySelector('.button-2')
const nav    = document.querySelector('.nav-2')

button.addEventListener('click',()=>{
    nav.classList.toggle('activo')
})

/* Para carrito */

/* guardar todos los botones */
let botones = document.querySelectorAll("article > button");

/* bucle repetitivo */
for (let i = 0; i < botones.length; i++) {
    botones[i].addEventListener("click", agregarCarrito, false);
}

function agregarCarrito(e) {

    /* imagen y texto de fondo se eliminan */
    if (document.querySelector("#carritoVacio")) {
        document.querySelector("#carritoVacio").remove();
        document.querySelector("#carrito > figcaption").remove();
    }

    /* Obtener el elemento padre */
    let elementoBoton = e.target;
    let elementoPadre = elementoBoton.parentElement;

    let titulo = elementoPadre.querySelector("h3").innerHTML;
    let parrafo = elementoPadre.querySelector("p").innerHTML;

    /* Agregar al carrito */
    let nuevoelemento = document.createElement("div");
    
    nuevoelemento.innerHTML = "<div><h3>"+titulo+"</h3><p>"+parrafo+"</p></div>";
    document.querySelector("#carrito").append(nuevoelemento);
    
    alert ('se agrego correctamente')
}