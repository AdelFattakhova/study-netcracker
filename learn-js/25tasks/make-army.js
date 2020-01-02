//https://learn.javascript.ru/task/make-army
// Следующий код создаёт массив из стрелков (shooters).
//
// Каждая функция предназначена выводить их порядковые номера. Но что-то пошло не так…
// Почему у всех стрелков одинаковые номера? Почините код, чтобы он работал как задумано.

function makeArmy() {
    let shooters = [];

    for (let i = 0; i < 10; i++) {
        let shooter = function() {
            console.log(i);
        };
        shooters.push(shooter);
    }

    return shooters;
}

let army = makeArmy();

army[0]();
army[5]();
