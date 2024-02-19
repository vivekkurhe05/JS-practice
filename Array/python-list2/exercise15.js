/**
 * Write a Python program to shuffle and print a specified list.
 */

// my solution
let color = ['Red', 'Green', 'White', 'Black', 'Pink', 'Yellow']
let deleted_color = color.pop()
color.unshift(deleted_color)
console.log(color)