/**
 * 
 * Write a JavaScript function to extract a specified number of characters from a string.
 * Test Data :
 * console.log(truncate_string("Robin Singh",4));
 * "Robi"
 */

function truncate_string(str, numOfChars) {
    return str.substr(0, numOfChars)
}

console.log(truncate_string("Robin Singh",4));