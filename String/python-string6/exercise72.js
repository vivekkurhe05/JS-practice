/**
 * Write a Python program to remove all characters except a specified character from a given string.
Original string
Python Exercises
Remove all characters except P in the said string:
P
Original string
google
Remove all characters except g in the said string:
gg
Original string
exercises
Remove all characters except e in the said string:
eee
 */

function remove_all_chars_except(str, chr) {
    const re = new RegExp("[^"+chr+"]","g");
    return str.replace(re,"");
}

console.log(remove_all_chars_except("Python Exercises","P"))
console.log(remove_all_chars_except("google","g"))
console.log(remove_all_chars_except("exercises","e"))