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

console.log(pickRandomWords(randomWords))