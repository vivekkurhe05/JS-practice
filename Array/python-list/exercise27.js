/**
 * Write a Python program to find the second smallest number in a list.
 */

function second_smallest(arr) {
    return arr.sort((a,b)=>a-b)[1]
}

console.log(second_smallest([1, 2, -8, -2, 0, -2]))
console.log(second_smallest([1, 1, 0, 0, 2, -2, -2]))
console.log(second_smallest([1, 1, 1, 0, 0, 0, 2, -2, -2]))
console.log(second_smallest([2,2]))
console.log(second_smallest([2]))