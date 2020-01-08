//https://learn.javascript.ru/task/closure-sum
//Напишите функцию sum, которая работает таким образом: sum(a)(b) = a+b.

const sum = a => b => a + b;

console.log(sum(1)(2));
console.log(sum(5)(-1));

const foo = func => {
    return function curry(...args) {
        if (func.length <= args.length) {
            return func.apply(this, args);
        } else {
            return (...moreArgs) => curry.apply(this, args.concat(moreArgs));
        }
    }
};

const curry = fn => (...args) => {
    if (fn.length > args.length) {
        const f = fn.bind(null, ...args);
        return curry(f);
    } else {
        return fn(...args);
    }
};

const sum4 = (a, b, c, d) => a + b + c + d;
const f = curry(sum4);
console.log(f(1, 2, 3)(4)); // 10
console.log(f(1, 2)(3)(4)); // 10
console.log(f(1)(2)(3)(4));// 10
console.log(f(1)(2, 3, 4));// 10
console.log(f(1)(2)(3, 4));// 10
console.log(f(1, 2)(3, 4));// 10
