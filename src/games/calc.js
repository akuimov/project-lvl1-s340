import brainGeneral from '..';

const evenQuestion = () => {
  const randommNum = (min, max) => Math.floor(Math.random() * (max - min) + min);
  const operators = '+-*';
  return `${randommNum(1, 10)} ${operators[randommNum(0, 3)]} ${randommNum(1, 10)}`;
};

const evenRealAnsver = (string) => {
  const arr = string.split(' ');
  let rezult = '';
  if (arr[1] === '+') {
    rezult += (+arr[0]) + (+arr[2]);
  } else if (arr[1] === '-') {
    rezult += (+arr[0]) - (+arr[2]);
  } else {
    rezult += (+arr[0]) * (+arr[2]);
  }
  return rezult;
};

const startGame = () => brainGeneral(3, 'What is the result of the expression?', 3, evenQuestion, evenRealAnsver);

export default startGame;
