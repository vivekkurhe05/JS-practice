/**
 * Write a JavaScript function to convert a string to title case.
Test Data :
console.log(sentenceCase('PHP exercises. python exercises.'));
"Php Exercises. Python Exercises."
 */

// my solution
function sentenceCase(str) {
    str = str.toLocaleLowerCase()
    let arr = str.trim().split(" ")
    return arr.map((el) => el[0].toUpperCase()+el.substring(1)).join(" ")
}

console.log(sentenceCase('PHP exercises. python exercises.'));