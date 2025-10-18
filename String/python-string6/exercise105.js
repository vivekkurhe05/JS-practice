/**
 * Write a Python program to extract and display the name from a given Email address.
Sample Data:
("john@example.com") -> ("john")
("john.smith@example.com") -> ("johnsmith")
("fully-qualified-domain@example.com") -> ("fullyqualifieddomain")
 */

function display_name(email) {
    const re = /[^a-zA-Z]/g;
    let name = email.substring(0,email.indexOf('@'));
    return name.replace(re,"");
}


console.log(display_name("john@example.com"))
console.log(display_name("john.smith@example.com"))
console.log(display_name("fully-qualified-domain@example.com"))