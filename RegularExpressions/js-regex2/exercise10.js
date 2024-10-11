/**
 * Write a JavaScript function to check whether a given value is alpha numeric or not.
 */

// my solution
function is_alphaNumeric(str){
    const re = /^[a-z0-9]+$/g
    return re.test(str)
}

console.log(is_alphaNumeric("37828sad"));

console.log(is_alphaNumeric("3243#$sew"));