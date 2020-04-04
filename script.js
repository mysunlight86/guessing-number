'use strict';

const isNum = function (n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
};

let guessNumber = function () {
    let numberRandom,
        currentCounter = 10,
        getRandomNumber = function () {
            numberRandom = Math.floor(Math.random() * 100);
        };
    getRandomNumber();

    function gameLoop() {
        let numberUser = prompt(`Угадай число от 1 до 100, осталось попыток ${currentCounter}
        (Подсказка ${numberRandom})`, ''),
            answer,
            resumeGame = function () {
                if (answer === true) {
                    currentCounter = 10;
                    getRandomNumber();
                    gameLoop();
                }
            };

        console.log(numberUser);

        if (+numberUser === numberRandom) {
            answer = confirm('Поздравляю, Вы угадали!!! Хотели бы сыграть еще?');
            resumeGame();
        } else if (numberUser === null) {
            alert('Конец игры');
            return;
        } else if (!isNum(numberUser)) {
            alert('Введи число!');
            gameLoop();
        } else if (currentCounter === 1) {
            answer = confirm('Попытки закончились, хотите сыграть еще?');
            resumeGame();
        } else if (numberUser > numberRandom) {
            alert(`Загаданное число меньше, осталось попыток ${--currentCounter}`);
            gameLoop();
        } else if (numberUser < numberRandom) {
            alert(`Загаданное число больше, осталось попыток ${--currentCounter}`);
            gameLoop();
        }
    }
    gameLoop();
};

guessNumber();