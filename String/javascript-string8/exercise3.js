/**
 * 
 * Write a JavaScript function to split a string and convert it into an array of words.
 * Test Data :
 * console.log(string_to_array("Robin Singh"));
 * ["Robin", "Singh"]
 */

function string_to_array(str) {
    return str.split(" ");
}

console.log(string_to_array("Robin Singh"));

// or

function string_to_array2(str) {
    const re = /\w+/g;
    return str.match(re);
}

console.log(string_to_array2("Robin Singh"));