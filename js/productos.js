class Bombon {
    constructor(id, sabor, chocolate, color, color2, codigo,precio) {
      this.id = id;
      this.sabor = sabor;
      this.chocolate = chocolate;
      this.color = color;
      this.color2 = color2;
      this.codigo = codigo;
      this.precio = precio;
    }
  };
  
  //Lista de bombones con Detalles
  const ListaDeBombones = [
    new Bombon (1,"Limon", "Chocolate Blanco", "Amarillo", "Blanco", "LIM", 120),
    new Bombon (2,"Manzana", "Chocolate Blanco", "Verde", "Rojo", "MAN", 120),
    new Bombon (3,"Nuez", "Chocolate Blanco", "Blanco", "Naranja", "NUE", 120),
    new Bombon (4,"Caju", "Chocolate Blanco", "Celeste", "Naranja", "CAJ", 120),
    new Bombon (5,"Nutella", "Chocolate con Leche", "Blanco" , "Rojo" , "NUT", 120),
    new Bombon (6,"Dulce de Leche", "Chocolate con Leche", "Celeste" , "Blanco" , "DDL", 120),
    new Bombon (7,"Frutos Rojos", "Chocolate con Leche", "Rojo" , "Rosa" , "F.R", 120),
    new Bombon (8,"Toffee", "Chocolate con Leche", "Naranja" , "Rojo" , "TOF", 120),
    new Bombon (9,"Naranja", "Chocolate Amargo", "Naranja" , "Verde" , "NAR", 120),
    new Bombon (10,"Banana", "Chocolate Amargo", "Amarillo" , "Negro" , "BNN", 120),
    new Bombon (11,"Almendras", "Chocolate Amargo", "Rojo" , "Amarillo" , "ALM", 120),
    new Bombon (12,"Cafe", "Chocolate Amargo", "Blanco" , "Marron" , "CAF", 120),
  ];

let total = 0;
let carrito = [];

//js en productos.html
function RevelarValor(cantidadPorCaja) {
    console.log("Unidades por caja " + cantidadPorCaja)
};

//Botones de pagina productos.html
function agregarCafe() {
    document.getElementById ("botonAgregarCafe");
    console.log("Cafe");
    let cantidad = document.getElementById("cantidadCafe").value;
    console.log("Agregaste " + cantidad);
    total += parseInt(cantidad);
    console.log("Tu total es de " + total);
    localStorage.setItem("Cafe", "Cafe");
    
}
function agregarLimon() {
    document.getElementById ("botonAgregarLimon");
    console.log("Limon");
    let cantidad = document.getElementById("cantidadLimon").value;
    console.log("Agregaste " + cantidad);
    total += parseInt(cantidad);
    console.log("Tu total es de " + total);
    localStorage.setItem("Limon", "Limon");
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

const OlCarrito = document.getElementById("ListaCarrito");
OlCarrito.innerHTML = "<li> Lista de sabores elegidos </li>" + cantidad;
