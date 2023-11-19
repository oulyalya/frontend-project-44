import initGame from '../gameStages/initGame.js';
import getRandomNumber from '../utils/getRandomNumber.js';

const intro = 'What number is missing in the progression?';

const game = () => {
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

  return { question, expectedAnswer };
};

const brainProgression = () => {
  initGame(intro, () => game());
};

export default brainProgression;
