/**
 * Write a Python program to change a given string to a newly
string where the first and last chars have been exchanged.
Sample String : abcd
Expected Result : dbca
 */

function change_string(str) {
    let firstChar = str.charAt(0);
    let lastChar = str.charAt(str.length-1);
    return lastChar.concat(str.substring(1,str.length-1), firstChar);
}

console.log(change_string("abcd"))