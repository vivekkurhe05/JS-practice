/**
 * Write a python program to convert camel case string to snake case string.
 */

// my solution
function camel_to_snake(str) {
    const re = /\B(?=[A-Z])/g
    return str.replaceAll(re,"_").toLowerCase()
}

console.log(camel_to_snake("PythonExercisesWorld"));