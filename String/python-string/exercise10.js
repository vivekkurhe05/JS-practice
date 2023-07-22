/**
 * Write a Python program to change a given string to a newly
string where the first and last chars have been exchanged.
Sample String : abcd
Expected Result : dbca
 */

// my solution
function change_string(str) {
    return str.at(-1)+str.substring(1,str.length-1)+str.charAt(0)
}

console.log(change_string("abcd"))