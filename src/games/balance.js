import brainGeneral from '..';

const question = (max = 1000, min = 100) => Math.floor(Math.random() * (max - min) + min);

const balance = (num) => {
  const array = String(num).split('').map(Number);
  let max = Math.max(...array);
  const maxIndex = array.reduce((acc, x, index) => (x === max ? index : acc), 0);
  let min = Math.min(...array);
  const minIndex = array.reduce((acc, x, index) => (x === min ? index : acc), 0);
  if ((max - min) > 1) {
    max -= 1;
    min += 1;
    array[maxIndex] = max;
    array[minIndex] = min;
    const rezult = array.sort((a, b) => {
      if (a > b) return 1;
      if (a < b) return -1;
      return 0;
    });
    return balance(rezult.join(''));
  }
  return String(num);
};

const realAnsver = () => {
  const num = question();
  return `${num}|${balance(num)}`;
};

const startGame = () => brainGeneral('Balance the given number.', realAnsver);

export default startGame;
