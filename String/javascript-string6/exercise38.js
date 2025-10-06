/**
 * Write a JavaScript function to create a case-insensitive search.
 */

function case_insensitive_search(str, substr) {
    let arr = str.split(' ');
    return arr[arr.length-1].toLowerCase() === substr.toLowerCase();
}

console.log(case_insensitive_search('JavaScript Exercises', 'exercises')); // Matched
console.log(case_insensitive_search('JavaScript Exercises', 'Exercises')); // Matched
console.log(case_insensitive_search('JavaScript Exercises', 'Exercisess')); // Not Matched