/**
 * 
 * Write a JavaScript function to extract a specified number of characters from a string.
 * Test Data :
 * console.log(truncate_string("Robin Singh",4));
 * "Robi"
 */

// my sol
function truncate_string(str, num) {
    return str.substring(0,4)
}

console.log(truncate_string("Robin Singh",4));