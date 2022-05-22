
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

console.log(ListaDeBombones);

function guardarSabor(sabor, cantidad){
  localStorage.setItem(sabor, cantidad)
};

let carrito = [];