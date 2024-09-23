/**
 * Write a Python program to create a dictionary of keys x, y, and z where each key has as value a list 
 * from 11-20, 21-30, and 31-40 respectively. Access the fifth value of each key from the dictionary.
 */

// my solution
const obj = {}

let list1 = [], list2=[], list3=[]
for(let i=11;i<21;i++) list1.push(i)
for(let i=21;i<31;i++) list2.push(i)
for(let i=31;i<41;i++) list3.push(i)

obj['x'] = list1
obj['y'] = list2
obj['z'] = list3

console.log(obj)