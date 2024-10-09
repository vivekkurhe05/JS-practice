/**
 * Write a python program to convert snake case string to camel case string.
 */

// my solution
function snake_to_camel(str){
    const re = /_/g
    return str.replace(re, " ").replace(/\b[a-z]/g, (chr)=> chr.toUpperCase())
}

console.log(snake_to_camel("python_exercises"));