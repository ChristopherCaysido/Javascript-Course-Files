
var scores, roundScore;
scores = [0,0];
roundScore = 0;
activePlayer = 1;
c
// dice = Math.floor(Math.random()*6) + 1;
// var displayRoll = document.querySelector('#current--' + activePlayer).textContent = dice;
// // document.querySelector('#current--' + activePlayer).innerHTML = '<em>'dice'</em>';

document.querySelector('.dice').style.display = 'none'; 
scoreDOM = document.getElementById('score-'+ activePlayer);
currentDOM = document.getElementById('current-'+activePlayer);
for (i = 0; i < 2; i = i + 1){
    activePlayer = i;
    currentDOM
}

document.querySelector('.btn--roll').addEventListener('click',function(){
    // Roll a Random Number
    dice = Math.floor(Math.random()*6) + 1;
    // Display the Number
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png';
    // Update the round score if the rolled number was NOT a 1
    
})