function sayHi(userMethodForSayHi) {
    userMethodForSayHi();
}

let user = {
    name: 'Max',

    hi() {
        console.log(`My name is ${this.name}`);
    }
};

let hi = user.hi.bind(user);
sayHi(hi);
