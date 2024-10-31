/*  FUNCIÓN AÑADIR EVENTOS
    PARÁMETRO --> NO TIENE
    ¿QUÉ HACE LA FUNCIÓN? --> SELECCIONA TODOS LOS INPUTS DEL ELEMENTO PADRE Y A TRAVÉS DE UN FOR-EACH LE ASIGNAMOS
                              LOS EVENTOS DE "dragstart" JUNTO A LA FUNCIÓN "arrastarImg"
*/
function aniadirEventos() {
    let contenedor = document.querySelector("#containerImg");
    let imagenes = contenedor.querySelectorAll("img");

    imagenes.forEach(img => {
        img.addEventListener("dragstart", arrastarImg);
    });
}
// LLAMAMOS A LA FUNCIÓN DE AÑADIR LOS EVENTOS A LAS IMÁGENES
aniadirEventos();

/*  FUNCIÓN ARRASTRAR IMG
    PARÁMETRO --> EL ELEMENTO(event) ASOCIADO AL EVENTO
    ¿QUÉ HACE LA FUNCIÓN? --> OBTIENE EL SRC Y EL ALT DEL event(EN ESTE CASO ES UNA IMG) QUE LUEGO SE USARÁ EN EL
                              EVENTO DE DRAGOVER PARA CAMBIAR VALORES
*/
function arrastarImg(event) {
    event.dataTransfer.setData("text/plain", event.target.src);
    event.dataTransfer.setData("alt", event.target.alt);
}

/*  FUNCIÓN AÑADIR EVENTOS DE COLOR
    PARÁMETRO --> NO TIENE
    ¿QUÉ HACE LA FUNCIÓN? --> SELECCIONA TODOS LOS INPUTS DEL ELEMENTO PADRE Y A TRAVÉS DE UN FOR-EACH LE ASIGNAMOS
                              LOS EVENTOS DE "click" JUNTO A LA FUNCIÓN "cambiarColorLetra"
    *[NOTA]: ÉSTA FUNCIÓN SE PUEDE HACER DENTRO DE LA ANTERIOR PERO SE HA DECIDIDO SEPARARLA PARA MEJOR ENTENDIMIENTO
             DEL CÓDIGO
*/
function aniadirEventosColor() {
    let contenedorColores = document.querySelector("#coloresLetra");
    let inputs = contenedorColores.querySelectorAll("input");

    inputs.forEach(input => {
        input.addEventListener("click", cambiarColorLetra);
    });
}
// LLAMAMOS A LA FUNCIÓN DE AÑADIR A LOS INPUTS RADIO DE COLOR
aniadirEventosColor();

/*  FUNCIÓN CAMBIAR COLOR LETRA
    PARÁMETRO --> EL ELEMENTO(event) ASOCIADO AL EVENTO
    ¿QUÉ HACE LA FUNCIÓN? --> CAMBIA LA LETRA SEGÚN EL RADIO DE COLOR QUE SE HA PULSADO EL USUARIO
                              ÉSTO SE APLICA TANTO AL TITULO COMO AL NOMBRE DEL DIBUJO
*/
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

/*  FUNCIÓN CAMBIAR CAMISETA
    PARÁMETRO --> EL ELEMENTO ASOCIADO AL EVENTO
    ¿QUÉ HACE LA FUNCIÓN? --> LA FUNCIÓN COMPRUEBA EL ID DEL ELEMENTO Y SEGÚN EL RESULTADO CAMBIA EL BACKGROUND-IMAGE
*/
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

/*  FUNCIÓN CAMBIAR TÍTULO
    PARÁMETRO --> NO TIENE
    ¿QUÉ HACE LA FUNCIÓN? --> LA FUNCIÓN COMPRUEBA QUE EL USUARIO NO AÑADA MÁS DE 10 CARACTERES AL TÍTULO
                              EN CASO DE AÑADIR MÁS DE 10 SE LE MOSTRARÁ UN MENSAJE AVISÁNDOLE DEL TAMAÑO
                              MÁXIMO DEL TÍTULO
*/
function cambiarTitulo() {
    let titulo = document.getElementById("titulo");
    let inputTexto = document.getElementById("inputTitulo");

    if (inputTexto.value.length > 10) {
        alert("Ups! El limite es de 10 caracteres.")
    }else{
        titulo.innerHTML = inputTexto.value;
    } 
}

// AÑADO LOS EVENTOS A LOS INPUTS DE RANGO CON LA FUNCION MOVER TÍTULO
// EL EVENTO EN ÉSTE CASO ES DE "input" PARA QUE TOME EL VALOR DEL INPUT AL MOMENTO
document.getElementById("horizontal").addEventListener("input", moverTitulo);
document.getElementById("vertical").addEventListener("input", moverTitulo);

/*  FUNCIÓN MOVER TÍTULO
    PARÁMETRO --> NO TIENE
    ¿QUÉ HACE LA FUNCIÓN? --> MODIFICA LAS PROPIEDADES "top" Y "left" DE LA CLASE ASOCIADA A TÍTULO
*/
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

/*  AÑADIMOS AL ELEMENTO QUE CONTIENE EL DIBUJO DE LA CAMISETA GRANDE UN EVENTO DE DRAGOVER PARA QUE EL USUARIO
    VEA DONDE TIENE QUE ARRÁSTRAR EL DIBUJO DENTRO DE LA CAMISETA
*/
contenedor.addEventListener("dragover", function (event) {
    event.preventDefault();
    contenedor.classList.add("verde");
});

/*  AÑADIMOS AL ELEMENTO QUE CONTIENE EL DIBUJO DE LA CAMISETA GRANDE UN EVENTO DE DRAGLEAVE PARA QUE LA CLASE QUE
    SE HA APLICADO EN EL EVENTO DRAGOVER SE QUITE
*/
contenedor.addEventListener("dragleave", () => {
    contenedor.removeAttribute("class");
});

/*  AÑADIMOS AL ELEMENTO QUE CONTIENE EL DIBUJO DE LA CAMISETA GRANDE UN EVENTO DE DROP QUE REALIZA LA SIGUIENTE FUNCIÓN:
        - OBTENEMOS LOS CONTENEDORES DE IMAGEN GRANDE E IMAGEN PEQUEÑA, QUE ES DONDE VAMOS A APLICAR EL CAMBIO DE IMAGEN
        - TAMBIÉN OBTENEMOS EL CONTENEDOR DEL NOMBRE DEL DIBUJO QUE LO CAMBIAREMOS POR EL ALT DE LA IMAGEN DROPEADA
        - UNA VEZ REALIZADO EL EVENTO DE DROP CAMBIAMOS LOS SRC DE LAS IMAGENES DEL CONTENEDOR POR EL QUE NOS LLEGA(event)
        - TAMBIÉN NOS LLEGA A TRAVÉS DE event EL ALT DE LA IMAGEN Y SE LO APLICAMOS AL CONTENEDOR DEL NOMBRE DE LA IMAGEN
          QUE ESTÁ DENTRO DE LA CAMISETA
*/
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
