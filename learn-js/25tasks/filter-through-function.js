//https://learn.javascript.ru/task/filter-through-function
//У нас есть встроенный метод arr.filter(f) для массивов. Он фильтрует все элементы с помощью функции f.
// Если она возвращает true, то элемент добавится в возвращаемый массив.
//
// Сделайте набор «готовых к употреблению» фильтров:
//
// inBetween(a, b) – между a и b (включительно).
// inArray([...]) – находится в данном массиве.

const inBetween = (a, b) => x => x >= a && x <= b;

const inArray = arr => x => arr.includes(x);

const arr = [1, 2, 3, 4, 5, 6, 7];

console.log(arr.filter(inBetween(3, 6))); // 3,4,5,6

console.log(arr.filter(inArray([1, 2, 10]))); // 1,2
