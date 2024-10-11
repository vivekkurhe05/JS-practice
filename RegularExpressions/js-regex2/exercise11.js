/**
 * Write a JavaScript function to check whether a given value is time string or not.
 */

// my solution
function is_timeString(str){
    const re = /([0-2][0-9]|2[3]):[0-5][0-9]:[0-5][0-9]/g
    return re.test(str)
}

console.log(is_timeString("03:35:10")); // true

console.log(is_timeString("23:35:10")); // true

console.log(is_timeString("90:90:90")); // false