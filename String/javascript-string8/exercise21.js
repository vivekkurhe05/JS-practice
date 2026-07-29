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

function repeat_string(chr, num) {
    if(num === undefined) return "Error in string or count.";
    return new Array(num+1).join(chr);
}

console.log(repeat_string('a', 4));
console.log(repeat_string('a'));