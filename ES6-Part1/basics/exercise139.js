/**
 * Write a JavaScript program to split a multiline string into an array of lines.
 */

// w3resource sol
function splitLines(str) {
    const re = /\r?\n/g;
    return str.split(re);
}

console.log('Original string:');
console.log('This\nis a\nmultiline\nstring.\n');
console.log(splitLines('This\nis a\nmultiline\nstring.\n'));