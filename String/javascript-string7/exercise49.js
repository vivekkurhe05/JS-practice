/**
 * Write a JavaScript function to get unique guid 
 * (an acronym for 'Globally Unique Identifier?) of the specified length, or 32 by default.
 * Test Data :
 * console.log(guid());
 * console.log(guid(15));
 * "hRYilcoV7ajokxsYFl1dba41AyE0rUQR"
 * "b7pwBqrZwqaDrex"
 */

function guid(len) {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    len = len || 32;
    let arr = [];

    for(let i=0; i<len; i++) {
        arr[i] = chars.charAt(Math.random() * chars.length)
    }

    return arr.join("");
}

console.log(guid());
console.log(guid(15));