// Crea un array numeros con los valores del 1 al 5 
var numeros = [1,2,3,4,5];
for (var i = 0; i <= numeros.length; i++){
    //console.log("los numeros son:" + i)
};

// Crea un array colores con al menos 4 colores
var colores = ["amarillo", "azul", "rojo", "verde", "morado"];
for (var i = 0; i < colores.length; i++){
    //console.log("Me gusta el color" + colores[i])
}

// Crea un array edades con 5 números, Usa for para imprimir solo las edades mayores a 18
 var edades = [12,15,18,21,24];
 for (var i = 0; i < edades.length; i++){
    if (edades[i] > 18){
    //console.log(edades[i])
    }
 }

 // Crea un array letras con las letras a,b,c,d,e. Usa for para imprimir solo las letras que están en posiciones pares (índices 0,2,4)
 var letras = ["a","b","c","d","e"]
 for (var i = 0; i < letras.length; i++){
    if (i % 2 === 0){
        // console.log(letras[i].toUpperCase());
    }
 }

 // Crea un array pares con números pares del 2 al 10. Usa un for para sumar todos los números y mostrar el total al final
 var pares = [2,4,6,8,10];
 var suma = 0;

 for (var i = 0; i < pares.length; i++){
    suma += pares[i]
 }

 // console.log("La suma es:" + suma)

 // Crea un array palabras con 5 palabras. Usa un for para concatenarlas en una sola string separadas por espacios
 var palabras = ["Hola", "mundo", "soy", "felipe", "el zar de la programación"];
 var oracion = "";
 for (var i= 0; i< palabras.length; i++){
oracion += palabras[i] + " ";
 }
 // console.log(oracion)

 // Crea un array temperaturas con 5 números
 var temperaturas = [1,2,3,4,5];
 for (var i = 0; i < temperaturas.length; i++){
    if ( i !== 2 ){console.log(temperaturas[i])};
 };

 

 