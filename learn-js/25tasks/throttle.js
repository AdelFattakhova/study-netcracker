//https://learn.javascript.ru/task/throttle
// Создайте «тормозящий» декоратор throttle(f, ms), который возвращает обёртку, передавая вызов в f не более
// одного раза в ms миллисекунд. Те вызовы, которые попадают в период «торможения», игнорируются.
// Отличие от debounce – если проигнорированный вызов является последним во время «задержки», то он выполняется в конце.

const throttle = (f, ms) => {
    let allowed = true;
    let lastArgs;
    let lastThis;

    function wrapper() {
        if (!allowed) {
            lastArgs = arguments;
            lastThis = this;
            return;
        }

        f.apply(this, arguments);
        allowed = false;

        setTimeout(() => {
            allowed = true;
            wrapper.apply(lastThis, lastArgs);
        }, ms);
    }

    return wrapper;
};
