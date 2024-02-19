/**
 * Write a Python program to count the number of elements in a list within a specified range.
 * output:
 * 6, 5
 */

// my solution
function count_range_in_list(arr, min, max) {
    return arr.filter(el => el>=min && el<=max).length
}

console.log(count_range_in_list([10,20,30,40,40,40,70,80,99], 40, 100))
console.log(count_range_in_list(['a','b','c','d','e','f'], 'a', 'e'))