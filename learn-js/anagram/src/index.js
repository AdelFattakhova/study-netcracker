/**
 * Функция принимает на вход массив слов и объединяет их в группы слов-анаграмм.
 * @param arr - массив слов
 * @returns {this} - массив групп слов-анаграмм
 */

const anagram = (arr) => {
    let result = [];
    let map = new Map();

    for (let word of arr) {
        let sorted = word.split('').sort().join('');
        map.set(word, sorted);
    }

    let keys = Array.from(map.keys());

    for (let i = 0; i < keys.length; i++) {
        let pair = [];

        for (let j = i + 1; j < keys.length; j++) {
            if (map.get(keys[i]) === map.get(keys[j])) {
                pair.push(keys[i], keys[j]);
                result.push(pair.sort());
            }
        }
    }

    return result.sort();
};
