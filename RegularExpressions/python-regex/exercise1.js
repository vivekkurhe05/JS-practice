/**
 * Write a Python program to check that a string contains only a certain set of characters (in this case a-z, A-Z and 0-9)
 */

// my solution

function is_allowed_specific_char(str) {
    const re = /\w/g;
    return re.test(str);
}

console.log(is_allowed_specific_char("ABCDEFabcdef123450"));
console.log(is_allowed_specific_char("*&%@#!}{"));

// or my solution

function is_allowed_specific_char2(str) {
    const re = /[A-Za-z0-9]/g;
    return re.test(str);
}

console.log(is_allowed_specific_char2("ABCDEFabcdef123450"));
console.log(is_allowed_specific_char2("*&%@#!}{"));