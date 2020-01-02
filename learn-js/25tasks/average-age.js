//https://learn.javascript.ru/task/average-age
//Напишите функцию getAverageAge(users), которая принимает массив объектов со свойством age и возвращает средний возраст.
//
// Формула вычисления среднего арифметического значения: (age1 + age2 + ... + ageN) / N.

const getAverageAge = users => {
    return users.reduce((sum, current) => sum + current.age, 0) / users.length;
};

const vasya = { name: "Вася", age: 25 };
const petya = { name: "Петя", age: 30 };
const masha = { name: "Маша", age: 29 };

const arr = [ vasya, petya, masha ];

console.log( getAverageAge(arr) );
