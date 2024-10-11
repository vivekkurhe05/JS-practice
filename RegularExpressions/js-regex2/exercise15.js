/**
 * Write a JavaScript function to check whether a given value is a social security number or not.
 * 
 * It is a 9 digit in the format AAA-GG-SSSS where AAA is the area no,GG is the group no, SSSS is the serial no
 * Group no range from 01 to 99
 * Serial number run from 0001 to 9999
 */

// my solution
function is_socialSecurity_Number(str){
    const re = /^\d{3}-[0-9]{2}-\d{4}$/g
    return re.test(str)
}

console.log(is_socialSecurity_Number("019-90-5680"));

console.log(is_socialSecurity_Number("K8V-3Y1"));