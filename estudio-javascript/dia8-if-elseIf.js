// 1. Declara una variable age y verifica si es mayor o igual a 18. Si lo es, imprime "You are an adult", si no, imprime "you are a minor"
var age = 18;
if (age >= 18){
    //console.log("You are an adult");
}else{
    // console.log("you are a minor")
}
// 2. Declara una variable temperature. Si es mayor a 30, imprime "it´s hot" si no, imprime "it´s not too hot"
var temperature = 35;
if (temperature > 30){
   // console.log("It´s hot")
}else{
   // console.log("it´s not too hot")
}
//3. Crea una variable score. Si es igual a 100, imprime "perfect score !". Si es mayor o igual a 50, imprime "pass". Si es menor a 50, imprime "fail"
var score = 40;
if (score === 100){
   // console.log("perfect score !")
}else if(score >=50){
   // console.log("pass")
}else{
   // console.log("fail")
}
// 4. Declara una variable password. Si su valor es "12345", imprime "Access granted". Si no, imprime "Access denied"
var password = 12345;
if (password == "12345"){
    //console.log("access granted");
}else{
    //console.log("Access denied")
}
// 5. Crea una variable number. Si es positivo, imprime "positive" si es cero, imprime "zero". Si es negativo, imprime "Negative"
var number = 5;
if (number > 0){
    //console.log("Positive")
}else if(number === 0){
    //console.log("zero")
}else{
    //console.log("negative")
}

// 6. Declara una variable day. Si es "monday", imprime "start of the week". Si es "Friday", imprime "Almost weekend". Si no, imprime "just another day"
var day = "wensday";
if (day === "monday"){
    //console.log("Start of the weekend")
}else if (day === "friday"){
    //console.log("almost weekend")
}else{
    //console.log("just another day")
}

//7. Declara una variable time. Si está entre 0 y 11, imprime "good morning". Si está entre 12 y 17, imprime "good afternoon". Si está entre 18 y 23, imprime "good evening"
var time = 9;
if (time >= 0 && time <= 11){
    //console.log("good morning")
}else if (time >= 12 && time <= 17){
    //console.log("good afternoon")
}else if (time >= 18 && time<= 23){
    //console.log("good evening")
}else {
    //console.log("time to sleep")
}

//8. Declara una variable paymentMethod
var paymentMethod = "crypto";
if (paymentMethod === "cash"){
    //console.log("pay at the counter")
} else if (paymentMethod === "card"){
    //console.log("Swipe your card")
} else if (paymentMethod === "paypal"){
    //console.log("Redirecting to Paypal")
}else {
    //console.log("Payment method not accepted")
}

// 9. Declara una variable hour
var hour = 6;

if (hour >= 0 && hour <= 5){
    //console.log("you should be sleeping")
}else if (hour >= 6 && hour <= 11){
    //console.log("good morning")
}else if (hour >= 12 && hour <= 17){
    //console.log("good afternoon")
}else if (hour >= 18 && hour <= 23){
    //console.log("Good evening")
}
else {
    //console.log("invalid hour")
}

//10. Declara una variable name 
var names = "felipe";
myName = "Felipe";
dadName = "Cesar";
momName = "Rosse";
if (names.toLowerCase() === myName.toLowerCase()){
    console.log("Hello me")
}
else if (names.toLowerCase() === dadName.toLowerCase()){
    console.log("Hi Dad")
}
else if (names.toLowerCase() === momName.toLowerCase()){
    console.log("Hi mom")
}else{
    console.log("Hello stranger")
}
