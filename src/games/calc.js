import brainGeneral from '..';

const randommNum = (min, max) => Math.floor(Math.random() * (max - min) + min);

const realAnswer = () => {
  const operators = '+-*';
  const operator = randommNum(0, 3);
  const num1 = randommNum(1, 10);
  const num2 = randommNum(1, 10);
  let rezult = '';
  if (operators[operator] === '+') {
    rezult += num1 + num2;
  } else if (operators[operator] === '-') {
    rezult += num1 - num2;
  } else {
    rezult += num1 * num2;
  }
  return `${num1} ${operators[operator]} ${num2}|${rezult}`;
};

const startGame = () => brainGeneral('What is the result of the expression?', realAnswer);

export default startGame;
