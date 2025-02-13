/**
 * Write a Python program to print the following integers with zeros
to the left of the specified width.
 */

// my sol
function pad_start(num) {
    let numStr = num.toString()
    let padZeros = ""
    let length=0
    while(numStr[length]!=undefined) {
        padZeros+="0"
        length++
    }
    return padZeros+num
}

console.log(pad_start(3))
console.log(pad_start(123))

// or

function pad_start2(input) {
    return input.toString().padStart(input.toString().length*2, "0")
}

console.log(pad_start2(3))
console.log(pad_start2(123))