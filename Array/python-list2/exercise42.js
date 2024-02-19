/**
 * Write a Python program to find missing and additional values in two lists.
 */

// my solution
let list1 = ['a','b','c','d','e','f']
let list2 = ['d','e','f','g','h']

console.log(list1.filter(el => !list2.includes(el)))
console.log(list2.filter(el => !list1.includes(el)))