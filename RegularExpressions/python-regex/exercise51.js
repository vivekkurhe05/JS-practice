/**
 * Write a Python program to insert spaces between words starting with capital letters.
 */

// work on this
function capital_words_spaces(str) {
    const re = /[A-Z][a-z]+/g;
    return str.match(re).join(" ")
}

console.log(capital_words_spaces("Python"));
console.log(capital_words_spaces("PythonExercises"));
console.log(capital_words_spaces("PythonExercisesPracticeSolution"));