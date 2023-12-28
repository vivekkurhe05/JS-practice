/**
 * 
 * Write a JavaScript function to extract a specified number of characters from a string.
 * Test Data :
 * console.log(truncate_string("Robin Singh",4));
 * "Robi"
 */

// my solution
function truncate_string(str, num) {
    return str.substring(0, num)
}

console.log(truncate_string("Robin Singh",4));

// or my solution

function truncate_string2(str, num) {
    return str.substr(0, num)
}

console.log(truncate_string2("Robin Singh",4));

// or my solution
 
function truncate_string3(str, num) {
    return str.slice(0, num)
}

console.log(truncate_string3("Robin Singh",4));