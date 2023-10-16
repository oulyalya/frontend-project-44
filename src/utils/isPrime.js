const isPrime = (number) => {
  if (number < 2) return false;
  if (number > 2 && number % 2 === 0) return false;

  for (let i = 2; i <= Math.sqrt(number); i += 1) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
};

export default isPrime;
