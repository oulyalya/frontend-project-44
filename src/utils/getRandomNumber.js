import { MIN_RANDOM_NUMBER, MAX_RANDOM_NUMBER } from '../consts.js';

const getRandomNumber = (
  min = MIN_RANDOM_NUMBER,
  max = MAX_RANDOM_NUMBER,
) => Math.floor(Math.random() * (max - min) + min);

export default getRandomNumber;
