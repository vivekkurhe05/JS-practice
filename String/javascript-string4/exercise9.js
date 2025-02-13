/**
 * 
 * Write a JavaScript function to capitalize the first letter of each word in a string.
 * Test Data :
 * console.log(capitalize_Words('js string exercises'));
 * "Js String Exercises"
 */

// my sol
function capitalize_Words(str) {
    let arr = str.split(" ")
    return arr.map(word => word.charAt(0).toUpperCase()+word.substring(1)).join(" ")
}

console.log(capitalize_Words('js string exercises'));