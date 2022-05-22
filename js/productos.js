function RevelarValor(cantidadPorCaja) {
    console.log("Unidades por caja " + cantidadPorCaja)
};
function agregarCafe() {
    document.getElementById ("botonAgregarCafe");
    console.log("Cafe");
    let cantidad = document.getElementById("cantidadCafe").value;
    console.log("Agregaste " + cantidad);
    total += parseInt(cantidad);
    console.log("Tu total es de " + total);
}
function agregarLimon() {
    document.getElementById ("botonAgregarLimon");
    console.log("Limon");
    let cantidad = document.getElementById("cantidadLimon").value;
    console.log("Agregaste " + cantidad);
    total += parseInt(cantidad);
    console.log("Tu total es de " + total);
}
function agregarManzana() {
    document.getElementById ("botonAgregarManzana");
    console.log("Manzana");
    let cantidad = document.getElementById("cantidadManzana").value;
    console.log("Agregaste " + cantidad);
    total += parseInt(cantidad);
    console.log("Tu total es de " + total);
    }
function agregarNuez() {
    document.getElementById ("botonAgregarNuez");
    console.log("Nuez");
    let cantidad = document.getElementById("cantidadNuez").value;
    console.log("Agregaste " + cantidad);
    total += parseInt(cantidad);
    console.log("Tu total es de " + total);
}
function agregarNutella() {
    document.getElementById ("botonAgregarNutella");
    console.log("Nutella");
    let cantidad = document.getElementById("cantidadNutella").value;
    console.log("Agregaste " + cantidad);
    total += parseInt(cantidad);
    console.log("Tu total es de " + total);        
}
function agregarToffee() {
    document.getElementById ("botonAgregarToffee");
    console.log("Toffee");
    let cantidad = document.getElementById("cantidadToffee").value;
    console.log("Agregaste " + cantidad);
    total += parseInt(cantidad);
    console.log("Tu total es de " + total);       
}
function agregarFrutosRojos() {
    document.getElementById ("botonAgregarFrutosRojos");
    console.log("FrutosRojos");
    let cantidad = document.getElementById("cantidadFrutosRojos").value;
    console.log("Agregaste " + cantidad);
    total += parseInt(cantidad);
    console.log("Tu total es de " + total);       
}
function agregarCaju() {
    document.getElementById ("botonAgregarCaju");
    console.log("Caju");
    let cantidad = document.getElementById("cantidadCaju").value;
    console.log("Agregaste " + cantidad);
    total += parseInt(cantidad);
    console.log("Tu total es de " + total);
              
}
function agregarAlmendra() {
    document.getElementById ("botonAgregarAlmendra");
    console.log("Almendra");
    let cantidad = document.getElementById("cantidadAlmendra").value;
    console.log("Agregaste " + cantidad);
    total += parseInt(cantidad);
    console.log("Tu total es de " + total);   
}
function agregarNaranja() {
    document.getElementById ("botonAgregarNaranja");
    console.log("Naranja");
    let cantidad = document.getElementById("cantidadNaranja").value;
    console.log("Agregaste " + cantidad);
    total += parseInt(cantidad);
    console.log("Tu total es de " + total);             
}  
function agregarBanana() {
    document.getElementById ("botonAgregarBanana");
    console.log("Banana");
    let cantidad = document.getElementById("cantidadBanana").value;
    console.log("Agregaste " + cantidad);
    total += parseInt(cantidad);
    console.log("Tu total es de " + total);  
}
function agregarDulceDeLeche() {
    document.getElementById ("botonAgregarDulceDeLeche");
    console.log("DulceDeLeche");
    let cantidad = document.getElementById("cantidadDulceDeLeche").value;
    console.log("Agregaste " + cantidad);
    total += parseInt(cantidad);
    console.log("Tu total es de " + total);        
}

let total = 0;

document.getElementById("botonAgregarCafe").addEventListener("click", agregarCafe);
document.getElementById("cantidadCafe");

document.getElementById("botonAgregarLimon").addEventListener("click", agregarLimon);
document.getElementById("cantidadLimon");

document.getElementById("botonAgregarManzana").addEventListener("click", agregarManzana);
document.getElementById("cantidadManzana");

document.getElementById("botonAgregarNuez").addEventListener("click", agregarNuez);
document.getElementById("cantidadNuez");

document.getElementById("botonAgregarNutella").addEventListener("click", agregarNutella);
document.getElementById("cantidadNutella");

document.getElementById("botonAgregarToffee").addEventListener("click", agregarToffee);
document.getElementById("cantidadToffee");

document.getElementById("botonAgregarFrutosRojos").addEventListener("click", agregarFrutosRojos);
document.getElementById("cantidadFrutosRojos");

document.getElementById("botonAgregarCaju").addEventListener("click", agregarCaju);
document.getElementById("cantidadCaju");

document.getElementById("botonAgregarAlmendra").addEventListener("click", agregarAlmendra);
document.getElementById("cantidadAlmendra");

document.getElementById("botonAgregarNaranja").addEventListener("click", agregarNaranja);
document.getElementById("cantidadNaranja");

document.getElementById("botonAgregarBanana").addEventListener("click", agregarBanana);
document.getElementById("cantidadBanana");

document.getElementById("botonAgregarDulceDeLeche").addEventListener("click", agregarDulceDeLeche);
document.getElementById("cantidadDulceDeLeche");




