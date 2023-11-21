import { MIN_RANDOM_NUMBER, MAX_RANDOM_NUMBER } from '../consts.js';

const getRandomNumber = (
  min = MIN_RANDOM_NUMBER,
  max = MAX_RANDOM_NUMBER,
) => {
  const randomNumber = min + Math.random() * (max + 1 - min);
  return Math.floor(randomNumber);
};

export default getRandomNumber;
