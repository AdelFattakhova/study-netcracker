/**
 * Функция бинарного поиска
 *
 * @param arr - упорядоченный массив целых чисел
 * @param num - число, индекс которого надо найти в массиве
 * @returns {any} - найденный индекс числа либо null, если число не найдено
 */

const binarySearch = (arr, num) => {

    let left = 0;
    let right = arr.length - 1;
    let middle = Math.floor((left + right) / 2);

    while (left <= right) {
        if (num < arr[middle]) {
            right = middle - 1;
        } else {
            left = middle + 1;
        }

        middle = Math.floor((left + right) / 2);
    }

    return num === arr[middle] ? middle : null;
};

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const num = prompt("Введите число:");

let result = binarySearch(arr, num);
result === null ? result = "Число не найдено :(" : result;
console.log(result);