'use strict';


//selecting the elements
let rollDiceBtn=document.querySelector('.btn--roll');
let diceImg=document.querySelector('.dice');
let holdBtn=document.querySelector('.btn--hold');
let score0El=document.getElementById('score--0');
let score1El=document.getElementById('score--1');
let player0El=document.querySelector('.player--0');
let player1El=document.querySelector('.player--1');
let newGameBtn=document.querySelector('.btn--new');
let currentScore0El=document.getElementById('current--0');
let currentScore1El=document.getElementById('current--1');
score0El.textContent=0;
score1El.textContent=0;


//setting variables for our game
let currentScore=0;
let activePlayer=0;
let score=[0,0]
let playing=true;




//When the user clicks the Roll dice button
diceImg.classList.add('hidden');
rollDiceBtn.addEventListener('click',function(){
    if(playing){
    console.log(playing);
let randomNumber=Math.trunc(Math.random()*6)+1;
//console.log(randomNumber);
diceImg.classList.remove('hidden');
diceImg.setAttribute('src',`dice-${randomNumber}.png`);
currentScore+=randomNumber;
document.getElementById(`current--${activePlayer}`).textContent=currentScore;
if(randomNumber===1){
    document.getElementById(`current--${activePlayer}`).textContent=0;
    document.querySelector(`.player--${activePlayer}`).classList.toggle('player--active');
    activePlayer=activePlayer===1?0:1;
    currentScore=0;
    document.querySelector(`.player--${activePlayer}`).classList.toggle('player--active');
}
    }
})
//When the user clicks the Hold Button
holdBtn.addEventListener('click',function(){
    if(playing){
    score[activePlayer]+=currentScore;
    if(activePlayer===0){
        score0El.textContent=score[activePlayer];
    }
    else{
        score1El.textContent=score[activePlayer];
    }
    document.getElementById(`current--${activePlayer}`).textContent=0;
    if(score[activePlayer]>=20){
        
document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
playing=false;
    }
    document.querySelector(`.player--${activePlayer}`).classList.toggle('player--active');
    activePlayer=activePlayer===1?0:1;
    currentScore=0;
    document.querySelector(`.player--${activePlayer}`).classList.toggle('player--active');
    console.log(playing);
    }
})
//User clicks the new game button
newGameBtn.addEventListener('click',function(){
score=[0,0];
score0El.textContent=0;
score1El.textContent=0;
currentScore0El.textContent=0;
currentScore1El.textContent=0;
currentScore=0;
diceImg.classList.add('hidden');
player0El.classList.remove('player--winner');
player1El.classList.remove('player--winner');
player0El.classList.remove('player--active');
player1El.classList.remove('player--active');
activePlayer=0;
document.querySelector(`.player--${activePlayer}`).classList.add('player--active');
playing=true;

})
