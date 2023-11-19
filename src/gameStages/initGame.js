import readlineSync from 'readline-sync';
import greeting from '../cli.js';
import { MAX_GAME_ROUNDS, TEXT_COLOR } from '../consts.js';
import processAnswer from './processAnswer.js';

const initGame = (intro, gameFn) => {
  const name = greeting();

  console.log(intro);

  for (let currentRound = 0; currentRound < MAX_GAME_ROUNDS; currentRound += 1) {
    const { question, expectedAnswer } = gameFn(currentRound);

    console.log(question);
    const answer = readlineSync.question('Your answer: ');
    const isCorrectResult = processAnswer(answer, expectedAnswer, currentRound);

    if (isCorrectResult) {
      console.log(TEXT_COLOR.green, 'Correct!');

      if (currentRound + 1 === MAX_GAME_ROUNDS) {
        console.log(TEXT_COLOR.green, `Congratulations, ${name}!`);
      }
    } else {
      console.log(TEXT_COLOR.red, `'${answer}' is wrong answer ;(. Correct answer was '${expectedAnswer}'.`);
      console.log(TEXT_COLOR.red, `Let's try again, ${name}!`);
      break;
    }
  }
};

export default initGame;
