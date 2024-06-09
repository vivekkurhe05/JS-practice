/**
 * 
 * Write a JavaScript function to parameterize a string.
 * Test Data :
 * console.log(string_parameterize("Robin Singh from USA."));
 * "robin-singh-from-usa"
 */

// my solution
function string_parameterize(str){
    return str.toLowerCase().trim().split(" ").join("-")
}

console.log(string_parameterize("Robin Singh from USA."));


// or
function string_parameterize2(str){
    let regex = /\s+/g
    return str.replace(regex, "-").toLowerCase()
}

console.log(string_parameterize2("Robin Singh from USA."));


// or
function string_parameterize3(str){
    return str.replaceAll(" ", "-").toLowerCase()
}

console.log(string_parameterize3("Robin Singh from USA."));