/**
 * 
 * Write a JavaScript function to hide email addresses to protect from unauthorized user.
 * Test Data :
 * console.log(protect_email("robin_singh@example.com"));
 * "robin...@example.com"
 */

function protect_email(str) {
    let index = str.indexOf("@");
    let emailPart = str.substring(index);
    let namePart = str.substring(0, index);
    const re = /\_\w+/g;
    return namePart.replace(re, "...")+emailPart;
}


console.log(protect_email("robin_singh@example.com"));