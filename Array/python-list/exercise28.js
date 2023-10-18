/**
 * Write a Python program to find the second largest number in a list.
 */

function second_largest(arr) {
    return arr.sort((a,b)=>a-b)[arr.length-2]
}
console.log(second_largest([1,2,3,4,4]))
console.log(second_largest([1, 1, 1, 0, 0, 0, 2, -2, -2]))
console.log(second_largest([2,2]))
console.log(second_largest([1]))