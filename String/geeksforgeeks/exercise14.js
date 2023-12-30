/**
 * How to globally replace a forward slash in a JavaScript string ?
 */

// my solution
function remove_slashes(str) {
    let re = /[\/]/g;
    return str.replace(re, "")
}

console.log(remove_slashes('string / with some // slashes /'));