//ACCIÓN DE CAMBIAR IMAGEN AL PASAR EL CURSOR
const imagen = document.querySelector("#imagen-cambiar");

//cuando entra el cursor a donde esta la imagen
imagen.addEventListener("mouseenter", function () {
    // tambien se puede con alt
    // imagen.alt = "nombre"
    imagen.src = "static/images/comida-mexicana-02.jpg";
});

//cuando sale el cursor a donde esta la imagen
imagen.addEventListener("mouseleave", function () {
    // tambien se puede con alt
    // imagen.alt = "nombre"
    imagen.src = "static/images/comida-mexicana-01.jpg";
});


//ACCIÓN DE AUMENTAR EL CARRITO
// creamos la funcion para aumentar el numero del carrito
function aumentar() {
    //busca cual es el elemnto a cambiar y luego se convierte a numero entero para ir sumando
    const parrafoCantidad = document.querySelector("#contador");
    let contador = parrafoCantidad.textContent;
    let numero = parseInt(contador);
    numero++;
    // aqui manda el numero sumado al parrafo donde se muestra la cantidad
    parrafoCantidad.textContent = numero
}

// agregamos un plus de saber que orden se estáagregando al carrito
//definimos la función para buscar a que titulo de tarjeta corresponde
function tipoOrden(clickBoton) {
    //sube desde el botón hasta encontrar el <div> más cercano que contenga la clase con el texto a extraer
    let tarjeta = clickBoton.closest(".add-order");
    //busca la etiqueta <p> con clase nombre-orden dentro de esa tarjeta y extrae su texto 
    let tituloOrden = tarjeta.querySelector(".nombre-orden").innerText;
    //muestra la alerta
    alert("✅ Ha agregado una " + tituloOrden + " a su carrito");
}

// aqui seleccionamos los botones donde se apreta sumar una orden al carrito
const botonesAdd = document.querySelectorAll('.boton-add-order');

// aqui es lo que pasa cada vez que apretamos el boton y llamamos a la función creada anteriormente
botonesAdd.forEach(function (boton) {
    boton.addEventListener("click", function () {
        aumentar(this);
        tipoOrden(this);
    });
});


// ACCIÓN DE LOGIN Y ALERTA
function nombreEmail(clickBoton) {
    //sube desde el botón hasta encontrar el <div> más cercano que contenga la clase con el texto a extraer
    let tarjeta = clickBoton.closest(".contenido-email");
    //busca la etiqueta <p> con clase nombre-orden dentro de esa tarjeta y extrae su texto 
    let tituloOrden = tarjeta.querySelector("#email").value;

    //mostrar alerta
    //un if por si no se ha ingresado correo y el input está vacío
    if (tituloOrden === "") {
        alert("⚠️ Por favor ingrese correo");
    }
    else {
        alert("🌮 Bienvenido(a) " + tituloOrden);
    }
};
