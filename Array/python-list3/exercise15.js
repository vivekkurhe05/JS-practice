/**
 * Write a Python program to shuffle and print a specified list.
 */


let color = ['Red', 'Green', 'White', 'Black', 'Pink', 'Yellow']
let deletedEle = color.pop(color.length-1)
color.unshift(deletedEle)
console.log(color)
