/**
 * Write a JavaScript program to get the n minimum elements from the provided array.
If n is greater than or equal to the provided array's length, return the original array (sorted in ascending order).
 */

function minN(arr, n=1) {
    let sortedArr = arr.sort((a,b) => a-b);
    return sortedArr.slice(0,n);
}

console.log(minN([1, 2, 3])); // [1]
console.log(minN([1, 2, 3], 2)); // [1,2]