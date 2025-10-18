/**
 * Write a Python program to determine the index of a given string at which a certain substring starts.
If the substring is not found in the given string return 'Not found'.
 */

function find_Index(str, substr) {
    return str.indexOf(substr) !== -1 ? str.indexOf(substr) : "Not found."
}

console.log(find_Index("Python Exercises", "Ex"))
console.log(find_Index("Python Exercises", "yt"))
console.log(find_Index("Python Exercises", "PY"))