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
    let str1 = ""

    for(let i=0; i<str.length; i++) {
        if (str[i] === "a") continue
        else str1+=str[i]
    }

    return str1
}

console.log(delete_all_occurrences("Delete all occurrences of a specified character in a given string"))