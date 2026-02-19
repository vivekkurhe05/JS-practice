/**
 * Write a Python program to remove characters that have odd index values in a given string.
Sample String : abcdef
Expected Result : ace
Sample String : python
Expected Result : pto
 */

function odd_values_string(str) {
    let arr = Array.from(str);
    let oddIndexChars = "";
    for(let i=0; i<str.length; i++) {
        if(i%2!=0) continue;
        else  oddIndexChars+=str[i];
    }
    return oddIndexChars;
}

console.log(odd_values_string("abcdef"))
console.log(odd_values_string("python"))