// AÑADIR EVENTOS A LAS IMÁGENES
function aniadirEventos() {
    let contenedor = document.querySelector("#containerImg");
    let imagenes = contenedor.querySelectorAll("img");

    imagenes.forEach(img => {
        img.addEventListener("dragstart", arrastarImg);
    });
}
// LLAMAMOS A LA FUNCIÓN DE AÑADIR LOS EVENTOS A LAS IMÁGENES
aniadirEventos();

// FUNCIÓN ARRASTRAR IMAGEN
function arrastarImg(event) {
    event.dataTransfer.setData("text/plain", event.target.src);
    event.dataTransfer.setData("alt", event.target.alt);
}

// AÑADIR EVENTOS A LOS INPUTS RADIO QUE SELECCIONARÁN LOS COLORES
function aniadirEventosColor() {
    let contenedorColores = document.querySelector("#coloresLetra");
    let inputs = contenedorColores.querySelectorAll("input");

    inputs.forEach(input => {
        input.addEventListener("click", cambiarColorLetra);
    });
}
// LLAMAMOS A LA FUNCIÓN DE AÑADIR A LOS INPUTS RADIO DE COLOR
aniadirEventosColor();

// FUNCIÓN QUE CAMBIA LA LETRA SEGÚN EL RADIO DE COLOR QUE SE HA PULSADO
function cambiarColorLetra(event) {
    let titulo = document.getElementById("titulo");
    let nombreDibujo = document.getElementById("nombreDibujo");

    switch (event.target.value) {
        case "negro":
            titulo.style.color = "black";
            nombreDibujo.style.color = "black";
            break;
        case "blanco":
            titulo.style.color = "white";
            nombreDibujo.style.color = "white";
            break;
        case "rojo":
            titulo.style.color = "crimson";
            nombreDibujo.style.color = "crimson";
            break;
        case "azul":
            titulo.style.color = "deepskyblue";
            nombreDibujo.style.color = "deepskyblue";
            break;
        case "magenta":
            titulo.style.color = "magenta";
            nombreDibujo.style.color = "magenta";
            break;
        case "naranja":
            titulo.style.color = "orange";
            nombreDibujo.style.color = "orange";
            break;
        case "purpura":
            titulo.style.color = "#543E62";
            nombreDibujo.style.color = "#543E62";
            break;
    }

}

// EVENTO DE CLICK EN LOS INPUTS RADIO
let radioNegra = document.getElementById("camiNegra");
let radioBlanca = document.getElementById("camiBlanca");

radioNegra.addEventListener("click", cambiarCamiseta);
radioBlanca.addEventListener("click", cambiarCamiseta);

function cambiarCamiseta(element) {
    let contenedor = document.getElementById("camiseta");

    if (element.target.id === "camiNegra") {
        contenedor.removeAttribute("class");
        contenedor.classList.add("container-camiseta-negra");
    } else {
        contenedor.removeAttribute("class");
        contenedor.classList.add("container-camiseta-blanca");
    }
}

// TITULO USO LA PROPIEDAD ONINPUT PARA QUE SE ACTUALICE EL TITULO A LA VEZ QUE SE ESCRIBE EN EL INPUT
let inputTexto = document.getElementById("inputTitulo");
inputTexto.oninput = cambiarTitulo;

// FUNCIÓN CAMBIAR TÍTULO
function cambiarTitulo() {
    let titulo = document.getElementById("titulo");
    let inputTexto = document.getElementById("inputTitulo");

    titulo.innerHTML = inputTexto.value;
}

// AÑADO LOS EVENTOS A LOS INPUTS DE RANGO CON LA FUNCION MOVER TÍTULO
document.getElementById("horizontal").addEventListener("input", moverTitulo);
document.getElementById("vertical").addEventListener("input", moverTitulo);

// FUNCIÓN MOVER TÍTULO
function moverTitulo() {
    let claseElemento = document.querySelector(".tituloTexto");
    let horizontal = document.getElementById("horizontal");
    let vertical = document.getElementById("vertical");

    claseElemento.style.top = vertical.value + "%";
    claseElemento.style.left = horizontal.value + "%";
}
// LLAMAMOS A LA FUNCIÓN MOVER TÍTULO
moverTitulo();

// ELEMENTO CONTENEDOR DEL DIBUJO GRANDE QUE VA A IR EN LA CAMISETA
let contenedor = document.getElementById("containerDibujoG");

// EVENTO DE DRAGOVER
contenedor.addEventListener("dragover", function (event) {
    event.preventDefault();
    contenedor.classList.add("verde");
});

// SIN COLOR CUANDO SE VA
let contenedorDibujoG = document.getElementById("containerDibujoG");

contenedor.addEventListener("dragleave", () => {
    contenedor.removeAttribute("class");
});

// EVENTO DE DROP
contenedor.addEventListener("drop", (event) => {
    event.preventDefault();
    contenedor.removeAttribute("class");
    let nombreFoto = document.getElementById("nombreDibujo");


    let imgMovidaG = document.getElementById("fotoG");
    let imgMovidaP = document.getElementById("fotoP");

    imgMovidaG.src = event.dataTransfer.getData("text/plain");
    imgMovidaP.src = event.dataTransfer.getData("text/plain");
    imgMovidaG.alt = event.dataTransfer.getData("alt");

    nombreFoto.innerHTML = imgMovidaG.alt;

});
