import startGame from '../index.js';
import getRandomNumber from '../utils/getRandomNumber.js';
import generateProgression from '../utils/generateProgression.js';

const intro = 'What number is missing in the progression?';

const game = () => {
  const length = getRandomNumber(5, 10);
  const startNumber = getRandomNumber();
  const step = getRandomNumber(1, 20);
  const hiddenIndex = getRandomNumber(0, length);

  const progression = generateProgression(length, startNumber, step);

  const expectedAnswer = String(progression[hiddenIndex]);
  progression[hiddenIndex] = '..';

  const question = `Question: ${progression.join(' ')}`;

  return { question, expectedAnswer };
};

const brainProgression = () => {
  startGame(intro, game);
};

export default brainProgression;
