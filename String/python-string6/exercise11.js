/**
 * Write a Python program to remove characters that have odd index values in a given string.
Sample String : abcdef
Expected Result : ace
Sample String : python
Expected Result : pto
 */

function odd_values_string(str) {
    let arr = Array.from(str);
    return arr.filter((el,i) => i%2==0).join("")
}

console.log(odd_values_string("abcdef"))
console.log(odd_values_string("python"))