import initGame from '../gameStages/initGame.js';
import getRandomNumber from '../utils/getRandomNumber.js';
import makeOperation from '../utils/makeOperation.js';

const operators = ['+', '-', '*'];
const intro = 'What is the result of the expression?';

const game = (currentRound) => {
  const number1 = getRandomNumber();
  const number2 = getRandomNumber();
  const operator = operators[currentRound];

  const question = `Question: ${number1} ${operator} ${number2}`;
  const expectedAnswer = String(makeOperation(number1, number2, operator));

  return { question, expectedAnswer };
};

const brainCalc = () => {
  initGame(intro, (currentRound) => game(currentRound));
};

export default brainCalc;
