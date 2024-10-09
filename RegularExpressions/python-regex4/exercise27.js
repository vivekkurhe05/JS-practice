/*
Write a Python program to separate and print the numbers of a given string.
*/

// my solution
function print_num(str){
    const re = /\d+/g
    return str.match(re)
}

let text = "Ten 10, Twenty 20, Thirty 30";
print_num(text).forEach(el => console.log(el))