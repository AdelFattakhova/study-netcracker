//https://learn.javascript.ru/task/sort-objects
//Напишите функцию sortByAge(users), которая принимает массив объектов со свойством age и сортирует их по нему.

const sortByAge = users => {
    users.sort( (a, b) => a.age - b.age );
};

const vasya = { name: "Вася", age: 25 };
const petya = { name: "Петя", age: 30 };
const masha = { name: "Маша", age: 28 };

const arr = [ vasya, petya, masha ];

sortByAge(arr);

arr.forEach(item => console.log(item.name));
