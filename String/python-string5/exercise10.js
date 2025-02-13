/**
 * Write a Python program to change a given string to a newly
string where the first and last chars have been exchanged.
Sample String : abcd
Expected Result : dbca
 */

function change_string(str) {
    return str[str.length-1]+str.substr(1,2)+str[0]
}

console.log(change_string("abcd"))