/**
 * Write a JavaScript program to extract values at specified indexes from a specified array.
 */

function pull_at_Index(arr, indexes) {
    const pulledArr = [];
    for(let i=0;i<indexes.length;i++) {
        pulledArr.push(arr[indexes[i]])
    }
    return pulledArr;
}

let arra1 = ['a', 'b', 'c', 'd', 'e', 'f'];
console.log(pull_at_Index(arra1, [1, 3]));
let arra2 =  [1, 2, 3, 4, 5, 6, 7];
console.log(pull_at_Index(arra2, [4]));