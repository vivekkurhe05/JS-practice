/**
 * Write a Python function that takes two lists and returns True if they have at least one common member.
 */

// my solution
function common_data(arr1, arr2) {
    return arr1.some(el => arr2.includes(el))
}

console.log(common_data([1,2,3,4,5], [5,6,7,8,9]))
console.log(common_data([1,2,3,4,5], [6,7,8,9]))