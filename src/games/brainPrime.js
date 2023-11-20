import initGame from '../index.js';
import getRandomNumber from '../utils/getRandomNumber.js';
import isPrime from '../utils/isPrime.js';

const intro = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const game = () => {
  const number = getRandomNumber();
  const expectedAnswer = isPrime(number) ? 'yes' : 'no';
  const question = `Question: ${number}`;

  return { question, expectedAnswer };
};

const brainPrime = () => {
  initGame(intro, () => game());
};

export default brainPrime;
