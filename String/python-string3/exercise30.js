/** 
 * Write a Python program to print the following numbers up to 2 decimal places.
*/

// my solution
function upto_2_decimal_places(num){
    return parseFloat(num.toFixed(2))
}


console.log(upto_2_decimal_places(3.1415926))
console.log(upto_2_decimal_places(12.9999))