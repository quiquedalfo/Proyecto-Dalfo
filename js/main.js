const Limon = {
  sabor: "limon",
  chocolate: "blanco",
  color: "amarillo",
  detalles: "blanco"};
const Manzana = {
  sabor: "manzana",
  chocolate: "blanco",
  color: "verde",
  detalles: "rojo"};
const Nuez = {
  sabor: "nuez",
  chocolate: "blanco",
  color: "blanco",
  detalles: "naranja"};
const Caju = {
  sabor: "caju",
  chocolate: "blanco",
  color: "celeste",
  detalles: "naranja"};
const DulceDeLeche = {
  sabor: "dulce de leche",
  chocolate: "con leche",
  color: "celeste",
  detalles: "blanco y amarillo"};
const Nutella = {
  sabor: "nutella",
  chocolate: "con leche",
  color: "blanco",
  detalles: "rojo y negro"};
const FrutosRojos = {
  sabor: "frutos rojos",
  chocolate: "con leche",
  color: "rojo",
  detalles: "rosa"};
const Toffee = {
  sabor: "toffee",
  chocolate: "con leche",
  color: "naranja",
  detalles: "rojo, verde y amarillo"};
const Cafe = {
  sabor: "cafe",
  chocolate: "amargo",
  color: "blanco",
  detalles: "marron"};
const Almendras = {
  sabor: "almendras",
  chocolate: "amargo",
  color: "rojo",
  detalles: "amrillo"};
const Naranja = {
  sabor: "naranja",
  chocolate: "amargo",
  color: "naranja",
  detalles: "verde"};
const Banana = {
  sabor: "banana",
  chocolate: "amargo",
  color: "amarillo",
  detalles: "negro"};
const sabores = [Limon, Manzana, Nuez, Caju, Toffee, Nutella, DulceDeLeche, FrutosRojos, Cafe, Banana, Naranja, Almendras];

const MiCaja = [];
let sabor = prompt("elegi tu sabor");
MiCaja.push(sabor);

console.log(MiCaja);