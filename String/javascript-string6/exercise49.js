/**
 * Write a JavaScript function to get a guid (an acronym for 'Globally Unique Identifier'?) 
 * of the specified length, or 32 by default.
 */

function guid(len) {
    let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let size = len || 32;
    let arr = [];

    for(let i=0; i<size; i++) {
        arr[i] = chars.charAt(Math.floor(Math.random() * chars.length));
    }

    return arr.join("");
}

console.log(guid());
console.log(guid(15));