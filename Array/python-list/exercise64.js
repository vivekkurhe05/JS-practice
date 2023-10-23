/**
 * Write a Python program to iterate over two lists simultaneously.
 */

// my solution
let num = [1, 2, 3]
let color = ['red', 'white', 'black']

num.forEach((el, i) => console.log(el, color[i]))