//https://learn.javascript.ru/task/closure-sum
//Напишите функцию sum, которая работает таким образом: sum(a)(b) = a+b.

const sum = a => {
    return function(b) {
        return a + b;
    }
};

console.log(sum(1)(2));
console.log(sum(5)(-1));
