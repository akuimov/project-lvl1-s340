import brainGeneral from '..';
import { cons } from 'hexlet-pairs';

const randomNum = (min, max) => Math.floor(Math.random() * (max - min) + min);

const progression = (num, step, progress) => {
  if (progress.length > 9) return progress;
  const newProgress = num + step;
  progress.push(newProgress);
  return progression(newProgress, step, progress);
};

const questionAndAnswer = () => {
  const num = randomNum(1, 10);
  const step = randomNum(1, 10);
  const rezultIndex = randomNum(0, 9);
  const progress = progression(num, step, []);
  const answer = progress.slice();
  answer[rezultIndex] = '..';
  return cons(answer.join(' '), `${progress[rezultIndex]}`);
};

const startGame = () => brainGeneral('What number is missing in this progression?', questionAndAnswer);

export default startGame;
