/**
 * Write a Python program to get a list, 
 * sorted in increasing order by the last element in each tuple from a given list of non-empty tuples.
 * Sample List : [(2, 5), (1, 2), (4, 4), (2, 3), (2, 1)]
Expected Result : [(2, 1), (1, 2), (2, 3), (4, 4), (2, 5)]
 */

// my solution
function sort_list_last(arr) {
    return arr.sort((a,b) => a[1]-b[1])
}
console.log(sort_list_last([[2, 5], [1, 2], [4, 4], [2, 3], [2, 1]]))