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
var crystalVal = {}

function randomNumGen() {
    return Math.floor(Math.random() * (121 - 19)) + 19;
}

function crystalCounter() {
    return Math.floor(Math.random() * (13 - 1)) + 1;
}

function resetGame() {
    randomNum = randomNumGen(); 
    $("#randomNumber").text(randomNum);
    console.log(randomNum);   
    crystalVal = {
        blue: crystalCounter(), 
        yellow: crystalCounter(), 
        pink: crystalCounter(),
        green: crystalCounter(), 
    }
    console.log(crystalVal);  

}

resetGame()

$("#blue").click(function(){
    //alert("blue crystal");
    //console.log(crystalVal.blue);
    counter+=crystalVal.blue;
    console.log(counter);
    $("#userScore").text(counter);
    winLoss();
});
$("#yellow").click(function(){
    //alert("yellow crystal");
    counter+=crystalVal.yellow; 
    console.log(counter);
    $("#userScore").text(counter);
    winLoss();
});
$("#pink").click(function(){
    //alert("pink crystal");
    counter+=crystalVal.pink;
    console.log(counter);
    $("#userScore").text(counter);
    winLoss();
});
$("#green").click(function(){
    //alert("green crystal");
    counter+=crystalVal.green;
    console.log(counter);
    $("#userScore").text(counter);
    winLoss();
});


function winLoss() {
    if (randomNum === counter) {
    alert("You Win!!");
    resetGame();
    } else if (randomNum < counter) {
    alert("Sorry You Lose!");
    resetGame();
    }
}
 