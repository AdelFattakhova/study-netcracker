function sayHi(userMethodForSayHi) {
    userMethodForSayHi();
}

let user = {
    name: 'Max',

    hi() {
        console.log(`My name is ${this.name}`);
    }
};

const bindFunc = (func, obj) => (...args) => func.apply(obj, args);

let hi = bindFunc(user.hi, user);
sayHi(hi);
