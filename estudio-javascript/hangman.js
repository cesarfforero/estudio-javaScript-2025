var words = [
    "javascript",
    "monkey",
    "amazing",
    "pancake",
]

var randomWord = words[Math.floor(Math.random()*words.length)];

var answerArray = [];
for (var i = 0; i < randomWord.length; i++){
    answerArray[i] = "-"
}

var remainingLetters = randomWord.length;

alert(answerArray.join(""));

while (remainingLetters > 0){
var guess = prompt("Guess a letter, or click Cancel to stop playing.");
if (guess === null){
    break;
}else if (guess.length !== 1){
    alert ("Please enter a single letter.");
}else {
    for (var j = 0; j < randomWord.length; j++){
        if (randomWord[j] === guess){
            answerArray[j] = guess;
            remainingLetters--;
        }
    }
}
alert(answerArray.join(" "));
alert("Good job ! The answer was " + randomWord);
}
