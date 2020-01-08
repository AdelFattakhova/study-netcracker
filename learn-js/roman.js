const makeArray = (len) => {
    let array = [];
    for (let num = 0; num < len; num++) {
        array.push(num);
    }
    return array;
};

Number.prototype.V = makeArray(5);
Number.prototype.VII = makeArray(7);

console.log(0..V); // [0, 1, 2, 3, 4];
console.log(0..VII); // [0, 1, 2, 3, 4, 5, 6];
