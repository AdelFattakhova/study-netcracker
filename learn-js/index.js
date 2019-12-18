// /**
//  * Реализовать RLE-сжатие: AAAB -> A3B, BCCDDDAXXXX -> BC2D3AX4
//  * @param  {string} value
//  * @return {string}
//  */
// function rle(value) {
//     let arr = value.split('');
//
//     arr.reduce(item => item)
// }
//
// console.log(rle('AVVVBBBVVXDHJFFFFDDDDDDHAAAAJJJDDSLSSSDDDD'));
function uniq(values) {
    let set = new Set(values);
    return Array.from(set);
}
console.log(uniq([2, 3, 1, 2, 1, 5, 6, 3, 1, 8, 5]));
