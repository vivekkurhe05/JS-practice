/**
 * Write a Python program to determine the index of a given string at which a certain substring starts.
If the substring is not found in the given string return 'Not found'.
 */

// my solution
function find_Index(str1, str2) {
    let index = str1.indexOf(str2)
    if(index !=-1) return index
    return "Not found"
}

console.log(find_Index("Python Exercises", "Ex"))
console.log(find_Index("Python Exercises", "yt"))
console.log(find_Index("Python Exercises", "PY"))