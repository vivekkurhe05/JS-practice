/**
 * Write a Python program to print the following integers with '*' to the right of the specified width.
 */

// my sol
function pad_end(num) {
    let numStr = num.toString()
    let length=0
    let padStars=""
    while(numStr[length]!=undefined) {
        padStars+="*"
        length++
    }
    return num+padStars
}

console.log(pad_end(3))
console.log(pad_end(123))

// or

// my sol
function pad_end2(num) {
    return num.toString().padEnd(num.toString().length*2, "*")
}

console.log(pad_end2(3))
console.log(pad_end2(123))