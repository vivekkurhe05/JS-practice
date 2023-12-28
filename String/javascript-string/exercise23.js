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

// my solution
function strip(str) {
    return str.trim()
}

console.log(strip('w3resource '));
console.log(strip(' w3resource'));
console.log(strip(' w3resource '));

// or my solution

function strip2(str) {
    let re = /^\s+|\s+$/g

    return str.replace(re,"")
}

console.log(strip2('w3resource '));
console.log(strip2(' w3resource'));
console.log(strip2(' w3resource '));