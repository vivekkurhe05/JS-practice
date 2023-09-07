/**
 * Write a Python program to insert space before every capital letter appears in a given word.
Sample Data:
("PythonExercises") -> "Python Exercises"
("Python") -> "Python"
("PythonExercisesPracticeSolution") -> "Python Exercises Practice Solution"
 */

// my solution
function insert_space(str) {
    let str2=""
    for(let i=0; i<str.length; i++) {
        if(str[i] === str[i].toUpperCase() && i!=0) str2+=" "+str[i]
        else str2+=str[i]
    }

    return str2
}
console.log(insert_space("PythonExercises"))
console.log(insert_space("Python"))
console.log(insert_space("PythonExercisesPracticeSolution"))

// or

// my solution
function insert_space2(str) {
    let re = /\B(?=[A-Z](?=[a-z]))/g
    return str.replace(re, " ")
}
console.log(insert_space2("PythonExercises"))
console.log(insert_space2("Python"))
console.log(insert_space2("PythonExercisesPracticeSolution"))