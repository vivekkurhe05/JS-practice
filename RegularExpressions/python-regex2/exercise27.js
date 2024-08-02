/*
Write a Python program to separate and print the numbers of a given string.
*/

// my solution
function print_num(str){
    const re = /\d+/g
    return str.match(re)
}

let text = "Ten 10, Twenty 20, Thirty 30";
console.log(print_num(text));