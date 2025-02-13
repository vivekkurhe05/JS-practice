/**
 * Write a Python function to reverse a string if its length is a multiple of 4.
 */

// my sol
function reverse_string(str) {
    let res=""
    if(str.length%4==0) {
        res=Array.from(str).reverse().join("")
    }else{
        res=str
    }
    return res
}


console.log(reverse_string('abcd'))
console.log(reverse_string('python'))