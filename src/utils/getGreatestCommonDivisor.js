const getGreatestCommonDivisor = (number1, number2) => {
  if (!number2) {
    return number1;
  }

  return getGreatestCommonDivisor(number2, number1 % number2);
};

export default getGreatestCommonDivisor;
