//fetch("../listaDeBombones.json").then(resp=>resp.json()).then(data=> (data));
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
}
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
let carrito = [];
function inicializarCarrito() {
    ListaDeBombones.forEach((bombon) => {
        let cantidadActual = localStorage.getItem(bombon.sabor.replace(/\s/g, ""));
        if(cantidadActual != null)
            carrito[bombon.sabor] = parseInt(localStorage.getItem(bombon.sabor.replace(/\s/g, "")))
    }) 
}
const OlCarrito = document.getElementById("ListaCarrito");
const CajaX12 = 1800;
const CajaX25 = 3000;
let precioFinal = 0;
let total = 0;
//Seleccion de tamaño
function revelarValor(cantidadPorCaja) {
    localStorage.setItem("Unidades por caja ", cantidadPorCaja);
    OlCarrito.innerHTML = "Caja de " + cantidadPorCaja;
    if (cantidadPorCaja == 12) {
      let precioFinal = CajaX12;
      OlCarrito.innerHTML = "Tu total a pagar es de " + precioFinal + "$";
    }
      else {
      let precioFinal = CajaX25;
      OlCarrito.innerHTML = "Tu total a pagar es de " + precioFinal + "$";
  
    }
};

//Botones
ListaDeBombones.forEach((bombon) => {
  document.getElementById(`botonAgregar${bombon.sabor.replace(/\s/g, "")}`).addEventListener("click", () => agregarSabor(bombon.sabor));

  document.getElementById(`botonBorrar${bombon.sabor.replace(/\s/g, "")}`).addEventListener("click", () => borrarSabor(bombon.sabor));

});
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
    OlCarrito.innerHTML = armarOLDeCarrito();
    ToastifyAgregar({
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
}
//Boton borrar
function borrarSabor(saborParam) {
  let sabor = saborParam.replace(/\s/g, "");
  document.getElementById (`botonBorrar${sabor}`)
  let cantidadActual = parseInt(localStorage.getItem(sabor)) || 0;
  let cantidadABorrar = parseInt(document.getElementById(`cantidad${sabor}`).value);
  let cantidadTotalBombon = cantidadActual - cantidadABorrar;
  total -= parseInt(cantidadABorrar);
  localStorage.setItem("Total", total);
  localStorage.setItem(sabor, cantidadTotalBombon);
  carrito[sabor] = cantidadTotalBombon;
  OlCarrito.innerHTML = armarOLDeCarrito();
  ToastifyBorrar({
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



function armarOLDeCarrito() {
  let lista = []
 Object.keys(carrito).forEach((sabor) => {
      lista.push(`<li> ${sabor} x ${carrito[sabor]} </li> <br>
      <Total ${precioFinal}`);
  })
  return lista.join('\n');
}
inicializarCarrito();
