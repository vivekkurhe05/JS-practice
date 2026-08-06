/**
 * Write a Python program to remove characters that have odd index values in a given string.
Sample String : abcdef
Expected Result : ace
Sample String : python
Expected Result : pto
 */

function odd_values_string(str) {
    let result = "";
    for(let i=0;i<str.length;i++) {
        if(i%2 === 0) {
            result+=str[i]
        }
    }
    return result;
}

console.log(odd_values_string("abcdef"))
console.log(odd_values_string("python"))