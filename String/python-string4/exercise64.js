/**
 * Write a Python program to find the maximum length of consecutive 0's in a given binary string.
str1 = '111000010000110'
str1 = '111000111'
 */

// my sol
function max_consecutive_0(str) {
    let arr= str.split("1").filter(el=>el.length!=0)
    let max = arr[0].length
    arr.map(el => {
        max = Math.max(max, el.length)
    })
    return max
}

console.log(max_consecutive_0("111000010000110"))
console.log(max_consecutive_0("111000111000000"))