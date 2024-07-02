let numerosecreto = 0;
let intento = 0;
let listanumerossortiado = [];
let numeromaximo =10;

function asignartextoelemento(elemento, texto){
let elementoHTML = document.querySelector(elemento);
elementoHTML.innerHTML = texto;
return
}

function VerificarIntento() {
   let numerodeusuario = parseInt(document.getElementById('valorusuario').value);
   
   if (numerodeusuario==numerosecreto){
    asignartextoelemento('p',`acertaste el numero  en ${intento} ${(intento ===1) ? 'vez':'veces'}`);
   document.getElementById('reiniciar').removeAttribute('disabled');
} else {
   if(numerodeusuario<numerosecreto){
    asignartextoelemento('p','el numero secreto es mayor');
   } else {
    asignartextoelemento('p','el numero secreto es menor');
    
   }
   intento++;
   limpiarcampo();
   }
    return;
}
function limpiarcampo(){
    let valorcapo = document.querySelector('#valorusuario');
    valorcapo.value = '';
}
function condicionesiniciales(){
    asignartextoelemento('h1','juego del nuemro secreto¡');
    asignartextoelemento('p',`indica el nuemro del 1 al ${numeromaximo}`);
    numerosecreto = generanumerosecreto();
    intento = 1;
}
function generanumerosecreto (){
    let numerogenerado = Math.floor(Math.random()*numeromaximo)+1;
    // si ya sortiamos todos los numeros

    if (listanumerossortiado.length == numeromaximo) {
        asignartextoelemento('p','ya se sortiaron todos los numeros');

    } else{
    // si el numero esta en la lista
    if (listanumerossortiado.includes (numerogenerado)) {
        return generanumerosecreto();
    } else{
        listanumerossortiado.push(numerogenerado);
        return numerogenerado;
    }
}
}  

function reiniciarjuego (){
    limpiarcampo();
    condicionesiniciales();
    document.querySelector('#reiniciar').setAttribute('disabled','true');



}

condicionesiniciales();
