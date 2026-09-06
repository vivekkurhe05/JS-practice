/**
 * Write a python program to convert snake case string to camel case string.
 */

// my solution
function snake_to_camel(str){
    return str.replace(/(^[a-z])|((?<=\_)[a-z])/g,(chr)=> chr.toUpperCase()).replace(/\_/g,"");
}

console.log(snake_to_camel("python_exercises"));