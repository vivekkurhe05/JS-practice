/**
 * Write a Python program to find the list in a list of lists whose sum of elements is the highest.
Sample lists: [1,2,3], [4,5,6], [10,11,12], [7,8,9]
Expected Output: [10, 11, 12]
 */

// my solution
let list = [[1,2,3], [4,5,6], [10,11,12], [7,8,9]]

console.log(list.sort((a,b) =>a.reduce((acc,cv)=>{return acc+cv},0) - b.reduce((acc, cv)=> {return acc+cv}, 0))[list.length-1])