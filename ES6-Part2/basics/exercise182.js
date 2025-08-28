/***
 * Write a JavaScript program to join all elements of an array into a string and return this string. 
 * Use a separator and an end separator.
 */

// my sol
function join(arr, sep=",", end=sep) {
    let result = "";
    if(end) {
        result = arr.slice(0, arr.length-1).join(sep)+end+arr[arr.length-1];
    }else{
        result = arr.join(sep);
    }

    return result;
}

console.log(join(['pen', 'pineapple', 'apple', 'pen'], ',', '&'));
console.log(join(['pen', 'pineapple', 'apple', 'pen'], ','));
console.log(join(['pen', 'pineapple', 'apple', 'pen']));