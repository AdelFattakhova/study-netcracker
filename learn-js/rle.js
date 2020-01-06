/**
 * Реализовать RLE-сжатие: AAAB -> A3B, BCCDDDAXXXX -> BC2D3AX4
 * @param  {string} value
 * @return {string}
 */
function rle(value) {
    let count = 0;
    let prev = '';
    let result = '';

    value.split('').forEach(curr => {
        count++;
        if (curr === prev) {
            return;
        }
        if (prev !== '') {
            result += count > 1 ? prev + count : prev;
        }
        prev = curr;
        count = 0;
    });

    count++;
    return result += count > 1 ? prev + count : prev;
}

console.log(rle('AVVVBBBVVXDHJFFFFDDDDDDHAAAAJJJDDSLSSSDDDD'));
