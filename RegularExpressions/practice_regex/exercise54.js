/**
 * python-regex - exercise54
 * 
 * Write a Python program to concatenate the consecutive numbers in a given string.
 * 
Original string:
Enter at 1 20 Kearny Street. The security desk can direct you to floor 1 6. Please have your identification ready.
After concatenating the consecutive numbers in the said string:
Enter at 120 Kearny Street. The security desk can direct you to floor 16. Please have your identification ready.
 */

// my solution
function concat_num(str){
    const re = /(?<=\d)\s+(?=\d)/g
    return str.replace(re,"")
}

let str = 'Enter at 1 20 Kearny Street. The security desk can direct you to floor 1 6. Please have your identification ready.'

console.log(concat_num(str))