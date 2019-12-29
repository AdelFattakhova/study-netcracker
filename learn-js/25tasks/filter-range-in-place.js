//https://learn.javascript.ru/task/filter-range-in-place
//Напишите функцию filterRangeInPlace(arr, a, b), которая принимает массив arr
// и удаляет из него все значения кроме тех, которые находятся между a и b.
// То есть, проверка имеет вид a ≤ arr[i] ≤ b.
//
// Функция должна изменять принимаемый массив и ничего не возвращать.

let arr = [5, 3, 8, 1];

const filterRangeInPlace = (arr, a, b) => {
    arr.filter(item => (item >= a && item <= b) ? item : arr.splice(arr.indexOf(item), 1));
};

filterRangeInPlace(arr, 1, 4); // удалены числа вне диапазона 1..4

console.log(arr);
