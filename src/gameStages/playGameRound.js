import readlineSync from 'readline-sync';
import name from '../cli.js';
import { MAX_GAME_ROUNDS } from '../consts.js';
import processAnswer from './processAnswer.js';

const playGameRound = (question, expectedAnswer, correctAnswers) => {
  console.log(question);
  const answer = readlineSync.question('Your answer: ');

  const result = processAnswer(answer, expectedAnswer);
  correctAnswers += Number(result);

  if (correctAnswers === MAX_GAME_ROUNDS) {
    console.log(`Congratulations, ${name}!`);
  }

  return correctAnswers;
};

export default playGameRound;
