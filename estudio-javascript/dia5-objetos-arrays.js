// Crea un array colores con los valores: "rojo", "azul", "verde", "amarillo", "morado". Utiliza .join() para convertir el array en un string separado por comas

var colores = ["rojo", "azul", "verde", "amarillo", "morado"].join(" ")
var colores = ["rojo", "azul", "verde", "amarillo", "morado"].join(" - ")

// Crea un array letras con los valores: A,B,C,D,E,F. Utiliza .slice() para obtener un nuevo array con los primeros 3 elementos

var letras = ["A", "B", "C", "D", "E", "F"].slice(0,3);

// utiliza .slice() sobre el array letras para obtener los elementos C,D,E

var letras = ["A", "B", "C", "D", "E", "F"].slice(2,5);

//Utiliza .slice() sobre el array letras para obtener desde la posición 2 hasta el final del array.

var letras = ["A", "B", "C", "D", "E", "F"].slice(1)


// Crea una array de numeros y luego elimina el de 3ra posicion 
var numeros = [1,2,2,3,4,5,6]
numeros.splice(2,1)

// Crea un array de objetos alumnos con 5 alumnos. cada uno debe tener: nombre, nota, asisitencia. La nota debe estar entre 60 (min) y 100 (max)
//Fórmula mágica del math.random() en rangos = math.floor(math.random() * (max - min + 1) + min)

var notaMinima = 60;
var notaMaxima = 100;
var alumnos = [
    {nombre: "camilo", nota: Math.floor(Math.random()* (notaMaxima - notaMinima + 1) + notaMinima), asistencia: true},
    {nombre: "Edgar",  nota: Math.floor(Math.random()* (notaMaxima - notaMinima + 1) + notaMinima), asistencia: true},
    {nombre: "josé",  nota: Math.floor(Math.random()* (notaMaxima - notaMinima + 1 ) + notaMinima), asistencia: false},
    {nombre: "juan",  nota: Math.floor(Math.random()* (notaMaxima - notaMinima + 1 ) + notaMinima ), asistencia: true},
    {nombre: "Hernesto",  nota: Math.floor(Math.random()* (notaMaxima - notaMinima + 1) + notaMinima), asistencia: false},
]

// Crea un nuevo array aprobados que contenga solo los alumnos que tienen nota mayor o igual a 70
var aprobados = [];

for (var i = 0; i < alumnos.length; i ++) {
    if (alumnos[i].nota >= 70){
        aprobados.push(alumnos[i]);
    }
}

// Muestra en consola los nombres de los alumnos aprobados, usando .join() para mostrarlos en un solo string, separados por coma
var alumnosAprobados = [];
for (var i = 0; i< aprobados.length; i++){
    if (alumnosAprobados.push(aprobados[i].nombre));
}

var resultado = alumnosAprobados.join(", ");
// console.log("Los alumnos aprobados son:", resultado);

alumnos.push({nombre:"Pipe", nota:Math.floor(Math.random() * (notaMaxima - notaMinima+ 1)+ notaMinima), asistencia: true})

// Elimina el primer alumno del array alumnos usando shift()
alumnos.shift();

// Crea un array productos con 5 objetos
var productos = [
    {nombre: "Tito Pabón tipo 1", precio: 120000, stock: 50},
    {nombre: "Tito Pabón tipo 2", precio: 130000, stock: 50},
    {nombre: "Tito Pabón tipo 3", precio: 140000, stock: 50},
    {nombre: "Tito Pabón tipo 4", precio: 150000, stock: 50},
    {nombre: "Tito Pabón tipo 5", precio: 160000, stock: 50},
]

// Simula una venta aleatoria 

    // simulación venta 
    var venta = productos[Math.floor(Math.random()*productos.length)]
// entraga del producto al cliente
var entrega = venta.nombre
//console.log("gracias por comprar en hipercenter, su producto:", entrega, "está listo en el counter")

// verificación del stock y actualización después de cada venta
venta.stock -= 1
//console.log("stock restante de:", entrega, "es:", venta.stock)

// Eliminar el producto cuando el stock llegue a cero 
if (venta.stock ===0){
    var index = productos.indexOf(venta);
    productos.splice(index,1);
    //console.log("El producto" + productos.nombre + "se ha agotado")
}

//console.log("inventario actual:", productos)

// Muestra los 3 primeros productos disponibles usando .slice()

var tresPrimeros = productos.slice(0,3)
//console.log(tresPrimeros)

// Agrega un nuevo producto al inicio del array productos usando unshift()
productos.unshift({nombre:"Tito Pabón tipo 0", precio: 110000, stock:50})
//console.log(productos)

// Crea un array clientes con 4 objetos 
var clientes = [
    {nombre: "Yony", edad: 34, membresia: true},
    {nombre: "Edison", edad: 38, membresia: true},
    {nombre: "Carlos", edad: 32, membresia: true},
    {nombre: "Miguel", edad: 40, membresia: false},
    {nombre: "Juan", edad: 43, membresia: false},
];

var clientesVIP =[];

for (var i = 0; i < clientes.length; i++){
    if(clientes[i].membresia === true){
        clientesVIP.push(clientes[i]);
    }
}

var nombreClienteVIP =[];
for(var i = 0; i < clientesVIP.length; i++){
    nombreClienteVIP.push(clientesVIP[i].nombre);
}




// Muestra los nombres de los clientesVIP usando .join("-")
var mostrarClientesVIP = nombreClienteVIP.join(" - ")
console.log(mostrarClientesVIP)

// Resumen Final
console.log(productos);
console.log(alumnosAprobados);
console.log(mostrarClientesVIP);
