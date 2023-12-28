/**
 * 
 * Write a JavaScript function to parameterize a string.
 * Test Data :
 * console.log(string_parameterize("Robin Singh from USA."));
 * "robin-singh-from-usa"
 */

// my solution
function string_parameterize(str) {
    let arr = str.trim().split(" ")
    return arr.map((el) => {
        return el.toLocaleLowerCase()
    }).join("-")
}

console.log(string_parameterize("Robin Singh from USA."));