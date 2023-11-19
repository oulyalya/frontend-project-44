import initGame from '../gameStages/initGame.js';
import getRandomNumber from '../utils/getRandomNumber.js';
import getGreatestCommonDivisor from '../utils/getGreatestCommonDivisor.js';

const intro = 'Find the greatest common divisor of given numbers.';

const game = () => {
  const number1 = getRandomNumber();
  const number2 = getRandomNumber();

  const question = `Question: ${number1} ${number2}`;
  const expectedAnswer = String(getGreatestCommonDivisor(number1, number2));

  return { question, expectedAnswer };
};

const brainGcd = () => {
  initGame(intro, () => game());
};

export default brainGcd;
