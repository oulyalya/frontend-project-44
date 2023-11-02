import readlineSync from 'readline-sync';
import processAnswer from './processAnswer.js';

const playGameRound = (question, expectedAnswer, currentRound) => {
  console.log(question);
  const answer = readlineSync.question('Your answer: ');
  const result = processAnswer(answer, expectedAnswer, currentRound);

  return result;
};

export default playGameRound;
