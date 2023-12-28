/**
 * 
 * Write a JavaScript function to repeat a string a specified times. 
 * Test Data :
 * console.log(repeat_string('a', 4));
 * console.log(repeat_string('a'));
 * Output :
 * "aaaa"
 * "Error in string or count."
 */

// my solution
function repeat_string(str, times) {
    if(times === undefined) return "Error in string or count."
    return str.repeat(times)
}

console.log(repeat_string('a', 4));
console.log(repeat_string('a'));