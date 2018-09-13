import brainGeneral from '..';

const evenQuestion = () => {
  const randommNum = (min, max) => Math.floor(Math.random() * (max - min) + min);
  return `${randommNum(1, 10)} ${randommNum(1, 10)}`;
};

const item = (ar, num, divider) => {
  if (num < 1) return divider;
  if (ar % num === 0) divider.push(num);
  return item(ar, num - 1, divider);
};

const evenRealAnsver = (string) => {
  const arr = string.split(' ');
  const dividerAr1 = item(arr[0], +arr[0], []);
  const dividerAr2 = item(arr[1], +arr[1], []);
  const general = dividerAr1.reduce((acc, x) => {
    if (dividerAr2.includes(x)) acc.push(x);
    return acc;
  }, []);
  return `${Math.max(...general)}`;
};

const startGame = () => brainGeneral('', 'Find the greatest common divisor of given numbers.', 3, evenQuestion, evenRealAnsver);

export default startGame;
