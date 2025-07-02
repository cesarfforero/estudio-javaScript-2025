// 1. String - (texto)
// Métodos comunes: 
// .toUpperCase() = convierte a mayúsculas 
// .toLowerCase() = convierte a minúsculas 
// .includes(x) = verifica si contiene una subcadena 
// .charAT(n) = Devuelve el cáracter en la posición n 
// .split(" ") = Divide el string en un array 
// .replace("a","b") = reemplaza texto 
// .length = Devuelve cúantos caracteres tiene 


// 2. ARRAY - (listas)
// .push() = Agrega un elemento al final 
// .pop() = Elimina el último elemento 
// .shift() = Elimina el primer elemento 
// .unshift() = Agrega al inicio 
// .join(" ") = Une todos los elementos en un string 
// .slice(a,b) = Crea una copia parcial (sin modificar original)
// .splice(a,b) = Elimina o reemplaza elemntos 
// .length = Cantidad de elementos

// 3. NUMBER - (Números)
// Math.floor(x) = redondea hacia abajo 
// Math.ceil(x) = redondea hacia arriba 
// Math.round(x) = Redondea normal 
// Math.random() = Devuelve un número aleatorio entre 0 y 1 
// toFixed(n) = Muestra con n decimales (como string)

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

console.log(usuarios)



