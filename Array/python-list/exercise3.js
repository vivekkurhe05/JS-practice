/**
 * Write a Python program to get the largest number from a list.
 */

// my solution
function max_num_in_list(arr) {
    return arr.sort((a,b)=>a-b)[arr.length-1]
} 
console.log(max_num_in_list([1, 2, -8, 0]))

// or my solution

function max_num_in_list2(arr) {
    var max = arr[0];
    arr.map(function(elem) {
        max = Math.max(max, elem);
        return max;
    });
    result = arr.filter(function(elem) {
        return elem == max;
    });
    return result[0];
} 
console.log(max_num_in_list2([10, 5, -8, 0]))