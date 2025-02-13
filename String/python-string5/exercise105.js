/**
 * Write a Python program to extract and display the name from a given Email address.
Sample Data:
("john@example.com") -> ("john")
("john.smith@example.com") -> ("johnsmith")
("fully-qualified-domain@example.com") -> ("fullyqualifieddomain")
 */

// my solution
function display_name(str) {
    return str.split("@")[0].replace(/[\.-]/g, "")
}
console.log(display_name("john@example.com"))
console.log(display_name("john.smith@example.com"))
console.log(display_name("fully-qualified-domain@example.com"))