var ourFirstFunction = function (){
    console.log("Hello World");
};

var sayHelloTo = function(name){
    console.log("Hello " + name + "!");
};
// sayHelloTo("Juan")

var drawCats = function (howManyTimes){
    for (var i = 0; i < howManyTimes; i++){
        console.log( " =^.^=");
    }
};

//drawCats(3)

var printMultipleTimes = function (howManyTimes, whatToDraw){
    for (var i = 0; i< howManyTimes; i++){
        console.log(i + " " + whatToDraw)
    }
};
// printMultipleTimes(3, ":)")

var double = function (number){
    return number * 3;
};
//console.log(double(double(2)))

var randomWords = ["Planet", "Worm", "Flower", "Computer"];

var pickRandomWords = function (words){
    return words[Math.floor(Math.random()*words.length)];
}

//console.log(pickRandomWords(randomWords))

function sumar (a,b){
    return a + b;
};

//console.log(sumar(5,4))

var multiplicar = function(a,b){
    return a * b;
}

// function saludarUsuario (nombre){
//     return console.log("Hola " + nombre + " bienvenido!")
// }

// saludarUsuario("Felipe")

// var cuadradoDeUnNumero = function(numero){
//     return (numero ** 2);
// }
//console.log(cuadradoDeUnNumero(2))

function dobleDelNumero (numero){
    return( numero * 2);
}

var funcionGuardada = function(numero2){
    return(numero2 * 2);
}

//console.log(dobleDelNumero(2), funcionGuardada(3))

const triple = function (x){
    return x *3; 
};

function aplicarOperacion (numero, operacion){
    return operacion(numero);
}

// console.log(aplicarOperacion(5,triple))

function decirHola (){
    return "Hola";
};

function ejecutarFuncion(h){
    return h()
};

console.log(ejecutarFuncion(decirHola))