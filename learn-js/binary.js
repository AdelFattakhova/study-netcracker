let binarySearch = function(arr, num) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let middle = Math.floor((left + right) / 2);
        let middleNum = arr[middle];

        if(num == middleNum) {
            return middle;
        }

        else if (num < middleNum) {
            right = middle - 1;
        } else {
            left = middle + 1;
        }

    }
    return "Число не найдено :(";
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let num = prompt("Введите число:");

let result = binarySearch(arr, num);
console.log(result);