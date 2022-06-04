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
    new Bombon (6,"Dulce De Leche", "Chocolate con Leche", "Celeste" , "Blanco" , "DDL", 120),
    new Bombon (7,"Frutos Rojos", "Chocolate con Leche", "Rojo" , "Rosa" , "F.R", 120),
    new Bombon (8,"Toffee", "Chocolate con Leche", "Naranja" , "Rojo" , "TOF", 120),
    new Bombon (9,"Naranja", "Chocolate Amargo", "Naranja" , "Verde" , "NAR", 120),
    new Bombon (10,"Banana", "Chocolate Amargo", "Amarillo" , "Negro" , "BNN", 120),
    new Bombon (11,"Almendra", "Chocolate Amargo", "Rojo" , "Amarillo" , "ALM", 120),
    new Bombon (12,"Cafe", "Chocolate Amargo", "Blanco" , "Marron" , "CAF", 120),
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
let total = 0;

//js en productos.html
function revelarValor(cantidadPorCaja) {
    localStorage.setItem("Unidades por caja ", cantidadPorCaja);
    OlCarrito.innerHTML = "Caja de " + cantidadPorCaja;s
};

function agregarSabor(saborParam) {
    let sabor = saborParam.replace(/\s/g, "");
    document.getElementById (`botonAgregar${sabor}`)
    let cantidadActual = parseInt(localStorage.getItem(sabor)) || 0;
    let cantidadAAgregar = parseInt(document.getElementById(`cantidad${sabor}`).value);
    let cantidadTotalBombon = cantidadActual + cantidadAAgregar;
    total += parseInt(cantidadAAgregar);
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

function armarOLDeCarrito() {
    let lista = []
   Object.keys(carrito).forEach((sabor) => {
        lista.push(`<li> ${sabor} x ${carrito[sabor]} </li>`);
    })
    return lista.join('\n');
}

ListaDeBombones.forEach((bombon) => {
    document.getElementById(`botonAgregar${bombon.sabor.replace(/\s/g, "")}`).addEventListener("click", () => agregarSabor(bombon.sabor));
    
});
 
inicializarCarrito();
