/**
 * Created by justHarry on 11.02.2018.
 */
for (var i = 0; i < 9; i ++){
    document.getElementById('game-field').innerHTML+='<div class = "block"></div>';
}

var turn = 0;

document.getElementById('game-field').onclick = function(event) {
    console.log(event);
    if (event.target.className == 'block' && event.target.innerHTML === '') {
        if (turn%2 == 0){
            event.target.innerHTML = '0';
        }
        else {
            event.target.innerHTML = 'X';
        }
        turn++;
        findWinner();
    }
}

function findWinner() {
    var symbols = document.getElementsByClassName('block');
    console.log(symbols);
    if (symbols[0].innerHTML == 'X' && symbols[1].innerHTML == 'X' && symbols[2].innerHTML == 'X' ){alert('Win X')}
}