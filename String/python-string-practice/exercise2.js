/**
 * Write a Python program to calculate the length of a string.
 */

// my solution
function size(str) {
    let length = 0

    while(str[length]!=undefined){
        length++
    }
    return length
}

console.log(size("Vivek"))