import brainGeneral from '..';
import { cons } from 'hexlet-pairs';

const randomNum = () => Math.floor(Math.random() * (10 - 1) + 1);

const prime = (n) => {
  if (n < 2) return false;

  for (let i = 2; i * i <= n; i += 1) {
    if (n % i === 0) return false;
  }
  return true;
};

const questionAndAnswer = () => {
  const number = randomNum();
  const rez = prime(number) ? 'yes' : 'no';
  return cons(number, rez);
};

const startGame = () => brainGeneral('Is this number prime?', questionAndAnswer);

export default startGame;
