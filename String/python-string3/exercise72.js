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

// my solution
function remove_all_chars_except(str, char) {
    let newStr=""
    for(let i=0;i<str.length;i++){
        if(str[i] !== char) continue
        else newStr+=str[i]
    }
    return newStr
}

console.log(remove_all_chars_except("Python Exercises","P"))
console.log(remove_all_chars_except("google","g"))
console.log(remove_all_chars_except("exercises","e"))

// or
// my solution
function remove_all_chars_except2(str, char) {
    let re = new RegExp("[^"+char+"]","g")
    return str.replace(re,"")
}

console.log(remove_all_chars_except2("Python Exercises","P"))
console.log(remove_all_chars_except2("google","g"))
console.log(remove_all_chars_except2("exercises","e"))