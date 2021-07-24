'use strict';

//Create a secret number: from 0 - 20
let secretNumber = Math.trunc(Math.random() * 20) + 1;

//Store Original Score: 20
let score = 20;

//Store High Score:
let highScore = 0;


//function for creating a secret number
const createSecretNumber = function () {
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    return secretNumber;
}

//function for showing message
const showMessage = function (message) {
    document.querySelector('.message').textContent = message;
}

//function for showing secretNumber
const showSecretNumber = function (secretNumber) {
    document.querySelector('.number').textContent = secretNumber;
}

//function for showing score
const showScore = function (score) {
    document.querySelector('.score').textContent = score;
}

//function for showing high score
const showHighScore = function (highScore) {
    document.querySelector('.highscore').textContent = highScore;
}

//function for changing body background color
const changeBody = function (backgroundColor) {
    document.querySelector('body').style.backgroundColor = backgroundColor;
}




//Add Event listener on check Button, and have a event handler:
//check guess value: !guess, guess === secretNumber, guess > secretNumber, guess < secretNumber
//at the same time, manipulate css style using JavaScript in different situation
document.querySelector('.check').addEventListener('click', function () {
    let guess = Number(document.querySelector('.guess').value);

    if (!guess) {
        showMessage('⛔️ No number!');
    } else if (guess === secretNumber) {
        showMessage('😀 Correct number!');
        showSecretNumber(secretNumber);
        changeBody('#60b347');
        if (score > highScore) {
            highScore = score;
            showHighScore(highScore);
        }
    } else if (guess > secretNumber) {
        if (score > 0) {
            showMessage('📈 Larger than Secret Number!');
            score = score - 1;
        } else {
            showMessage('🤯 You lose');;
        }
    } else if (guess < secretNumber) {
        if (score > 0) {
            showMessage('📉 Smaller than Secret Number!');
            score = score - 1;
            document.querySelector('.score').textContent = score;
        } else {
            showMessage('🤯 You lose');
        }
    }
});




//Add Eventlistener: click the again button
// restore the initial values of the score and secretNumber
//Manipulate text content and reset text on it 
document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    createSecretNumber();
    showScore(score);
    document.querySelector('.guess').value = '';
    showSecretNumber('?');
    showMessage('Start guessing...');
    changeBody('#222');
});