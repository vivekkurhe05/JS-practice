/**
 * 
 * Write a JavaScript function to parameterize a string.
 * Test Data :
 * console.log(string_parameterize("Robin Singh from USA."));
 * "robin-singh-from-usa"
 */

// my sol
function string_parameterize(str) {
    return str.split(" ").join("-").toLowerCase()
}

console.log(string_parameterize("Robin Singh from USA."));