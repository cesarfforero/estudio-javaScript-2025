
// EJERCICIOS 
// 1. Crea un array palabras con los valores hola, munod, javasrcipt, felipe, crack 
var palabras = ["Hola", "mundo", "soy Felipe", "y soy el crack", "en JavaScript"];
for (var i = 0; i< palabras.length; i++){
   //console.log(palabras[i].toUpperCase())
}

// Crea un array frases con 4 frases completas. Usa un for para imprimir cuántos caracteres tiene cada frase, usando .length 
var frases = ["hola mundo", "soy Felipe", "El zar de los negocios", "y de la programación"];
for (var i = 0; i< frases.length; i++){
    //console.log("la frase",i,"tiene",frases[i].length, "caracteres");
}

// Crea un array nombres con nombres como "andrés", ana, camilo, carlos. Usa un for para imprimir solo los nombres que empiezan con la letra c 

var nombre = ["andrés", "ana", "camilo", "carlos"]
for (var i = 0; i<nombre.length; i++){
    if(nombre[i].charAt(0) === "c"){
        //console.log(nombre[i])
    }   
}

// Crea un array mensajes con textos como hola amigo, adiós mundo, etc. Usa un for para reemplazar la palabra "mundo" por "universo" en cada mensaje, usando replace()
var mensajes = ["hola mundo", "adiós mundo", "el mejor mundo de todos", "mi mundo entero"];
for (var i = 0; i<mensajes.length; i++){
    // console.log(mensajes[i].replace("mundo","universo"))
}

// Crea un array emails con valores; usa un for para extraer solo el nombre del usuario antes del @, usando .split("@")
var emails = ["felipe@gmail.com", "elZar@yahoo.com", "crackTotal@outloo.com"];
var usuarios = [];
for (var i = 0; i < emails.length; i++){
    usuarios.push(emails[i].split("@")[0])
}

// console.log(usuarios)

// 1. Declara una variable llamada myName y guárdale tu nombre. Imprme su valor en consola
var myName = "Felipe";
//console.log(myName)
// 2. Declara una variable greeting que contenga el texto "hola." únela con el valor de myName
var greeting = "Hola ";
//console.log(greeting.concat(myName));
// Declara una variable city con el nombre de tu ciudad. Imprime la longitud de esa cadena.
var city = "bogotá";
//console.log(city.length)
var cityUpperCase = city.toUpperCase();
//console.log(cityUpperCase)
// Declara una variable phrase con el valor "JavaScript es genial". Reemplaza la palabra "genial" por increible 
var phrase = "JavaScript es genial";
var newPhrase = phrase.replace("genial","increible");
//console.log(newPhrase)
// Declara una variable year y asígnale el año actual.
var year = 2025;
//console.log(year)
// crea dos varible a y b con valores numericos. suma ambos valores y muestra el resultado;
var a = 5;
var b = 4;
var result = a + b; 
//console.log(result)
// Declara una variable price con el val0r 49.99. Convierte ese número a un string.
// var price = 49.99;
// var stringPrice = price.toString()
// //console.log(stringPrice)
// if ( price === stringPrice){
//     // console.log(true)
// }else{console.log("they are not the same")}

// Crea una variable number y asíganle cualquier número entero. Imprime true si el número es par y false si es impar.
// var number = 4;
// if (number % 2 === 0){
//     console.log(true)
// }else{console.log(false)}

//Declara una variable isOnline y asíganle el valor true. Imprime su valor
var isOnline = true;
//console.log(isOnline)

// Crea una variable age y asíganle un número. Crea otra variable isAdult que sea true si age es mayor o igual a 18, y false en caso contrario
// var age = 27;
// isAdult = "";
// if (age >= 18){
//     console.log(isAdult = true)
// }else {
//     console.log(isAdult = false);
// }

// Declara dos variables booleanas likeMusic y PlayInstrument. Imprime true si ambas son verdaders, y false si no
// var likeMusic = true;
// var PlayInstrument = true;
// if (likeMusic === true && PlayInstrument === true ){
//     console.log(true)
// }else{console.log(false)}

// Declara un array llamado colors con al menos 3 colores. Imprime el primer color
var colors = ["amarillo", "azul", "rojo"];
//console.log(colors[0]);

// Agrega el color "black" al final del array colors 
colors.push("black");
//console.log(colors)

// Crea un array llamado numbers con los números del 1 al 5. Imprime cuántos elementos tiene ese array
var numbers = [1,2,3,4,5];
// console.log(numbers.length)

// Accede y muestra en consola el último elemento del array numbers
//console.log(numbers[4])

// Declara un array llamado mixedData que contenga todos los tipos de datos
var mixedData = ["El mejor ", 27, true, [1,2,3]];
for (var i = 0; i < mixedData.length; i++){
    console.log(mixedData[i]);
}