import readlineSync from 'readline-sync';
import name from '../cli.js';
import getRandomNumber from '../utils/getRandomNumber.js';

import { MAX_GAME_ROUNDS } from '../consts.js';

function brainEven() {
    let correctAnswers = 0;

    const isEven = (num) => num % 2 === 0;

    const processQuestion = () => {
        const number = getRandomNumber();
        const expectedAnswer = isEven(number) ? 'yes' : 'no';

        console.log(`Question: ${number}`);
        const answer = readlineSync.question('Your answer: ');

        if (answer === expectedAnswer) {
            console.log('Correct!');
            correctAnswers += 1;
        } else {
            console.log(`'${answer}' is wrong answer ;(. Correct answer was '${expectedAnswer}'.`);
            console.log(`Let's try again, ${name}!`);
        }
    };

    console.log(`Answer 'yes' if the number is even, otherwise answer 'no'.`)

    for (let i = 0; i < MAX_GAME_ROUNDS; i += 1) {
        processQuestion();
    }

    if (correctAnswers ===  MAX_GAME_ROUNDS) {
        console.log(`Congratulations, ${name}!`);
    }
};

export default brainEven;
