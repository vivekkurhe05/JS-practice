/**
 * Write a Python program to get the smallest number from a list.
 */

// my solution
function max_num_in_list(arr) {
    return arr.sort((a,b)=>a-b)[0]
} 
console.log(max_num_in_list([1, 2, -8, 0]))

// or my solution

function max_num_in_list2(arr) {
    var min = arr[0];
    arr.map(function(elem) {
        min = Math.min(min, elem);
        return min;
    });
    result = arr.filter(function(elem) {
        return elem == min;
    });
    return result[0];
} 
console.log(max_num_in_list2([10, 5, -2, 0]))