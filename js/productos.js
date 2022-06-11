const ListaDeBombones = fetch("/ListaDeBombones.json").then(resp=>resp.json()).then(data=> console.log(data));

let carrito = [];
function inicializarCarrito() {
    ListaDeBombones.forEach((bombon) => {
        let cantidadActual = localStorage.getItem(bombon.sabor.replace(/\s/g, ""));
        if(cantidadActual != null)
            carrito[bombon.sabor] = parseInt(localStorage.getItem(bombon.sabor.replace(/\s/g, "")))
    }) 
}
const OlCarrito = document.getElementById("ListaCarrito");
let total = 0;

//Seleccion de tamaño
function revelarValor(cantidadPorCaja) {
    localStorage.setItem("Unidades por caja ", cantidadPorCaja);
    OlCarrito.innerHTML = "Caja de " + cantidadPorCaja;
};
//Botones
ListaDeBombones.forEach((bombon) => {
  document.getElementById(`botonAgregar${bombon.sabor.replace(/\s/g, "")}`).addEventListener("click", () => agregarSabor(bombon.sabor))

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



function armarOLDeCarrito() {
  let lista = []
 Object.keys(carrito).forEach((sabor) => {
      lista.push(`<li> ${sabor} x ${carrito[sabor]} </li> <br>
      <Total ${precioFinal}`);
  })
  return lista.join('\n');
}
inicializarCarrito();
