/**
 * 
 * Write a JavaScript function to check whether a string is blank or not.
 * Test Data :
 * console.log(is_Blank(''));
 * console.log(is_Blank('abc'));
 * true
 * false
 */

// my solution

function is_Blank(input){
    return input.length === 0
}

console.log(is_Blank(''));
console.log(is_Blank('abc'));

// or

function is_Blank(input){
    return input === ""
}

console.log(is_Blank(''));
console.log(is_Blank('abc'));