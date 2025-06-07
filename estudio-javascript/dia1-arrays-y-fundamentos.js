// crear un array con 5 nombres y muéstrales por consola //
var nombres = ["Pipe", "Sebastian", "Santiago", "camilo", "Andres"];

//Usa push() para agregar un nuevo nombre al array //
var newName = "Antonio";
nombres.push(newName);
// Usa pop() para eliminar el último nombre del array
nombres.pop()
//Usa shift() para eliminar el primer nombre del array
nombres.shift()
//Usa unshift() para agregar un nombre al principio del array
nombres.unshift("antonio")
nombres.push("pipe")
// Crea un array de 3 ciudades y concaténalo con el array de nombres
var ciudades = ["bogotá", "medellin", "new york","Moscú"];
var nombresCiudades = nombres.concat(ciudades)
// Usa length para mostrar cuántos elementos tiene el array combinado
var nombresCiudades = nombres.concat(ciudades).length;
// Muestra el primer y el último elemento del array usando índices 
var ciudadesSeleccionadas = [ciudades[0], ciudades[1]]
// Reemplaza el segundo elemento del array por otro nombre
ciudades[1] = "Pereira";
// Usa indexOF() para encontrar la posición de un nombre especifico 
var posicionCiudades = ciudades.indexOf("new york")
//Usa includes() para verificar si un nombre está en el array
var verificarCiudad = ciudades.includes("bogotá")
//crea una variable que almacene la cantidad de letras del primer nombre
var AlmacenarLetras = ciudades[0].length;
//Usa slice() para obtener los primeros 3 elementos del array 
var mostrarElementos = ciudades.slice(0,3)
//Usa reverse() para invertir el orden del array
var invertirOrden = ciudades.reverse()
// Usa sort() para ordenar los nombres alfabeticamente 
var ordenCiudades = ciudades.sort()
// Convierte el array en un string separado por comas usando join()
var convertirString = ciudades.join(", ")
// Crea un nuevo array con edades y combínalo con el array de nombres usando concat()
var nombresCiudades = nombres.concat(ciudades)
//Usa typeof para mostrar el tipo de dato de una variable string, number y array
var string = "hola"
var number = 5
var boolean = true;

// console.log(typeof string)
// console.log(typeof number)
// console.log(typeof ciudades)
// console.log(typeof boolean)

// Crea un array de frutas y elimina la segunda usando splice()

var frutas = ["manzana", "pera", "uchuva"]
var eliminarFruta = frutas.splice(1,1);

//Inserta una fruta nueva en la segunda posición del array usando splice()
var agregarFruta = frutas.splice(1, 0, "arandano")
console.log(frutas)
