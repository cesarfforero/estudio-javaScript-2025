// Crea un array llamado frutas que contenga 5 frutas diferentes. Imprime el array completo en consola
var frutas = ["manzana", "pera", "uva", "uchuva", "mandarina"]

// Accede al segundo elemento del array frutas y muéstralo en consola
//console.log(frutas[1])

// Agrega al final del array frutas la fruta "mango" usando push()

frutas.push("mango")

//Agrega al inicio del array frutas la fruta "fresa usando unshift()"
frutas.unshift("fresa")

//Elimina el último elemento del array frutas usando pop() y muestra el array actualizado
frutas.pop()

//Elimina el primer elemento del array frutas usando shift() y muestra el array actualizado
frutas.shift()

//Crea un nuevo array llamado numeros que contenga los números del 1 al 10. Luego elimina el número que está en la posición 5 (índice 4) usando splice()
var numeros = [1,2,3,4,5,6,7,8,9]
numeros.splice(4,1)

//Ordena el array numeros de forma descendente usando sort() y reverse()
numeros.reverse()

//Crea un array llamado colores con los valores: rojo, azul, verde, amarillo, morado. Utiliza indexof() para encontrar la posicion del color verde

var colores = ["rojo", "azul", "verde", "amarillo", "morado"]
//console.log(colores.indexOf("verde"))

// Concatena los arrays colores y frutas para crear un nuevo array coloresYFrutas

var coloresYFrutas = colores.concat(frutas)

//Crea un array pares que contenga solo números pares del 2 al 20 (puedes escribirlos manualmente). después usa .length para mostrar cuántos elementos tiene
var pares = [0,2,4,6,8,10,12,14,16,18,20]

//Usa .includes() para verificar si el número 8 está dentro del array pares
//console.log(pares.includes(8))

// Crea un objeto llamado persona que contenga las propiedades 
var persona = {
    nombre: "juan",
    edad: 30,
    ciudad: "Bogotá"
}

// Modifica la propiedad edad y cambia su valor a 31 
persona.edad = 31,

// Agrega una nueva propiedad profesion con el valor ingeniero al objeto persona
persona.profesion = "ingeniero",

// Elimina la propiedad ciudad del objeto persona usando delete
delete persona.ciudad
// console.log(persona)

// Crea un array llamado productos que contenga 3 objetos. Cada objeto representa un producto con las propiedades: nombre, precio, cantidad
var productos = [
    {nombre: "laptop", precio: 1500, cantidad: 5},
    {nombre: "celular", precio: 2500, cantidad: 10},
    {nombre: "tablet", precio: 3000, cantidad: 15},
]

// Accede al segundo producto dentro del array productos y muestra el nombre en consola
//console.log(productos[1].nombre)

//Modifica la cantidad del tercer producto dentro del array productos y aumenta su cantidad en 2 unidades

productos[2].cantidad = 17

//console.log(productos[2].cantidad)

// Crea un array llamado clientes que contenga 4 objetos. Cada objeto debe tener: nombre, edad, membresia

var clientes = [
    {nombre:"juan", edad:15, membresia: false },
    {nombre:"andres", edad:20, membresia: true },
    {nombre:"pipe", edad:18, membresia: false },
]

// Accede al tercer cliente y muestra su nombre y su edad por separado usando 
//console.log(clientes[2].nombre)
//console.log(clientes[2].edad)

//Modifica la propiedad membresia del primer cliente y cambiala a true
clientes[0].membresia = true

// Agrega un nuevo cliente al final del array clientes usando push()
clientes.push({nombre:"Carlos", edad:30, membresia: false})

// Elimina el primer cliente del array clientes usando shift()
clientes.shift()

// Crea un array llamado inventario con 5 objetos
var inventario = [
    {producto: "Corona", precio:4500, stock: 2000},
    {producto: "Stella Artois", precio:4500, stock: 4000},
    {producto: "Coronita", precio:4500, stock: 6000},
    {producto: "Bombai", precio:120000, stock: 500},
    {producto: "Tanquerai", precio:130000, stock: 700},
]

// Accede al cuarto producto de inventario y réstale 3 unidades a su propiedad stock 
inventario[3].stock = 497

//Cambia el precio del segundo producto de inventario a un nuevo valor 
inventario[1].precio = 5000

//Agrega un nuevo producto al inicio del array inventario usando unshift()
inventario.unshift({producto:"Tonica Water", precio: 25000, stock: 1200})

// Elimina el tercer producto del array inventario usando splice()

inventario.splice(2,1)
//console.log(inventario)

// Crea una variable numeroAleatorio que genere un numero entero del 1 al 10 utilizando math.random() y math.floor(). imprime el número
var numeroAleatorio = Math.floor(Math.random()*11)

//Crea un array premios con 5 strings diferentes, utiliza math.random para seleccionar un premio al azar y mostrarlo
var premios = ["carro", "viaje", "televisor", "dinero", "liberad"]
var rifaPremios = premios[Math.floor(Math.random()*premios.length)]

// Crea un array jugadores con 4 nombres
var jugadores =  ["carlos", "sebastian", "jean", "martin"]
var jugadoresAleatorios = jugadores[Math.floor(Math.random()*jugadores.length)]

// Genera un número aleatorio entre 50 y 100, y asígnalo a una variable puntuacion
var puntuacion = Math.floor(Math.random()* (100 - 50 + 1)) +50;

//Crea un array monedas con los valores: cara, sello. simula un lanzamiento de moneda aleatorio e imprime el resultado
var monedas = ["cara", "sello"];
var resultado = monedas [Math.floor(Math.random()*2)];
//console.log(resultado)

// MINI PROYECTO "TIENDA DE PREMIOS ALEATORIOS"

//1. Crea el array de inventario, 
//Debes tener un array llamado inventario con al menos 5 productos. 
//Cada producto es un objeto con: nombre, precio, stock
var inventario = [
    {nombre: "Coronita", precio: 4500, stock: 10},
    {nombre: "Stella Artrois", precio: 5500, stock: 15},
    {nombre: "Modelo", precio: 4000, stock: 23},
    {nombre: "Bombai Safir", precio: 120000, stock: 12},
    {nombre: "Tanquerai", precio: 150000, stock: 31},
]

while(inventario.length > 0){
//Simula un cliente girando la ruleta
var ruletaPremio = inventario[Math.floor(Math.random()*inventario.length)]

// Entrega el premio al cliente
var premiacion = ruletaPremio.nombre
console.log("Felicitaciones, has ganado una:",premiacion,"!")

// Verifica el stock y muestralo actualizado después de cada jugada
ruletaPremio.stock = ruletaPremio.stock - 1;
console.log("Stock restante:" + ruletaPremio.stock);

//Eliminar el producto cuando el stock llegue a 0
if (ruletaPremio.stock === 0){
    var index = inventario.indexOf(ruletaPremio);
    inventario.splice(index,1);
    console.log("El producto" + ruletaPremio.nombre + "se ha agotado.")
}

console.log("Inventario actual:", inventario);
}

