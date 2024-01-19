/**
 * Write a Python program to delete all occurrences of a specified character in a given string.
Sample Output:
Original string:
Delete all occurrences of a specified character in a given string
Modified string:
Delete ll occurrences of specified chrcter in given string
 */

// my solution
function delete_all_occurrences(str) {
    return str.replaceAll("a", "")
}

console.log(delete_all_occurrences("Delete all occurrences of a specified character in a given string"))