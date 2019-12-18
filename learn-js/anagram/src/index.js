const MIN_GROUP = 2;

/**
 * This function takes an array of words and makes groups of anagrams
 *
 * @param arr - array of words
 * @returns {this} - array of groups of anagrams
 */

const anagram = arr => {
    const result = [];
    const words = {};

    arr.forEach(word => {
        let sorted = word.split('').sort().join('');
        if (words.hasOwnProperty(sorted)) {
            words[sorted].push(word);
        } else {
            words[sorted] = [word];
        }
    });

    Object.values(words).forEach(value => {
        let anagrams = [...value];

        if (anagrams.length >= MIN_GROUP) {
            result.push(anagrams.sort());
        }
    });

    return result.sort();
};
