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

// my sol
function camelize(str) {
    return str.split(" ").map(el => el[0].toUpperCase()+el.substring(1)).join("")
}

console.log(camelize("JavaScript Exercises"));
console.log(camelize("JavaScript exercises"));
console.log(camelize("JavaScriptExercises"));