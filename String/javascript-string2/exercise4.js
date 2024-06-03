/**
 * 
 * Write a JavaScript function to extract a specified number of characters from a string.
 * Test Data :
 * console.log(truncate_string("Robin Singh",4));
 * "Robi"
 */

function truncate_string(str, num){
    return str.substring(0,4)
}


console.log(truncate_string("Robin Singh",4));

// or

function truncate_string2(str, num){
    return str.slice(0,4)
}


console.log(truncate_string2("Robin Singh",4));

// or

function truncate_string3(str, num){
    return str.substr(0,4)
}


console.log(truncate_string3("Robin Singh",4));