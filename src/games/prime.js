/* eslint no-plusplus: ["error", { "allowForLoopAfterthoughts": true }] */
import brainGeneral from '..';

const randomNum = () => Math.floor(Math.random() * (10 - 1) + 1);

const prime = (n) => {
  if (n === 1) return false;

  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) return false;
  }
  return true;
};

const realAnswer = () => {
  const number = randomNum();
  const rez = prime(number) ? 'yes' : 'no';
  return `${number}|${rez}`;
};

const startGame = () => brainGeneral('Is this number prime?', realAnswer);

export default startGame;
