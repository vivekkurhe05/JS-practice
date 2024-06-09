/**
 * Write a JavaScript function to get unique guid 
 * (an acronym for 'Globally Unique Identifier?) of the specified length, or 32 by default.
 * Test Data :
 * console.log(guid());
 * console.log(guid(15));
 * "hRYilcoV7ajokxsYFl1dba41AyE0rUQR"
 * "b7pwBqrZwqaDrex"
 */


function guid(len=32){

    let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    let arr = []
    for(let i=0; i<len; i++) {
        arr[i] = chars.charAt(Math.floor(Math.random() * chars.length))
    }
    return arr.join("")
}

console.log(guid());
console.log(guid(15));