let numeroSecreto = 0;
let numeroIntentos = 0;
let numeroMaximo = 10
let listaNumerosSorteados = [];

function asignarTextoElemento(elemento, texto){
    let titulo = document.querySelector(elemento);
    titulo.innerHTML = texto;
}

function verificarValor(){
    let valorIngresado = parseInt(document.getElementById("valorIngresado").value);
    if(numeroSecreto === valorIngresado){
        asignarTextoElemento("p",`¡Ganaste! Acertaste en ${numeroIntentos} ${numeroIntentos === 1 ? "intento" : "intentos"}`);
        document.getElementById("reiniciar").removeAttribute("disabled");
    }
    else {
        if(valorIngresado > numeroSecreto){
        asignarTextoElemento("p","El número secreto es menor");
        }
        if(valorIngresado < numeroSecreto){
            asignarTextoElemento("p","El número secreto es mayor");
            }
            numeroIntentos++;
            limpiarInput();
        }
}

function condicionesIniciales(){
    asignarTextoElemento("h1","Juego número secreto");
    asignarTextoElemento("p",`Indica un número del 1 al ${numeroMaximo}`);
    document.getElementById("reiniciar").setAttribute("disabled", "true");
    numeroSecreto = generarNumeroSecreto();
    numeroIntentos = 1;
}

function reiniciarJuego(){
    limpiarInput();
    condicionesIniciales();
}

function limpiarInput(){
    document.getElementById("valorIngresado").value = "";
}
function generarNumeroSecreto() {
    if(listaNumerosSorteados.length === numeroMaximo){
        listaNumerosSorteados = [];
    }
    let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;
    if(listaNumerosSorteados.includes(numeroGenerado)){
        return generarNumeroSecreto();
    }
    else{
        listaNumerosSorteados.push(numeroGenerado);
    }
    return numeroGenerado;
}

condicionesIniciales();
