/**
 * Write a JavaScript program that returns true if the given string is an absolute URL, false otherwise.
 */

// my sol
function isAbsoluteURL(str) {
    const re = /[a-z]+:/gi;
    return re.test(str);
}

console.log(isAbsoluteURL('https://google.com')); // true (starts with 'https://')
console.log(isAbsoluteURL('ftp://www.myserver.net')); // true (starts with 'ftp://')
console.log(isAbsoluteURL('/foo/bar')); // false (does not start with a protocol)