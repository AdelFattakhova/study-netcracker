//https://learn.javascript.ru/task/spy-decorator
// Создайте декоратор spy(func), который должен возвращать обёртку, которая сохраняет все вызовы функции в своём свойстве calls.
//
// Каждый вызов должен сохраняться как массив аргументов.

function work(a, b) {
    console.log(a + b); // произвольная функция или метод
}

const spy = func => {
    const inner = (...args) => {
        inner.calls.push(args);
        return func.apply(this, arguments);
    };

    inner.calls = [];

    return inner;
};

work = spy(work);

work(1, 2); // 3
work(4, 5); // 9

for (let args of work.calls) {
    console.log('call:' + args.join()); // "call:1,2", "call:4,5"
}
