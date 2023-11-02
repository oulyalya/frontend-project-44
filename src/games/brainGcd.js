import { MAX_GAME_ROUNDS } from '../consts.js';

import playGameRound from '../gameStages/playGameRound.js';
import getRandomNumber from '../utils/getRandomNumber.js';
import getGreatestCommonDivisor from '../utils/getGreatestCommonDivisor.js';

function brainGcd() {
  const intro = 'Find the greatest common divisor of given numbers.';

  console.log(intro);

  for (let i = 0; i < MAX_GAME_ROUNDS; i += 1) {
    const number1 = getRandomNumber();
    const number2 = getRandomNumber();

    const question = `Question: ${number1} ${number2}`;
    const expectedAnswer = String(getGreatestCommonDivisor(number1, number2));

    const roundResult = playGameRound(question, expectedAnswer, i);

    if (!roundResult) {
      break;
    }
  }
}

export default brainGcd;
