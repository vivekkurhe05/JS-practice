/**
 * Write a JavaScript function that can pad (left, right) a string to get to a determined length.
 * Test Data :
 * console.log(formatted_string('0000',123,'l'));
 * console.log(formatted_string('00000000',123,''));
 * Output :
 * "0123"
 * "12300000"
 */

function formatted_string(str, num, flag) {
    let numStr = String(num)
    if(flag) return numStr.padStart(str.length, str.charAt(0));
    return numStr.padEnd(str.length, str.charAt(0))
}

console.log(formatted_string('0000',123,'l'));
console.log(formatted_string('00000000',123,''));