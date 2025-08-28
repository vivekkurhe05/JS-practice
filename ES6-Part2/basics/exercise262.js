/**
 * Write a JavaScript program to create a base-64 encoded ASCII string from a 
 * String object in which each character in the string is treated as a byte of binary data.
 */

// w3resource sol
function btoa1(str) {
    return new Buffer.from(str, 'binary').toString('base64');
}

console.log(btoa1('foobar'));

// or

console.log(btoa('foobar'));