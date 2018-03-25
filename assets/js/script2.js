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
    var winnerLine = findWinnerLine(playerTurn);
    if (winnerLine.length) {
        alert("winner: "+currentSymbol);
    }
    playerTurn = playerTurn == p1 ? p2 : p1;
}

function findWinnerLine(playerTurn) {
    var rows = document.getElementsByTagName('tr');
    var count = 0;
    for (var i = 0; i < rows.length; i++) {
        var cell = rows.item(i).cells;
        for (var j = 0; j < rows.length; j++) {
            if (cell.item(j).innerHTML !== playerTurn.symbol) {
                break;
            }
            count++;
        }
        if (count === 3){
            return rows;
        }
    }
    return [];
}

function rowWinner(player) {

}