//https://learn.javascript.ru/task/max-salary
//Создайте функцию topSalary(salaries), которая возвращает имя самого высокооплачиваемого сотрудника.
//
// Если объект salaries пустой, то нужно вернуть null.
// Если несколько высокооплачиваемых сотрудников, можно вернуть любого из них.

const topSalary = salaries => {
    let maxSalary = 0;
    let maxName = null;

    Object.entries(salaries).forEach(item => {
        const [name, salary] = item;
        if (salary > maxSalary) {
            maxSalary = salary;
            maxName = name;
        }
    });

    return maxName;
};

const salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

console.log(topSalary(salaries));
