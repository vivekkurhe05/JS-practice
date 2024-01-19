/**
 * Write a Python program to insert space before every capital letter appears in a given word.
Sample Data:
("PythonExercises") -> "Python Exercises"
("Python") -> "Python"
("PythonExercisesPracticeSolution") -> "Python Exercises Practice Solution"
 */

// my solution
function insert_space(str) {
    let regex = /\B(?=[A-Z])/g
    return str.replace(regex, " ")
}

console.log(insert_space("PythonExercises"))
console.log(insert_space("Python"))
console.log(insert_space("PythonExercisesPracticeSolution"))