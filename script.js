'use strict';

const isNum = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
};

let guessNumber = function() {
    let numberRandom = Math.floor(Math.random() * 100);

    function gameLoop() {
        let numberUser = prompt('Угадай число от 1 до 100 ' + numberRandom, '');

        console.log(numberUser);

        if (numberUser === null) {
            return;
        } else if (!isNum(numberUser)) {
            alert('Введи число!');
            gameLoop();
        } else if (numberUser > numberRandom) {
            alert('Загаданное число меньше');
            gameLoop();
        } else if (numberUser < numberRandom) {
            alert('Загаданное число больше');
            gameLoop();
        }
    }

    gameLoop();
};

guessNumber();
