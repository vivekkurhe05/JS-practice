/**
 * Write a Python program to find the list in a list of lists whose sum of elements is the highest.
Sample lists: [1,2,3], [4,5,6], [10,11,12], [7,8,9]
Expected Output: [10, 11, 12]
 */

// my solution
let list = [[1,2,3], [4,5,6], [10,11,12], [7,8,9]]

list = list.sort((arr1, arr2) => arr1.reduce((acc,val) => acc+val) - arr2.reduce((acc,val)=>acc+val))[list.length-1]
console.log(list)