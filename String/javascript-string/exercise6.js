/**
 * 
 * Write a JavaScript function to hide email addresses to protect from unauthorized user.
 * Test Data :
 * console.log(protect_email("robin_singh@example.com"));
 * "robin...@example.com"
 */

// my solution
function protect_email(str) {
    let re = /_[a-z]+/g
    return str.replace(re, "...")
}

console.log(protect_email("robin_singh@example.com"));
console.log(protect_email("robin@example.com"));