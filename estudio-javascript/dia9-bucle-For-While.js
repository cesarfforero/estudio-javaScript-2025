// Imprime los números del 1 al 10 usando un bucle for 
var resultado = "";
for (var i = 0; i<11; i++){
    resultado += i + " ";
}//console.log(resultado)
// Imprime todos los números pares del 2 al 20 usando un bucle for
for ( var i = 1; i <11; i++){
    //console.log(i * 2)
}
// Imprime la tabla de multipplicar del número 5 (del 5x1 al 5x 10) usando un bucle for
for (var i = 1; i < 11; i++){
    //console.log(" 5 x", i)
}
// Declara un array con 4 nombres. Usa un bucle for para imprimir cada nombre
var nombres = ["jasinto", "emanuel", "erika", "tony", "junior"];
for (var i = 0; i < nombres.length; i++){
    //console.log(nombres[i])
}
// Suma todos los números del 1 al 100 usando un bucle for y muestra el resultado;
var resultado = 0;
for (var i = 0; i < 101; i++){
    resultado += i
}//console.log(resultado)

// Imprime los números del 10 al 1 en orden descendente usando un bucle for 
for (var i = 10;i>0; i--){
    //console.log(i)
}
// Crea un array con las frutas, imprime la longitud de cada string
var frutas = ["manzana", "pera", "mandarina", "guayaba"];
for (var i = 0; i < frutas.length; i++){
    //console.log(frutas[i].length)
}
// Imprime todos los múltiplos de 3 entre 3 y 30 usando un bucle for
for (var i = 1; i < 11; i++){
    //console.log(i * 3 )
}

// Imprime los números del 1 al 5 usando un bucle while 
var i = 1;
while( i<= 5){
//console.log(i);
i++
}
// 10 Imprime los números del 20 al 10 en orden descendente usando un bucle while
var i = 20;
while(i>=10){
    //console.log(i);
    i--
}
// Suma todos los números pares entre 2 y 20 usando un bucle while

// declara un array con los números [1,2,3,4,5] recorre el array con un bucle while e imprime cada elemento.
var number = [1,2,3,4,5];
var i = 0;
while(i < number.length){
    //console.log(number[i]);
    i++
}

// Usa un bucle while para imprimir la frase "JavaScript es genial" 7 veces
var count = 1;
while(count <= 7){
    //console.log("javaScript es genial");
    count++
}

// Declara una variable number en 1; Usa un bucle while para imprimir el número y aumenta su valor en 2 cada vez, hasta llegar a 15 o menos;
var number = 1;
while (number <= 15){
    //console.log (number);
    number += 2 
}
// crear contraseña:
var contraseña = "12345";
var userInput = "12345";
var attempts = 0;
while(userInput !== contraseña && attempts < 1){
    console.log("Contraseña incorrecta, vuelva a intentarlo")
attempts ++
}
if (userInput === contraseña){
    console.log("acceso permitido")
}