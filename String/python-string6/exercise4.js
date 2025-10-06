/**
 *
Write a Python program to get a string from a given string where all occurrences
of its first char have been changed to '$', except the first char itself.
Sample String : 'restart'
Expected Result : 'resta$t'
 */

function changeAllOccurrencesOfFirstChar(str) {
    const re = /\B[r]/g;
    return str.replace(re, "$");
}

console.log(changeAllOccurrencesOfFirstChar("restart"))