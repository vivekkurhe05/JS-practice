/**
 * Write a Python program to get the largest number from a list.
 */

// my solution
// O(nlogn) - sorting n times 'divide and conquer'
function max_num_in_list(arr) {
    return arr.sort((a,b) => a-b)[arr.length-1]
}
console.log(max_num_in_list([10, 5, -8, 0]))