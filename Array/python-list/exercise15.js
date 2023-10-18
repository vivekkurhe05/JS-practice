/**
 * Write a Python program to shuffle and print a specified list.
 */

// my solution
let color = ['Red', 'Green', 'White', 'Black', 'Pink', 'Yellow']
let deleteElem=color.pop(color.length-1)
color.unshift(deleteElem)
console.log(color)