import { MAX_GAME_ROUNDS } from '../consts.js';

import playGameRound from '../gameStages/playGameRound.js';
import getRandomNumber from '../utils/getRandomNumber.js';
import isEvenOrNot from '../utils/isEvenOrNot.js';

function brainEven() {
  let correctAnswers = 0;
  const intro = 'Answer "yes" if the number is even, otherwise answer "no".';

  console.log(intro);

  for (let i = 0; i < MAX_GAME_ROUNDS; i += 1) {
    const number = getRandomNumber();
    const question = `Question ${i + 1}: ${number}`;
    const expectedAnswer = isEvenOrNot(number) ? 'yes' : 'no';
    correctAnswers = playGameRound(question, expectedAnswer, correctAnswers);
  }
}

export default brainEven;
