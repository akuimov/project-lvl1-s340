import brainGeneral from '..';

const randomNum = () => Math.floor(Math.random() * (10 - 1) + 1);

const gcd = (num1, num2) => (num1 !== 0 ? gcd(num2 % num1, num1) : num2);

const realAnsver = () => {
  const number1 = randomNum();
  const number2 = randomNum();
  console.log(number1);
  console.log(number2);
  const rez = gcd(number1, number2);
  return `${number1} ${number2}|${rez}`;
};

const startGame = () => brainGeneral('Find the greatest common divisor of given numbers.', realAnsver);

export default startGame;
