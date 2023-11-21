import startGame from '../index.js';
import getRandomNumber from '../utils/getRandomNumber.js';
import makeOperation from '../utils/makeOperation.js';

const operators = ['+', '-', '*'];
const intro = 'What is the result of the expression?';

const getRandomOperatorIndex = () => getRandomNumber(0, operators.length - 1);

const game = () => {
  const number1 = getRandomNumber();
  const number2 = getRandomNumber();
  const operator = operators[getRandomOperatorIndex()];

  const question = `Question: ${number1} ${operator} ${number2}`;
  const expectedAnswer = String(makeOperation(number1, number2, operator));

  return { question, expectedAnswer };
};

const brainCalc = () => {
  startGame(intro, game);
};

export default brainCalc;
