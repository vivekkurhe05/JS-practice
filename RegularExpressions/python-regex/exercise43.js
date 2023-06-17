/**
 * Write a Python program to split a string at uppercase letters.
 */

// work on this
let text = "PythonTutorialAndExercises";
const re = /[A-Z][a-z]*/g;
const arr = text.match(re)
console.log(arr)