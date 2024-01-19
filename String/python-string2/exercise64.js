/**
 * Write a Python program to find the maximum length of consecutive 0's in a given binary string.
str1 = '111000010000110'
str1 = '111000111'
 */

// my solution
function max_consecutive_0(str) {
    let arr = str.trim().split("1")
    arr = arr.filter(el => el.length!=0)
    let max = arr[0].length
    arr.map(el => {
        max = Math.max(el.length, max)
        return max
    })

    return arr.filter(el => {
        return el.length === max
    })[0].length
}

console.log(max_consecutive_0("111000010000110"))
console.log(max_consecutive_0("111000111000000"))