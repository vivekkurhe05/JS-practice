/**
 * Write a JavaScript function to convert a string to title case.
Test Data :
console.log(sentenceCase('PHP exercises. python exercises.'));
"Php Exercises. Python Exercises."
 */

// my sol
function sentenceCase(str) {
    const re = /\b[A-Za-z]/g
    return str.replace(re,(chr)=>chr.toUpperCase())
}

console.log(sentenceCase('PHP exercises. python exercises.'));