/**
 * Write a Python program to remove characters that have odd index values in a given string.
Sample String : abcdef
Expected Result : ace
Sample String : python
Expected Result : pto
 */

// my solution
function odd_values_string(str) {
    let arr = str.split("")
    return arr.filter((el, i) => {
        if(i%2 != 0) return ""
        else return el
    }).join("")
}

console.log(odd_values_string("abcdef"))
console.log(odd_values_string("python"))