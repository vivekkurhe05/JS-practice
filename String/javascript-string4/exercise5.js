/**
 * 
 * Write a JavaScript function to convert a string in abbreviated form.
 * Test Data :
 * console.log(abbrev_name("Robin Singh"));
 * "Robin S."
 */

// my sol
function abbrev_name(str) {
    let name = str.split(" ")
    return `${name[0]} ${name[1][0]}.`
}

console.log(abbrev_name("Robin Singh"));