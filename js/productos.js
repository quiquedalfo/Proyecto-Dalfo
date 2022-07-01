class Bombon {
  constructor( id,sabor,chocolate,color,color2,codigo,precio) {
    this.id = id;
    this.sabor = sabor;
    this.chocolate = chocolate;
    this.color = color;
    this.color2 = color2;
    this.codigo = codigo;
    this.precio = precio;
  }
};
const ListaDeBombones = [
  new Bombon (1,"Limon","Chocolate Blanco","Amarillo","Blanco","LIM",120),
  new Bombon (2,"Manzana","Chocolate Blanco","Verde","Rojo","MAN",120),
  new Bombon (3,"Nuez","Chocolate Blanco","Blanco","Naranja","NUE",120),
  new Bombon (4,"Caju","Chocolate Blanco","Celeste","Naranja","CAJ",120),
  new Bombon (5,"Nutella","Chocolate con leche","Blanco","Rojo","NUT",120),
  new Bombon (6,"DulceDeLeche","Chocolate con leche","Celeste","DDL","LIM",120),
  new Bombon (7,"FrutosRojos","Chocolate con leche","Rojo","Rosa","FFR",120),
  new Bombon (8,"Toffee","Chocolate con leche","Naranja","Rojo","TFF",120),
  new Bombon (9,"Naranja","Chocolate amargo","Naranja","Verde","NAR",120),
  new Bombon (10,"Banana","Chocolate amargo","Amarillo","Negro","BAN",120),
  new Bombon (11,"Almendra","Chocolate amargo","Rojo","Amarillo","ALM",120),
  new Bombon (12,"Cafe","Chocolate amargo","Blanco","Marron","CAF",120),
]; 

const CajaX12 = 1800;
const CajaX25 = 3000;
let UlCarrito = document.getElementById("ListaCarrito");
let pCarrito = document.getElementById("TotalCarrito");
let pCantidadCarrito = document.getElementById("cantidadCarrito")
let precioFinal = 0;
let carrito = [];
let total = 0;

function inicializarCarrito() {
    ListaDeBombones.forEach((bombon) => {
        let cantidadActual = localStorage.getItem(bombon.sabor.replace(/\s/g, ""));
        if(cantidadActual != null)
            carrito[bombon.sabor] = parseInt(localStorage.getItem(bombon.sabor.replace(/\s/g, "")))
    }) 
}

//Seleccion de tamaño y muestra en html la cantidad
function revelarValor(cantidadPorCaja) {
    localStorage.setItem("Unidades por caja ", cantidadPorCaja);
    if (cantidadPorCaja == 12) {
      precioFinal = CajaX12;
    }
    else {
      precioFinal = CajaX25;
    }
    pCarrito.innerHTML = "Tu total a pagar es de " + precioFinal + "$";
};

//Botones
ListaDeBombones.forEach((bombon) => {
  document.getElementById(`botonAgregar${bombon.sabor.replace(/\s/g, "")}`).addEventListener("click", () => agregarSabor(bombon.sabor));

  document.getElementById(`botonBorrar${bombon.sabor.replace(/\s/g, "")}`).addEventListener("click", () => borrarSabor(bombon.sabor));

});
document.getElementById("botonVaciar").addEventListener("click", () => vaciarCarrito());

//Boton Agregar
function agregarSabor(saborParam) {
    let sabor = saborParam.replace(/\s/g, "");
    document.getElementById (`botonAgregar${sabor}`)
    let cantidadActual = parseInt(localStorage.getItem(sabor)) || 0;
    let cantidadAAgregar = parseInt(document.getElementById(`cantidad${sabor}`).value);
    let cantidadTotalBombon = cantidadActual + cantidadAAgregar;
    total += parseInt(cantidadAAgregar);
    localStorage.setItem("Total", total);
    localStorage.setItem(sabor, cantidadTotalBombon);
    carrito[sabor] = cantidadTotalBombon;
    actualizarVistaDeCarrito();

    Toastify({
        text: "Agregaste " + cantidadAAgregar + " " + sabor,
        duration: 1000,
        newWindow: true,
        close: true,
        gravity: "top",
        position: "right",
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
      }).showToast();
    if (total === parseInt(localStorage.getItem("Unidades por caja "))){
      swal(`Desea continuar al pago?`, {
        
      buttons: ["No", "Si"],
      });
    }
}
//Boton borrar
function borrarSabor(saborParam) {
  let sabor = saborParam.replace(/\s/g, "");
  document.getElementById (`botonBorrar${sabor}`)
  let cantidadActual = parseInt(localStorage.getItem(sabor)) || 0;
  let cantidadABorrar = parseInt(document.getElementById(`cantidad${sabor}`).value);
  if(cantidadABorrar > cantidadActual) {
    alert(`No podés eliminar ${cantidadABorrar} bombones de ${sabor}. Tenés ${cantidadActual} `);
    return;
  }
  let cantidadTotalBombon = (cantidadActual - cantidadABorrar);
  total -= cantidadABorrar;
  localStorage.setItem("Total", total);
  localStorage.setItem(sabor, cantidadTotalBombon);
  carrito[sabor] = cantidadTotalBombon;
  actualizarVistaDeCarrito();
  Toastify({
      text: "Eliminaste " + cantidadABorrar + " " + sabor,
      duration: 1000,
      newWindow: true,
      close: true,
      gravity: "top",
      position: "right",
      stopOnFocus: true, // Prevents dismissing of toast on hover
      style: {
        background: "linear-gradient(to right, #fb0303, #fb6e03)",
      },
    }).showToast();
}
function vaciarCarrito() {
  localStorage.clear();
  UlCarrito.replaceChildren();
  lista = [];
  carrito = [];
  total = 0;
}

function armarOLDeCarrito() {
  let lista = []
  Object.keys(carrito).forEach((sabor) => {
      if(carrito[sabor] > 0)
        lista.push(`<li> ${sabor} x ${carrito[sabor]} </li>` + "<br>");
  })
  return lista.join('\n');
}

function actualizarVistaDeCarrito() {
  UlCarrito.innerHTML = armarOLDeCarrito();
}
inicializarCarrito();
actualizarVistaDeCarrito();
revelarValor(document.getElementById('Tam').value);