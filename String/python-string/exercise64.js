/**
 * Write a Python program to find the maximum length of consecutive 0's in a given binary string.
str1 = '111000010000110'
str1 = '111000111'
 */

// my solution
function max_consecutive_0(str) {
    let arr = str.split("1")
    arr = arr.filter(el=> el !== "")
    arr = arr.map(el => el.length)
    return arr.sort((a,b)=>b-a)[0]
}

console.log(max_consecutive_0("111000010000110"))
console.log(max_consecutive_0("111000111"))