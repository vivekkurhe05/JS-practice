/**
 * Write a Python program to split a string at uppercase letters.
 */

// my solution
let text = "PythonTutorialAndExercises";
const re = /[A-Z]/g
console.log(text.split(re))
