/**
 * Write a JavaScript program to check whether a value is object-like. 
 * Check whether the provided value is not null and its typeof is equal to 'object'.
 */

// my sol
function isObjectLike(val) {
    return typeof val === 'object' && val !== null;
} 

console.log(isObjectLike({}));          
console.log(isObjectLike([1, 2, 3]));    
console.log(isObjectLike(x => x));      
console.log(isObjectLike(null));