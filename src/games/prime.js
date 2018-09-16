import brainGeneral from '..';
import { cons } from 'hexlet-pairs';

const randomNum = () => Math.floor(Math.random() * (10 - 1) + 1);

const prime = (n, i) => {
  if (i === 1) return true;
  return n % i === 0 ? false : prime(n, i - 1);
};

const questionAndAnswer = () => {
  const number = randomNum();
  const rez = prime(number, number - 1) ? 'yes' : 'no';
  return cons(number, rez);
};

const startGame = () => brainGeneral('Is this number prime?', questionAndAnswer);

export default startGame;
