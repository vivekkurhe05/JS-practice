/**
 * Write a Python program to count the frequency of a dictionary.
Original Dictionary:
{'V': 10, 'VI': 10, 'VII': 40, 'VIII': 20, 'IX': 70, 'X': 80, 'XI': 40, 'XII': 20}
Count the frequency of the said dictionary:
Counter({10: 2, 40: 2, 20: 2, 70: 1, 80: 1})
 */

// my solution

let obj = {
    'V': 10, 
    'VI': 10, 
    'VII': 40, 
    'VIII': 20, 
    'IX': 70, 
    'X': 80, 
    'XI': 40, 
    'XII': 20
}
let obj2 = {}
let arr = Object.values(obj)
let count
for(let i=0; i<arr.length; i++) {
    count = 0
    let index = arr.indexOf(arr[i])
    while(index != -1) {
    count++
    index = arr.indexOf(arr[i], index+1)
    obj2[arr[i]] = count
    }
}
console.log(obj2)