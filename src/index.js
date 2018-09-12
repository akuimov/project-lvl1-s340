import readlineSync from 'readline-sync';

const welcome = (question = '') => {
  console.log('Welcome to the Brain Games!');
  if (question !== '') console.log(question);
  const actual = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${actual}`);
  return actual;
};

const randomNumber = (min, max) => Math.floor(Math.random() * (max - min) + min);

const even = (score, user) => {
  if (score < 1) {
    console.log('Correct!');
    return console.log(`Congratulations, ${user}!`);
  }
  const number = randomNumber(0, 100);
  console.log(`Question: ${number}`);
  const ansverUser = readlineSync.question('Your answer: ');
  const realAnsver = number % 2 === 0 ? 'yes' : 'no';

  if (number % 2 === 0 && (ansverUser !== realAnsver || ansverUser === 'no')) {
    console.log(`${ansverUser} is wrong answer ;(. Correct answer was 'yes'.`);
    return console.log(`Let's try again, ${user}!`);
  } if (number % 2 !== 0 && (ansverUser !== realAnsver || ansverUser === 'yes')) {
    console.log(`${ansverUser} is wrong answer ;(. Correct answer was 'no'.`);
    return console.log(`Let's try again, ${user}!`);
  }
  const newScore = score - 1;
  return even(newScore, user);
};

const brainEven = (order, description) => {
  if (order === 1) {
    welcome(description);
  } else {
    const welcomeName = welcome(description);
    even(3, welcomeName);
  }
};

export default brainEven;
