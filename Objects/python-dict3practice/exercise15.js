/**
 * Write a Python program to get the maximum and minimum values of a dictionary.
 */

// my solution
let my_dict = {'x':500, 'y':5874, 'z': 560}

let arr = Object.entries(my_dict)

arr = arr.sort((a,b) => a[1] - b[1])
console.log(`Minimum value : ${arr[0][1]}`)
console.log(`Maximum value : ${arr[arr.length-1][1]}`)