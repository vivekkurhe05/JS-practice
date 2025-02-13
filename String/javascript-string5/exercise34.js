/**
 * Write a JavaScript function to convert a string to title case.
Test Data :
console.log(sentenceCase('PHP exercises. python exercises.'));
"Php Exercises. Python Exercises."
 */

function sentenceCase(str) {
    return str.split(" ").map((word) => word[0].toUpperCase()+word.substring(1)).join(" ")
}

console.log(sentenceCase('PHP exercises. python exercises.'));