//https://learn.javascript.ru/task/debounce
// Результатом декоратора debounce(f, ms) должна быть обёртка, которая передаёт вызов f не более
// одного раза в ms миллисекунд. Другими словами, когда мы вызываем debounce, это гарантирует,
// что все остальные вызовы будут игнорироваться в течение ms.

const debounce = (f, ms) => {
    let allowed = true;

    return function () {
        if (!allowed) {
            return;
        }

        f.apply(this, arguments);
        allowed = false;
        setTimeout(() => allowed = true, ms);
    };
};
