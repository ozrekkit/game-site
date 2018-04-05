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
    for (var i = 0; i < x.length; i++) {
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
    if (target.innerHTML === "") {
        target.innerHTML = currentSymbol;
    }
    var findWinnerLine = winnerLine(currentSymbol);
    if (findWinnerLine) {
        //TODO cletksmkdnf;lksj;
    }
    playerTurn = playerTurn == p1 ? p2 : p1;
}

function winnerLine(currentSymbol) {
    var currentRow = findWinnerRow(currentSymbol);
    if (currentRow.length) {
        console.log('hi mr. Row')
    }
    var currentRow = findWinnerRow();
    if (currentRow.length) {
        console.log('hi')
    }
    var currentRow = findWinnerRow();
    if (currentRow.length) {
        console.log('hi')
    }
}

function findWinnerRow(currentSymbol) {
    var field = document.getElementById('game-field');
    var rows = field.getElementsByTagName('TR');
    var row;
    console.log(rows[0].cells[0]);
    console.log('hello world');
    for (var i = 0; i < rows.length; i++) {
        row = rows[i].cells;
        var count = 0;
        for (var j = 0; j < rows.length; j++) {
            var cell = row[j];
            if (cell.innerHTML === currentSymbol) {
                count++;
            }
        }
        if (count === row.length) {
            return row;
        }

    }
    return [];
}

function findWinnerCol() {
    // var field = document.getElementById('game-field');
    // var rows = field.getElementsByTagName('TR');
    // var row;
    // console.log(rows.cells);
    // console.log('hello world');
    // for (var i = 0; i < rows.length; i++) {
    //
    // }
    return [1, 2];
}

function findWinnerDiagonal() {
    // var field = document.getElementById('game-field');
    // var rows = field.getElementsByTagName('TR');
    // var row;
    // console.log(rows.cells);
    // console.log('hello world');
    // for (var i = 0; i < rows.length; i++) {
    //
    // }
    return [1, 2];
}