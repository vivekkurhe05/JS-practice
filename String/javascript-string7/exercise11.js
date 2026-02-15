/**
 * 
 * Write a JavaScript function to convert a string into camel case.
 * Test Data :
 * console.log(camelize("JavaScript Exercises"));
 * console.log(camelize("JavaScript exercises"));
 * console.log(camelize("JavaScriptExercises"));
 * "JavaScriptExercises"
 * "JavaScriptExercises"
 * "JavaScriptExercises"
 */

function camelize(input) {
    const arr = input.split(" ");
    return arr.map(word => word[0].toUpperCase() + word.slice(1)).join("")
}

console.log(camelize("JavaScript Exercises"));
console.log(camelize("JavaScript exercises"));
console.log(camelize("JavaScriptExercises"));