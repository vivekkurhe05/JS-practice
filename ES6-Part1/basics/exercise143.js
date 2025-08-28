/**
 * Write a JavaScript program to sort the characters of a string Alphabetically.
 */

// my sol
function sortCharactersInString(str) {
    return str.split('').sort((a,b) => a.localeCompare(b)).join("");
}

console.log(sortCharactersInString('cabbage')); // Output: 'aabbceg'
console.log(sortCharactersInString('a7fs23l1n4o6x')); // Output: '123467aflnosx'