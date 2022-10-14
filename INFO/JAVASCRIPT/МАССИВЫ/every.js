// TODO Метод every. Проверка всех элементов массива.
const jokes = ['смешная шутка и доля правды', 'не очень смешной анекдот + доля правды', 'доля правды в дурацкой шутке'];
const allJokesWithTruth = jokes.every(function (joke) {
  return joke.indexOf('доля правды') > -1;
});
console.log(allJokesWithTruth); // true