//https://learn.javascript.ru/task/is-empty
//Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false.

let schedule = {};

const isEmpty = obj => !Object.keys(obj).length;
console.log(isEmpty(schedule));
