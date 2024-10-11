/**
 * Write a JavaScript program to search a date within a string.

Sample string:

"Albert Einstein was born in Ulm, on 14/03/1879."
 */

// my solution
function is_dateString(str){
    const re = /^[01][0-2]\/([0-2][1-9])|(3[01])\/\d{4}/g
    return re.test(str)
}

console.log(is_dateString("01/01/2015"));

console.log(is_dateString("01/22/2015"));

console.log(is_dateString("32/01/2015"));

// console.log(is_dateString("Albert Einstein was born in Ulm, on 14/03/1879."))