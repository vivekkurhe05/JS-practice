/**
 * Write a JavaScript function to count the number of vowels in a given string.

Test Data:
console.log(vowel_count('United States'));
 */

// my solution
function vowel_count(str){
    const re = /[aeiou]/gi
    return str.match(re).length
}

console.log(vowel_count("United States"));