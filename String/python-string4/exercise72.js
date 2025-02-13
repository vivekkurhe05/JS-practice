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

// my sol
function remove_all_chars_except(str, char) {
    let fstr=""
    for(let i=0;i<str.length;i++) {
    if(str[i] !== char){
        continue
    }else{
        fstr+=str[i]
    }
    
}
return fstr
}

console.log(remove_all_chars_except("Python Exercises","P"))
console.log(remove_all_chars_except("google","g"))
console.log(remove_all_chars_except("exercises","e"))