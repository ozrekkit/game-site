/**
 * Created by justHarry on 13.02.2018.
 */

// for (var i = 0; i < 9; i ++){
//     document.getElementById('game-field').innerHTML+='<div class = "block"></div>';
// }

var p1 = new Player('Tor', 'X');
var p2 = new Player('Loki', '0');
var playerTurn = p1;

function Player(name, symbol) {
    this.name = name;
    this.symbol = symbol;
    this.score = 0;
}

var gameField = document.getElementById('game-field');
gameField.addEventListener("click", ClickAction);
var resetBtn = document.getElementById('btn');
resetBtn.addEventListener("click", resetFieldSymbol);

function resetFieldSymbol() {
    console.log('HI');
    var x = document.getElementsByTagName('TD');
    for (var i = 0; i < x.length; i++ ){
        x.item(i).innerHTML = "";

    }
}

function ClickAction(event) {
    var target = event.target;
    // event.target.innerHTML = playerTurn.symbol;
    doTurn(target);
}

function doTurn(target) {
    var currentSymbol = playerTurn.symbol;
    console.log(currentSymbol);
    if(target.innerHTML === "") {
        target.innerHTML = currentSymbol;
    }
    playerTurn = playerTurn == p1 ? p2 : p1;
}