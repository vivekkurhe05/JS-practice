/**
 * Write a Python program to sort Counter by value.
 * Sample data : {'Math':81, 'Physics':83, 'Chemistry':87}
Expected data: [('Chemistry', 87), ('Physics', 83), ('Math', 81)]
 */

let counter = {'Math':81, 'Physics':83, 'Chemistry':87}
let arr = Object.entries(counter)
arr.sort((a,b) =>b[1]-a[1])
console.log(arr)