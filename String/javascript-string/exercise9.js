/**
 * 
 * Write a JavaScript function to capitalize the first letter of each word in a string.
 * Test Data :
 * console.log(capitalize_Words('js string exercises'));
 * "Js String Exercises"
 */

// my solution
function capitalize_Words(str) {
    let arr = str.trim().split(" ")
    return arr.map((el) => el[0].toUpperCase()+el.substring(1)).join(" ")
}

console.log(capitalize_Words('js string exercises'));