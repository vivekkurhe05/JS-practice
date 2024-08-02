/**
 * Write a Python program to change a given string to a newly
string where the first and last chars have been exchanged.
Sample String : abcd
Expected Result : dbca
 */

// my solution
function change_string(str){
    let first = str[0]
    let last = str.at(-1)
    return last + str.substring(1,str.length-1) + first
}

console.log(change_string("abcd"))