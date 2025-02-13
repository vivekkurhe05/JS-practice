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

function camelize(str) {
    let arr = str.split(" ")
    if(arr.length===1) return str
    else return arr[0]+arr[1].charAt(0).toUpperCase()+arr[1].substring(1)
}

console.log(camelize("JavaScript Exercises"));
console.log(camelize("JavaScript exercises"));
console.log(camelize("JavaScriptExercises"));