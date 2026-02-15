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

function repeat_string(input, num) {
    if(num === undefined) return "Error in string or count"
    return input.repeat(num);
}


console.log(repeat_string('a', 4));
console.log(repeat_string('a'));

// or

function repeat_string2(input, num) {
    if(num === undefined) return "Error in string or count"
    while(input.length < num) {
        input+=input;
    }

    return input;
}


console.log(repeat_string2('a', 4));
console.log(repeat_string2('a'));