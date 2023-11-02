import { MAX_GAME_ROUNDS } from '../consts.js';

import playGameRound from '../gameStages/playGameRound.js';
import getRandomNumber from '../utils/getRandomNumber.js';
import makeOperation from '../utils/makeOperation.js';

function brainEven() {
  let correctAnswers = 0;
  const operators = ['+', '-', '*'];
  const intro = 'What is the result of the expression?';

  console.log(intro);

  for (let i = 0; i < MAX_GAME_ROUNDS; i += 1) {
    const number1 = getRandomNumber();
    const number2 = getRandomNumber();
    const operator = operators[getRandomNumber(0, operators.length - 1)];

    const question = `Question: ${number1} ${operator} ${number2}`;
    const expectedAnswer = String(makeOperation(number1, number2, operator));

    let roundResult = playGameRound(question, expectedAnswer, i);

    if (roundResult) {
      correctAnswers += 1;
    } else {
      break;
    }
  }
}

export default brainEven;
