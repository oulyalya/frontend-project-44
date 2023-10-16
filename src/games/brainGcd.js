import { MAX_GAME_ROUNDS } from '../consts.js';

import playGameRound from '../gameStages/playGameRound.js';
import getRandomNumber from '../utils/getRandomNumber.js';
import getGreatestCommonDivisor from '../utils/getGreatestCommonDivisor.js';

function brainGcd() {
    let correctAnswers = 0;
    const intro = 'Find the greatest common divisor of given numbers.';

    console.log(intro);

    for (let i = 0; i < MAX_GAME_ROUNDS; i += 1) {
        const number1 = getRandomNumber();
        const number2 = getRandomNumber();

        const question = `${number1} ${number2}`;
        const expectedAnswer = String(getGreatestCommonDivisor(number1, number2));

        correctAnswers = playGameRound(question, expectedAnswer, correctAnswers);
    }
};

export default brainGcd;
