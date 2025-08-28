/**
 * Write a JavaScript program to initialize an array containing the numbers in the specified range 
 * (in reverse) where start and end are inclusive of their common difference step.
 */

// my sol
function initializeArrayWithRangeRight(from, to=0, leap=1) {
    let arr = [];
    for(let i=from; i>=to; i-=leap) {
        arr.push(i);
    }

    return arr;
}

console.log(initializeArrayWithRangeRight(5));
console.log(initializeArrayWithRangeRight(7, 3));
console.log(initializeArrayWithRangeRight(9, 0, 2));