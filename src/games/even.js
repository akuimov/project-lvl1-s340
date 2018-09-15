import brainGeneral from '..';

const randomNum = () => Math.floor(Math.random() * (100 - 1) + 1);

const realAnswer = () => {
  const number = randomNum();
  const rez = number % 2 === 0 ? 'yes' : 'no';
  return `${number}|${rez}`;
};

const startGame = () => brainGeneral('Answer "yes" if number even otherwise answer "no".', realAnswer);

export default startGame;
