/**
 * 
 * Write a JavaScript function to hide email addresses to protect from unauthorized user.
 * Test Data :
 * console.log(protect_email("robin_singh@example.com"));
 * "robin...@example.com"
 */

function protect_email(str) {
    const re = /\_\w+/g
    let arr = str.split('@')
    let first = arr[0].replace(re,"...")
    return first+"@"+arr[1]
    
}

console.log(protect_email("robin_singh@example.com"));