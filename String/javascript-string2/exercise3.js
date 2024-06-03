/**
 * 
 * Write a JavaScript function to split a string and convert it into an array of words.
 * Test Data :
 * console.log(string_to_array("Robin Singh"));
 * ["Robin", "Singh"]
 */

function string_to_array(str){
    return str.trim().split(" ")
}

console.log(string_to_array("Robin Singh"));

// or

function string_to_array2(str){
    let regex = /\w+/g
    return str.match(regex)
}

console.log(string_to_array2("Robin Singh"));