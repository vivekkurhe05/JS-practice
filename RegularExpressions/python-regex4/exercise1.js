/**
 * Write a Python program to check that a string contains only a certain set of characters (in this case a-z, A-Z and 0-9)
 */

// my solution
function is_allowed_specific_char(str) {
    const re = /[A-Za-z0-9]/g;
    return re.test(str)
}

console.log(is_allowed_specific_char("ABCDEFabcdef123450")); // true
console.log(is_allowed_specific_char("*&%@#!}{")); // false