/**
 * Write a JavaScript program to create an array out of the arrays by creating 
 * each possible pair from the arrays.
 */

// my sol
function xProd(arr1, arr2) {
    let super_arr = [];
    for(let i=0;i<arr1.length;i++) {
        for(let j=0;j<arr2.length; j++) {
            let sub_arr = [];
            sub_arr.push(arr1[i],arr2[j]);
            super_arr.push(sub_arr);
        }
    }

    return super_arr;
}

console.log(xProd([1, 2], ['a', 'b'])); // [[1, 'a'], [1, 'b'], [2, 'a'], [2, 'b']]
console.log(xProd([1, 2], [1, 2])); // [[1, 1], [1, 2], [2, 1], [2, 2]]
console.log(xProd(['a', 'b'], ['a', 'b'])); // [['a', 'a'], ['a', 'b'], ['b', 'a'], ['b', 'b']]