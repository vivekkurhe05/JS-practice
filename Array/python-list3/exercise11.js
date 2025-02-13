/**
 * Write a Python function that takes two lists and returns True if they have at least one common member.
 */

// my sol
function common_data(list1, list2) {
    return list1.some(num => list2.includes(num))
}

console.log(common_data([1,2,3,4,5], [5,6,7,8,9]))
console.log(common_data([1,2,3,4,5], [6,7,8,9]))