import brainGeneral from '..';

const evenQuestion = () => Math.floor(Math.random() * (100 - 1) + 1);

const evenRealAnsver = number => (number % 2 === 0 ? 'yes' : 'no');

const startGame = () => brainGeneral('Answer "yes" if number even otherwise answer "no".', 3, evenQuestion, evenRealAnsver);

export default startGame;
