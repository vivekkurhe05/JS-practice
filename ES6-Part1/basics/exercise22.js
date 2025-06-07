/**
 * Write a JavaScript program to filter out non-unique values in an array.
 */

// my sol
function filter_Non_Unique(arr) {
    return arr.filter((el) => arr.indexOf(el) === arr.lastIndexOf(el))
}

console.log(filter_Non_Unique([1, 2, 2, 3, 4, 4, 5]));  
console.log(filter_Non_Unique([1, 2, 3, 4]));