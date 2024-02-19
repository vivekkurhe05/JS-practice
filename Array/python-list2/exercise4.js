/**
 * Write a Python program to get the smallest number from a list.
 */

// my solution
// O(nlogn)
function min_num_in_list(arr){
    return arr.sort((a,b)=>a-b)[0]
}

console.log(min_num_in_list([1, 2, -8, 0]))
