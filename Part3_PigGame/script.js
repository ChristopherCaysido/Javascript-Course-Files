
var scores, roundScore, activePlayer;

initFunction();
// dice = Math.floor(Math.random()*6) + 1;
// var displayRoll = document.querySelector('#current--' + activePlayer).textContent = dice;
// // document.querySelector('#current--' + activePlayer).innerHTML = '<em>'dice'</em>';

function nextPlayer(){
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
}

document.querySelector('.dice').style.display = 'none'; 

document.querySelector('.btn--new').addEventListener('click',initFunction)

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
        document.querySelector('#current--'+activePlayer).textContent = 0;
        roundScore = 0;
        nextPlayer();
        
    }
});

document.querySelector('.btn--hold').addEventListener('click',function(){
    //Update Global Scores 
    scores[activePlayer] += roundScore;
    //Update UI
    document.querySelector('#score--'+activePlayer).textContent = scores[activePlayer];
    //Pass it to other player
    if(scores[activePlayer] >= 100){
        document.querySelector('#name--'+activePlayer).textContent = 'Winner';
    } else {
        document.querySelector('#current--'+activePlayer).textContent = 0;
        roundScore = 0;
        nextPlayer();
    }

});

function initFunction(){
    scores = [0,0];
    roundScore = 0;
    activePlayer = 0;
    document.getElementById('score--0').textContent = 0;
    document.getElementById('score--1').textContent = 0;
    document.getElementById('current--0').textContent = 0;
    document.getElementById('current--1').textContent = 0;
    document.querySelector('.dice').style.display = 'none';
    document.querySelector('#name--0').textContent = 'Player 1';
    document.querySelector('#name--1').textContent = 'Player 2';
}