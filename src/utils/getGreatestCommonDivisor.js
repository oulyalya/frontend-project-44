const getGreatestCommonDivisor = (number1, number2) => {
  const smallerNumber = (number1 < number2) ? number1 : number2;
  let divisor = 1;

  for (let i = smallerNumber; i > 1; i -= 1) {
    if (number1 % i === 0 && number2 % i === 0) {
      divisor = i;
    }
  }

  return divisor;
};

export default getGreatestCommonDivisor;
