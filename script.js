'use strict';

//Create a secret number: from 0 - 20
let secretNumber = Math.trunc(Math.random() * 20) + 1;

//Store Original Score: 20
let score = 20;

//Store High Score:
let highScore = 0;



//Add Event listener on check Button, and have a event handler:
//check guess value: !guess, guess === secretNumber, guess > secretNumber, guess < secretNumber
//at the same time, manipulate css style using JavaScript in different situation
document.querySelector('.check').addEventListener('click', function () {
    let guess = Number(document.querySelector('.guess').value);

    if (!guess) {
        document.querySelector('.message').textContent = '⛔️ No number!';
    } else if (guess === secretNumber) {
        document.querySelector('.message').textContent = '😀 Correct number!';
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = '#60b347';


        if (score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }

    } else if (guess > secretNumber) {
        if (score > 0) {
            document.querySelector('.message').textContent = '📈 Larger than Secret Number!';
            score = score - 1;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = '🤯 You lose';
        }


    } else if (guess < secretNumber) {
        if (score > 0) {
            document.querySelector('.message').textContent = '📉 Smaller than Secret Number!';
            score = score - 1;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = '🤯 You lose';
        }
    }


});




//Add Eventlistener: click the again button
// restore the initial values of the score and secretNumber
//Manipulate text content and reset text on it 
document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.score').textContent = score;
    document.querySelector('.guess').value = '';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('body').style.backgroundColor = '#222';
});