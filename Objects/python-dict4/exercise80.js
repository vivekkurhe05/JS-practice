/**
 * Write a Python program to find the key of the maximum value in a dictionary.
Sample Output:
Original dictionary elements:
{'Theodore': 19, 'Roxanne': 22, 'Mathew': 21, 'Betty': 20}
Finds the key of the maximum and minimum value of the said dictionary:
('Roxanne', 'Theodore')
 */

// my solution
let obj = {'Theodore': 19, 'Roxanne': 22, 'Mathew': 21, 'Betty': 20}
let k=[]
let arr=Object.entries(obj)
arr.sort((a,b)=>b[1]-a[1])
k.push(arr[0][0], arr[arr.length-1][0])
console.log(k)