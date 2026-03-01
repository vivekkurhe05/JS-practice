/**
 * Write a Python program to delete all occurrences of a specified character in a given string.
Sample Output:
Original string:
Delete all occurrences of a specified character in a given string
Modified string:
Delete ll occurrences of specified chrcter in given string
 */

function delete_all_occurrences(str) {

    const chars = Array.from(str);

    for(let i=0;i<chars.length;i++) {
        if(chars[i] === "a") {
            chars.splice(i,1);
        }
    }

    return chars.join("");
}

console.log(delete_all_occurrences("Delete all occurrences of a specified character in a given string"))

