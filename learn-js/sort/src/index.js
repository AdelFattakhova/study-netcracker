"use strict";

/**
 * This function sorts letters in words and words in sentence in alphabetical order,
 * words in sentence are written with the first capital letter
 *
 * @param {string} sentence - sentence to sort
 * @returns {string} - sorted sentence
 */

const sort = sentence => sentence
    .split(' ')
    .map(word => word.split('')
        .sort((a, b) => a.localeCompare(b, 'ru'))
        .map(letter => letter.toLowerCase())
        .join(''))
    .map(item => `${item[0].toUpperCase()}${item.slice(1)}`)
    .sort((a, b) => a.localeCompare(b, 'ru'))
    .join(' ');
