/**
 * Write a Python program to change a given string to a newly
string where the first and last chars have been exchanged.
Sample String : abcd
Expected Result : dbca
 */

// my sol
function change_string(str) {
    let firstChar = str.charAt(0)
    let lastChar = str.at(-1)
    return lastChar+str.substring(1,3)+firstChar
}

console.log(change_string("abcd"))