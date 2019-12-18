"use strict";

/**
 * This function sorts letters in words and words in sentence in alphabetical order,
 * words in sentence are written with the first capital letter
 *
 * @param sentence - sentence to sort
 * @returns {string} - sorted sentence
 */

const sort = (sentence) => {
    let words = sentence.split(' ')
        .map(word => word.split('')
            .sort((a, b) => {
                return a.localeCompare(b, 'ru')
            })
            .map(letter => letter.toLowerCase())
            .join(''))
        .map(item => item[0].toUpperCase() + item.slice(1))
        .sort((a, b) => {
            return a.localeCompare(b, 'ru')
        });

    return words.join(' ');
};
