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

// my sol
function repeat_string(str, num) {
    if(num===undefined) {
        return "Error in string or count"
    }else{
        return str.repeat(num)
    }
    
}

console.log(repeat_string('a', 4));
console.log(repeat_string('a'));

// or

// my sol
function repeat_string2(str, num) {
    if(num===undefined) {
        return "Error in string or count"
    }else{
        return new Array(num+1).join(str)
    }
    
}

console.log(repeat_string2('a', 4));
console.log(repeat_string2('a'));