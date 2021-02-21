
var scores, roundScore;
scores = [0,0];
roundScore = 0;
activePlayer = 0;

// dice = Math.floor(Math.random()*6) + 1;
// var displayRoll = document.querySelector('#current--' + activePlayer).textContent = dice;
// // document.querySelector('#current--' + activePlayer).innerHTML = '<em>'dice'</em>';

document.querySelector('.dice').style.display = 'none'; 


document.querySelector('.btn--roll').addEventListener('click',function(){
    // Roll a Random Number
    var dice = Math.floor(Math.random()*6) + 1;
    // Display the Number
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png';
    // Update the round score if the rolled number was NOT a 1
    if (dice !== 1) {
        //Add score
        roundScore += dice;
        document.querySelector('#current--'+activePlayer).textContent = roundScore;
    } else {
        //Next Player
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    }
});