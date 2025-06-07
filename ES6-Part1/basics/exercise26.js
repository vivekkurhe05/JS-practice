/**
 * Write a JavaScript program that returns true if the string is 
 * y/yes or false if the string is n/no.
 */

// my sol
function yes_No(str, def=false) {
    const re = /(Y|Yes)/gi;
    if(str.match(re) || def) {
        return true;
    }else {
        return false;
    }
}

console.log(yes_No('Y')); // true
console.log(yes_No('yes')); // true
console.log(yes_No('No')); // false
console.log(yes_No('Foo', true)); // true (default value)