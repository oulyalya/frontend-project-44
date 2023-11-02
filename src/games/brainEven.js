import { MAX_GAME_ROUNDS } from '../consts.js';

import playGameRound from '../gameStages/playGameRound.js';
import getRandomNumber from '../utils/getRandomNumber.js';
import isEvenOrNot from '../utils/isEvenOrNot.js';

function brainEven() {
  const intro = 'Answer "yes" if the number is even, otherwise answer "no".';

  console.log(intro);

  for (let i = 0; i < MAX_GAME_ROUNDS; i += 1) {
    const number = getRandomNumber();
    const question = `Question: ${number}`;
    const expectedAnswer = isEvenOrNot(number) ? 'yes' : 'no';
    const roundResult = playGameRound(question, expectedAnswer, i);

    if (!roundResult) {
      break;
    }
  }
}

export default brainEven;
