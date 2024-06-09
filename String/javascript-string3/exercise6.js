/**
 * 
 * Write a JavaScript function to hide email addresses to protect from unauthorized user.
 * Test Data :
 * console.log(protect_email("robin_singh@example.com"));
 * "robin...@example.com"
 */

// my solution
function protect_email(str){
    let index = str.indexOf('@')
    let name = str.substring(0,index)
    let protected_name = name.replace(/_.*/, "...")
    return protected_name+str.substring(index)
}

console.log(protect_email("robin_singh@example.com"));

// or

function protect_email2(str){
    let protected_name = str.substring(str.indexOf("_"), str.indexOf("@"))
    return str.replace(protected_name,"...")
}

console.log(protect_email2("robin_singh@example.com"));