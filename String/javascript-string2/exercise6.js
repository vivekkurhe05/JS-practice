/**
 * 
 * Write a JavaScript function to hide email addresses to protect from unauthorized user.
 * Test Data :
 * console.log(protect_email("robin_singh@example.com"));
 * "robin...@example.com"
 */

// my function
function protect_email(email){
    let protectedEmail = email.substring(email.indexOf("_"),email.indexOf('@'))
    return email.replace(protectedEmail,"...")
}

console.log(protect_email("robin_singh@example.com"));