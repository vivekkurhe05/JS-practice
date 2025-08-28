/**
 * Write a JavaScript program to check if the provided argument is an array (i.e. iterable).
 */

// my sol
function isArrayLike(val) {
    try {
        let arr = [...val]
        if(Array.isArray(arr)) return true;
    }catch(e) {
        return false;
    }
}

// console.log(isArrayLike(document.querySelectorAll('.className'))); // true (document.querySelectorAll('.className') returns a NodeList which is array-like)
console.log(isArrayLike('abc')); // true ('abc' is a string which is array-like)
console.log(isArrayLike(null)); // false (null is not array-like)

// or

function isArrayLike2(val) {
    if(val === null || val === undefined) return false;
    let arr = Array.prototype.slice.call(val);
    return Array.isArray(arr);
}

// console.log(isArrayLike2(document.querySelectorAll('.className'))); // true (document.querySelectorAll('.className') returns a NodeList which is array-like)
console.log(isArrayLike2('abc')); // true ('abc' is a string which is array-like)
console.log(isArrayLike2(null)); // false (null is not array-like)