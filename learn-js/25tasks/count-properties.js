//https://learn.javascript.ru/task/count-properties
//Напишите функцию count(obj), которая возвращает количество свойств объекта:

const count = obj => Object.keys(obj).length;

const user = {
    name: 'John',
    age: 30
};

console.log(count(user));
