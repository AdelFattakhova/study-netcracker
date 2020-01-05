//https://learn.javascript.ru/task/delay
//Создайте декоратор delay(f, ms), который задерживает каждый вызов f на ms миллисекунд.

const delay = (f, ms) => {
    return function () {
        setTimeout(f.apply(this, arguments), ms);
    }
};

const f1000 = delay(console.log, 1000);
const f1500 = delay(console.log, 1500);

f1000("test"); // показывает "test" после 1000 мс
f1500("test"); // показывает "test" после 1500 мс
