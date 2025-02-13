/**
 * Write a JavaScript function that can pad (left, right) a string to get to a determined length.
 * Test Data :
 * console.log(formatted_string('0000',123,'l'));
 * console.log(formatted_string('00000000',123,''));
 * Output :
 * "0123"
 * "12300000"
 */

function formatted_string(str,val,side) {
    val=val.toString()
    if(side) {
        str= str.substring(val.length)+val
    }else{
        str= val+str.substring(val.length)
    }
    return str
}

console.log(formatted_string('0000',123,'l'));
console.log(formatted_string('00000000',123,''));