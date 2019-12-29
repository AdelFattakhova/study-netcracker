//https://learn.javascript.ru/task/maximal-subarray
//На входе массив чисел, например: arr = [1, -2, 3, 4, -9, 6].
//
// Задача: найти непрерывный подмассив в arr, сумма элементов в котором максимальна.
//
// Функция getMaxSubSum(arr) должна возвращать эту сумму.

const getMaxSubSum = arr => {
    let maxSum = 0;
    let subSum = 0;

    arr.forEach((item) => {
        subSum += item;
        maxSum = Math.max(maxSum, subSum);
        if (subSum < 0) subSum = 0;
    });

    return maxSum;
};

console.log(getMaxSubSum([-1, 2, 3, -9])); //5
