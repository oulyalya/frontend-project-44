import { MAX_GAME_ROUNDS } from '../consts.js';

import playGameRound from '../gameStages/playGameRound.js';
import getRandomNumber from '../utils/getRandomNumber.js';
import isPrime from '../utils/isPrime.js';

function brainPrime() {
    let correctAnswers = 0;
    const intro = 'What number is missing in the progression?';

    console.log(intro);

    for (let i = 0; i < MAX_GAME_ROUNDS; i += 1) {
        const number = getRandomNumber();
        const expectedAnswer = isPrime(number) ? 'yes' : 'no';
        const question = `Question: ${number}`;

        correctAnswers = playGameRound(question, expectedAnswer, correctAnswers);
    }
};

export default brainPrime;
