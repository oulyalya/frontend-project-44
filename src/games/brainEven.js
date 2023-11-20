import initGame from '../index.js';
import getRandomNumber from '../utils/getRandomNumber.js';
import isEvenOrNot from '../utils/isEvenOrNot.js';

const intro = 'Answer "yes" if the number is even, otherwise answer "no".';

const game = () => {
  const number = getRandomNumber();
  const question = `Question: ${number}`;
  const expectedAnswer = isEvenOrNot(number) ? 'yes' : 'no';

  return { question, expectedAnswer };
};

const brainEven = () => {
  initGame(intro, () => game());
};

export default brainEven;
