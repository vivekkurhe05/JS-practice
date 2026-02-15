/**
 * Write a JavaScript function that can pad (left, right) a string to get to a determined length.
 * Test Data :
 * console.log(formatted_string('0000',123,'l'));
 * console.log(formatted_string('00000000',123,''));
 * Output :
 * "0123"
 * "12300000"
 */

function formatted_string(zeros, num, pos) {
    num = num.toString();
   
    while(num.length < zeros.length) {
        if(pos === "l") {

            num = "0"+num;
        }else {
            num+="0"
        }
    }

    return num;
}


console.log(formatted_string('0000',123,'l'));
console.log(formatted_string('00000000',123,''));

// or

function formatted_string2(zeros, num, pos) {
    num = num.toString();
   
    if(pos === "l") {
        return zeros.substring(num.length)+num;
    }else {
        return num+zeros.substring(num.length)
    }
}


console.log(formatted_string2('0000',123,'l'));
console.log(formatted_string2('00000000',123,''));