import { name } from '../cli.js';
import { MAX_GAME_ROUNDS } from '../consts.js';

const processAnswer = (answer, expectedAnswer, currentRound) => {
  const isCorrect = answer.toLowerCase() === expectedAnswer.toLowerCase();

  if (isCorrect) {
    console.log('Correct!');

    if (currentRound + 1 === MAX_GAME_ROUNDS) {
      console.log(`Congratulations, ${name}!`);
    }
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${expectedAnswer}'.`);
    console.log(`Let's try again, ${name}!`);
  }

  return isCorrect;
};

export default processAnswer;
