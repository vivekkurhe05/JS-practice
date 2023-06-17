/**
 * Write a python program to convert camel case string to snake case string.
 */

// my solution
function camel_to_snake(str) {
    const re = /[A-Z]/g;
    str = str[0].toLowerCase()+str.slice(1);
    return str.replace(re, (chr) => {
        return "_"+chr.toLowerCase();
    })
}

console.log(camel_to_snake("PythonExercisesWorld"));