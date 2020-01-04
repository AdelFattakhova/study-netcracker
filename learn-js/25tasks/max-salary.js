//https://learn.javascript.ru/task/max-salary
//Создайте функцию topSalary(salaries), которая возвращает имя самого высокооплачиваемого сотрудника.
//
// Если объект salaries пустой, то нужно вернуть null.
// Если несколько высокооплачиваемых сотрудников, можно вернуть любого из них.

const topSalary = salaries => Object.entries(salaries)
    .reduce(([name, salary], [curName, curSalary]) => curSalary > salary ? [curName, curSalary] : [name, salary], [null, 0])[0];

const salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

console.log(topSalary(salaries));
