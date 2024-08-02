/**
 * Write a Python program to check that a string contains only a certain set of characters (in this case a-z, A-Z and 0-9)
 */

// my solution
function is_allowed_specific_char(str) {
    let regex = /[A-Za-z0-9]/g
    return regex.test(str)
}

console.log(is_allowed_specific_char("ABCDEFabcdef123450")); // true
console.log(is_allowed_specific_char("*&%@#!}{")); // false

// or my solution

function is_allowed_specific_char2(str) {
    let regex = /\w/g
    return regex.test(str)
}

console.log(is_allowed_specific_char2("ABCDEFabcdef123450")); // true
console.log(is_allowed_specific_char2("*&%@#!}{")); // false