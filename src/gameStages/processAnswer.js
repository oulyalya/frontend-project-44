import name from '../cli.js';

const processAnswer = (answer, expectedAnswer) => {
  const isCorrect = answer === expectedAnswer;

  if (isCorrect) {
    console.log('Correct!');
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${expectedAnswer}'.`);
    console.log(`Let's try again, ${name}!`);
  }

  return isCorrect;
};

export default processAnswer;
