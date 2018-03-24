function test(name) {
    console.log(`Hello, ${name}!`);
}
test("Bexi!");

// needs: 
// crystal counter
// random generated number/counter
// win counter
// lose counter
// array to hold numbers

var counter = 0;
var number = 0; 
var randomNum = 0;
var winCounter = 0; 
var loseCounter = 0;
var numOptions = []; 

var randomNumGen = function() {
    return Math.floor(Math.random() * (121 - 19)) + 19;
}

randomNum = randomNumGen(); 

var crystalCounter = function() {
    return Math.floor(Math.random() * (13 - 1)) + 1;
}

for (i = 0; i < 4; i++){
    number = crystalCounter();
    numOptions.push(number)
    console.log(); 
}