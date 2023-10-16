import { MAX_GAME_ROUNDS } from '../consts.js';

import playGameRound from '../gameStages/playGameRound.js';
import getRandomNumber from '../utils/getRandomNumber.js';

function brainProgression() {
  let correctAnswers = 0;
  const intro = 'What number is missing in the progression?';

  console.log(intro);

  for (let i = 0; i < MAX_GAME_ROUNDS; i += 1) {
    const progressionLength = getRandomNumber(5, 10);
    const progressionStartNumber = getRandomNumber();
    const progressionStep = getRandomNumber(1, 20);
    const hiddenIndex = getRandomNumber(0, progressionLength);

    const progression = [];
    let currentNumber = progressionStartNumber;

    for (let j = 0; j <= progressionLength; j += 1) {
      progression[j] = currentNumber;
      currentNumber += progressionStep;
    }

    const expectedAnswer = String(progression[hiddenIndex]);
    progression[hiddenIndex] = '..';

    const question = `Question: ${progression.join(' ')}`;

    correctAnswers = playGameRound(question, expectedAnswer, correctAnswers);
  }
}

export default brainProgression;
