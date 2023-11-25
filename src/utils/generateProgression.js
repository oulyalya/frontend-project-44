const generateProgression = (length, startNumber, step) => {
  const progression = [];

  let currentNumber = startNumber;

  for (let i = 0; i <= length; i += 1) {
    progression[i] = currentNumber;
    currentNumber += step;
  }

  return progression;
};

export default generateProgression;
