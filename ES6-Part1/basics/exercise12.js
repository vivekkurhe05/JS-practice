/**
 * Write a JavaScript program to remove non-printable ASCII characters from a given string.
 */

function remove_non_ASCII(str) {
    const re = /[^\x20-\x7E]/g;
    return str.replace(re, "");
}

console.log(remove_non_ASCII('äÄçÇéÉêw3resouröceÖÐþúÚ'))
