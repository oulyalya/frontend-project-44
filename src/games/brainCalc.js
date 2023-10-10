import { MAX_GAME_ROUNDS } from '../consts.js';

import playGameRound from '../gameStages/playGameRound.js';
import getRandomNumber from '../utils/getRandomNumber.js';
import makeOperation from '../utils/makeOperation.js';

function brainEven() {
    let correctAnswers = 0;
    const operators = ['+', '-', '*'];
    const intro = 'What is the result of the expression?';

    console.log(intro);

    for (let i = 0; i < MAX_GAME_ROUNDS; i += 1) {
        const number1 = getRandomNumber();
        const number2 = getRandomNumber();
        const operator = operators[getRandomNumber(0, operators.length - 1)];

        const question = `${number1} ${operator} ${number2}`;
        const expectedAnswer = String(makeOperation(number1, number2, operator));

        correctAnswers = playGameRound(question, expectedAnswer, correctAnswers);
    }
};

export default brainEven;
