/**
 * Write a Python program to determine the index of a given string at which a certain substring starts.
If the substring is not found in the given string return 'Not found'.
 */

// my solution
function find_Index(str1, substr) {
    if(str1.search(substr) !=-1) {

        return str1.search(substr)
    }else{
        return "Not found"
    }
}

console.log(find_Index("Python Exercises", "Ex"))
console.log(find_Index("Python Exercises", "yt"))
console.log(find_Index("Python Exercises", "PY"))