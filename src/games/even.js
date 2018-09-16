import brainGeneral from '..';
import { cons } from 'hexlet-pairs';

const randomNum = () => Math.floor(Math.random() * (100 - 1) + 1);

const questionAndAnswer = () => {
  const number = randomNum();
  const rez = number % 2 === 0 ? 'yes' : 'no';
  return cons(number, rez);
};

const startGame = () => brainGeneral('Answer "yes" if number even otherwise answer "no".', questionAndAnswer);

export default startGame;
