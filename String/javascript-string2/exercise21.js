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

function repeat_string(str, num){
    if(typeof num === 'undefined') return "Error in string or count."
    return new Array(num+1).join(str)
}

console.log(repeat_string('a', 4));
console.log(repeat_string('a'));