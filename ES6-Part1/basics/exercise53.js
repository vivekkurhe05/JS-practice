/**
 * Write a JavaScript program to initialize a two-dimensional array of given size and value.
 */

// my sol
function initialize_2D_Array(numOfSubArrays, arrSize, el) {
    let arr = [];

    for(let i=0; i<numOfSubArrays;i++) {
        let subArr = [];
        arr.push(subArr);
    }
    arr.forEach(subArr => {
        while(subArr.length != arrSize) {

            subArr.push(el);
        }
    });

    return arr;
}

// Test cases
console.log(initialize_2D_Array(2, 2, 0)); // Output: [ [ 0, 0 ], [ 0, 0 ] ]
console.log(initialize_2D_Array(3, 3, 3)); // Output: [ [ 3, 3, 3 ], [ 3, 3, 3 ], [ 3, 3, 3 ] ]


// w3resource sol
function initialize_2D_Array2(numOfSubArrays, arrSize, el) {
    return Array.from({length: numOfSubArrays}).map(() => Array.from({length: arrSize}).fill(el))
}

console.log(initialize_2D_Array2(2, 2, 0)); // Output: [ [ 0, 0 ], [ 0, 0 ] ]
console.log(initialize_2D_Array2(3, 3, 3)); // Output: [ [ 3, 3, 3 ], [ 3, 3, 3 ], [ 3, 3, 3 ] ]