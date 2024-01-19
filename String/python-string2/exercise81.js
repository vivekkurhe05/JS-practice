/**
 * Write a Python program to determine the index of a given string at which a certain substring starts.
If the substring is not found in the given string return 'Not found'.
 */

// my solution
function find_Index(str, substr) {
    let index = str.indexOf(substr)
    if(index === -1) return "Not found"
    else return index
}

console.log(find_Index("Python Exercises", "Ex"))
console.log(find_Index("Python Exercises", "yt"))
console.log(find_Index("Python Exercises", "PY"))