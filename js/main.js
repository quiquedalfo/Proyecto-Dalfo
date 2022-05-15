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
}
;
//Lista de bombones con Detalles
const ListaDeBombones = [
  new Bombon (1,"Limon", "Chocolate Blanco", "Amarillo", "Blanco", "LIM", 120),
  new Bombon(2,"Manzana", "Chocolate Blanco", "Verde", "Rojo", "MAN", 120),
  new Bombon(3,"Nuez", "Chocolate Blanco", "Blanco", "Naranja", "NUE", 120),
  new Bombon(4,"Caju", "Chocolate Blanco", "Celeste", "Naranja", "CAJ", 120),
  new Bombon(5,"Nutella", "Chocolate con Leche", "Blanco" , "Rojo" , "NUT", 120),
  new Bombon(6,"Dulce de Leche", "Chocolate con Leche", "Celeste" , "Blanco" , "DDL", 120),
  new Bombon(7,"Frutos Rojos", "Chocolate con Leche", "Rojo" , "Rosa" , "F.R", 120),
  new Bombon(8,"Toffee", "Chocolate con Leche", "Naranja" , "Rojo" , "TOF", 120),
  new Bombon(9,"Naranja", "Chocolate Amargo", "Naranja" , "Verde" , "NAR", 120),
  new Bombon(10,"Banana", "Chocolate Amargo", "Amarillo" , "Negro" , "BNN", 120),
  new Bombon(11,"Almendras", "Chocolate Amargo", "Rojo" , "Amarillo" , "ALM", 120),
  new Bombon(12,"Cafe", "Chocolate Amargo", "Blanco" , "Marron" , "CAF", 120),
];

const PrecioCajaX6 = 2000;
const PrecioCajaX12 = 3000;
const CantidadCajax12 = 12;
const CantidadCajax6 = 6;
let cantidad = 0;
let carrito = [];



//Indentificacion de usuario
const Login = () => {
  let nombre = prompt("Hola, ingresa tu nombre");
  while (nombre =="" || nombre == null) {
    nombre = prompt("Ingrese tu nombre correctamente");
  }
  return nombre;
};

//Indentificacion de sabor
const ElegirSabor = () => {
  let sabor = prompt("Que sabor queres?");
  while (sabor == "" && sabor != ListaDeBombones) {
    sabor = prompt("Que sabor queres?");
  }
  return sabor;
};

//Indentificacion de cantidad
const ElegirCantidad = () => {
  let cantidad = parseInt(prompt("Cuantos queres?"));
  while (cantidad < 1 || cantidad >=20 ) {
    alert(`Lo lamento pero en numero no es adecuado.\n Por favor ingresa entre 1 el 20`);
    cantidad = parseInt(prompt("Cuantos queres?"));
  }
  return cantidad;
};

//Ver lista de bombones
const VerLista = () => {
  let texto = "";
  ListaDeBombones.forEach ((element) =>{
      texto += `${element.id}) ${element.sabor}\n`;
  })
  alert(texto);
};


//Buscar si matchea con la lista de bombones 

const BombonesSeleccionados = (sabor) => {
  console.log(sabor);
  let BombonFind = ListaDeBombones.find((element) => element.sabor === sabor);
  carrito.push(BombonFind);

  let seguir = confirm("Elija otro sabor" + VerLista);

  if (seguir === true) {
    init();
  }
};





let Cliente = Login();
let Lista = VerLista();
let Producto = ElegirSabor();
let CantidadBruta = ElegirCantidad();
carrito.push(cantidad);

console.log(Cliente);
console.log(Producto);
console.log(CantidadBruta);
console.log(carrito);

/*let Carrito = CantidadBruta;
if (Carrito.CantidadBruta != 6) {
  Producto = ElegirSabor();
  CantidadBruta = ElegirCantidad();
} else {
  console.log(Carrito)
}*/

/*let Carrito = CantidadBruta;
if (Carrito.CantidadBruta != 12) {
  Producto = ElegirSabor();
  CantidadBruta = ElegirCantidad();
} else {
  console.log(Carrito)
}



/*queres cajas de 12 o de 25?
12 o 25
si es caja de 12 entonces lista y promt de sabor y cantidad
si es caja de 25 entonces lista y prompt de sabor y cantidad
Ambos seran enviados a un array para ser mostrado al final de el 
*/