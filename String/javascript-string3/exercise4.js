/**
 * 
 * Write a JavaScript function to extract a specified number of characters from a string.
 * Test Data :
 * console.log(truncate_string("Robin Singh",4));
 * "Robi"
 */

// my solution
function truncate_string(str, len){
    return str.substring(0, len)
}

console.log(truncate_string("Robin Singh",4));

// or

function truncate_string2(str, len){
    return str.substr(0, len)
}

console.log(truncate_string2("Robin Singh",4));


// or

function truncate_string3(str, len){
    return str.slice(0, len)
}

console.log(truncate_string3("Robin Singh",4));