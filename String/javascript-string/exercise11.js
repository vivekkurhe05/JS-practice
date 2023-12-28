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

// my solution
function camelize(str) {
    let arr = str.trim().split(" ")
    if(arr.length>1) return arr[0]+arr[1].charAt(0).toUpperCase()+arr[1].substring(1)
    else return arr[0]
}

console.log(camelize("JavaScript Exercises"));
console.log(camelize("JavaScript exercises"));
console.log(camelize("JavaScriptExercises"));