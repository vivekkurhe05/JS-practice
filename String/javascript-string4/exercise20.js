/**
 * Write a JavaScript function that can pad (left, right) a string to get to a determined length.
 * Test Data :
 * console.log(formatted_string('0000',123,'l'));
 * console.log(formatted_string('00000000',123,''));
 * Output :
 * "0123"
 * "12300000"
 */

// my sol
function formatted_string(str, num, side) {
    let len = str.length-num.toString().length
    let newStr=""
    if(side==="l"){
        newStr=str.substring(0,len)+num
    }else{
        newStr=num+str.substring(0,len)
    }
    
    return newStr
}

console.log(formatted_string('0000',123,'l'));
console.log(formatted_string('00000000',123,''));