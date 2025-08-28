/**
 * Write a JavaScript program to get all val indices in an array. If val never occurs, return [].
 */

// my sol
function indexOfAll(arr, val) {
    let indices = [];

    for(let i=0;i<arr.length;i++) {
        if(arr[i] === val) indices.push(i);
    }

    if(indices.length ===0) return [];
    return indices;
}

console.log(indexOfAll([1, 2, 3, 1, 2, 3], 1));
console.log(indexOfAll([1, 2, 3], 4));