import readlineSync from 'readline-sync';

const welcome = (question = '') => {
  console.log('Welcome to the Brain Games!');
  if (question !== '') console.log(question);
  const actual = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${actual}`);
  return actual;
};

// const randomNumber = (min, max) => Math.floor(Math.random() * (max - min) + min);

const even = (score, user, questionArg, realAnswerArg) => {
  if (score < 1) {
    console.log('Correct!');
    return console.log(`Congratulations, ${user}!`);
  }

  const question = questionArg();
  const realAnswer = realAnswerArg(question);
  console.log(`Question: ${question}`);
  const ansverUser = readlineSync.question('Your answer: ');

  if (ansverUser !== realAnswer) {
    console.log(`${ansverUser} is wrong answer ;(. Correct answer was ${realAnswer}.`);
    return console.log(`Let's try again, ${user}!`);
  }
  const newScore = score - 1;
  return even(newScore, user, questionArg, realAnswerArg);
};

const brainGeneral = (description, score, question, realAnswer) => {
  if (score === undefined) {
    return welcome(description);
  }
  const user = welcome(description);
  return even(score, user, question, realAnswer);
};

export default brainGeneral;
