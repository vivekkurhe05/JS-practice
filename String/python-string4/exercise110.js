/**
 * Write a Python program to insert space before every capital letter appears in a given word.
Sample Data:
("PythonExercises") -> "Python Exercises"
("Python") -> "Python"
("PythonExercisesPracticeSolution") -> "Python Exercises Practice Solution"
 */

// my sol
function insert_space(str) {
    const re = /\B(?=[A-Z])/g
    return str.replace(re, " ")
}

console.log(insert_space("PythonExercises"))
console.log(insert_space("Python"))
console.log(insert_space("PythonExercisesPracticeSolution"))