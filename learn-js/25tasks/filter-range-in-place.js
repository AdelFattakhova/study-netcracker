//https://learn.javascript.ru/task/filter-range-in-place
//Напишите функцию filterRangeInPlace(arr, a, b), которая принимает массив arr
// и удаляет из него все значения кроме тех, которые находятся между a и b.
// То есть, проверка имеет вид a ≤ arr[i] ≤ b.
//
// Функция должна изменять принимаемый массив и ничего не возвращать.

let array = [5, 3, 8, 1];

const filterRangeInPlace = (arr, a, b) => arr.filter(item => item >= a && item <= b);

console.log(filterRangeInPlace(array, 1, 4));
