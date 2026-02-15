/**
 * 
 * Write a JavaScript function to hide email addresses to protect from unauthorized user.
 * Test Data :
 * console.log(protect_email("robin_singh@example.com"));
 * "robin...@example.com"
 */

function protect_email(input) {
    const arr = input.split("@");
    let index = arr[0].indexOf("_");
    return arr[0].substring(0, index)+"...@"+arr[1]
}

console.log(protect_email("robin_singh@example.com"));
console.log(protect_email("Diljeet_singh_sodi@example.com"));