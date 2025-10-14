/**
 * Write a Python program to find the maximum length of consecutive 0's in a given binary string.
str1 = '111000010000110'
str1 = '111000111'
 */

function max_consecutive_0(str) {
    let arr = str.split("1");
    return arr.filter(el => el != "").sort((a,b)=>b.length-a.length)[0];
}

console.log(max_consecutive_0("111000010000110"))
console.log(max_consecutive_0("11100011100000"))