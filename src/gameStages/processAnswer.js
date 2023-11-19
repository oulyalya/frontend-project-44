const processAnswer = (answer, expectedAnswer) => (
  answer.toLowerCase() === expectedAnswer.toLowerCase()
);

export default processAnswer;
