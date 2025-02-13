/**
 * 
 * Write a JavaScript function to hide email addresses to protect from unauthorized user.
 * Test Data :
 * console.log(protect_email("robin_singh@example.com"));
 * "robin...@example.com"
 */

function protect_email(str) {
    let protected_name = str.substring(str.indexOf("_"), str.indexOf("@"))
    return str.replace(protected_name,"...")

}

console.log(protect_email("robin_singh@example.com"));