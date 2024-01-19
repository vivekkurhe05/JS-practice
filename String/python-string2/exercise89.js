/**
 * Write a Python program to remove unwanted characters from a given string.
Sample Output:
Original String : Pyth*^on Exercis^es
After removing unwanted characters:
Python Exercises
Original String : A%^!B#*CD
After removing unwanted characters:
ABCD
 */

// my solution
function remove_unwanted_chars(str) {
    let regex = /[^A-Z\s]+/gi
    return str.replace(regex, "")
}

console.log(remove_unwanted_chars("Pyth*^on Exercis^es"))
console.log(remove_unwanted_chars("A%^!B#*CD"))