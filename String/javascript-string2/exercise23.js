/**
 * Write a JavaScript function to strip leading and trailing spaces from a string.
 * Test Data :
 * console.log(strip('w3resource '));
 * console.log(strip(' w3resource'));
 * console.log(strip(' w3resource '));
 * Output :
 * "w3resource"
 * "w3resource"
 * "w3resource"
 */


function strip(str){
    return str.trim()
}

console.log(strip('w3resource '));
console.log(strip(' w3resource'));
console.log(strip(' w3resource '));

// or

function strip2(str){
    let regex = /\s+|\s+/g
    return str.replace(regex, "")
}

console.log(strip2('w3resource '));
console.log(strip2(' w3resource'));
console.log(strip2(' w3resource '));