// 1. Crea un objeto llamado "persona" con las propiedades "nombre", "edad", y "profesión"
var persona = {
    nombre: "",
    edad: "",
    profesion: "",
};

// Agrega una nueva propiedad "ciudad" al objeto "persona"
persona.ciudad = "",

//Cambia el valor de la propiedad "edad" de "persona" a 30
persona.edad = 30;

// Crea un objeto llamado "auto" con las propiedades "marca", "modelo", y "año"

var auto = {
marca: "",
modelo: "",
año: "",
};

auto.color = "";

// Elimina la propiedad "año" del objeto "auto" usa delete auto.año
delete auto.año

//  Crea un objeto "computadora" con las propiedades "procesador" "ram" y "almacenamiento"

var computadora = {
    procesador: "",
    ram: "",
    almacenamiento: "",
};

computadora["pantalla"] = "15 pulgadas",

// Elimina la propiedad "ram" del objeto "computadora"
delete computadora.ram

// Crea un array llamado "frutas" con 4 frutas.
var frutas = ["manzana", "pera", "uva", "uchuva"];

// Elimina la última fruta del array "frutas"

frutas.pop()

//Elimina la primera fruta del array 

frutas.shift()

// Agrega una fruta al final del array

frutas.push("mandarina");

// Agrega una fruta al principio del array "frutas"

frutas.unshift("limón");

// Crea un objeto "libro" con las claves titulo, autor y año

var libro = {
    titulo: "",
    autor: "",
    año: "",
};

// Agrega una propiedad editorial al objeto libro

libro["editorial"] = "",

// Elimina la propiedad año del objeto libro 

delete libro.año

// Crea un array numeros con los valores del 1 al 5

var numeros = [1,2,3,4,5]

// Agrega el numero 6 al final del array numeros

numeros.push(6)

// Elimina el numero 1 del array

numeros.shift()

// Crea un objeto mascota con las propiedades nombre, tipo y edad

var mascota = {nombre:"", tipo:"", edad: "",}

// Agrega una propiedad vacunado al objeto con valor true

mascota["vacunado"] = true

// Elimina la propiedad tipo del objeto mascota

delete mascota.tipo


console.log(mascota)