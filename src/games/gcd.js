import brainGeneral from '..';

const evenQuestion = () => {
  const randommNum = (min, max) => Math.floor(Math.random() * (max - min) + min);
  return `${randommNum(1, 10)} ${randommNum(1, 10)}`;
};

const gcd = (num1, num2) => {
  const numDividers = (num, n, divider) => {
    if (n < 1) return divider;
    if (num % n === 0) divider.push(n);
    return numDividers(num, (n - 1), divider);
  };
  const num1Dividers = numDividers(num1, num1, []);
  const num2Dividers = numDividers(num2, num2, []);
  const generalDividers = num1Dividers.filter(x => num2Dividers.includes(x));
  return `${Math.max(...generalDividers)}`;
};

const evenRealAnsver = (string) => {
  const arr = string.split(' ');
  return gcd(arr[0], arr[1]);
};

const startGame = () => brainGeneral('Find the greatest common divisor of given numbers.', 3, evenQuestion, evenRealAnsver);

export default startGame;
