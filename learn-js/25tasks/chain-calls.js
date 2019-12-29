//https://learn.javascript.ru/task/chain-calls
//Это ladder (лестница) – объект, который позволяет подниматься вверх и спускаться:
//Теперь, если нам нужно сделать несколько последовательных вызовов, мы можем выполнить это так:
//
// ladder.up();
// ladder.up();
// ladder.down();
// ladder.showStep(); // 1
// Измените код методов up, down и showStep таким образом, чтобы их вызов можно было сделать по цепочке, например так:
//
// ladder.up().up().down().showStep(); // 1

let ladder = {
    step: 0,
    up() {
        this.step++;
        return this;
    },
    down() {
        this.step--;
        return this;
    },
    showStep() {
        console.log(this.step);
        return this;
    }
};

ladder.up().up().down().showStep();
