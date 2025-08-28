/**
 * Write a JavaScript program to decode a string of data encoded using base-64 encoding.
 */

// w3resource sol
function atob1(str) {
    return new Buffer.from(str, 'base64').toString('binary');
}

console.log(atob1('Zm9vYmFy')); 

// or

console.log(atob('Zm9vYmFy'))