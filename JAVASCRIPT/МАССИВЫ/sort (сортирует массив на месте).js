// TODO Метод sort. Сортирует массив на месте, меняя в нём порядок элементов.

//* Синтаксис
arr.sort();
// по умолчанию элементы сортируются как строки

// чтобы использовать наш собственный порядок сортировки, нам нужно предоставить функцию в качестве аргумента
function compareNumeric(a, b) {
  if (a > b) return 1;
  if (a === b) return 0;
  if (a < b) return -1;
}
arr.sort(compareNumeric);
arr.sort((a, b) => a - b);
