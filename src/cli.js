import readlineSync from 'readline-sync';

export const name = readlineSync.question('May I have your name? ');

export default () => {
  console.log('Welcome to the Brain Games!');
  console.log(`Hello, ${name}!`);
};
