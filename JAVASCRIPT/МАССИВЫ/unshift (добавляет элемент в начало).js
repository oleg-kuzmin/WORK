// TODO Метод unshift. Добавление элемента в начало массива.

//* Синтаксис
arr.unshift(element)

const queue = ['Рабочие', 'Школьники', 'Студенты'];
queue.unshift('Пенсионеры', 'Инвалиды');
console.log(queue);  // ["Пенсионеры", "Инвалиды", "Рабочие", "Школьники", "Студенты"]

students.unshift({ name: "Max", age: "24" })
console.log(students);