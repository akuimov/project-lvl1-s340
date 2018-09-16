import brainGeneral from '..';
import { cons } from 'hexlet-pairs';

const randomNum = () => Math.floor(Math.random() * (10 - 1) + 1);

const gcd = (num1, num2) => (num1 !== 0 ? gcd(num2 % num1, num1) : num2);

const questionAndAnswer = () => {
  const number1 = randomNum();
  const number2 = randomNum();
  const rez = gcd(number1, number2);
  return cons(`${number1} ${number2}`, `${rez}`);
};

const startGame = () => brainGeneral('Find the greatest common divisor of given numbers.', questionAndAnswer);

export default startGame;
