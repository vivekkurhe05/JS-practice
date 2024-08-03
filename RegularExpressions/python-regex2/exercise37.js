/**
 * Write a python program to convert snake case string to camel case string.
 */

// my solution
function snake_to_camel(str){
    const re = /^[a-z]|\_.(?=[a-z])/g
    return str.replace(re, function(chr) {
        return chr.toUpperCase()
    }).replace("_", "")
}

console.log(snake_to_camel("python_exercises"));