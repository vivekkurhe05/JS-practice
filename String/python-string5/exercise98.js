/**
 * Write a Python program to decapitalize the first letter of a given string.
Sample Output:
java Script
python
 */

// my solution
function decapitalize_first_letter(str) {
    return str[0].toLowerCase() + str.substring(1)
}
console.log(decapitalize_first_letter("Java Script"))
console.log(decapitalize_first_letter("Python"))