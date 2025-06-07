// Genera un número aleatorio entre 1 y 6 como un dado 
var dado = Math.floor(Math.random()*6) + 1;
// Crea un array de colores y selecciona una al azar

var colores = ["amariilo", "azul", "rojo", "verde", "morado"]
var coloresRandom = colores[Math.floor(Math.random()*colores.length)]

// Crea una frase aleatoria combinando 3 arrays
var saludo = ["hola", "hi", "bounjourno", "ni hao"];
var nombre = ["pipe", "andres", "camilo", "césar"];
var complemento = ["es un lindo dia", "como estas ?", "que quieres hacer hoy?", "vamos por pizza ?"]
var frase = `${saludo[Math.floor(Math.random()*saludo.length)]} ${nombre[Math.floor(Math.random()*nombre.length)]} ${complemento[Math.floor(Math.random()* complemento.length)]}`

//Simula lanzar dos dados y muestra si el total es mayor que 7
var dado1 = Math.floor(Math.random()*6) +1;
var dado2 = Math.floor(Math.random()*6) +1;
var total = dado1 + dado2;

//console.log("dados:", dado1, dado2, "total", total)
//console.log(total > 7 ? "ganaste !": "perdiste!"); 

// Elige al azar un nombre de un array de amigos
var amigos = ["juan pablo", "campo", "andres", "sebas", "javier"]
var amigoElegido = amigos[Math.floor(Math.random()*amigos.length)]

//Simula lanzar una moneda
var moneda = Math.random() < 0.5? "cara": "sello";
// console.log("El resultado de la moneda es:", moneda)

// GENERADOR DE CONTRASEÑAS, Logica: 1. Crea un array con letras, números y símbolos 2. Usa un bucle for para elegir al azar 10 caracteres 3. Une todo con .loin("")

var letras = "abcdefghijklmnopqrstiuwxyz";
var numeros = "123456789";
var simbolos = "!#$%&/()=?¡*¨[]{}";
var letrasMayusculas = letras.toUpperCase();
var caracteres = (letras + numeros + simbolos+ letrasMayusculas).split("");

var contraseña = [];

for(let i = 0; i <10; i++){
    var aleatorio = Math.floor(Math.random()* caracteres.length);
    contraseña.push(caracteres[aleatorio]);
}

//var contraseña = `${letras[Math.floor(Math.random()*letras.length)]} ${numeros[Math.floor(Math.random()*numeros.length)]} ${simbolos[Math.floor(Math.random()*simbolos.length)]}`
console.log("su contraseña es:", contraseña.join(""));