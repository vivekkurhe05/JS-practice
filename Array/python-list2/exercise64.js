/**
 * Write a Python program to iterate over two lists simultaneously.
 */

let num = [1, 2, 3]
let color = ['red', 'white', 'black']

num.forEach((num,i) => {
    console.log(num+" "+color[i])
})