// console.log("hola mundo")
// var suma = 2 +2 
// console.log(suma)
// let multiplicacion = 3 * 2
// console.log(multiplicacion)
// const multiplicacion2 = (a,b)=>{
//     return a * b;
// };
// console.log(multiplicacion2(4,5))

// var age = 13
// age = 14
// console.log(age);

// var secondsInMinute = 60;
// var minutesInHour = 60;
// var secondsInHour = secondsInMinute * minutesInHour;

// var hourinDay = 24;
// var secondsinDay = secondsInHour * hourinDay;
// console.log(secondsinDay + " " + "seconds in a day")

// var daysInYear = 365;
// var secondsinYear = secondsinDay * daysInYear;
// console.log(secondsinYear + " " + "seconds in a year")

// var age = 26;
// var secondsinAge = secondsinYear * age;
// console.log(secondsinAge + " " + "seconds lived")

// var hourinDay = 24;

// var hoursinYear = hourinDay * daysInYear;
// console.log(secondsinYear + " " + " in a year")

// var daysInYear = 365;
// var age = 26;
// var daysLived = age * daysInYear
// console.log(daysLived + " " + "days lived")

// var highfives = 0;
// highfives ++;
// highfives ++;
// highfives ++;

// console.log(highfives);

// var x = 10;
// x = x + 5;

// var x = 10;
// x +=7;
// x -=3;

// console.log(x);

// var nombre = "felipe";
// var conector = "es";
// var adjetivo = "el mejor !";
// var palabraCompleta = nombre + " "+ conector +" "+ adjetivo

// console.log(palabraCompleta)

// var script = "script".slice(1,5)
// console.log(script)

// var saludar = "hELlo THERE, hOW ARE yOu doINg?".toUpperCase
// console.log(saludar)

// const saludar = (nombre) =>{
//     console.log("¡Hola" +" "+ `${nombre}` + "!")
// };

// saludar("felipe");

// const presentacion = (pareja) => {
//     console.log("mucho gusto mi nombre es Felipe y vine con" +" "+ `${pareja}` )
// };

// presentacion("Laura");

// const ejercicio = (palabra) =>{
//     console.log("hELlo THERE, hOW ARE yOu doINg?");
//     return 
// };

var saludar = "hello world";
var name = "my name is Felipe";

var presentacion = saludar + " " + name 

var prueba = "longitud";

var codeword1 = "imagine";
var codeword2 = "magic ";
var codeword3 = "goal";
var codeword4 = "goal";
var codeword5 = "goal";
var codeword6 = "down";
var answer = (codeword1[0] + codeword2[0] + " " + codeword3[0] + codeword4[1] + codeword5[1] + codeword6[0])

var longString = "Felipe is the greatest of all time, no doubt about".slice(0,23);

var saludar = "hey there".toUpperCase();

var despedir = "BYE IM GOING HOME".toLowerCase();


// 1)
var string = "hELLO THERE, hOW ARE yOu doINg?"
var lowerCaseString = string.toLowerCase();
var firstCharacter = lowerCaseString[0];
var capitalLetter = firstCharacter.toUpperCase();
var restOfString = lowerCaseString.slice(1);
var completeString = capitalLetter + restOfString;

var completeString2 = string[0].toUpperCase() + string.slice(1).toLowerCase();



// 2)
var FelipeIsTheGreatest = true;

var breakfast = true;
var lunch = true;
var dinner = false;
var eatWell = breakfast && lunch || dinner;

var todayisFriday = true;
var day = !todayisFriday;

var height = 50;
var heightRestriction = 50;
var allowRunning = height <= heightRestriction;

var mySecretNumber = 5;
var chicoGuess = 5;
var guess = mySecretNumber === chicoGuess

var number = 5;
var string = "5";

var equal = number == string

var age = 13;
var accompanied = false; 
var canSeeTheMovie = age >= 13 || age > 1 && accompanied;


var undefined = null;

var age = ["21","22","23","24"];
var newage = "20";

age.unshift (newage);

var names = ["pipe","andres", "camilo",];
var newName = "Santiago";

names.unshift(newName)

var lastName = ["Forero", "arteaga"];
var newLastName = "Saenz";

lastName.push(newLastName)

var ageAndLastName = age.concat(lastName);


var scientificBooks = ["biology", "chemestry", "mitocrondria"];
var historyBooks = ["Afro", "american", "russian", "latino"];
var musicBooks = ["jazz", "cuban", "salsa"];

var allBooks = scientificBooks.concat(historyBooks,musicBooks);

var findPositionOfBooks = scientificBooks.indexOf("mitocrondria");

var stringHistoryBooks = historyBooks.join(", ");

var landmarks =[];
landmarks.push("My house");
landmarks.push("front park");
landmarks.push("Exito Colina");
landmarks.push("carrera 9na");
landmarks.push("hospital Santa Fe");
landmarks.push("la casita del amor");

landmarks.pop("la casita del amor");
landmarks.pop("hospital Santa Fe");
landmarks.pop("");
landmarks.pop();
landmarks.pop();
landmarks.pop();

var random = Math.random();
var random2 = Math.random() * 5;

var random3 = Math.floor(Math.random());
var random3 = Math.floor(Math.random()*5);
var random3 = Math.floor(Math.random()*5);

var cities = ["Medellin", "Cali", "Cartagena", "Bogota",]
var randomIndex = Math.floor(Math.random() * cities.length );
var randomCities = cities[randomIndex]

// console.log(randomCities);

//////////////////////////////////////////////////////////
// Chapter 4 Objects
var cat = {
    "legs": 4,
    "name": "harmony",
    "color": "white"
};

var dog = {
    legs: 4,
    name: "raul",
    color: "brown",
}

var house = {};
house.part= 3;

var anna = { name:"Anna", age:11, luckyNumbers:[2,4,8,16]};
var dave = { name:"Dave", age:10, luckyNumbers:[3.9,40]};
var kate = { name:"Kate", age:9, luckyNumbers:[1,2,3]};

var friends = [anna,dave,kate]

//console.log(friends[0])

var owedMoney = {};
owedMoney.Jimmy = 5;
owedMoney["Lisa"] = 10;
owedMoney.Jimmy += 3;
owedMoney.Lisa = owedMoney.Lisa + 3;

//console.log(owedMoney)

var movies = {
    "Harry Potter": {
        realeseDate: 2005,
        duration: 120,
        actors: ["Harry", "Patrick", "Emma"],
        format: "DVD",
    },
    avatar: {
        realeseDate: 2014,
        duration: 120,
        actors: ["hang", "Phill", "jason"],
        format: "DVD",
    },
}

movies.cars = {
    realeseDate: 2006,
        duration: 117,
        actors: ["El rayo Mc queen", "Lisa", "Mate"],
        format: "Blue Ray",
}

var frase = movies["cars"].actors[0]

//console.log("yo soy el", frase)

//console.log(Object.keys(movies))

var scores = {
    César: 0,
    Andres:0,
    Campo:0,
    "Juan Pablo": 0,
    Sebastian:0,
}

scores.César += 2,
scores.Andres += 1,
scores["Juan Pablo"] += 1,
scores.Sebastian += 1,
scores.Campo += 1;

//console.log(scores)

var myCrazyObject = {
    "name": "A ridiculous object",
    "some array": [7,9, {purpose: "confusion", number: 123}, 3.3],
    "random animal": "banana Shark"
};

// console.log(myCrazyObject["some array"][2].number);

// var names = "Felipe";
// console.log("hello" + " "+ names);
// if (names.length > 7){
//     console.log("Wow, you have a really long name !")
// } else{
//     console.log("Your name is not very long")
// }

// var dadName = "César";
// var momName = "Rosse";
// var name3 = "Felipe";
// var myName = "Felipe";
// if (myName === name3){
//     console.log("Hello me")
// } else if (dadName === name3){
//     console.log("Hello Father")
// } else if (momName === name3){
//     console.log("Hello Mother")
// }else {console.log("Hello Stranger")}


// 1. Crea un array colores con estos valores:
var colores = ["rojo", "azul", "verde", "amarillo", "morado"]
for (var i = 0; i<colores.length; i++){
    // console.log(colores[i].toUpperCase())
}

// 2. Crea un array numeros con estos valores:
var numeros = [10,20,30,40,50];
var suma = 0;
for (var i = 0; i < numeros.length; i++){
suma += numeros[i];
} console.log("La suma total es: ", suma)
    


// 3. Crea un array frases con estas frases:
var frases = ["hola mundo", "soy felipe", "amo programar"]
for (var i = 0; i < frases.length; i++){
    //console.log(frases[i].length)
}

// 4. Crea un array nombres con estos valores:
var nombres= ["andres", "ana", "camilo", "carlos"]
    for (var i = 0; i <nombres.length; i++ ){
        if (nombres[i].charAt(0) === "c"){
            //console.log(nombres[i])
        }
    }

// 5. Crea un array emails con estos valores:
var emails = ["felipe@gmail.com", "alzar@yahoo.com", "cracktotal@outlook.com"];
var usuarios = [];

for (var i = 0; i< emails.length; i++){
    usuarios.push(emails[i].split("@")[0])
}
//console.log(usuarios)

var sheepCounted = 0;
// while (sheepCounted < 10){
//     console.log("i have counted " + sheepCounted + " sheeps !")
// }
console.log("zzzzzzzzzzzzzz")

var animals = ["cat", "dog", "fish", "elephant"];
for (var i = 0; i < animals.length; i++){
    console.log("awesome " + animals[i]);
}



