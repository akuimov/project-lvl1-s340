import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

const welcome = (question = '') => {
  console.log('Welcome to the Brain Games!');
  if (question !== '') console.log(question);
  const actual = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${actual}`);
  return actual;
};

// const randomNumber = (min, max) => Math.floor(Math.random() * (max - min) + min);

const logicGame = (score, user, fn) => {
  if (score < 1) {
    console.log('Correct!');
    return console.log(`Congratulations, ${user}!`);
  }
  const questionAndAnswer = fn();
  const question = car(questionAndAnswer);
  const rightAnswer = cdr(questionAndAnswer);
  console.log(`Question: ${question}`);
  const answerUser = readlineSync.question('Your answer: ');

  if (answerUser !== rightAnswer) {
    console.log(`${answerUser} is wrong answer ;(. Correct answer was ${rightAnswer}.`);
    return console.log(`Let's try again, ${user}!`);
  }
  const newScore = score - 1;
  return logicGame(newScore, user, fn);
};

const brainGeneral = (description, fn) => {
  if (fn === undefined) {
    return welcome(description);
  }
  const user = welcome(description);
  return logicGame(3, user, fn);
};

export default brainGeneral;
