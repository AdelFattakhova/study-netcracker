//https://learn.javascript.ru/task/calculator
//Создайте объект calculator (калькулятор) с тремя методами:
//
// read() (читать) запрашивает два значения и сохраняет их как свойства объекта.
// sum() (суммировать) возвращает сумму сохранённых значений.
// mul() (умножить) перемножает сохранённые значения и возвращает результат.

let calculator = {
    read() {
        this.a = +prompt('First number: ', 0);
        this.b = +prompt('Second number: ', 0);
    },
    sum() {
        return this.a + this.b;
    },
    mul() {
        return this.a * this.b;
    }
};

calculator.read();
console.log( calculator.sum() );
console.log( calculator.mul() );
