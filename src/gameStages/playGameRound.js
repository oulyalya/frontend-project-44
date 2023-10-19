import readlineSync from 'readline-sync';
import name from '../cli.js';
import { MAX_GAME_ROUNDS } from '../consts.js';
import processAnswer from './processAnswer.js';

const playGameRound = (question, expectedAnswer, correctAnswers) => {
  let currentScore = correctAnswers;
  console.log(question);
  const answer = readlineSync.question('Your answer: ');

  const result = processAnswer(answer, expectedAnswer);
  currentScore += Number(result);

  if (currentScore === MAX_GAME_ROUNDS) {
    console.log(`Congratulations, ${name}!`);
  }

  return currentScore;
};

export default playGameRound;
