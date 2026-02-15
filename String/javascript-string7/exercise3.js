/**
 * 
 * Write a JavaScript function to split a string and convert it into an array of words.
 * Test Data :
 * console.log(string_to_array("Robin Singh"));
 * ["Robin", "Singh"]
 */

function string_to_array(input) {
    return input.split(" ");
}

console.log(string_to_array("Robin Singh"));

// or

function string_to_array2(input) {
    const re = /\w+/g;
    return input.match(re);
}

console.log(string_to_array2("Robin Singh"));