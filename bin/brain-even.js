#!/usr/bin/env node

console.log('even');

import readlineSync from 'readline-sync';
import name from '../src/cli.js';
import greeting from '../src/greeting.js';
import getRandomNumber from '../src/utils/getRandomNumber.js';

greeting();
brainEven();

function brainEven() {
    const MAX_GAME_ROUNDS = 3;
    let correctAnswers = 0;

    const isEven = (num) => num % 2 === 0;

    const getExpectedAnswer = (num) => isEven(num) ? 'yes' : 'no';

    const processQuestion = () => {
        const number = getRandomNumber();
        const expectedAnswer = getExpectedAnswer(number);

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
}
