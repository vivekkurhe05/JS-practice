/**
 * Write a JavaScript program that work as a trim function (string) using regular expression.
 */

// my solution
function Trim(str){
    const re = /^\s+|\s+$/g
    return str.replace(re,"")
}
console.log(Trim(" w3resource "));